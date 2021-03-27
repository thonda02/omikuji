'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    // const results = ['大吉', '中吉', '凶', '末吉'];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];
    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = '凶';
    } else if (n < 0.2) {
      btn.textContent = '吉';
    } else {
      btn.textContent = '大吉';
    }
    });
}