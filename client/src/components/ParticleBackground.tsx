import { motion } from 'framer-motion';

export function ParticleBackground() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="glow-orb -top-32 -left-32 h-96 w-96 bg-violet-600/20" />
      <div className="glow-orb top-1/2 -right-32 h-80 w-80 bg-cyan-500/15" />
      <div className="glow-orb -bottom-32 left-1/3 h-72 w-72 bg-violet-500/10" />
      <div className="grid-bg absolute inset-0 opacity-40" />
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-violet-400/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
