// Hearts Canvas Animation
const canvas = document.getElementById('heartsCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let hearts = [];

class Heart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 30 + 20;
    this.speedY = Math.random() * -3 - 2;
    this.speedX = Math.random() * 4 - 2;
    this.opacity = 1;
    this.color = `hsl(${Math.random() * 60 + 320}, 100%, ${Math.random() * 30 + 50}%)`;
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    this.opacity -= 0.01;
    this.speedY += 0.1; // gravity
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    ctx.font = `${this.size}px Arial`;
    ctx.fillText('❤️', this.x, this.y);
    ctx.restore();
  }
}

function createHeartsFromButton(button, count = 20) {
  const rect = button.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const radius = Math.max(rect.width, rect.height) / 2;
  
  for (let i = 0; i < count; i++) {
    // Create hearts around the button border
    const angle = (Math.PI * 2 * i) / count;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;
    hearts.push(new Heart(x, y));
  }
}

function animateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  for (let i = hearts.length - 1; i >= 0; i--) {
    hearts[i].update();
    hearts[i].draw();
    
    if (hearts[i].opacity <= 0) {
      hearts.splice(i, 1);
    }
  }
  
  requestAnimationFrame(animateHearts);
}

animateHearts();

// Dark mode toggle
document.getElementById('darkModeToggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    this.textContent = '☀️';
  } else {
    this.textContent = '🌙';
  }
});

// Page navigation with hearts effect from button
document.getElementById('noBtn1').addEventListener('click', function(){
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').style.display = 'flex';
});

document.getElementById('yesBtn1').addEventListener('click', function(){
  createHeartsFromButton(this); // Hearts from button border!
  setTimeout(() => {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page11').style.display = 'flex';
  }, 500);
});

document.getElementById('noBtn2').addEventListener('click', function(){
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page3').style.display = 'flex';
});

document.getElementById('yesBtn2').addEventListener('click', function(){
  createHeartsFromButton(this); // Hearts from button border!
  setTimeout(() => {
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page11').style.display = 'flex';
  }, 500);
});

document.getElementById('noBtn3').addEventListener('click', function(){
  document.getElementById('page3').style.display = 'none';
  document.getElementById('page4').style.display = 'flex';
});

document.getElementById('yesBtn3').addEventListener('click', function(){
  createHeartsFromButton(this); // Hearts from button border!
  setTimeout(() => {
    document.getElementById('page3').style.display = 'none';
    document.getElementById('page11').style.display = 'flex';
  }, 500);
});

document.getElementById('noBtn4').addEventListener('click', function(){
  document.getElementById('page4').style.display = 'none';
  document.getElementById('page5').style.display = 'flex';
});

document.getElementById('yesBtn4').addEventListener('click', function(){
  createHeartsFromButton(this); // Hearts from button border!
  setTimeout(() => {
    document.getElementById('page4').style.display = 'none';
    document.getElementById('page11').style.display = 'flex';
  }, 500);
});

document.getElementById('yesBtn5').addEventListener('click', function(){
  createHeartsFromButton(this); // Hearts from button border!
  setTimeout(() => {
    document.getElementById('page5').style.display = 'none';
    document.getElementById('page11').style.display = 'flex';
  }, 500);
});

document.getElementById('TY').addEventListener('click', function(){
  createHeartsFromButton(this); // Hearts from button border!
  setTimeout(() => {
    document.getElementById('page11').style.display = 'none';
    document.getElementById('page12').style.display = 'flex';
  }, 500);
});

document.getElementById('ILY').addEventListener('click', function(){
  createHeartsFromButton(this); // Hearts from button border!
  setTimeout(() => {
    alert('I close na bal kay kaonon tika puhon! raaaaaaaaaaawr!');
  }, 500);
});