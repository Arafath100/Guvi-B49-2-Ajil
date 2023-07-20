document.getElementById("myForm").onsubmit = function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const foodOptions = document.getElementById("food").selectedOptions;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    const foodChoices = [];
    for (let i = 0; i < foodOptions.length; i++) {
      foodChoices.push(foodOptions[i].value);
    }

    const table = document.getElementById("dataTable");
    const newRow = table.insertRow(table.rows.length);

    const cells = [firstName, lastName, address, pincode, gender, state, country];
    for (let i = 0; i < cells.length; i++) {
      const cell = newRow.insertCell(i);
      cell.textContent = cells[i];
    }

    clearForm();
  };

  function clearForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("pincode").value = "";
    document.getElementById("male").checked = true;
    document.getElementById("food").selectedOptions.value ="";
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";
  }