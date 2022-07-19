const calendarBtn = document.querySelector(".btn-start");

const calendarContainer = document.querySelector(".container");

const calendarDays = 24;

const openDoor = (path, e) => {
  e.target.parentNode.style.backgroundImage = `url(${path})`;
  e.target.style.opacity = "0";
  e.target.style.backgroundColor = "#521751";
};

const createCalendar = () => {
  for (let i = 1; i <= calendarDays; i++) {
    const calendarDoor = document.createElement("div");
    const calendarDoorText = document.createElement("div");

    calendarDoor.classList.add("image");
    calendarDoor.style.gridArea = "door" + i;
    calendarContainer.appendChild(calendarDoor);

    calendarDoorText.classList.add("text");
    calendarDoorText.innerHTML = i;
    calendarDoor.appendChild(calendarDoorText);

    let imgPath = `./courses/course-${i}.jpg`;

    calendarDoor.addEventListener("click", openDoor.bind(null, imgPath));
  }
};

calendarBtn.addEventListener("click", createCalendar);
