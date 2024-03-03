//SONGS
document.getElementById("dropdown").addEventListener("change", function() {
  var selectedOption = document.getElementById("dropdown").value;
  if (selectedOption !== "") {
    window.location.href = selectedOption;
  }
});

document.querySelectorAll('.nvbr').forEach(element => {
  element.addEventListener('click', event => {
      alert("Oops! The page is under construction. Please check back later");

  });
});
