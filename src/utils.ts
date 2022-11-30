// Create table head element and appends to the table element
export function createTableHead(table: HTMLElement) {
  const TableHead = document.createElement("thead");
  const headerName = document.createElement("th");
  headerName.innerText = "Name";

  const headerRegion = document.createElement("th");
  headerRegion.innerText = "Region";

  const headerFlag = document.createElement("th");
  headerFlag.innerText = "Flag";
  TableHead.append(headerName, headerRegion, headerFlag);
  table.appendChild(TableHead);
}
