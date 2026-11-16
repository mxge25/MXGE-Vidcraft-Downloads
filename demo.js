const play = document.querySelector('.demo-play');
const clock = document.querySelector('.demo-time');
const portrait = document.querySelector('.portrait');
let timer;
play.addEventListener('click', () => {
  clearInterval(timer);
  portrait.classList.remove('is-playing');
  void portrait.offsetWidth;
  portrait.classList.add('is-playing');
  clock.textContent = '00:00';
  let second = 0;
  timer = setInterval(() => {
    second += 1;
    clock.textContent = '00:0' + second;
    if (second === 3) clearInterval(timer);
  }, 1000);
});
