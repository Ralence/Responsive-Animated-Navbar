import "./styles.css";

const app = document.getElementById("app"); //select and store the app
//Creates the HTML for the navigation bar
function createNavHTML() {
  const nav = document.createElement("nav"); //create the nav element

  const hamburger = document.createElement("div"); //create the hamburger div
  hamburger.className = "hamburger"; //give it a class of 'hamburger'
  nav.append(hamburger); //append it to the nav element
  //create the inner HTML for hamburger
  const lines = `
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      `;
  hamburger.innerHTML = lines; //assign the HTML to the hamburger div
  //create nav links
  const ul = `
          <ul class="nav-links">
            <li class="nav-link"><a href="#">About</a></li>
            <li class="nav-link"><a href="#">Contact</a></li>
            <li class="nav-link"><a href="#">Project</a></li>
          </ul>
              `;
  nav.innerHTML += ul; //append nav links HTML to the nav element
  //return complate nav element
  return nav;
}
//creates the main section HTML
function createSectionHTML() {
  const section = document.createElement("section"); //create section element
  section.className = "landing"; //assign the class

  const dots = document.createElement("div"); //create a div element
  dots.className = "dots"; //assign a class to the element
  section.append(dots); //append it to the section
  const dot = document.createElement("div"); //create a div
  dot.className = "dot"; //assign a class
  dots.append(dot);
  //returns the section element
  return section;
}
//the function appends takes in a parent and a child and appends the child to thhe parent
function appendElement(parent, child) {
  parent.append(child);
}
//create and append a navigation and a section
appendElement(app, createNavHTML());
appendElement(app, createSectionHTML());
//select and store the the hamburger and the nav links
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-link");
//add event listener for click event to toggle open the menu and fade in the navigation links
hamburger.addEventListener("click", e => {
  navLinks.classList.toggle("open");
  links.forEach(link => link.classList.toggle("fade"));
});
