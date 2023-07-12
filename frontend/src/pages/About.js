import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const About = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can perform additional actions here, such as submitting the form data to an API

    // Clear form fields
    setName('');
    setBio('');
    setImage(null);
	console.log(setImage);
  };

  return (
    <div>
      <h2>Profile</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="bio">Bio</Label>
          <Input
            type="textarea"
            name="bio"
            id="bio"
            value={bio}
            onChange={handleBioChange}
            placeholder="Enter a short bio"
          />
        </FormGroup>
         <Form.Group controlId="formBasicImage">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleImageUpload} />
            </Form.Group>

            {image && (
              <div>
                <h6>Preview:</h6>
                <img src={image} alt="Profile" style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
            )}
        <Button color="primary" type="submit">Save</Button>
      </Form>
    </div>
  );
};

export default About;


