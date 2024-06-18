import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import userApi from "../../../api/userApi";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function ResetPassword() {
  // const [data, setData] = useState({
  //   fullName: "",
  //   email: "",
  //   password: "",
  // });
  // const navigate = useNavigate();
  //   const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    // const password = formData.get("password");
    console.log({
      email: email,
      //   password: password,
    });
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!email || !emailRegex.test(email)) {
      alert("Vui lòng nhập địa chỉ email hợp lệ");
      return;
    }
    try {
      const res = await userApi.resetPassword(email);
      console.log(res);
      if (res.status === "success") {
        // const userInfor = {
        //   id: res.id,
        //   email: res.email,
        //   userName: res.userName,
        //   fullName: res.fullName,
        //   mobile: res.mobile,
        //   jwt: res.jwt,
        // };
        // const action = logIn(userInfor);
        // // console.log('action:',action)
        // // dispatch(action);
        setSuccess(true);
        // navigate("/");
      } else {
        alert("resetPassword thất bại: " + res.message);
      }
    } catch (error) {
      console.log("Lỗi resetPassword: ", error);
      alert("Đã xảy ra lỗi trong quá trình resetPassword");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "500px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {success ? <CheckCircleIcon /> : <LockOutlinedIcon />}
          </Avatar>
          {success ? (
            <Typography component="h3" variant="h5">
              Vui lòng kiểm tra email của bạn
            </Typography>
          ) : (
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Nhập địa chỉ Email của bạn"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                TIẾP TỤC
              </Button>
            </Box>
          )}
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
