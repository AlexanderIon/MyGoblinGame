const { default: Goblin } = require('./goblin/goblin.js');

document.addEventListener('DOMContentLoaded', () => {
  const fiedls = document.querySelector('.fieldGame');
  const btn = document.querySelector('.activeGoblinBtn');
  const gonlin = new Goblin(fiedls);
 
  btn.addEventListener('click', () => {
    // gonlin.movingdGoblin();
    // console.log('click')
    statusGame = true;
    const myInterval = setInterval(() => {
      gonlin.movingdGoblin();
      
    },1500)
    e
  });
});
