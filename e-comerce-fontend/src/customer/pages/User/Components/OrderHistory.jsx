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
} from "@mui/material";

const orders = [
  {
    id: "#2014",
    date: "February 06, 2022",
    paymentStatus: "Paid",
    fulfillmentStatus: "Unfulfilled",
    total: "$40.00 USD",
  },
  {
    id: "#2024",
    date: "February 06, 2022",
    paymentStatus: "Paid",
    fulfillmentStatus: "Fulfilled",
    total: "$44.00 USD",
  },
  {
    id: "#2164",
    date: "February 06, 2022",
    paymentStatus: "Paid",
    fulfillmentStatus: "Unfulfilled",
    total: "$36.00 USD",
  },
  {
    id: "#2345",
    date: "February 06, 2022",
    paymentStatus: "Paid",
    fulfillmentStatus: "Unfulfilled",
    total: "$87.00 USD",
  },
  {
    id: "#1244",
    date: "February 06, 2022",
    paymentStatus: "Paid",
    fulfillmentStatus: "Fulfilled",
    total: "$66.00 USD",
  },
  {
    id: "#3455",
    date: "February 06, 2022",
    paymentStatus: "Paid",
    fulfillmentStatus: "Fulfilled",
    total: "$55.00 USD",
  },
  {
    id: "#4566",
    date: "February 06, 2022",
    paymentStatus: "Paid",
    fulfillmentStatus: "Unfulfilled",
    total: "$87.00 USD",
  },
];

const OrderHistory = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Orders History
      </Typography>
      <TableContainer component={Paper} sx={{ padding: 1 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Payment Status</TableCell>
              <TableCell>Fulfillment Status</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.paymentStatus}</TableCell>
                <TableCell>{order.fulfillmentStatus}</TableCell>
                <TableCell>{order.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderHistory;
