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

  const provinces = useProvinces();
  const [pFullName, setPfullName] = useState();

  const [districts, setDistricts] = useState([]);
  useEffect(() => {
    // Fetch dữ liệu từ file JSON
    fetch("/utils/json/provinces.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Lọc các tỉnh và lấy district của tỉnh dựa vào pCode
        const province = data.find((item) => item.FullName === pFullName);
        if (province) {
          const filteredDistricts = province.District.map((district) => ({
            FullName: district.FullName,
            Code: district.Code,
          }));
          setDistricts(filteredDistricts);
        } else {
          setDistricts([]);
        }
      })
      .catch((error) => console.error("Error fetching the provinces:", error));
  }, [pFullName]);

  const handleProvinceChange = (event) => {
    setFormData({
      ...formData,
      city: event.target.value,
    });
    setPfullName(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setFormData({
      ...formData,
      district: event.target.value,
    });
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
          <FormControl fullWidth>
            <InputLabel id="province-select-label">Tỉnh / Thành</InputLabel>
            <Select
              labelId="province-select-label"
              id="province-select"
              value={formData.city}
              label="Tỉnh / Thành"
              onChange={handleProvinceChange}
            >
              {provinces.map((p) => (
                <MenuItem key={p.Code} value={p.FullName}>
                  {p.FullName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={5}>
          <FormControl fullWidth>
            <InputLabel id="district-select-label">Quận / Huyện</InputLabel>
            <Select
              labelId="district-select-label"
              id="district-select"
              value={formData.district}
              label="Quận / Huyện"
              onChange={handleDistrictChange}
            >
              {districts.map((d) => (
                <MenuItem key={d.Code} value={d.FullName}>
                  {d.FullName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="payment-method-label">
              Phương thức thanh toán
            </FormLabel>
            <RadioGroup
              aria-labelledby="payment-method-label"
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
