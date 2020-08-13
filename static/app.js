// from data.js
var tableData = data;

var tbody = d3.select("tbody");

function buildTable(data) {
  tbody.html("");
  data.forEach((report) => {
    let row = tbody.append("tr");
    Object.values(report).forEach((value) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
}

buildTable(tableData);

function handleClick() {
  d3.event.preventDefault();
  let datetime = d3.select("#datetime").property("value");
  let filterData = tableData;
  if (datetime) {
    filterData = filterData.filter((row) => row.datetime === datetime);
  }
  buildTable(filterData);
}
d3.selectAll("#filter-btn").on("click", handleClick);
