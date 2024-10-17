"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";

// Dynamically import CKEditor
const CKEditor = dynamic(() =>
  import("@ckeditor/ckeditor5-react").then((mod) => mod.CKEditor),
  { ssr: false }
);
const ClassicEditor = dynamic(() => import("@ckeditor/ckeditor5-build-classic"), {
  ssr: false,
});

const SocialLinks = () => {
  const [image, setImage] = useState(null);
  const [linkedin, setLinkedin] = useState(""); // State for LinkedIn
  const [twitter, setTwitter] = useState(""); // State for Twitter
  const [instagram, setInstagram] = useState(""); // State for Instagram
  const [editorContent, setEditorContent] = useState("");

  // Handle image upload
  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const socialLinksData = {
      linkedin,
      twitter,
      instagram,
      content: editorContent,
      image,
    };

    console.log("Data Submitted:", socialLinksData);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Add Social Links
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* LinkedIn Field */}
          <Box mb={2}>
            <Typography variant="body1" gutterBottom>
              LinkedIn <span style={{ color: "red" }}>*</span>:
            </Typography>
            <TextField
              fullWidth
              label="LinkedIn"
              variant="outlined"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              required
            />
          </Box>

          {/* Twitter Field */}
          <Box mb={2}>
            <Typography variant="body1" gutterBottom>
              Twitter <span style={{ color: "red" }}>*</span>:
            </Typography>
            <TextField
              fullWidth
              label="Twitter"
              variant="outlined"
              value={twitter} // Use twitter state
              onChange={(e) => setTwitter(e.target.value)} // Update twitter state
              required
            />
          </Box>

          {/* Instagram Field */}
          <Box mb={2}>
            <Typography variant="body1" gutterBottom>
              Instagram <span style={{ color: "red" }}>*</span>:
            </Typography>
            <TextField
              fullWidth
              label="Instagram"
              variant="outlined"
              value={instagram} // Use instagram state
              onChange={(e) => setInstagram(e.target.value)} // Update instagram state
              required
            />
          </Box>

          {/* Submit Button */}
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default SocialLinks;
