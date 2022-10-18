const divTicket = document.getElementById("tickets-div");
const ticketLinks = document.getElementsByClassName("buy");
const ticketsForm = document.getElementById("tickets-form");
const resetButton = document.getElementById("btn-reset");
const resumeButton = document.getElementById("btn-resume");
const cantidad = document.getElementById("cantidad");
const categoria = document.getElementById("categories");
const elementTotal = document.getElementById("total");

const ticketPrice = 200;
const priceByCategory = {
  Estudiante: ticketPrice * 0.2,
  Trainee: ticketPrice * 0.5,
  Junior: ticketPrice * 0.85
};

Array.from(ticketLinks).forEach((element) =>
  element.addEventListener("click", () => {
    divTicket.style.display = "flex";
  })
);

resetButton.addEventListener("click", () => {
  elementTotal.textContent = "00.00";
});

ticketsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const category = categoria.value;
  const total = cantidad.value * priceByCategory[category];
  elementTotal.textContent = total + ".00";
});
