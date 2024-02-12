const input = document.getElementById("task");
const elem = document.getElementById("elem");

function add() {
  if (input.value === "") {
    alert("Enter Task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    elem.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  savedata();
}

elem.addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    savedata();
  }
});

function savedata() {
  localStorage.setItem("data", elem.innerHTML);
}
function showdata() {
  const data = localStorage.getItem("data");
  if (data) {
    elem.innerHTML = data;
  } else {
    elem.innerHTML = "";
  }
}

showdata();
