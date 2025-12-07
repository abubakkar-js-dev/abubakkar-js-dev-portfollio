// Loading skeleton for SkillSphere
const SkillSphereSkeleton = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="flex items-center justify-center w-[380px] h-[380px]">
      <div className="relative w-64 h-64">
        {/* Animated gradient circle */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 to-cyan-400/20 animate-pulse" />
        
        {/* Spinning ring */}
        <div className="absolute inset-0 rounded-full border-4 border-teal-400/30 border-t-teal-400 animate-spin" 
             style={{ animationDuration: '2s' }} 
        />
        
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-400 text-sm">Loading 3D Sphere...</p>
        </div>
      </div>
    </div>
  </div>
);

export default SkillSphereSkeleton;
