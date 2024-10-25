// script.js

// Elements
const networkNameInput = document.getElementById('networkName');
const passwordInput = document.getElementById('password');
const generateBtn = document.getElementById('generateBtn');
const qrCodeContainer = document.getElementById('qrcode');

// Function to generate the QR code
function generateQRCode() {
    const networkName = networkNameInput.value;
    const password = passwordInput.value;

    // WiFi format for QR code
    const wifiQRData = `WIFI:S:${networkName};T:WPA;P:${password};;`;

    // Clear any previous QR codes
    qrCodeContainer.innerHTML = '';

    // Generate the new QR code
    new QRCode(qrCodeContainer, {
        text: wifiQRData,
        width: 128,
        height: 128
    });
}

// Event listener for the button
generateBtn.addEventListener('click', generateQRCode);
