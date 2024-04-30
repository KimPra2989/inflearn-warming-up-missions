function countDown(start = 5) {
  const timer = document.querySelector(".timer");
  let time = start;

  const interval = setInterval(() => {
    // console.log(time)
    time--;
    timer.innerHTML = time;
    if (time === 0) {
      clearInterval(interval);
    }
  }, 1000);
}

export default countDown;
