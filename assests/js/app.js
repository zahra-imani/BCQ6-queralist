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
const crudBoxIcon = document.querySelector('.bx-dots-vertical-rounded');
const crudBox = document.querySelector('.crud__box');
const inComplateToDoListSection = document.querySelector(".incomplate");
const errorMessage = document.querySelector('.error-message');

//Take User Inputs
toDoAddBtn.addEventListener("click", ToDOAddBtnHandler);
toDoListTaskAdd.addEventListener("click", ToDoListTaskAddhandler);
prioritSelectionBtn.addEventListener("click", PrioritSelectionBtnHandler);
crudBoxIcon.addEventListener("click", CrudBoxIconHandler);

function CrudBoxIconHandler(){
  crudBox.classList.add("show");

}

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

  // ارور میده خالی برنگردونه
  if (!toDoTitleUser.value.trim()) {
    errorMessage.style.display = "block";
    return;
  }

  // مقدار اهمیتش رو پیدا میکنه
  for (let i = 0; i < priorities.length; i++) {
    if (priorities[i].checked) {
      selectedPriority = priorities[i].value;
      break;
    }
  }

  // ابجکت لیست رو میسازه
  const inCompleteTask = {
    title: toDoTitleUser.value,
    desc: toDoDescUser.value,
    priority: selectedPriority
  };

  // ایتم هارو میگیره میبره لوکال
  let inCompleteTasks = JSON.parse(localStorage.getItem('inCompleteTasks')) || [];

  // برعکس به ارایه اضافه میکنه
  inCompleteTasks.unshift(inCompleteTask);
  localStorage.setItem('inCompleteTasks', JSON.stringify(inCompleteTasks));

  // وقتی تسک جدید اضافه شد ریفرش میکنه صفحه رو
  refreshIncompleteTasks();

  // بعد اضافه کردن اینپوت رو خالی میکنه
  toDoTitleUser.value = '';
  toDoDescUser.value = '';
  toDoListTaskAddOpen.classList.remove("show");
  toDoListTaskAdd.style.display = "block";
  toDoListNoTaskImg.style.display = "none";
  errorMessage.style.display = "none";
}

function refreshIncompleteTasks() {
  // لیست رو خالی میکنه
  inComplateToDoListSection.innerHTML = '';

  // Retrieve the incomplete tasks from localStorage
  let inCompleteTasks = JSON.parse(localStorage.getItem('inCompleteTasks')) || [];

  // تسک هایی که کاربر زده رو اضافه میکنه
  if (inCompleteTasks.length > 0) {
    inCompleteTasks.forEach((todo) => {
      const todoCard = document.createElement("div");
      todoCard.classList.add("incomplate__item");
      if(todo.priority == "پایین"){
        todoCard.style.borderRight ="2px solid #11a483";
        todoCard.innerHTML = `
        <div class="incomplate__item--top low">
        <input type="checkbox" id="todocheckbox" checked=""/>
        <h2>${todo.title}</h2>
        <span class="low-priority tag"> ${todo.priority} </span>
        <i class="bx bx-dots-vertical-rounded"></i>
        <div class="crud__box">
            <span class="crud__box--selector">
              <i class='bx bx-trash'></i>
              <input
                type="radio"
                name="CRUD"
                id="delete"
                value="delete"
              />
            </span>
            <span class="crud__box--selector">
              <i class='bx bx-edit-alt'></i>
              <input
                type="radio"
                name="CRUD"
                id="edit"
                value="edit"
              />
            </span>
          </div>
      </div>
        <p>${todo.desc}</p>
      `;
      }
      else if(todo.priority == "متوسط"){
      todoCard.style.borderRight ="2px solid #ffaf37";
      todoCard.innerHTML = `
      <div class="incomplate__item--top mid">
      <input type="checkbox" id="todocheckbox" checked=""/>
      <h2>${todo.title}</h2>
      <span class="mid-priority tag"> ${todo.priority} </span>
      <i class="bx bx-dots-vertical-rounded"></i>
      <div class="crud__box">
            <span class="crud__box--selector">
              <i class='bx bx-trash'></i>
              <input
                type="radio"
                name="CRUD"
                id="delete"
                value="delete"
              />
            </span>
            <span class="crud__box--selector">
              <i class='bx bx-edit-alt'></i>
              <input
                type="radio"
                name="CRUD"
                id="edit"
                value="edit"
              />
            </span>
          </div>
    </div>
      <p>${todo.desc}</p>
      `;
      }
      else if(todo.priority == "بالا"){
        todoCard.style.borderRight ="2px solid #ff5f37";
        todoCard.innerHTML = `
        <div class="incomplate__item--top high">
        <input type="checkbox" id="todocheckbox" checked="" />
        <h2>${todo.title}</h2>
        <span class="high-priority tag"> ${todo.priority} </span>
        <i class="bx bx-dots-vertical-rounded"></i>
        <div class="crud__box">
            <span class="crud__box--selector">
              <i class='bx bx-trash'></i>
              <input
                type="radio"
                name="CRUD"
                id="delete"
                value="delete"
              />
            </span>
            <span class="crud__box--selector">
              <i class='bx bx-edit-alt'></i>
              <input
                type="radio"
                name="CRUD"
                id="edit"
                value="edit"
              />
            </span>
          </div>
      </div>
        <p>${todo.desc}</p>
    `;}
      inComplateToDoListSection.appendChild(todoCard);
    });
    toDoListNoTaskImg.style.display = "none";
  } else {
    // اگه تسکی نبود میاد عکس رو به جاش نشون میده
    toDoListNoTaskImg.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", refreshIncompleteTasks);



