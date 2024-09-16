function generateRandomNumbers() {
    const count = parseInt(document.getElementById('count').value, 10);
    const range = parseInt(document.getElementById('range').value, 10);
    let resultText = '';

    for (let i = 0; i < count; i++) {
        const randomNum = Math.floor(Math.random() * range) + 1;
        resultText += `${randomNum} `;
    }

    document.getElementById('result').textContent = resultText;
}