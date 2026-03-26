function calcularR2(x, y) {
    if (x.length !== y.length) {
        throw new Error("As listas x e y devem ter o mesmo tamanho.");
    }

    const n = x.length;

    // Média de x e y
    const mediaX = x.reduce((a, b) => a + b, 0) / n;
    const mediaY = y.reduce((a, b) => a + b, 0) / n;

    // Numerador e denominadores da correlação
    let numerador = 0;
    let denomX = 0;
    let denomY = 0;

    for (let i = 0; i < n; i++) {
        const dx = x[i] - mediaX;
        const dy = y[i] - mediaY;

        numerador += dx * dy;
        denomX += dx * dx;
        denomY += dy * dy;
    }

    // Correlação de Pearson (r)
    const r = numerador / Math.sqrt(denomX * denomY);

    // R²
    const r2 = r * r;

    return r2;
}

// 🔥 Exemplo de uso:
const x = [4, 5, 6, 7, 8, 6, 5, 7, 8, 9, 3, 4, 6, 7, 8, 5, 6, 7, 9, 10, 2, 3, 5, 6, 7, 8, 9, 4, 6, 7];
const y = [45, 52, 60, 68, 75, 62, 50, 70, 78, 85, 40, 48, 63, 72, 80, 55, 65, 74, 88, 92, 35, 42, 58, 66, 73, 82, 90, 47, 64, 71];

const resultado = calcularR2(x, y);

console.log("R² =", resultado.toFixed(4));