import React, { useEffect, useRef } from 'react';

export const NetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle definition
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      pulse: number;
      pulseSpeed: number;
      type: 'node' | 'secure_signal' | 'cloud_hub';
    }

    const nodeCount = Math.min(Math.floor((width * height) / 22000), 55);
    const nodes: Node[] = [];

    const colors = [
      'rgba(6, 182, 212, ', // Cyan
      'rgba(14, 165, 233, ', // Sky
      'rgba(16, 185, 129, ', // Emerald
      'rgba(99, 102, 241, ', // Indigo
    ];

    for (let i = 0; i < nodeCount; i++) {
      const isHub = i % 8 === 0;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: isHub ? Math.random() * 2.5 + 2.5 : Math.random() * 1.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        type: isHub ? 'cloud_hub' : Math.random() > 0.6 ? 'secure_signal' : 'node',
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Data packets travelling between nodes
    interface DataPacket {
      sourceIndex: number;
      targetIndex: number;
      progress: number;
      speed: number;
      color: string;
    }

    const packets: DataPacket[] = [];

    const spawnPacket = () => {
      if (nodes.length < 2 || packets.length > 8) return;
      const src = Math.floor(Math.random() * nodes.length);
      // find close node
      let closestIdx = -1;
      let minDst = 160;
      for (let j = 0; j < nodes.length; j++) {
        if (src === j) continue;
        const dx = nodes[src].x - nodes[j].x;
        const dy = nodes[src].y - nodes[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < minDst) {
          minDst = d;
          closestIdx = j;
        }
      }

      if (closestIdx !== -1) {
        packets.push({
          sourceIndex: src,
          targetIndex: closestIdx,
          progress: 0,
          speed: 0.012 + Math.random() * 0.015,
          color: Math.random() > 0.5 ? '#06b6d4' : '#10b981',
        });
      }
    };

    let tick = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      tick++;
      if (tick % 45 === 0) {
        spawnPacket();
      }

      // Update and draw connections
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;
        nodeA.pulse += nodeA.pulseSpeed;

        if (nodeA.x < 0) nodeA.x = width;
        if (nodeA.x > width) nodeA.x = 0;
        if (nodeA.y < 0) nodeA.y = height;
        if (nodeA.y > height) nodeA.y = 0;

        // Mouse interaction (subtle repulsion/draw)
        const dmx = mouseX - nodeA.x;
        const dmy = mouseY - nodeA.y;
        const mouseDist = Math.sqrt(dmx * dmx + dmy * dmy);
        if (mouseDist < 140 && mouseDist > 0) {
          const force = (140 - mouseDist) / 140;
          nodeA.x -= (dmx / mouseDist) * force * 0.8;
          nodeA.y -= (dmy / mouseDist) * force * 0.8;
        }

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 145;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Render traveling data packets
      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          packets.splice(p, 1);
          continue;
        }

        const src = nodes[pkt.sourceIndex];
        const tgt = nodes[pkt.targetIndex];
        if (src && tgt) {
          const curX = src.x + (tgt.x - src.x) * pkt.progress;
          const curY = src.y + (tgt.y - src.y) * pkt.progress;

          ctx.beginPath();
          ctx.arc(curX, curY, 2, 0, Math.PI * 2);
          ctx.fillStyle = pkt.color;
          ctx.shadowColor = pkt.color;
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // Render nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const currentRadius = node.radius + Math.sin(node.pulse) * 0.5;

        // Outer glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}0.08)`;
        ctx.fill();

        // Node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(currentRadius, 1), 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}0.85)`;
        ctx.fill();

        if (node.type === 'cloud_hub') {
          ctx.strokeStyle = `${node.color}0.5)`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(node.x, node.y, currentRadius * 3, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      aria-hidden="true"
    />
  );
};
