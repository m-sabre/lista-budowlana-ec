import React, {useState} from 'react';
import {projectDatabase} from "../firebase/config";
import {ref, set} from 'firebase/database'


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
            const dbRef = ref(projectDatabase,'csvData');
            await set(dbRef,parsedData);

            console.log('Data uploaded successfully');
        };

        reader.readAsText(file);
    };

    const parseCsv = (csvData) => {
        const lines = csvData.split('\n');
        const headers = lines[0].split(',').map(header => encodeURIComponent(header.trim())).filter(header => header !== ''); // Encode and remove empty headers
        const data = [];

        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',');
            const entry = {};

            for (let j = 0; j < headers.length; j++) {
                const key = headers[j];

                entry[key] = values[j] ? values[j].trim() : ''; // Handle empty values
            }

            data.push(entry);
        }

        return data;
    };


    return (
        <>
            <div>
                <input type="file" onChange={handleFileChange}/>
                <button onClick={handleUpload}>Upload CSV</button>
            </div>
        </>

    );
};

export default CsvUploader;
