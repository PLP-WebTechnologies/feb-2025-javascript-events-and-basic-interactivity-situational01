const moodButtons = document.querySelectorAll(".mood-buttons button");
const moodDisplay = document.getElementById("mood-display");
const moodName = document.getElementById("mood-name");
const moodMessage = document.getElementById("mood-message");

const moodMap = {
  happy: { color: "#fffacd", message: "Keep smiling! 😄" },
  sad: { color: "#add8e6", message: "It's okay to feel sad sometimes. 💙" },
  chill: { color: "#d0f0c0", message: "Relax and enjoy the moment. 🌿" },
  angry: { color: "#f08080", message: "Take a deep breath... 😤" },
  excited: { color: "#ffe4e1", message: "Let the fun begin! 🤩" },
};

moodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const mood = button.getAttribute("data-mood");
    document.body.style.background = moodMap[mood].color;
    moodName.textContent = mood.charAt(0).toUpperCase() + mood.slice(1);
    moodMessage.textContent = moodMap[mood].message;
    moodDisplay.classList.remove("hidden");
  });

  // Bonus: hover effect
  button.addEventListener("mouseover", () => {
    button.style.transform = "scale(1.1)";
  });
  button.addEventListener("mouseout", () => {
    button.style.transform = "scale(1)";
  });

  // Bonus: double-click
  button.addEventListener("dblclick", () => {
    alert(`You really feel ${button.getAttribute("data-mood")} today! 🤯`);
  });
});

// Keypress detector
document.addEventListener("keypress", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// Form validation
document.getElementById("mood-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const diary = document.getElementById("diary");
  const feedback = document.getElementById("form-feedback");

  if (
    !email.value.includes("@") ||
    password.value.length < 8 ||
    diary.value.trim() === ""
  ) {
    feedback.textContent =
      "Please check all fields: valid email, password (8+ chars), and mood description.";
  } else {
    feedback.style.color = "green";
    feedback.textContent = "Mood submitted successfully! 🎉";
    this.reset();
  }
});
