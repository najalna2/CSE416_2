import React, {useState, useEffect} from 'react';
import imageCompression from 'browser-image-compression';  

function ProfileModify () {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");

  const handleFileOnChange = async (e) => {
    let file = e.target.files[0];	//input file
    
    // image resize option
    const options = { 
        maxSizeMB: 2, 
        maxWidthOrHeight: 100
    }
    
    try {
      const compressedFile = await imageCompression(file, options);
      setFile(compressedFile);
      //save url of resized image
      const promise = imageCompression.getDataUrlFromFile(compressedFile);
      promise.then(result => {
          setFileUrl(result);
      })
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <>
      <input type='file' accept='image/jpg,image/png,image/jpeg,image/gif' 
      id='profile_img_upload' onChange={handleFileOnChange}
      />

      <label for='profile_img_upload'>
      <img src={camera} alt="camera" />
      </label>

      <img className="top_bar_profile_img" src={fileUrl} alt="profile_img" />
    </>
  )

}