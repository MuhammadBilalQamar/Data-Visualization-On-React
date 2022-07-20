import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import "../App.css"

function MyDropzone({ getFileData }) {
    const onDrop = useCallback(acceptedFiles => {
        var myFile = acceptedFiles[0];
        var reader = new FileReader();
        reader.addEventListener('load', (e) => {
            const data = JSON.parse(e.target.result);
            getFileData(data)
        });
        reader.readAsBinaryString(myFile);
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        // <div className='dropzonen'>
            <div className='dropzonen' {...getRootProps()} >
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some file here, or click to select files</p>
                }
            </div>
        // </div >
    )
}

export default MyDropzone;