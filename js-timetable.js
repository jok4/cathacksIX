function timetable (instance) {
  // (A) CSS
  instance.target.classList.add("timetable");
  if (instance.gridX == undefined) {
    instance.gridX = `repeat(${instance.x.length+1}, 1fr)`;
  }
  instance.target.style.gridTemplateColumns = instance.gridX;
  if (instance.gridY) {
    instance.target.style.gridAutoRows = instance.gridY;
  }

  // (B) GENERATE CELLS HELPER FUNCTION
  let celler = (data, css) => {
    let cell = document.createElement("div");
    cell.className = css;
    if (typeof data == "string") { cell.innerHTML = data; }
    else {
      cell.innerHTML = data.txt;
      cell.style = `grid-column:${data.col};grid-row:${data.row};color:${data.color};background:${data.bg}`;
      if (instance.gridY) { cell.style.height = instance.gridY; }
      if (data.click) { cell.onclick = data.click; }
    }
    instance.target.appendChild(cell);
  };

  // (C) FIRST ROW - EMPTY CELL | HEADER FOR X
  celler("&nbsp;", "cell head");
  for (let i of instance.x) { celler(i, "cell head"); }

  // (D) FOLLOWING ROWS - HEADER FOR Y | EMPTY CELLS
  for (let i=0; i<instance.y.length; i++) {
    celler(instance.y[i], "cell head");
    for (let j=0; j<instance.x.length; j++) { celler("&nbsp;", "cell"); }
  }

  // (E) ENTRIES
  for (let i of instance.data) { celler(i, "cell entry"); }
}