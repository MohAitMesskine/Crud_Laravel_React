import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    axios
      .post('http://localhost:8000/api/images', formData)
      .then((response) => {
        console.log(response.data.message);
        fetchImages();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchImages = () => {
    axios
      .get('http://localhost:8000/api/images')
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
       <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card mt-5">
          <div className="card-body">
            <h5 className="card-title text-center">User Profile</h5>
            <hr></hr>
    
      

      {images.map((image) => (
        <img
          key={image.id}
          src={`http://localhost:8000/uploads/${image.file_path}`}
          alt="Uploaded"
          style={{ width: '200px', height: 'auto' }}
          className="card-img-top rounded-circle mx-auto d-block"
        />
      ))}
           <h6 class="card-subtitle mt-2 text-muted text-center">Mohamed Ait Messkine</h6>
            <p class="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros
              nulla. Vestibulum feugiat sem a metus aliquet, vitae fermentum ipsum lobortis. Donec vitae ex vitae nunc
              bibendum aliquet ac sit amet turpis.</p>
            <div class="text-center">
              <input class="custom-file-input" type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} class="btn btn-primary mt-3">Upload</button>
            </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default ImageUpload;
