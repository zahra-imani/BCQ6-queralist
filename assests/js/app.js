const toDoListTaskAdd = document.querySelector(".todolistbox__add");
const toDoListTaskAddOpen = document.querySelector(".todolistbox__addopen");
const toDoListNoTaskImg = document.querySelector(".todolistbox__image");

const toDoTitleUser = document.querySelector(".todo-title-user");
const toDoDescUser = document.querySelector(".todo-desc-user");
const toDoAddBtn = document.querySelector(".addbtn");
const priorities = document.getElementsByName("priority");

const priorityBox = document.querySelector(".priority__selection--box");
const prioritSelectionBtn = document.querySelector(".priority__selection--btn");
const prioritSelectionBtnIcon = document.querySelector(
  ".priority__selection--btn svg"
);

const inComplateToDoListSection = document.querySelector(".incomplate");
const errorMessage = document.querySelector('.error-message');

//Take User Inputs
toDoAddBtn.addEventListener("click", ToDOAddBtnHandler);
toDoListTaskAdd.addEventListener("click", ToDoListTaskAddhandler);
prioritSelectionBtn.addEventListener("click", PrioritSelectionBtnHandler);

function ToDoListTaskAddhandler() {
  toDoListTaskAdd.style.display = "none";
  toDoListNoTaskImg.style.display = "none";
  toDoListTaskAddOpen.classList.add("show");
  errorMessage.style.display = "none";
}

function PrioritSelectionBtnHandler() {
  priorityBox.classList.toggle("show");
  prioritSelectionBtnIcon.classList.toggle("rotate90");
}

function ToDOAddBtnHandler() {
  let selectedPriority;

  // Validate the title input
  if (!toDoTitleUser.value.trim()) {
    errorMessage.style.display = "block";
    return;
  }

  // Find the selected priority
  for (let i = 0; i < priorities.length; i++) {
    if (priorities[i].checked) {
      selectedPriority = priorities[i].value;
      break;
    }
  }

  // Create the new task object
  const inCompleteTask = {
    title: toDoTitleUser.value,
    desc: toDoDescUser.value,
    priority: selectedPriority
  };

  // Load the existing incomplete tasks from localStorage
  let inCompleteTasks = JSON.parse(localStorage.getItem('inCompleteTasks')) || [];

  // Add the new task to the list and save it to localStorage
  inCompleteTasks.unshift(inCompleteTask);
  localStorage.setItem('inCompleteTasks', JSON.stringify(inCompleteTasks));

  // Refresh the incomplete tasks list
  refreshIncompleteTasks();

  // Clear the input fields and hide the add task box
  toDoTitleUser.value = '';
  toDoDescUser.value = '';
  toDoListTaskAddOpen.classList.remove("show");
  toDoListTaskAdd.style.display = "block";
  toDoListNoTaskImg.style.display = "none";
  errorMessage.style.display = "none";
}

function refreshIncompleteTasks() {
  // Clear the existing incomplete tasks list
  inComplateToDoListSection.innerHTML = '';

  // Retrieve the incomplete tasks from localStorage
  let inCompleteTasks = JSON.parse(localStorage.getItem('inCompleteTasks')) || [];

  // Create and append the task cards to the list
  if (inCompleteTasks.length > 0) {
    inCompleteTasks.forEach((todo) => {
      const todoCard = document.createElement("div");
      todoCard.classList.add("incomplate__item");
      if(todo.priority == "پایین"){
        todoCard.style.borderRight ="2px solid #11a483";
        todoCard.innerHTML = `
        <div class="incomplate__item--top low">
        <input type="checkbox" id="todocheckbox" />
        <h2>${todo.title}</h2>
        <span class="low-priority tag"> ${todo.priority} </span>
        <i class="bx bx-dots-vertical-rounded"></i>
      </div>
        <p>${todo.desc}</p>
      `;
      }
      else if(todo.priority == "متوسط"){
      todoCard.style.borderRight ="2px solid #ffaf37";
      todoCard.innerHTML = `
      <div class="incomplate__item--top mid">
      <input type="checkbox" id="todocheckbox"  />
      <h2>${todo.title}</h2>
      <span class="mid-priority tag"> ${todo.priority} </span>
      <i class="bx bx-dots-vertical-rounded"></i>
    </div>
      <p>${todo.desc}</p>
      `;
      }
      else if(todo.priority == "بالا"){
        todoCard.style.borderRight ="2px solid #ff5f37";
        todoCard.innerHTML = `
        <div class="incomplate__item--top high">
        <input type="checkbox" id="todocheckbox"  />
        <h2>${todo.title}</h2>
        <span class="high-priority tag"> ${todo.priority} </span>
        <i class="bx bx-dots-vertical-rounded"></i>
      </div>
        <p>${todo.desc}</p>
    `;}
      inComplateToDoListSection.appendChild(todoCard);
    });
    toDoListNoTaskImg.style.display = "none";
  } else {
    // If there are no incomplete tasks, show the "No Task" image
    toDoListNoTaskImg.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", refreshIncompleteTasks);