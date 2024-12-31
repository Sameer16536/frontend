'use client'
import { useState } from "react"
import { uploadToS3 } from "../../../services/uploadService"

export default function UploadPage() {
    const [file, setFile] = useState<File | null>(null)



    const handleUpload = async () => {
        if (!file) {
            return alert("Please select  a file ")
        }
        const result = await uploadToS3(file)
        alert(`File uploaded :${result.Location}`)


    }

    return (
        <div>
            <h1>Upload Video</h1>
            <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}