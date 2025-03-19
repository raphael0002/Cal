function calculate() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const operation = document.getElementById("operation").value;
    const resultElement = document.getElementById("result");

    // Input validation
    if (num1 === "" || num2 === "") {
        resultElement.innerText = "Please enter both numbers.";
        resultElement.style.color = "red";
        return;
    }

    const a = parseFloat(num1);
    const b = parseFloat(num2);

    let result;

    switch (operation) {
        case "add":
            result = a + b;
            break;
        case "sub":
            result = a - b;
            break;
        case "mul":
            result = a * b;
            break;
        case "div":
            if (b === 0) {
                resultElement.innerText = "Error: Division by zero!";
                resultElement.style.color = "red";
                return;
            }
            result = a / b;
            break;
        default:
            resultElement.innerText = "Invalid operation.";
            resultElement.style.color = "red";
            return;
    }

    resultElement.innerText = `Result: ${result}`;
    resultElement.style.color = "green";
}
