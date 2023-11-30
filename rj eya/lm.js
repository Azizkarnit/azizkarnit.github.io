function validateForm() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var isChecked = false;

    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        isChecked = true;
        break;
      }
    }

    if (!isChecked) {
      alert('Please check at least one checkbox.');
      return false;
    }

    return true;
  }