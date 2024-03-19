const form = document.getElementById("signin__form");
const signin = document.getElementById("signin");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");
const storedUserId = localStorage.getItem("user_id");

if (storedUserId) {
  welcome.classList.add("welcome_active");
  userId.textContent = storedUserId;
}

function sendData(e) {
  e.preventDefault(); 
  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData
  })
   
  .then(response => response.json()) 
    .then(data => {
     
        if (data.success) {
        localStorage.setItem("user_id", data.user_id);
        welcome.classList.add("welcome_active");
        userId.textContent = data.user_id;
      } else {
        alert("Неверный логин/пароль");
      }
    })
    
    .catch(error => {
      console.error(error);
      alert("Ошибка сервера");
    });
}

document.getElementById("signin__btn").addEventListener("click", sendData);