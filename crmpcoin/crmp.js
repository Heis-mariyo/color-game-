document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  let particlesArray;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Create particle
  class Particle {
      constructor(x, y, size, speedX, speedY, color) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.speedX = speedX;
      this.speedY = speedY;
      this.color = color;
      }
      update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // bounce off edges
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      }
  }

  // Init particles
  function init() {
      particlesArray = [];
      for (let i = 0; i < 80; i++) {
      let size = Math.random() * 3 + 2;
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      let speedX = (Math.random() - 0.5) * 2;
      let speedY = (Math.random() - 0.5) * 2;
      let colors = ["#4cc9f0", "#f72585", "#7209b7"]; // matches accent palette
      let color = colors[Math.floor(Math.random() * colors.length)];
      particlesArray.push(new Particle(x, y, size, speedX, speedY, color));
      }
  }

  // Animate particles
  function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(particle => {
      particle.update();
      particle.draw();
      });
      requestAnimationFrame(animate);
  }

  init();
  animate();

  // Resize canvas
  window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
  });

  $(document).ready(function() {
    // Mobile menu toggle
    $('.menu-toggle').click(function() {
      $('.nav-links').toggleClass('show');
    });
    $('.nav-links a').click(function() {
      $('.nav-links').removeClass('show');
    });

  });
});