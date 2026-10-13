document.getElementById('ano').textContent = new Date().getFullYear();

const toast = document.getElementById('toast');
let timer;
function showToast(msg){
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(timer);
  timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

document.querySelectorAll('.box').forEach(box => {
  // Brilho que segue o mouse
  box.addEventListener('mousemove', e => {
    const r = box.getBoundingClientRect();
    box.style.setProperty('--x', (e.clientX - r.left) + 'px');
    box.style.setProperty('--y', (e.clientY - r.top) + 'px');
  });

  // Efeito de clique + aviso
  box.addEventListener('click', e => {
    const r = box.getBoundingClientRect();
    const size = Math.max(r.width, r.height) * 2;
    const dot = document.createElement('span');
    dot.className = 'ripple';
    dot.style.width = dot.style.height = size + 'px';
    dot.style.left = (e.clientX - r.left - size / 2) + 'px';
    dot.style.top = (e.clientY - r.top - size / 2) + 'px';
    box.appendChild(dot);
    setTimeout(() => dot.remove(), 600);
    showToast('Abrindo ' + box.dataset.name + '…');
  });
});
