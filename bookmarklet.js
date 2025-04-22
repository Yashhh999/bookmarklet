const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.pointerEvents = 'none';
canvas.style.zIndex = '999999';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
const confettiCount = 300;
const confetti = [];

class ConfettiPiece {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height - canvas.height;
    this.size = Math.random() * 10 + 5;
    this.speed = Math.random() * 3 + 2;
    this.angle = Math.random() * 360;
    this.spin = Math.random() * 15 - 7.5;
    this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    this.shape = Math.random() > 0.5 ? 'rect' : 'circle';
  }

  update() {
    this.y += this.speed;
    this.angle += this.spin;
    
    // Reset position when it goes out of the canvas
    if (this.y > canvas.height) {
      this.y = -this.size;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.angle * Math.PI) / 180);
    ctx.fillStyle = this.color;
    
    if (this.shape === 'rect') {
      ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
    } else {
      ctx.beginPath();
      ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
      ctx.fill();
    }
    
    ctx.restore();
  }
}

for (let i = 0; i < confettiCount; i++) {
  confetti.push(new ConfettiPiece());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  for (let i = 0; i < confetti.length; i++) {
    confetti[i].update();
    confetti[i].draw();
  }
  
  animationId = requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

animate();

document.addEventListener('click', function stopConfetti() {
  cancelAnimationFrame(animationId);
  document.body.removeChild(canvas);
  document.removeEventListener('click', stopConfetti);
});

const toast = document.createElement('div');
toast.textContent = 'Click anywhere to stop the confetti!';
toast.style.position = 'fixed';
toast.style.bottom = '20px';
toast.style.left = '50%';
toast.style.transform = 'translateX(-50%)';
toast.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
toast.style.color = 'white';
toast.style.padding = '10px 20px';
toast.style.borderRadius = '5px';
toast.style.zIndex = '1000000';
document.body.appendChild(toast);

setTimeout(() => {
  document.body.removeChild(toast);
}, 3000);