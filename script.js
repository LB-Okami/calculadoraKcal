document.addEventListener("DOMContentLoaded", function () {
    const kcalInput = document.getElementById("kcalInput");
    const unitSelect = document.getElementById("unitSelect");
    const resultSpan = document.getElementById("result");

    function calculateKcal() {
        const kcalValue = parseFloat(kcalInput.value);
        const selectedUnit = unitSelect.value;

        let result;

        let numeroString = kcalValue.toString();

        let indicePontoDecimal = numeroString.indexOf('.');

        let primeiraCasaDecimal = numeroString.charAt(indicePontoDecimal + 1);
        primeiraCasaDecimal = parseInt(primeiraCasaDecimal);

        if (selectedUnit === "gram") {
            if(kcalValue >= 10) {
                const decimalPart = parseFloat((kcalValue % 1).toFixed(2));
                if(primeiraCasaDecimal < 5) {
                    result = kcalValue.toFixed(0);
                }
                else if(primeiraCasaDecimal >= 5) {
                    result = Math.ceil(kcalValue).toFixed(0)
                }
                else if (decimalPart < 0.5) {
                    result = kcalValue.toFixed(1);
                } else {
                    result = Math.ceil(kcalValue).toFixed(1);
                }
            }
            else if (kcalValue < 10 && kcalValue > 1) {
                const decimalPart = parseFloat((kcalValue % 1).toFixed(2));
                if(primeiraCasaDecimal == 0.0) {
                    result = kcalValue.toFixed(0);
                }
                else if (decimalPart < 0.5) {
                    result = kcalValue.toFixed(1);
                } else {
                    result = Math.ceil(kcalValue).toFixed(1);
                }
            } else if (kcalValue < 1) {
                if (kcalValue % 1 === 0) {
                    result = kcalValue.toFixed(0);
                } else {
                    const roundedValue = Math.round(kcalValue * 10) / 10;
                    result = roundedValue.toFixed(1);
                }
            } else {
                result = kcalValue.toFixed(2);
            }
        } else if (selectedUnit === "milligram") {
            if (kcalValue < 0.01) {
                if (kcalValue % 0.1 === 0) {
                    result = kcalValue.toFixed(0);
                } else {
                    result = kcalValue.toFixed(1);
                }
            } else if (kcalValue % 1 === 0) {
                result = kcalValue.toFixed(1);
            } else {
                const roundedValue = Math.round(kcalValue * 100) / 100;
                result = roundedValue.toFixed(2);
            }
        }

        resultSpan.textContent = result;
    }

    kcalInput.addEventListener("input", calculateKcal);
    unitSelect.addEventListener("change", calculateKcal);
});