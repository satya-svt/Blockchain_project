import React, { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [ipfsUrl, setIpfsUrl] = useState("");
  const [minted, setMinted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first.");
    setLoading(true);
    try {
      // Send file to backend to upload to IPFS and mint NFT
      const formData = new FormData();
      formData.append("dnaFile", file);

      const res = await axios.post("http://localhost:5000/api/upload", formData); // Adjust to your backend route
      const { ipfsUrl, txHash } = res.data;

      setIpfsUrl(ipfsUrl);
      setMinted(true);
    } catch (err) {
      console.error("Error uploading/minting:", err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">🧬 GeneChain</h1>
      <p className="mb-6 text-center max-w-xl">
        Upload your DNA file, mint it as an NFT, and take control of your genetic identity.
      </p>

      <input
        type="file"
        accept=".vcf"
        onChange={handleFileChange}
        className="mb-4 bg-gray-800 border p-2 rounded w-full max-w-md"
      />

      <button
        onClick={handleUpload}
        disabled={loading || !file}
        className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white font-semibold transition disabled:opacity-50"
      >
        {loading ? "Uploading & Minting..." : "Upload & Mint DNA NFT"}
      </button>

      {minted && (
        <div className="mt-6 bg-gray-800 p-4 rounded w-full max-w-md text-sm break-all">
          ✅ DNA NFT Minted!
          <br />
          <strong>IPFS:</strong>{" "}
          <a href={ipfsUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
            {ipfsUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;