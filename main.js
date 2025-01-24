document.getElementById("check").onclick = function () {
    let num1 = parseInt(prompt("1-raqamni kiriting"));
    let num2 = parseInt(prompt("2-raqamni kiriting"));
    let operation = prompt("Tanlang:\n1) +\n2) /\n3) *\n4) -");

    let result;
    let operator;

    if (operation === "1") {
        result = num1 + num2;
        operator = "+";
    } else if (operation === "2") {
        result = num1 / num2;
        operator = "/";
    } else if (operation === "3") {
        result = num1 * num2;
        operator = "*";
    } else if (operation === "4") {
        result = num1 - num2;
        operator = "-";
    } else {
        result = "Notog'ri amal tanlandi";
        operator = "?";
    }

    document.getElementById("operation").textContent = `${num1} ${operator} ${num2}`;
    document.getElementById("result").textContent = `Natija: ${result}`;
    document.getElementById("result").className = "result success";
};
