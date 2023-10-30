const celsiusEl = document.getElementById("celsius");
const farenheitEl = document.getElementById("farenheit");
const kelvinEl = document.getElementById("kelvin");

function computetemp(event) {
  const currentvalue = +event.target.value;
  switch (event.target.name) {
    case "celsius":
      kelvinEl.value = (currentvalue + 273.32).toFixed(2);
      farenheitEl.value = (currentvalue * 1.8 + 32).toFixed(2);
      break;
    case "farenheit":
      celsiusEl.value = ((currentvalue - 32) / 1.8).toFixed(2);
      kelvinEl.value = ((currentvalue - 32) / 18 + 32).toFixed(2);
      break;
    case "kelvin":
      celsiusEl.value = (currentvalue - 273.32).toFixed(2);
      farenheitEl.value = ((currentvalue - 273.32) * 1.8 + 32).toFixed(2);
      break;

    default:
      break;
  }
}
