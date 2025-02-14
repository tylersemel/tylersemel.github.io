import "./styles.css";
import { HomeView } from "./js/home";

const homeBtn = document.querySelector('.home-btn');
homeBtn.addEventListener('click', handleClickHome);

const contentDiv = document.querySelector("#content");

HomeView.displayHome(contentDiv);

function clearContent() {
    contentDiv.replaceChildren();
}

function handleClickHome() {
    clearContent();
    HomeView.displayHome(contentDiv);
}