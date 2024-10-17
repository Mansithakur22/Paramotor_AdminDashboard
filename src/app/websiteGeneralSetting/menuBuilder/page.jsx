"use client"; // Mark this file as a client component

import React, { useState } from "react";
import { Grid, TextField, Button, Paper, Typography, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function MenuBuilderPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", link: "" });

  const handleAddMenuItem = () => {
    setMenuItems([...menuItems, { ...newItem }]);
    setNewItem({ name: "", link: "" });
  };

  const handleDeleteMenuItem = (index) => {
    const updatedItems = [...menuItems];
    updatedItems.splice(index, 1);
    setMenuItems(updatedItems);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedItems = Array.from(menuItems);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);
    setMenuItems(reorderedItems);
  };

  return (
    <Paper sx={{ padding: 3, maxWidth: 800, margin: "auto", mt: 3 }}>
      <Typography variant="h4" sx={{ mb: 4 }} textAlign="center">
        Menu Builder
      </Typography>

      {/* Add Menu Item */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Add New Menu Item
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Menu Item Name"
            variant="outlined"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Menu Item Link"
            variant="outlined"
            value={newItem.link}
            onChange={(e) => setNewItem({ ...newItem, link: e.target.value })}
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        startIcon={<AddIcon />}
        onClick={handleAddMenuItem}
      >
        Add Menu Item
      </Button>

      {/* Display Menu Items */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Current Menu Items
      </Typography>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="menuItems">
          {(provided) => (
            <List ref={provided.innerRef} {...provided.droppableProps}>
              {menuItems.map((item, index) => (
                <Draggable key={index} draggableId={index.toString()} index={index}>
                  {(provided) => (
                    <ListItem
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      sx={{ border: "1px solid #ccc", mb: 1, borderRadius: 1 }}
                    >
                      <ListItemText primary={item.name} secondary={item.link} />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" onClick={() => handleDeleteMenuItem(index)}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>

      <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
        Save Menu
      </Button>
    </Paper>
  );
}
