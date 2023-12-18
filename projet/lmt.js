let ifr = document.getElementById('ifr')
document.getElementById("submitButton").addEventListener("click", function() {
    var form1Checkboxes = document.querySelectorAll('#form1 input[type="checkbox"]:checked');
    var form2Checkboxes = document.querySelectorAll('#form2 input[type="checkbox"]:checked');

    if (form1Checkboxes.length > 0 && form2Checkboxes.length > 0) {
      console.log("Both forms have at least one checkbox checked. Submitting...");
      ifr.classList.remove('hide')
      // Perform form submission logic here
    } else {
      alert("Please select at least one checkbox from each form.");
      ifr.classList.add('hide')
      // Optionally, display a message or perform an action to notify the user
    }
  });