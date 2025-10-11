// === FIND SQUARE ===
function nums() {
  let num = document.getElementById("num").value;
  let result = document.getElementById("result");

  if (num === "" || isNaN(num)) {
    result.textContent = "Please enter a valid number.";
  } else {
    let square = num * num;
    result.textContent = `${num}² = ${square}`;
  }
}

// === FIND CUBE ===
function numss() {
  let num = document.getElementById("nums").value;
  let output = document.getElementById("output");

  if (num === "" || isNaN(num)) {
    output.textContent = "Please enter a valid number.";
  } else {
    let cube = num ** 3;
    output.textContent = `${num}³ = ${cube}`;
  }
}

// === GENERATE TABLE ===
function tables() {
  let n = document.getElementById("table").value;
  let output = "";

  if (n === "" || isNaN(n)) {
    document.getElementById("conclusion").textContent = "Please enter a valid number.";
    return;
  }

  for (let i = 1; i <= 10; i++) {
    output += `${n} x ${i} = ${n * i}\n`;
  }

  document.getElementById("conclusion").textContent = output;
}

// === FORMULA CALCULATOR ===
function formula() {
  let exp = document.getElementById("formula").value;
  let res = document.getElementById("nan");

  try {
    res.textContent = `Result = ${eval(exp)}`;
  } catch {
    res.textContent = "Invalid formula!";
  }
}

// === SQUARE ROOT ===
function findRoot() {
  let num = document.getElementById("rootNum").value;
  let result = document.getElementById("rootResult");

  if (num === "" || isNaN(num)) {
    result.textContent = "Please enter a valid number.";
  } else {
    let root = Math.sqrt(num);
    result.textContent = `√${num} = ${root.toFixed(4)}`;
  }
}
