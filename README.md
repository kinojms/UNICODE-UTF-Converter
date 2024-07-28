<h1 align="center">
 UNICODE to UTF Converter
</h1>

<h5 align="center">
 Created by CSARCH2 S14 G11
</h5>

<p align="center">
  Welcome to the Unicode to UTF Online Converter! <br>
  This tool allows you to convert Unicode characters or code points to their corresponding UTF-8, UTF-16, and UTF-32 encodings. <br>
  The results can also be downloaded as a text file. <br>
  Below, you'll find details on how to set up and use the converter.
</p>

## Setup
To use this tool, you can either access it via Github Deployments or Downloading the zip.

### Deployement:
To access the tool's deployment, please click on this link: https://kinojms.github.io/UNICODE-UTF-Converter/

### Download Zip:
1. Download and unzip the file.
2. Open 'index.html' in a web browser.
3. Use the converter normally.

### Usage Instructions
1. Open 'index.html' in a web browser.
2. Enter a Unicode character or code point in the input field.
3. Click the "Convert" button.
4. View the UTF-8, UTF-16, and UTF-32 encodings displayed below the text fields.
5. Click the "Download Results" button to download the results as a .txt file.

## Inputs
The tool accepts two types of inputs: a single character or a code point. Below are valid & invalid sample inputs <br><br>
### Valid Inputs: 
- '$'
- '&'
- 'u24'
- 'u0024'
- 'u245d6'
- 'u246D6'
  
### Invalid Inputs: 
- '$&'
- 'u+24'
- 'u+0024'
- 'U+24'
- 'U+0024'
- 'U24'
- 'U0024'

## Code Explanation
### Files
- index.html: The main HTML file containing the structure of the web page.
- styles.css: The CSS file for styling the web page.
- script.js: The JavaScript file containing the logic for the converter.

### Key Functions in script.js
- parseUnicodeInput: Parses the input and checks if it is a Unicode code point or a single character (zero pads code points if necessary).
- unicodeToUtf: Converts a Unicode character to its corresponding UTF-8, UTF-16, and UTF-32 representations.
- displayEncodings: Displays the UTF-8, UTF-16, and UTF-32 reps on the webpage.
- updateDownloadLink: Updates the download link to allow users to download the results as a text file.

## Screenshots & Link to Video Demo

## Analysis Write-Up

### Design and Development Process
The design process began with identifying the key functionalities required: 
- input of Unicode characters or code points
- conversion to UTF-8, 16, 32 
- display of results & downloadable as txt file

The development was carried out using HTML, CSS, and JavaScript as it only requires a simple interface for Input & Outputs.

### Technical Details
- Technologies Used: HTML, CSS, JavaScript
- Reason for Choice: These are well-suited for creating simple web apps.
- Performance Considerations: The conversion logic is implemented in JavaScript using various methods for conversion, ensuring fast and efficient processing.

### UI/UX
The user interface is designed to be intuitive, with clear input fields and buttons. The results are displayed in a readable format, and users can download the results for offline use. The background used is from Armored Core VI.
