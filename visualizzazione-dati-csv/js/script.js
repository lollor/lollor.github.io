function readSingleFile(e) {
  var contents = "";
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function (e) {
    var contents = e.target.result;
    elaboraContents(contents);
  };
  reader.readAsText(file);
}

function elaboraContents(contents) {
  
  var element = document.getElementById("file-content");
  var lines = contents.split("\r\n");
  var data = Array();
  for (let i = 0; i < lines.length; i++) {
    data[i] = lines[i].split(";");
  }
  var tabellona = document.getElementById("tabellona");
  generateTableHead(tabellona, data[0]);
  var data1 = Array();
  for (let i = 0; i < data.length-1; i++){
    data1[i] = data[i+1];
  }
  generateTable(tabellona, data1);
}

document.getElementById("file-input").addEventListener("change", readSingleFile, false);

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

// let table = document.querySelector("table");
// let data = Object.keys(tabella[0]);
// generateTableHead(table, data);
// generateTable(table, tabella);
