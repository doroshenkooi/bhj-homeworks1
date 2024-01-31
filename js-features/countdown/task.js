function countDown() {
    let timeLeft = 30;
    let timer = setInterval(function() {
      document.getElementById("timer").innerHTML = timeLeft;
      timeLeft -= 1;
      if (timeLeft < 0) {  
       alert("Вы победили в конкурсе!");
       clearInterval(timer);
    }
    }, 1000);
  }
  
  countDown();
  
