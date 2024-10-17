"use client";

import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Paper,
  Typography,
  IconButton,
  Avatar,
  Input,
  Box,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";

export default function BasicInformationPage() {
  const [basicInfo, setBasicInfo] = useState({
    // siteTitle: "My Website",
    // tagline: "Best products at the best prices",
    // address: "1234 Main St, City, Country",
    // phoneNumber: "123-456-7890",
    // emailAddress: "info@example.com",
    // logo: null,
    // favicon: null,


    siteTitle: "",
    tagline: "",
    address: "",
    phoneNumber: "",
    emailAddress: " ",
    logo: null,
    favicon: null,
  });

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setBasicInfo((prevInfo) => ({
      ...prevInfo,
      [field]: file,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBasicInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Logic for saving basic information, typically through an API
    console.log("Basic Info Saved", basicInfo);
  };

  return (
    <Paper sx={{ padding: 3, maxWidth: 800, margin: "auto", mt: 3 }}>
      <Typography variant="h4" sx={{ mb: 4 }} textAlign="center">
        Basic Information
      </Typography>

      {/* Logo Upload */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Site Logo
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Avatar
          alt="Logo Preview"
          src={basicInfo.logo ? URL.createObjectURL(basicInfo.logo) : "/default-logo.png"}
          sx={{ width: 80, height: 80, mr: 2 }}
        />
        <label htmlFor="logo-upload">
          <Input
            accept="image/*"
            id="logo-upload"
            type="file"
            sx={{ display: "none" }}
            onChange={(e) => handleFileChange(e, "logo")}
          />
          <Button variant="contained" color="primary" component="span" startIcon={<CloudUpload />}>
            Upload Logo
          </Button>
        </label>
      </Box>

      {/* Favicon Upload */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Favicon
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Avatar
          alt="Favicon Preview"
          src={basicInfo.favicon ? URL.createObjectURL(basicInfo.favicon) : "/default-favicon.ico"}
          sx={{ width: 40, height: 40, mr: 2 }}
        />
        <label htmlFor="favicon-upload">
          <Input
            accept="image/*"
            id="favicon-upload"
            type="file"
            sx={{ display: "none" }}
            onChange={(e) => handleFileChange(e, "favicon")}
          />
          <Button variant="contained" color="primary" component="span" startIcon={<CloudUpload />}>
            Upload Favicon
          </Button>
        </label>
      </Box>

      {/* Site Title */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Website Title
      </Typography>
      <TextField
        fullWidth
        label="Site Title"
        variant="outlined"
        name="siteTitle"
        value={basicInfo.siteTitle}
        onChange={handleInputChange}
        sx={{ mb: 3 }}
      />

      {/* Tagline */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Tagline
      </Typography>
      <TextField
        fullWidth
        label="Tagline"
        variant="outlined"
        name="tagline"
        value={basicInfo.tagline}
        onChange={handleInputChange}
        sx={{ mb: 3 }}
      />

      {/* Contact Information */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Contact Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            name="phoneNumber"
            value={basicInfo.phoneNumber}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            name="emailAddress"
            value={basicInfo.emailAddress}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>

      {/* Address */}
      <TextField
        fullWidth
        label="Address"
        variant="outlined"
        name="address"
        value={basicInfo.address}
        onChange={handleInputChange}
        sx={{ mt: 3 }}
      />

      {/* Save Button */}
      <Button variant="contained" color="primary" sx={{ mt: 4 }} onClick={handleSave}>
        Save Basic Information
      </Button>
    </Paper>
  );
}
