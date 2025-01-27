let helloButton = document.getElementsByClassName("button")[0];

console.log(helloButton);

helloButton.addEventListener("click", () => {
  if (helloButton.style.backgroundColor === "green") {
    helloButton.style.backgroundColor = "red";
  } else {
    helloButton.style.backgroundColor = "green";
  }
  document.getElementsByClassName("button")[0].innerHTML = "I'm gay";
});

function myFunction() {
  document.getElementById("demo").innerHTML = "It changed!!!";
}

function myFunction2() {
  document.getElementById("demo2").innerHTML = "There it goes";
  if (demo2.style.backgroundColor === "green") {
    demo2.style.backgroundColor = "purple";
  } else {
    demo2.style.backgroundColor = "green";
  }

  document.getElementsByClassName("button")[0].innerHTML = "your gay";
}

function btnFunction() {
  document.getElementsByClassName("heading3")[0].innerHTML = "Duhhh";
  document.getElementsByClassName("heading3")[1].innerHTML = "Duhhh...";
}
