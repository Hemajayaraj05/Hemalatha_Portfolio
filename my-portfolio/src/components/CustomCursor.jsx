import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const fog = document.getElementById("fog");

    if (!fog) return;

    let mouseX = 0;
    let mouseY = 0;
    let x = 0;
    let y = 0;
    let t = 0;

    const animate = () => {
      t += 0.01;

      x += (mouseX - x) * 0.04;
      y += (mouseY - y) * 0.04;

      const driftX = Math.sin(t) * 40 + Math.sin(t * 1.7) * 20;
      const driftY = Math.cos(t) * 40 + Math.cos(t * 1.3) * 20;

      fog.style.transform = `translate(${x + driftX}px, ${y + driftY}px)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX - 400;
      mouseY = e.clientY - 300;
    });

    animate();
  }, []);

  return (
    <div
      id="fog"
      style={{
        background: `
          radial-gradient(ellipse at 30% 30%, rgba(168,85,247,0.45), transparent 60%),
          radial-gradient(ellipse at 70% 40%, rgba(236,72,153,0.35), transparent 60%),
          radial-gradient(ellipse at 50% 70%, rgba(99,102,241,0.35), transparent 60%)
        `,
      }}
      className="fixed top-0 left-0 w-[800px] h-[600px]
                 pointer-events-none
                 blur-[160px]
                 opacity-60
                 z-0"
    />
  );
}
