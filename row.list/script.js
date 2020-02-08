function display() {
  const rows = findNumber('rows');
  const columns = findNumber('columns');
  const valid = validateInput(rows, columns);

  if (valid) {
    const matrix = generateMatrix(rows, columns);
    printTable(rows, columns, matrix);
  } else {
    printError('Invalid input.');
  }
}

function findNumber(id) {
  return parseInt(document.getElementById(id).value)
}

function generateMatrix(rows, columns) {
  let transposed = [];
  for(let i = 0; i < columns; i++) {
    transposed[i] = new Array(rows);
  }

  // 1: Generar matriz 'normal'
  let counter = 1;
  for(let i = 0; i < columns; i++) {
    for(let j = 0; j < rows; j++) {
      transposed[i][j] = counter;
      counter++;
    }
  }

  // 2: Dar vuelta filas impares
  for(let i = 0; i < columns; i++) {
    if (i % 2 !== 0) {
      transposed[i] = transposed[i].reverse();
     }
  }

  // 3: Transponer
  let matrix = []
  for(let i = 0; i < rows; i++) {
    matrix[i] = new Array(columns);
  }
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < columns; j++) {
      matrix[i][j] = transposed[j][i];
    }
  }

  return matrix;
}

function printTable(rows, columns, matrix) {
  const table = document.getElementById('table');
  let result = '';

  for(let i = 0; i < rows; i++) {
    result += '<tr>';
    for(let j = 0; j < columns; j++) {
      result += ('<td>' + matrix[i][j] + '</td>');
    }
    result += '</tr>';
  }

  table.innerHTML = result;
}

function printError(errorMessage) {
  const error = document.getElementById('error');
  error.innerHTML = errorMessage;
}

function validateInput(rows, columns) {
  return rows > 0 && columns > 0;
}
