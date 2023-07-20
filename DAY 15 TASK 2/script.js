function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function calculate() {
    const displayValue = document.getElementById('display').value;
    let result;
    try {
      result = eval(displayValue);
    } catch (error) {
      result = 'Error';
    }
    document.getElementById('display').value = result;
  }