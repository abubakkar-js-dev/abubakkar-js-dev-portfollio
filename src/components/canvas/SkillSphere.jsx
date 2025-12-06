"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const skills = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Three.js", color: "#ffffff" },
  { name: "Git", color: "#F05032" },
  { name: "Framer Motion", color: "#FF0055" },
  { name: "Express", color: "#ffffff" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "Supabase", color: "#3ECF8E" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Redux", color: "#764ABC" },
  { name: "GraphQL", color: "#E10098" }
];

const SkillSphere = () => {
  const containerRef = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any existing canvas
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    const size = Math.min(containerRef.current.clientWidth, 400);
    renderer.setSize(size, size);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Main wireframe sphere with pulsing effect
    const sphereGeo = new THREE.SphereGeometry(2.2, 32, 32);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x14b8a6,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(sphere);

    // Add inner glow sphere
    const glowGeo = new THREE.SphereGeometry(2.15, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x14b8a6,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide
    });
    const glowSphere = new THREE.Mesh(glowGeo, glowMat);
    scene.add(glowSphere);

    // Particles for extra visual effect
    const particleCount = 300;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 4 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x14b8a6,
      size: 0.02,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Skills positioning with hover detection
    const radius = 3;
    const phi = Math.PI * (3 - Math.sqrt(5));
    const skillSprites = [];
    
    skills.forEach((skill, i) => {
      const y = 1 - (i / (skills.length - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY * radius;
      const z = Math.sin(theta) * radiusAtY * radius;
      const yPos = y * radius;

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 512;
      canvas.height = 128;
      
      ctx.fillStyle = '#14b8a6';
      ctx.font = 'bold 44px system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(skill.name, 256, 64);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMat = new THREE.SpriteMaterial({ 
        map: texture, 
        transparent: true,
        opacity: 0.85
      });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.position.set(x, yPos, z);
      sprite.scale.set(1.8, 0.45, 1);
      sprite.userData = { skill, canvas, ctx, originalScale: 1.8, originalOpacity: 0.85 };
      
      scene.add(sprite);
      skillSprites.push(sprite);
    });

    // Mouse interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let autoRotate = true;
    let rotationSpeed = 0.002;

    const onMouseMove = (event) => {
      const rect = containerRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        const deltaX = event.clientX - previousMousePosition.x;
        scene.rotation.y += deltaX * 0.005;
        previousMousePosition = { x: event.clientX, y: event.clientY };
        autoRotate = false;
      } else {
        // Hover detection
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(skillSprites);

        let anyHovered = false;
        skillSprites.forEach(sprite => {
          const isHovered = intersects.length > 0 && intersects[0].object === sprite;
          const skill = sprite.userData.skill;
          
          if (isHovered) {
            anyHovered = true;
            setHoveredSkill(skill.name);
            
            // Update canvas with color
            const ctx = sprite.userData.ctx;
            const canvas = sprite.userData.canvas;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Add glow effect
            ctx.shadowBlur = 20;
            ctx.shadowColor = skill.color;
            ctx.fillStyle = skill.color;
            ctx.font = 'bold 48px system-ui, -apple-system, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(skill.name, 256, 64);
            
            sprite.material.map.needsUpdate = true;
            sprite.material.opacity = 1;
            
            // Scale up animation
            const targetScale = sprite.userData.originalScale * 1.2;
            sprite.scale.x = sprite.scale.x + (targetScale - sprite.scale.x) * 0.1;
            sprite.scale.y = sprite.scale.y + (targetScale * 0.25 - sprite.scale.y) * 0.1;
          } else {
            // Reset to original
            const ctx = sprite.userData.ctx;
            const canvas = sprite.userData.canvas;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.shadowBlur = 0;
            ctx.fillStyle = '#14b8a6';
            ctx.font = 'bold 44px system-ui, -apple-system, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(skill.name, 256, 64);
            
            sprite.material.map.needsUpdate = true;
            sprite.material.opacity = sprite.userData.originalOpacity;
            
            // Scale down animation
            const targetScale = sprite.userData.originalScale;
            sprite.scale.x = sprite.scale.x + (targetScale - sprite.scale.x) * 0.1;
            sprite.scale.y = sprite.scale.y + (targetScale * 0.25 - sprite.scale.y) * 0.1;
          }
        });

        if (!anyHovered) {
          setHoveredSkill(null);
        }

        containerRef.current.style.cursor = anyHovered ? 'pointer' : 'grab';
      }
    };

    const onMouseDown = (event) => {
      isDragging = true;
      previousMousePosition = { x: event.clientX, y: event.clientY };
      containerRef.current.style.cursor = 'grabbing';
    };

    const onMouseUp = () => {
      isDragging = false;
      containerRef.current.style.cursor = 'grab';
      // Resume auto-rotate after a delay
      setTimeout(() => { autoRotate = true; }, 2000);
    };

    const onMouseLeave = () => {
      isDragging = false;
      containerRef.current.style.cursor = 'grab';
      setHoveredSkill(null);
      // Reset all sprites
      skillSprites.forEach(sprite => {
        const ctx = sprite.userData.ctx;
        const canvas = sprite.userData.canvas;
        const skill = sprite.userData.skill;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#14b8a6';
        ctx.font = 'bold 44px system-ui, -apple-system, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(skill.name, 256, 64);
        sprite.material.map.needsUpdate = true;
        sprite.material.opacity = sprite.userData.originalOpacity;
        sprite.scale.x = sprite.userData.originalScale;
        sprite.scale.y = sprite.userData.originalScale * 0.25;
      });
    };

    containerRef.current.addEventListener('mousemove', onMouseMove);
    containerRef.current.addEventListener('mousedown', onMouseDown);
    containerRef.current.addEventListener('mouseup', onMouseUp);
    containerRef.current.addEventListener('mouseleave', onMouseLeave);

    // Animation loop
    let animationId;
    let time = 0;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.01;

      // Auto-rotate
      if (autoRotate) {
        scene.rotation.y += rotationSpeed;
      }

      // Pulsing sphere effect
      const scale = 1 + Math.sin(time * 0.5) * 0.03;
      sphere.scale.setScalar(scale);
      
      // Glow pulse
      glowSphere.material.opacity = 0.1 + Math.sin(time) * 0.05;

      // Rotate particles
      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.0002;

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const size = Math.min(containerRef.current.clientWidth, 400);
      renderer.setSize(size, size);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeEventListener('mousemove', onMouseMove);
      containerRef.current?.removeEventListener('mousedown', onMouseDown);
      containerRef.current?.removeEventListener('mouseup', onMouseUp);
      containerRef.current?.removeEventListener('mouseleave', onMouseLeave);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      <div 
        ref={containerRef} 
        className="w-full h-full"
        style={{ minHeight: '300px' }}
      />
      
      {/* Hover tooltip */}
      {hoveredSkill && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-teal-400/10 backdrop-blur-md border border-teal-400/30 rounded-lg px-4 py-2 animate-fadeIn">
          <p className="text-teal-400 font-semibold text-sm whitespace-nowrap">{hoveredSkill}</p>
        </div>
      )}
    </div>
  );
};

export default SkillSphere;