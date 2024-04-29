import React, { useState } from 'react';
import {projectDatabase} from "../firebase/config"; 

const CsvUploader = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleUpload = async () => {
        if (!file) return;

        // Read the CSV file
        const reader = new FileReader();
        reader.onload = async (event) => {
            const csvData = event.target.result;

            // Parse the CSV data
            const parsedData = parseCsv(csvData);

            // Write data to Firebase database
            const dbRef = projectDatabase.ref('csvData');
            await dbRef.set(parsedData);

            console.log('Data uploaded successfully');
        };

        reader.readAsText(file);
    };

    const parseCsv = (csvData) => {
        // Implement your CSV parsing logic here
        // Example: Convert CSV string to array of objects
        const lines = csvData.split('\n');
        const headers = lines[0].split(',');
        const data = [];
        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',');
            const entry = {};
            for (let j = 0; j < headers.length; j++) {
                entry[headers[j]] = values[j];
            }
            data.push(entry);
        }
        return data;
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload CSV</button>
        </div>
    );
};

export default CsvUploader;
