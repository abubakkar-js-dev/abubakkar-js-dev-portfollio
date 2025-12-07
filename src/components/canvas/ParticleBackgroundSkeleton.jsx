// Loading skeleton for ParticleBackground
const ParticleBackgroundSkeleton = () => (
  <div className="fixed inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
    {/* Subtle animated gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 via-transparent to-cyan-400/5 animate-pulse" 
         style={{ animationDuration: '3s' }} 
    />
  </div>
);

export default ParticleBackgroundSkeleton;
