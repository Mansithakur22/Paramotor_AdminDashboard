"use client"
import React, { useState } from 'react';
import { Button, TextField, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" p={3}>
      <Card sx={{ maxWidth: 600, width: '100%', p: 2 }}>
        <CardContent>
          {/* Image Upload Section */}
          <Typography variant="h6" gutterBottom>Image*</Typography>
          <Box display="flex" flexDirection="column" alignItems="center">
            <CardMedia
              component="img"
              image={image || 'https://via.placeholder.com/270x290.png?text=No+Image+Found'}
              alt="Product Image"
              sx={{ width: 270, height: 290, mb: 2 }}
            />
            <Button variant="outlined" component="label">
              Choose Image
              <input hidden accept="image/*" type="file" onChange={handleImageUpload} />
            </Button>
            <Typography variant="caption" sx={{ mt: 1 }}>
              Upload 270x290 (Pixel) Size image for best quality. Only jpg, jpeg, png image is allowed.
            </Typography>
          </Box>

          {/* Name Input */}
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>Name*</Typography>
          <TextField
            fullWidth
            required
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            sx={{ mb: 3 }}
          />

          {/* Text Input */}
          <Typography variant="h6" gutterBottom>Text*</Typography>
          <TextField
            fullWidth
            required
            label="Text"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="outlined"
          />

          {/* Submit Button */}
          <Box mt={3}>
            <Button variant="contained" color="primary" fullWidth>Add Product</Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AddProduct;
