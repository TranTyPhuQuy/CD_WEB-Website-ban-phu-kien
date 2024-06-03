import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

function CheckoutForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    district: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="fullName"
            name="fullName"
            label="Họ Và Tên"
            fullWidth
            variant="outlined"
            value={formData.fullName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Số điện thoại"
            fullWidth
            variant="outlined"
            value={formData.phone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Địa chỉ"
            fullWidth
            variant="outlined"
            value={formData.address}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <TextField
            required
            id="city"
            name="city"
            label="Tỉnh / Thành"
            fullWidth
            variant="outlined"
            value={formData.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            required
            id="district"
            name="district"
            label="Quận / Huyện"
            fullWidth
            variant="outlined"
            value={formData.district}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Phương thức thanh toán
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="COD"
              name="radio-buttons-group"
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
          <Button type="submit" fullWidth variant="contained" color="primary">
            Hoàn tất đơn hàng
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default CheckoutForm;
