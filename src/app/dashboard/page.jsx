"use client"; // Mark this file as a client component

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', flex: 1, minWidth: 130 },
  { field: 'description', headerName: 'Description', flex: 2, minWidth: 200 },
  { field: 'mail', headerName: 'Mail', flex: 1, minWidth: 150 },
  { field: 'contact', headerName: 'Contact', flex: 1, minWidth: 130 },
  { field: 'date', headerName: 'Date', flex: 1, minWidth: 130 },
  {
    field: 'action',
    headerName: 'Action',
    sortable: false,
    width: 150,
    renderCell: (params) => (
      <strong>
        <Button variant="contained" color="primary" size="small" onClick={() => handleEdit(params.row.id)}>
          Edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => handleDelete(params.row.id)}
          style={{ marginLeft: '5px' }}
        >
          Delete
        </Button>
      </strong>
    ),
  },
];

const rows = [
  { id: 1, name: 'Jon Snow', description: 'Night’s Watch member', mail: 'jon.snow@winterfell.com', contact: '123-456-7890', date: '2024-10-01' },
  { id: 2, name: 'Cersei Lannister', description: 'Queen of the Seven Kingdoms', mail: 'cersei.lannister@lannister.com', contact: '987-654-3210', date: '2024-10-02' },
  { id: 3, name: 'Jaime Lannister', description: 'Kingslayer', mail: 'jaime.lannister@lannister.com', contact: '456-789-0123', date: '2024-10-03' },
  { id: 4, name: 'Arya Stark', description: 'Faceless Man', mail: 'arya.stark@winterfell.com', contact: '321-654-0987', date: '2024-10-04' },
  { id: 5, name: 'Daenerys Targaryen', description: 'Mother of Dragons', mail: 'daenerys.targaryen@targaryen.com', contact: '654-321-0987', date: '2024-10-05' },
  { id: 6, name: 'Melisandre', description: 'Red Priestess', mail: 'melisandre@red.com', contact: '789-123-4560', date: '2024-10-06' },
  { id: 7, name: 'Ferrara Clifford', description: 'Noble', mail: 'ferrara.clifford@example.com', contact: '258-369-1470', date: '2024-10-07' },
  { id: 8, name: 'Rossini Frances', description: 'Merchant', mail: 'rossini.frances@example.com', contact: '753-951-4862', date: '2024-10-08' },
  { id: 9, name: 'Harvey Roxie', description: 'Bard', mail: 'harvey.roxie@example.com', contact: '369-258-1470', date: '2024-10-09' },
];

// Dynamic card entries
const stats = [
  { title: 'Total Products', value: 234 },
  { title: 'Total Blogs', value: 20 },
  { title: 'Contact Submissions', value: 56 },
];

const paginationModel = { page: 0, pageSize: 5 };

const handleEdit = (id) => {
  console.log(`Edit row with ID: ${id}`);
};

const handleDelete = (id) => {
  console.log(`Delete row with ID: ${id}`);
};

export default function DataTable() {
  return (
    <div>
      {/* Dynamic Stat Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {stats.map((stat, index) => (
          <Grid item xs={4} key={index}>
            <Paper sx={{ padding: 3, textAlign: 'center', backgroundColor: 'white' }}>
              <Typography variant="h6">{stat.title}</Typography>
              <Typography variant="h5">{stat.value}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Data Grid */}
      <Paper sx={{ height: 450, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 'none', '& .MuiDataGrid-columnHeader': { fontWeight: 'bold' } }}
        />
      </Paper>
    </div>
  );
}
