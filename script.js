function calculate() {
    const input = document.getElementById('unicodeInput').value.trim();

    // Check if input is a single Unicode character or a valid escape sequence
    let character;
    if (input.length === 1 && /^[\u0000-\uffff]$/.test(input)) {
        character = input;
    } else if (/^\\u[0-9A-Fa-f]{4}$/.test(input)) {
        // Convert Unicode escape sequence to character
        character = String.fromCharCode(parseInt(input.substr(2), 16));
    } else {
        alert('Please enter a valid Unicode character or Unicode escape sequence.');
        return;
    }

    // Convert Unicode character to UTF-8, UTF-16, UTF-32
    const utf8 = [...unescape(encodeURIComponent(character))].map(char => {
        return ('0' + char.charCodeAt(0).toString(16)).slice(-2);
    }).join(' ');

    const utf16 = [...character].map(char => {
        return ('0' + char.charCodeAt(0).toString(16)).slice(-4);
    }).join(' ');

    const utf32 = character.codePointAt(0).toString(16).toUpperCase().padStart(8, '0');

    // Display results
    document.getElementById('utf8Output').innerHTML = `${utf8}`;
    document.getElementById('utf16Output').innerHTML = `${utf16}`;
    document.getElementById('utf32Output').innerHTML = `${utf32}`;
}

function downloadText() {
    const utf8 = document.getElementById('utf8Output').textContent.replace('UTF-8:', '').trim();
    const utf16 = document.getElementById('utf16Output').textContent.replace('UTF-16:', '').trim();
    const utf32 = document.getElementById('utf32Output').textContent.replace('UTF-32:', '').trim();
    
    const textContent = `UTF-8: ${utf8}\nUTF-16: ${utf16}\nUTF-32: ${utf32}`;
    
    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'unicode_output.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
