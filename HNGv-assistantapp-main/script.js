// variable declaration
const login = document.getElementById("login");
const signup = document.getElementById("signup");
const contact = document.getElementById("contact");
const myData = document.getElementById("data");
const sidebar = document.querySelector(".sidebar");
const reset = document.getElementById("reset");

function animateSidebarToButton(button, userDescription) {
  const buttonRect = button.getBoundingClientRect();

  myData.innerText = userDescription;

  sidebar.style.position = "absolute";

  // Animate the transition
  sidebar.style.transition = "top 0.5s, right 0.5s, left 0.5s";

  // Setting the sidebar's position next to the clicked button
  sidebar.style.top = `${buttonRect.top + 80}px`;
  sidebar.style.right = `${window.innerWidth - buttonRect.right}px`;
  sidebar.style.left = `${buttonRect.left}px`;

  void sidebar.offsetWidth;

  setTimeout(() => {}, 500);
}
function resetSidebar() {
  sidebar.style.position = "fixed";
  sidebar.style.bottom = "20px";
  sidebar.style.right = "20px";
  sidebar.style.left = "";
  sidebar.style.top = "";
  myData.innerText = "Your app Assistant";
}

login.addEventListener("click", () => {
  animateSidebarToButton(login, "This is the button for Login Page");
});

signup.addEventListener("click", () => {
  animateSidebarToButton(signup, "This is the button for Signup page");
});

contact.addEventListener("click", () => {
  animateSidebarToButton(contact, "This is the button for Contact us page");
});

reset.addEventListener("click", () => {
  resetSidebar();
});
