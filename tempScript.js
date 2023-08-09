
function convertTemperature(source) {
    const celsiusInput = document.getElementById("celsiusInput");
    const fahrenheitInput = document.getElementById("fahrenheitInput");
    const kelvinInput = document.getElementById("kelvinInput");

    if (source === "celsius" && celsiusInput.value !== "") {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;
        fahrenheitInput.value = fahrenheit.toFixed(2);
        kelvinInput.value = kelvin.toFixed(2);
    } 

    else if (source === "fahrenheit" && fahrenheitInput.value !== "") {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        const celsius = (fahrenheit - 32) * 5/9;
        const kelvin = celsius + 273.15;
        celsiusInput.value = celsius.toFixed(2);
        kelvinInput.value = kelvin.toFixed(2);
    } 

    else if (source === "kelvin" && kelvinInput.value !== "") {
        const kelvin = parseFloat(kelvinInput.value);
        const celsius = kelvin - 273.15;
        const fahrenheit = (celsius * 9/5) + 32;
        celsiusInput.value = celsius.toFixed(2);
        fahrenheitInput.value = fahrenheit.toFixed(2);
    } 
    
    else {
        celsiusInput.value = "";
        fahrenheitInput.value = "";
        kelvinInput.value = "";
    }
}