function findCommon() {
  // user input ko space se split karna
  let groupA = document.getElementById("groupA").value.trim().split(/\s+/).map(Number);
  let groupB = document.getElementById("groupB").value.trim().split(/\s+/).map(Number);

  // common numbers nikalna
  let common = groupA.filter(num => groupB.includes(num));

  // result show karna
  document.getElementById("result").innerHTML =
    common.length > 0 ? "Common Numbers: " + common.join(" ") : "No Common Numbers Found!";
}
