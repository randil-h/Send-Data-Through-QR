import React, { useState } from 'react';
import QRCode from 'qrcode';

function App() {
  const [id, setId] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  // Function to generate the QR code
  const generateQrCode = async (id) => {
    try {
      // Embed the ID in the backend URL
      const scanUrl = `http://192.168.8.104:3001/scan?id=${id}`;
      const qrCode = await QRCode.toDataURL(scanUrl);
      setQrCodeUrl(qrCode);
    } catch (error) {
      console.error('Error generating QR code', error);
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    generateQrCode(id);  // Generate QR code without sending the ID to the backend
  };

  return (
      <div className="App">
        <h1>QR Code Generator</h1>
        <form onSubmit={handleSubmit}>
          <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter ID or URL"
              required
          />
          <button type="submit">Generate QR Code</button>
        </form>

        {qrCodeUrl && (
            <div>
              <h3>QR Code:</h3>
              <img src={qrCodeUrl} alt="QR Code" />
            </div>
        )}
      </div>
  );
}

export default App;