function findCommon() {
  let groupA = document.getElementById("groupA").value.trim().split(/\s+/).map(Number);
  let groupB = document.getElementById("groupB").value.trim().split(/\s+/).map(Number);

  // common numbers
  let common = groupA.filter(num => groupB.includes(num));

  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (groupA.length > 0 || groupB.length > 0) {
    let table = "<table><tr><th>Group A</th><th>Group B</th><th>Common Numbers</th></tr>";

    // max length nikalna
    let maxLength = Math.max(groupA.length, groupB.length, common.length);

    for (let i = 0; i < maxLength; i++) {
      table += "<tr>";
      table += `<td>${groupA[i] !== undefined ? groupA[i] : ""}</td>`;
      table += `<td>${groupB[i] !== undefined ? groupB[i] : ""}</td>`;
      table += `<td>${common[i] !== undefined ? common[i] : ""}</td>`;
      table += "</tr>";
    }

    table += "</table>";
    resultDiv.innerHTML = table;
  } else {
    resultDiv.innerHTML = "<p>Please enter numbers in both groups!</p>";
  }
}
