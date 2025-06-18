import React, { useState } from 'react';
import axios from 'axios';

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:5000/api/upload", formData);
      setStatus(`✅ Uploaded: ${res.data.filePath}`);
    } catch (err) {
      setStatus("❌ Upload failed");
    }
  };

  return (
    <div style={styles.container}>
      <h3>Upload File</h3>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>{status}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '1rem',
    maxWidth: '400px',
    margin: 'auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
  }
};

export default UploadFile;
