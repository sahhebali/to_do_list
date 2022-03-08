function idCall(id) {
  return document.getElementById(id);
}

const form = idCall("form");
const date = idCall("date");
const t_body = idCall("t_body");
const ajkerdate = new Date().toISOString().slice(0, 10);
date.value = ajkerdate;
form.addEventListener("submit", function (e) {
  /* bujte hobe */
  e.preventDefault();
  const elements = [...this.elements];
  const formData = {};
  elements.forEach((element) => {
    if (element.type !== "submit") {
      formData[element.name] = element.value;
    }
  });
  formData.status = "incomplete"; /* doubt ache */
  displayUI(formData);
  this.reset()
});

function displayUI(task) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
 <td>0</td>
 <td>${task.name}</td>
 <td>${task.priority}</td>
 <td>${task.status}</td>
 <td>${task.date}</td>
 <td>
 <button id="delete"><i class="fas fa-trash-can"></i></button>

 <button id="check"><i class="fas fa-check"></i></button>

 <button id="edit"><i class="fas fa-pen"></i></button>
 </td>
 `;
  t_body.appendChild(tr);
}
