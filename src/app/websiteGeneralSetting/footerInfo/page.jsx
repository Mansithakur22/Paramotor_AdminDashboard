"use client"; // Mark this file as a client component

import React, { useState } from "react";
import { Grid, TextField, Button, Paper, Typography, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export default function FooterInfo() {
  const [footerLinks, setFooterLinks] = useState([]);
  const [newLink, setNewLink] = useState({ text: "", url: "" });
  const [footerInfo, setFooterInfo] = useState({
    title: " ",
    copyright: " ",
    tagline: " ",
    // title: "Quick Links",
    // copyright: "© 2024 Company Name. All Rights Reserved.",
    // tagline: "Building a better future.",
  });
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);

  const handleAddFooterLink = () => {
    setFooterLinks([...footerLinks, { ...newLink }]);
    setNewLink({ text: "", url: "" });
  };

  const handleDeleteFooterLink = (index) => {
    const updatedLinks = [...footerLinks];
    updatedLinks.splice(index, 1);
    setFooterLinks(updatedLinks);
  };

  const handleSave = () => {
    // Save logic here, typically involves an API call
    console.log("Footer Info Saved", { footerInfo, footerLinks, socialMediaLinks });
  };

  return (
    <Paper sx={{ padding: 3, maxWidth: 800, margin: "auto", mt: 3 }}>
      <Typography variant="h4" sx={{ mb: 4 }} textAlign="center">
        Footer Information
      </Typography>

      {/* Footer Title */}
      <Typography variant="h6" sx={{ mb: 2 }}>Footer Title</Typography>
      <TextField
        fullWidth
        label="Footer Title"
        variant="outlined"
        value={footerInfo.title}
        onChange={(e) => setFooterInfo({ ...footerInfo, title: e.target.value })}
        sx={{ mb: 3 }}
      />

      {/* Copyright Info */}
      <Typography variant="h6" sx={{ mb: 2 }}>Copyright Text</Typography>
      <TextField
        fullWidth
        label="Copyright Text"
        variant="outlined"
        value={footerInfo.copyright}
        onChange={(e) => setFooterInfo({ ...footerInfo, copyright: e.target.value })}
        sx={{ mb: 3 }}
      />

      {/* Footer Tagline */}
      <Typography variant="h6" sx={{ mb: 2 }}>Tagline</Typography>
      <TextField
        fullWidth
        label="Tagline"
        variant="outlined"
        value={footerInfo.tagline}
        onChange={(e) => setFooterInfo({ ...footerInfo, tagline: e.target.value })}
        sx={{ mb: 3 }}
      />

      {/* Add Footer Links */}
      <Typography variant="h6" sx={{ mb: 2 }}>Footer Links</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Link Text"
            variant="outlined"
            value={newLink.text}
            onChange={(e) => setNewLink({ ...newLink, text: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Link URL"
            variant="outlined"
            value={newLink.url}
            onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        startIcon={<AddIcon />}
        onClick={handleAddFooterLink}
      >
        Add Link
      </Button>

      {/* Display Footer Links */}
      <List sx={{ mt: 3 }}>
        {footerLinks.map((link, index) => (
          <ListItem key={index} sx={{ border: "1px solid #ccc", mb: 1, borderRadius: 1 }}>
            <ListItemText primary={link.text} secondary={link.url} />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => handleDeleteFooterLink(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

      {/* Save Button */}
      <Button variant="contained" color="primary" sx={{ mt: 4 }} onClick={handleSave}>
        Save Footer Info
      </Button>
    </Paper>
  );
}
