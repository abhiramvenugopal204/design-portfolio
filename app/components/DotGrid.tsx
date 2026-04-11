export default function DotGrid() {
  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(#e5e7eb 1.5px, transparent 1.5px)`,
        backgroundSize: '32px 32px'
      }}
    />
  );
}
