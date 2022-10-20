import names from "./names.js";

const mainContainer = document.querySelector("#main-container");

names.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("card1");
  const contentBox = `
    <div class="contentBx">
        <div class="content">
            <h1>${item.name}</h1>
        </div>
        <div class="card mx-auto" style="width: 18rem">
            <img src=${item.image}
                class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${item.fullName}</h5>
                <p class="card-text" style="line-height: 2">
                  ${item.description}
                </p>
                <a href=${item.githubUrl} class="btn btn-primary">Github</a>
            </div>
        </div>
    </div>
    <div class="arrow-button"><i class="fa fa-angle-down"></i></div>
  `
  card.innerHTML = contentBox;
  mainContainer.appendChild(card);
})

const card = document.querySelectorAll(".card1");

const arrowButton = document.querySelectorAll(".arrow-button");

for (let index = 0; index < arrowButton.length; index++) {
  // console.log(card[index].children[0].scrollHeight);
  arrowButton[index].onclick = (e) => {
      // console.log(card[index].clientHeight);
      card[index].classList.toggle("active");
      // console.log(card[index].style.height);
      // card[index].style.height = `${card[index].children[0].scrollHeight}px`
      if (card[index].classList.contains("active")) {
          card[index].style.height = `${card[index].children[0].scrollHeight}px`
      } else {
          card[index].style.height = '600px'
      }
  };
}