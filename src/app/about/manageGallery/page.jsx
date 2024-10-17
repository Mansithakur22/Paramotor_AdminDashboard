"use client";

import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Paper,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";

const ManageGallery = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });

  const [gallery, setGallery] = useState([]); // To hold uploaded images
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      setFormData((prevData) => ({
        ...prevData,
        image: e.target.files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.image) return;

    // Create an object URL for the uploaded image
    const imageUrl = URL.createObjectURL(formData.image);
    // Add new image to gallery
    setGallery((prevGallery) => [
      ...prevGallery,
      { id: Date.now(), title: formData.title, description: formData.description, image: imageUrl },
    ]);
    
    setSnackbarMessage("Image added successfully!");
    setOpenSnackbar(true);
    setFormData({ title: "", description: "", image: null }); // Reset form
  };

  const handleDelete = (id) => {
    setGallery(gallery.filter((item) => item.id !== id));
    setSnackbarMessage("Image deleted successfully!");
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Paper sx={{ padding: 3, maxWidth: 800, margin: "auto", mt: 3 }}>
      <Typography variant="h4" sx={{ mb: 4 }} textAlign={"left"}>
        Manage Gallery
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              variant="outlined"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              variant="outlined"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="image-upload"
              type="file"
              name="image"
              onChange={handleInputChange}
              required
            />
            <label htmlFor="image-upload">
              <Button variant="contained" component="span">
                Upload Image
              </Button>
            </label>
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary">
          Add Image
        </Button>
      </form>

      {/* Display existing gallery items */}
      {/* <Typography variant="h5" sx={{ mt: 4 }}>
        Existing Gallery Items
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {gallery.length === 0 ? (
          <Typography variant="body1">No images added yet.</Typography>
        ) : (
          gallery.map((item) => (
            <Grid item xs={4} key={item.id}>
              <Paper sx={{ padding: 1, position: 'relative' }}>
                <img src={item.image} alt={item.title} style={{ width: '100%' }} />
                <Typography variant="body1">
                  <strong>Title:</strong> {item.title}
                </Typography>
                <Typography variant="body1">
                  <strong>Description:</strong> {item.description}
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={() => handleDelete(item.id)}
                  sx={{ position: 'absolute', bottom: 10, right: 10 }}
                >
                  Delete
                </Button>
              </Paper>
            </Grid>
          ))
        )}
      </Grid> */}

      {/* Snackbar for feedback */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default ManageGallery;
