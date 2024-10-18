'use client';
import React, { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  Box,
  Stack,
} from '@mui/material';

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [editorContent, setEditorContent] = useState('');

  // Handle image upload
  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const productData = {
      name,
      content: editorContent,
      image,
    };

    console.log('Data Submitted:', productData);
  };

  return (
    <Stack>
        <Typography variant="h5" gutterBottom>
          Add New Product
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* Image Upload */}
          <Box mb={2}>
            <Typography variant="body1" gutterBottom>
              Image <span style={{ color: 'red' }}>*</span>:
            </Typography>
            <Button variant="contained" component="label">
              Choose Image
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageChange}
              />
            </Button>
            {image && (
              <Box mt={2}>
                <img
                  src={image}
                  alt="Uploaded"
                  style={{
                    width: '270px',
                    height: '290px',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            )}
          </Box>

          {/* Name Field */}
          <Box mb={2}>
            <Typography variant="body1" gutterBottom>
              Name <span style={{ color: 'red' }}>*</span>:
            </Typography>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Box>

          {/* Text/Content Field using CKEditor */}
          <Box mb={2}>
            <Typography variant="body1" gutterBottom>
              Text <span style={{ color: 'red' }}>*</span>:
            </Typography>
            <TextField
              fullWidth
              label="Text"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
    
          </Box>
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Submit Product
            </Button>
          </Box>
        </form>
      
    </Stack>
  );
};

export default AddProduct;
