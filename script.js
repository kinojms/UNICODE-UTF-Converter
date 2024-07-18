// Event listener for Convert button; Executes displayEncodings and updateDownloadLink after press
document.getElementById('convertButton').addEventListener('click', () => {
    const input = document.getElementById('unicodeInput').value.trim();
    const character = parseUnicodeInput(input);

    if (character) {
        const encodings = unicodeToUtf(character);
        displayEncodings(encodings);
        updateDownloadLink(encodings);
    } else {
        alert('Invalid Unicode input');
    }
});

/**
 * This function parses the input to determine if it is a Unicode code point (e.g., u0024) or a single character.
 * @param {string} input - The input string from the user.
 * @returns {string|null} - The character corresponding to the Unicode code point or the single character, or null if invalid.
 */
function parseUnicodeInput(input) {
    // Check if input is a Unicode code point (e.g., u0024 or u245D6)
    const codePoint = input.match(/^u([0-9a-fA-F]{4,6})$/);
    if (codePoint) {
        // Convert the hex to char using fromCodePoint function
        return String.fromCodePoint(parseInt(codePoint[1], 16));
    }
    // Input is a single character
    if (input.length === 1) {
        return input;
    }

    return null; // If invalid input
}

/**
 * This function converts a Unicode character to its UTF-8, UTF-16, and UTF-32 encodings.
 * @param {string} character - The Unicode character.
 * @returns {Object} - An object containing the UTF-8, UTF-16, and UTF-32 encodings.
 */
function unicodeToUtf(character) {
    // UTF-8 Encoding
    const utf8 = [...unescape(encodeURIComponent(character))].map(char => {
        return ('0' + char.charCodeAt(0).toString(16)).slice(-2); // Convert each character to hex and splits into 2 digits
    }).join(' ');

    // UTF-16 Encoding
    const utf16 = character.split('').map(char => {
        const codeUnit = char.charCodeAt(0);
        return ('0000' + codeUnit.toString(16)).slice(-4); // Convert each code unit to hex and splits into 4 digits
    }).join(' ');

    // UTF-32 Encoding
    const utf32 = ('00000000' + character.codePointAt(0).toString(16)).slice(-8); // 0 padding; Adds code unit to 00000000 and makes sure it has 8 digits

    return { utf8, utf16, utf32 }; // Returns converted values from Unicode to UTF representations (in Hex)
}

/**
 * Displays the UTF-8, UTF-16, and UTF-32 encodings on the webpage.
 * @param {Object} encodings - An object containing the UTF-8, UTF-16, and UTF-32 encodings.
 */
function displayEncodings(encodings) {
    document.getElementById('utf8Output').innerText = `UTF-8: ${encodings.utf8}`;
    document.getElementById('utf16Output').innerText = `UTF-16: ${encodings.utf16}`;
    document.getElementById('utf32Output').innerText = `UTF-32: ${encodings.utf32}`;
}

/**
 * Updates the download link to allow users to download the encoding results as a text file.
 * @param {Object} encodings - An object containing the UTF-8, UTF-16, and UTF-32 encodings.
 */
function updateDownloadLink(encodings) {
    const content = `UTF-8: ${encodings.utf8}\nUTF-16: ${encodings.utf16}\nUTF-32: ${encodings.utf32}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = url;
}
