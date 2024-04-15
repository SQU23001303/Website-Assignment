
//Darkmode toggle
function myFunction() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkModeEnabled", document.body.classList.contains("dark-mode"));
}

//Gets the local dark mode storage
window.onload = function() {
  var darkModeEnabled = localStorage.getItem("darkModeEnabled");
  if (darkModeEnabled === "true") {
    // If dark mode is enabled, toggle it on
    myfunction();
  }
};

//Submit button 
document.getElementById("submitButton").addEventListener("click", function() {
  submit();
});

function submit() {
  alert("Contact information submitted successfully");
}



