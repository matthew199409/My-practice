let helloButton = document.getElementsByClassName("button")[1];

console.log(helloButton);

helloButton.addEventListener("click", () => {
  if (helloButton.style.backgroundColor === "green") {
    helloButton.style.backgroundColor = "red";
  } else {
    helloButton.style.backgroundColor = "green";
  }
  document.getElementsByClassName("button")[0].innerHTML = "I'm Gay";
  if (helloButton.innerHTML === " I'm Gay") {
    helloButton.textContent[0] = "Nuh uh";
  }
});

function myFunction() {
  document.getElementById("demo").innerHTML = "It changed!!!";
  if (demo.innerHTML === "It changed!!!") {
    demo.textContent = "You're Correct!";
  } else {
    demo.innerHTML = "ugh";
  }
}

function myFunction2() {
  document.getElementById("demo2").innerHTML = "There it goes";
  if (demo2.style.backgroundColor === "red") {
    demo2.style.backgroundColor = "yellow";
  } else {
    demo2.style.backgroundColor = "red";
    demo2.innerHTML = "You're Queer!!!";
  }

  document.getElementsByClassName("button")[0].innerHTML = "your gay";
}

function btnFunction() {
  document.getElementsByClassName("heading3")[1].innerHTML = "Duhhh...";
}

function getResponse() {
  const questionInput = document.getElementById("questionInput").value;
  const responseElement = document.getElementById("response");
  // Simple response logic
  let response;
  if (questionInput.toLowerCase().includes("hello")) {
    response = "Hi there!";
  } else if (questionInput.toLowerCase().includes("how are you")) {
    response = "I'm doing well, thank you!";
  } else {
    response = "Sorry, I don't understand the question.";
  }

  responseElement.textContent = response;
}
