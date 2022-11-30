import "./style.scss";
import { createTableHead } from "./utils";

interface Country {
  name: {
    common: string;
  };
  flag: string;
  region: string;
}

function createTableCountryRow(country: Country, table: HTMLElement) {
  const {
    flag,
    name: { common },
    region,
  } = country;

  const countryRow = document.createElement("tr");

  const countryNameCell = document.createElement("td");
  // countryName.innerText = country.name.common;
  countryNameCell.innerText = common;

  const countryRegionCell = document.createElement("td");
  countryRegionCell.innerText = region;

  const countryFlagCell = document.createElement("td");
  countryFlagCell.innerText = flag;

  countryRow.append(countryNameCell, countryRegionCell, countryFlagCell);
  table.appendChild(countryRow);
}

async function fetchCountries(): Promise<Country[]> {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries: Country[] = await response.json();

  // throw new Error("ERROR");
  return countries;
}

async function main(): Promise<void> {
  try {
    const countries = await fetchCountries();

    const table = document.querySelector("table");
    if (!table) return;

    createTableHead(table);

    countries.forEach((country: Country) => {
      createTableCountryRow(country, table);
    });
  } catch (error) {
    const errorMessage = document.createElement("h1");
    errorMessage.innerText = "OOPS! There was an Error";

    document.body.append(errorMessage);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  main();
});
