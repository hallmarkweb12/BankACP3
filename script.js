let balance = 0;
function error(message) {
    document.getElementById("error").innerHTML = message;
}
function updateValue() {
    document.getElementById("balance").textContent = balance;
    document.getElementById("input").textContent = "";
}
function debit() {
    const amount = Number(document.getElementById("input").value);
    if (amount <= balance && amount > 0) {
        balance = balance - amount;
        updateValue();
    } else {
        error("Invalid debit Amount");
    }
}
function credit() {
    const amount = Number(document.getElementById("input").value);
    if (amount > 0) {
        balance = balance + amount;
        updateValue();
    } else {
        error("Invalid Credit Amount");
    }
}