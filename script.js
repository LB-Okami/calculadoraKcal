document.addEventListener("DOMContentLoaded", function() {
    const kcalInput = document.getElementById("kcalInput");
    const calcularButton = document.getElementById("calcularButton");
    const resultado = document.getElementById("resultado");

    calcularButton.addEventListener("click", function() {
        const kcalValue = parseFloat(kcalInput.value);

        if (isNaN(kcalValue)) {
            resultado.textContent = "Por favor, insira um valor válido.";
        } else if (kcalValue <= 10) {
            resultado.textContent = "O valor deve ser maior que 10 Kcal.";
        } else {
            const decimalPart = kcalValue % 1;
            let roundedValue;

            if (decimalPart < 0.5) {
                // Arredonda para baixo
                roundedValue = Math.floor(kcalValue);
            } else {
                // Arredonda para cima
                roundedValue = Math.ceil(kcalValue);
            }

            resultado.textContent = `Valor arredondado: ${roundedValue} Kcal.`;
        }
    });
});