function countUpNumber(time) {
  let countUpNumbers = document.querySelectorAll(".count-up-number");
  countUpNumbers.forEach((countUpNumber) => {
    let count = 0;
    let max = parseInt(countUpNumber.innerText);
    let step = max / 100;
    let counting = setInterval(() => {
      count = count + step;
      if (count > max) {
        clearInterval(counting);
      } else {
        countUpNumber.innerText = Math.round(count);
      }
    }, time);
  });
}
countUpNumber(1);
