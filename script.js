const mapEl = document.getElementById('map');

const divEl = document.createElement('div');
divEl.classList.add('button');

const violetBtn = document.createElement('button');
violetBtn.classList.add('violet-button');
violetBtn.innerHTML = 'Open Google Maps';
violetBtn.addEventListener('click', () => {
    window.open('https://www.google.com/maps', '_blank');
});

divEl.appendChild(violetBtn);
mapEl.appendChild(divEl);
