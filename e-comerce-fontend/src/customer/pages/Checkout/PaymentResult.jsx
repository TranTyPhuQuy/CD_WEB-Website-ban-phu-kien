import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import paymentApi from "../../../api/paymentApi";
import { Box, Button, Modal, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReportIcon from "@mui/icons-material/Report";
import { removeCart } from "../../../app/CartSlice";
const PaymentResult = () => {
  const [paymentResult, setPaymentResult] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchPaymentResult = async () => {
      const params = new URLSearchParams(location.search);
      const response = await paymentApi.paymentResult(params.toString());
      if(response.paymentStatus === "success") {
        removeCart()
      }
      setPaymentResult(response);
    };

    fetchPaymentResult();
  }, [location]);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  };
  const navigate = useNavigate();
  const handleClickBackHome = () => {
    navigate("/");
}

  return (
    <>
      {paymentResult ? (
        paymentResult.paymentStatus === "success" ? (
          <Box sx={style}>
            <CheckCircleIcon sx={{ fontSize: "56px", color: "#22c55e" }} />
            <h3>PAYMENT SUCCESSFUL</h3>
            <Typography>
              Cảm ơn bạn đã thanh toán. Đơn hàng của bạn sẽ sớm được xử lý
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <p>Order ID:</p>
              <p>1111111111</p>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <p>Amount: </p>
              <p>1111111111111</p>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <p>Payment Time: </p>
              <p>111111111111</p>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <p>Transaction ID: </p>
              <p>111111111111</p>
            </Box>
            <Button onClick={handleClickBackHome}>Quay về trang chủ</Button>
          </Box>
        ) : (
          <Box sx={style}>
            <ReportIcon sx={{ fontSize: "56px", color: "#ef4444" }} />
            <h3>PAYMENT FAILED</h3>
            <Typography>Đã có lỗi trong quá trình thanh toán</Typography>
            <Button onClick={handleClickBackHome} >Quay về trang chủ</Button>
          </Box>
        )
      ) : (
        <p>Processing payment...</p>
      )}
    </>
  );
};

export default PaymentResult;
