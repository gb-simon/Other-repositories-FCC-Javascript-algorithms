function buildTable() {

  var rows = document.getElementById("setRows").value;
  var columns = document.getElementById("setColumns").value;

  var table = "<table>";
  table += "<tbody>";
  

  for (i = 0; i < rows; i++) {
    table += "<tr>";
    for (j = 0; j < columns; j++) {
      if ( i % 2 === 0 ) {
        return table += "<td>" + "</td>"; 
      } 
  } 
    table += "</tr>";
  }

  table += "</tbody>";
  table += "</table>";

  document.getElementById("tableHolder").innerHTML = table;
}


