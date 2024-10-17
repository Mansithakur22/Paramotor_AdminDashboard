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
const CKEditor = dynamic(() => import("@ckeditor/ckeditor5-react").then(mod => mod.CKEditor), { ssr: false });
const ClassicEditor = dynamic(() => import("@ckeditor/ckeditor5-build-classic"), { ssr: false });

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [editorContent, setEditorContent] = useState("");

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

    console.log("Data Submitted:", productData);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Add New Product
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* Image Upload */}
          <Box mb={2}>
            <Typography variant="body1" gutterBottom>
              Image <span style={{ color: "red" }}>*</span>:
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
                  style={{ width: "270px", height: "290px", objectFit: "cover" }}
                />
              </Box>
            )}
            {/* <Typography variant="caption" display="block">
              Upload 270x290 (Pixel) Size image for best quality. Only jpg, jpeg,
              png image is allowed.
            </Typography> */}
          </Box>

          {/* Name Field */}
          <Box mb={2}>
            <Typography variant="body1" gutterBottom>
              Name <span style={{ color: "red" }}>*</span>:
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
              Text <span style={{ color: "red" }}>*</span>:
            </Typography>
            <TextField
              fullWidth
              label="Text"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {/* <CKEditor
              editor={ClassicEditor}
              data={editorContent}
              onChange={(event, editor) => {
                const data = editor.getData();
                setEditorContent(data);
              }}
            /> */}
          </Box>

          {/* Submit Button */}
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Submit Product
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddProduct;
