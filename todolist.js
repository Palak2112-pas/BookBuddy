let submit = document.getElementById("submit");
let input = document.getElementById("input");
let taskList = document.getElementById("taskList");

submit.onclick = function () {
  if (input.value === "") return;

  // li
  let li = document.createElement("li");
  li.innerText = input.value;

  // Currently Reading button
  let readingBtn = document.createElement("button");
  readingBtn.innerText = "📖 Reading";
  readingBtn.onclick = function () {
    li.className = "reading";
  };

  // Completed button
  let completedBtn = document.createElement("button");
  completedBtn.innerText = "✅ Completed";
  completedBtn.onclick = function () {
    li.className = "completed";
  };

  li.appendChild(readingBtn);
  li.appendChild(completedBtn);

  taskList.appendChild(li);
  input.value = "";
};
