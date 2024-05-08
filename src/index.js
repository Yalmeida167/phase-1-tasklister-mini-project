document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    taskBuilder(e.target["new-task-description"].value)
    form.reset()
  })
});

function taskBuilder(tasks){
  let p = document.createElement("p");
  p.textContent = `${tasks} `;
  let select = document.querySelector("select")
  p.className = select.value
  document.querySelector("#tasks").appendChild(p);
  let btn = document.createElement("button");
  btn.addEventListener("click", deleteButton)
  btn.textContent = "x";
  p.appendChild(btn)
}

function deleteButton(event){
  event.target.parentNode.remove()
}

function dropDownPriority(){
  let select = document.createElement("select");
  document.getElementById("create-task-form").append(select);

}