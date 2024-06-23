import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import useOrder from "../../../../hooks/useOrder";
import { useSelector } from "react-redux";
import { userInfor } from "../../../../app/Selectors";
import { formatPrice } from "../../../../utils";

const OrderHistory = () => {
  const user = useSelector(userInfor);
  const orders = useOrder(user.id) || [];

  console.log("orders: ", orders);
  console.log("Type of orders: ", typeof orders);
  console.log("Is orders an array? ", Array.isArray(orders));

  const handleClickAccount = (orderId) => {
    // Handle the view order logic here
    console.log(`View order with ID: ${orderId}`);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Orders History
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          width: '100%',
          maxWidth: '100%',
          overflowX: 'auto',
          padding: 1,
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Order</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Payment Status</TableCell>
              <TableCell>Fulfillment Status</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.paymentStatus}</TableCell>
                  <TableCell>{order.fulfillmentStatus}</TableCell>
                  <TableCell> {formatPrice(order.total)}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleClickAccount(order.id)}>
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No orders found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderHistory;
