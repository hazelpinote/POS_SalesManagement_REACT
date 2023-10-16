import React from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, styled, tableCellClasses } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ComponentToPrint = React.forwardRef((props, ref) => {
  const {
  cart,
  customer_name,
  customer_num,
  customer_email,
  date_time,
  total_price,
  total_quantity,
  balance} = props;

// Styling the Product Table
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    fontSize: 15,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

  return (
    <div ref={ref} className="p-5">
      <Table className='table table-responsive table-dark table-hover' sx={{ minWidth: 300}}>
                    
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>#</StyledTableCell>
                        <StyledTableCell align="right">Product Name</StyledTableCell>
                        <StyledTableCell align="right">Quantity</StyledTableCell>
                        <StyledTableCell align="right">Price</StyledTableCell>
                        <StyledTableCell align="right">Total Price</StyledTableCell>
                        <StyledTableCell align="left"> </StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.map((item) => (
                            <TableRow key={item?.productid}>
                            <StyledTableCell component="th" scope="row">
                                {item?.productid}
                            </StyledTableCell>
                            <StyledTableCell align="right">{item?.productname}</StyledTableCell>
                            <StyledTableCell align="right">{item?.quantity}</StyledTableCell>
                            <StyledTableCell align="right">₱{item?.price}</StyledTableCell>
                            <StyledTableCell align="right">₱{item?.subtotal}</StyledTableCell>
                          
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <h3 className='px-2'>Customer Name: {customer_name}</h3>
                <h3 className='px-2'>Customer Number: {customer_num}</h3>
                <h3 className='px-2'>Customer Email: {customer_email}</h3>
                <h3 className='px-2'>Date: {date_time}</h3>
                <h2 className='px-2'>Total Quantity: {total_quantity}</h2>
                <h2 className='px-2'>Total Amount: ₱{total_price}</h2>
                <h2 className='px-2'>Change: ₱{balance}</h2>
    </div>
    
  );
});