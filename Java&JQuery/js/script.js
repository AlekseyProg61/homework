  function filterLettersOnly(event) {
            const inputField = event.target;
            const value = inputField.value.replace(/[^a-zA-Zа-яёА-ЯЁ\s]/g, '');
            inputField.value = value;
}
document.getElementById('usernameInput').addEventListener('input', filterLettersOnly);
let button = document.getElementById("button").addEventListener("click", function showName(event) {
  let name = document.getElementById("usernameInput").value;
  let content = document.getElementById("content");
  event.target.classList.add("active")
  content.innerHTML = `Привет`+ ', ' + `<p>${name}</p>` + `!`;
  return content;
})


let closeButton = document.getElementById("closeButton");
if (closeButton) {
    closeButton.addEventListener("click", function() {
      let content = document.getElementById("content")?.value; // Получаем значение поля
      
      if (content !== "") { // Проверяем, заполнено ли поле
          location.reload(); // Переход на перезагрузку страницы
      }
      else {
        alert("Поле не заполнено!")
      }
    });
}

function showModal() {
        let modal = document.getElementById("myModal");
        modal.style.display = "block";
}
    
function hideModal() {
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
}

