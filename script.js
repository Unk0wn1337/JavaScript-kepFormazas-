window.addEventListener("load", init);
function init() {
  const articleElem = document.querySelectorAll("#gomb");
  articleElem[0].innerHTML = "<button>Katt ide</button>";
  const button = document.querySelector("#gomb button");
  button.addEventListener("click", function () {
    alert("Hello world!");
  });
  articleElem[0].innerHTML += "<div><img src='kep.jpg' alt='kepem'></div>";
  const kepELEM = document.querySelector("article div");
  kepELEM.addEventListener("mousein", function () {
    console.log("fölé vittem az egeret");
    kepELEM.style.border="2px solid red";  

});
kepELEM.addEventListener("mouseout", function () {
    console.log("fölé vittem az egeret");
    kepELEM.style.border="";  

});
  


}
