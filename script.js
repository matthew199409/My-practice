// Select the second button with class "button"
const helloButton = document.getElementsByClassName("button")[1];

console.log(helloButton);

// Add click event listener to the helloButton
helloButton.addEventListener("click", () => {
  // Toggle background color between green and red
  if (helloButton.style.backgroundColor === "green") {
    helloButton.style.backgroundColor = "red";
  } else {
    helloButton.style.backgroundColor = "green";
  }

  // Change the text of the first button with class "button"
  const firstButton = document.getElementsByClassName("button")[0];
  firstButton.innerHTML = "I'm Gay";

  // Change the text content if the condition is met
  if (helloButton.innerHTML === " I'm Gay") {
    helloButton.textContent = "Nuh uh";
  }
});

// Function to change the text of the element with id "demo"
function myFunction() {
  const demoElement = document.getElementById("demo");
  if (demoElement) {
    demoElement.innerHTML = "It changed!!!";
    if (demoElement.innerHTML === "It changed!!!") {
      demoElement.textContent = "You're Correct!";
    } else {
      demoElement.innerHTML = "ugh";
    }
  }
}

// Function to change the text and background color of the element with id "demo2"
function myFunction2() {
  const demo2Element = document.getElementById("demo2");
  if (demo2Element) {
    demo2Element.textContent = "There it goes";
    if (demo2Element.style.backgroundColor === "red") {
      demo2Element.style.backgroundColor = "yellow";
    } else {
      demo2Element.style.backgroundColor = "red";
    }
  }
}

// Function to get a response based on the user's input
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
