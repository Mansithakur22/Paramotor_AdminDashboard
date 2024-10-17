

import React from 'react';
import { 
  Box, Button, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, IconButton, Checkbox, TextField 
} from '@mui/material';
import { Edit, Delete, CopyAll, Add, DeleteForever } from '@mui/icons-material';

const ManageCareers = () => {
  const products = [
    { code: '1Z0-076', title: 'Oracle Database 19c: Data Guard Administration', price: '₹2999', category: 'ORACLE', status: 'Publish' },
    { code: '1Z0-078', title: 'Oracle Database 19c: RAC, ASM, and Grid Infrastructure Administration', price: '₹2999', category: 'ORACLE', status: 'Publish' },
    { code: '1Z0-083', title: 'Oracle Database Administration Professional', price: '₹2999', category: 'ORACLE', status: 'Publish' }
  ];

  return (
    <Box p={2}>
      {/* Top controls */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Box display="flex" gap={1}>
          <Button variant="contained" startIcon={<DeleteForever />}>Bulk Delete</Button>
          <Button variant="contained" startIcon={<Add />}>Add Product</Button>
        </Box>
        <TextField variant="outlined" size="small" placeholder="Search..." />
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>SAP Exam Code</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              {/* <TableCell>Price</TableCell>
              <TableCell>Category</TableCell> */}
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>{product.code}</TableCell>
                <TableCell>
                  <img src="https://via.placeholder.com/50" alt={product.title} style={{ width: 50 }} />
                </TableCell>
                <TableCell>{product.title}</TableCell>
                {/* <TableCell>{product.price}</TableCell> */}
                {/* <TableCell>{product.category}</TableCell> */}
                <TableCell>
                  <Button variant="contained" color="success" size="small">{product.status}</Button>
                </TableCell>
                <TableCell>
                  <IconButton color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton color="secondary">
                    <CopyAll />
                  </IconButton>
                  <IconButton color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ManageCareers;
