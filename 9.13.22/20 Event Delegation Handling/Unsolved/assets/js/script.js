const buttons = document.getElementsByTagName('button');

const clickHandler = function () {
  let count = 0;
  
  return function () {
    count++;
    this.textContent = `Clicks: ${count}`;
  };
};


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler());
}
