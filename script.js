function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkModeEnabled", document.body.classList.contains("dark-mode"));
}

window.onload = function() {
  var darkModeEnabled = localStorage.getItem("darkModeEnabled");
  if (darkModeEnabled === "true") {
    // If dark mode is enabled, toggle it on
    toggleDarkMode();
  }
};

function myFunction(){
  // Toggle dark mode for the body element
  toggleDarkMode();
};



