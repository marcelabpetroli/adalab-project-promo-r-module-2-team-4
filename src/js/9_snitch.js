const root = document.querySelector(':root');
root.style.setProperty('--rando', `${Math.floor(Math.random() * 20) + 1}px`);
