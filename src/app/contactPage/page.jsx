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

const AdminDashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    mail: "",
    contact: "",
  });

  const [data, setData] = useState([]); // To hold the added entries
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new entry to data
    setData((prevData) => [...prevData, { ...formData, id: Date.now() }]);
    setSnackbarMessage("Entry added successfully!");
    setOpenSnackbar(true);
    setFormData({ name: "", description: "", mail: "", contact: "" }); // Reset form
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Paper sx={{ padding: 3, maxWidth: 800, margin: "auto", mt: 3 }}>
      <Typography variant="h4" sx={{ mb: 4 }} textAlign="center">
        Contact Details
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
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
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="mail"
              value={formData.mail}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Contact Number"
              variant="outlined"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              required
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary">
          Add Entry
        </Button>
      </form>

    

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

export default AdminDashboard;
