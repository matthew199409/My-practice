let helloButton = document.getElementsByClassName("button")[0];

console.log(helloButton);

helloButton.addEventListener("click", () => {
  // helloButton.style.backgroundColor = "blue";
  if (helloButton.style.backgroundColor === "green") {
    helloButton.style.backgroundColor = "red";
  } else {
    helloButton.style.backgroundColor = "green";
  }
});

function myFunction() {
  document.getElementById("demo").innerHTML = "It changed!!!";
}

function myFunction2() {
  document.getElementById("demo2").innerHTML = "There it goes";
}

function btnFunction() {}
