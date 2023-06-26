function loadingAnimation(target) {
  const frames = [...target.querySelectorAll('g')].reverse();
  let index = 0;
  let incrementValue = 1;
  frames[index].style.visibility = 'visible';
  setInterval(() => {
    if (index === 11) {
      incrementValue = -1;
      frames.forEach((frame) => {
        frame.style.transform = 'scaleX(-1)';
      });
    } else if (index === 0) {
      incrementValue = 1;
      frames.forEach((frame) => {
        frame.style.transform = 'initial';
      });
    }
    frames[index].style.visibility = 'hidden';
    index += incrementValue;
    frames[index].style.visibility = 'visible';
  }, 100);
}
