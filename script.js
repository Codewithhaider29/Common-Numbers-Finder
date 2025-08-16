function findCommon() {
  let groupA = document.getElementById("groupA").value.trim().split(/\s+/).map(Number);
  let groupB = document.getElementById("groupB").value.trim().split(/\s+/).map(Number);

  // common numbers nikalna
  let common = groupA.filter(num => groupB.includes(num));

  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (common.length > 0) {
    let table = "<table><tr><th>Common Numbers</th></tr>";
    common.forEach(num => {
      table += `<tr><td>${num}</td></tr>`;
    });
    table += "</table>";
    resultDiv.innerHTML = table;
  } else {
    resultDiv.innerHTML = "<p>No Common Numbers Found!</p>";
  }
}
