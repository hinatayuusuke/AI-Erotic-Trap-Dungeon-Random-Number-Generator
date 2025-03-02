document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');
    const outputText = document.getElementById('outputText');

    generateButton.addEventListener('click', () => {
        const A = Math.floor(Math.random() * 16) + 1;
        const B = Math.floor(Math.random() * 29) + 1;
        const C = Math.floor(Math.random() * 29) + 1;
        const D = Math.floor(Math.random() * 27) + 1;
        const E = Math.floor(Math.random() * 27) + 1;
        const F = Math.floor(Math.random() * 27) + 1;
        const G = Math.floor(Math.random() * 27) + 1;
        const H = Math.floor(Math.random() * 27) + 1;
        const I = Math.floor(Math.random() * 27) + 1;
        const J = Math.floor(Math.random() * 27) + 1;
        const K = Math.floor(Math.random() * 27) + 1;
        const L = Math.floor(Math.random() * 21) + 1;
        const M = Math.floor(Math.random() * 21) + 1;
        const N = Math.floor(Math.random() * 21) + 1;
        const O = Math.floor(Math.random() * 21) + 1;
        const P = Math.floor(Math.random() * 21) + 1;

        const outputString = `A=${A},B=${B},C=${C},D=${D},E=${E},F=${F},G=${G},H=${H},I=${I},J=${J},K=${K},L=${L},M=${M},N=${N},O=${O},P=${P}`;
        outputText.textContent = outputString;

        navigator.clipboard.writeText(outputString)
            .then(() => {
                alert('Output copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
                alert('Failed to copy to clipboard. Please copy manually.');
            });
        });
});