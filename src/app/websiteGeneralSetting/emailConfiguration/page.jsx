"use client"; // Mark this file as a client component

import * as React from "react";
import { Grid, TextField, Button, Paper, Typography, Box } from "@mui/material";

export default function EmailConfigPage() {
  return (
    <Box sx={{ maxWidth: 800, margin: "auto", p: 3 }}>
      <Typography variant="h4" sx={{ mb: 4 }} textAlign="center">
        Email Configuration
      </Typography>
      <Paper sx={{ padding: 3 }}>
        {/* SMTP Settings */}
        <Typography variant="h6" sx={{ mb: 2 }}>
          SMTP Settings
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="SMTP Host"
              variant="outlined"
              placeholder="smtp.example.com"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="SMTP Port" variant="outlined" placeholder="465" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="SMTP Username"
              variant="outlined"
              placeholder="your-email@example.com"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="password"
              label="SMTP Password"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Encryption Type" variant="outlined" placeholder="SSL/TLS" />
          </Grid>
        </Grid>

        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Test Connection
        </Button>
      </Paper>

      {/* Sender Details */}
      <Paper sx={{ padding: 3, mt: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Sender Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Sender Name" variant="outlined" placeholder="Your Name" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Sender Email"
              variant="outlined"
              placeholder="no-reply@example.com"
            />
          </Grid>
        </Grid>

        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Save Settings
        </Button>
      </Paper>
    </Box>
  );
}
