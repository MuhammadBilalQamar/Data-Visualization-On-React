import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { MDBBtn } from 'mdbreact'
import "../App.css"

function MyDropzone({ getFileData, fileData }) {
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
        <>
            {!fileData ?
                <div className='dropzonen' {...getRootProps()} >
                    <input {...getInputProps()} />
                    {
                        isDragActive ?
                            <p>Drop that json file...</p> :
                            <p>Drag 'n' drop json file here, or click to select files</p>
                    }
                </div>
                :
                <>
                    <MDBBtn  className='mx-5' color='dark' onClick={() => window.location.reload()}>Reset</MDBBtn>
                </>
            }
        </>
    )
}

export default MyDropzone;