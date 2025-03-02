# Random Number Generator Web Application

This web application generates random numbers based on specified ranges and copies the output to the clipboard with a single button click.

## Features

- Generates random numbers for variables A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P according to the following ranges:
    - A: 1-16 (1 number)
    - B, C: 1-29 (2 numbers)
    - D, E, F, G, H, I, J, K: 1-27 (8 numbers)
    - L, M, N, O, P: 1-21 (5 numbers)
- Formats the output as a string: `A=[value],B=[value],C=[value],D=[value],E=[value],F=[value],G=[value],H=[value],I=[value],J=[value],K=[value],L=[value],M=[value],N=[value],O=[value],P=[value]`
- Provides a "Generate and Copy" button to generate random numbers and automatically copy the formatted output to the clipboard.

## Usage

1.  Open `index.html` in your web browser.
2.  Click the "Generate and Copy" button.
3.  The generated random numbers will be displayed on the page, and the output string will be copied to your clipboard.
4.  You can then paste the clipboard content wherever you need it.

## Files

- `index.html`: The main HTML file for the web application.
- `style.css`: CSS file for styling the web application.
- `script.js`: JavaScript file containing the logic for random number generation and clipboard functionality.
- `spec.md`: Specification document outlining the requirements of the application.
- `diagram.mmd`: Mermaid diagram illustrating the application workflow.