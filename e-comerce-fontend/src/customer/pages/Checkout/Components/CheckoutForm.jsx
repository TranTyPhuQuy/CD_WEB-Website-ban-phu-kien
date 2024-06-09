import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import useProvinces from "../../../../hooks/useProvinces";
import PropTypes from 'prop-types';

CheckoutForm.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};
function CheckoutForm({handleSubmitPayment}) {
  const [formData, setFormData] = useState({
    paymentMethod: "COD",
  });
  const handleChangePaymentMethod = (e) => {
    setFormData({
      ...formData,
      paymentMethod: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleSubmitPayment) {
      handleSubmitPayment(formData);
    }
    console.log("Form Data:", formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="payment-method-label">
              Phương thức thanh toán
            </FormLabel>
            <RadioGroup
              aria-labelledby="payment-method-label"
              defaultValue="COD"
              name="radio-buttons-group"
              onChange={handleChangePaymentMethod}
            >
              <FormControlLabel
                value="COD"
                control={<Radio />}
                label="Thanh toán khi giao hàng (COD)"
              />
              <FormControlLabel
                value="VNPAY"
                control={<Radio />}
                label="Thẻ ATM/Visa/Master/JCB/QR Pay qua cổng VNPAY"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            on
          >
            Hoàn tất đơn hàng
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default CheckoutForm;
