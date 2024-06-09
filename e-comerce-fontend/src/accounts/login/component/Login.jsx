/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./login.css";

import BackgroundImage from "../images/loginBgr.png";
import Logo from "../images/logo.png";
import BackHome from "../images/home.svg";

const Login = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await delay(500);
    console.log(`Username :${inputUsername}, Password :${inputPassword}`);
    if (inputUsername !== "admin" || inputPassword !== "admin") {
      setShow(true);
    }
    setLoading(false);
  };

  const handlePassword = () => {};

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div
      className="sign-in__wrapper"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <a className="blk-backHome" href="/">
        <img src={BackHome} className="icon-backHome"/>
      </a>
      {/* Overlay */}
      <div className="sign-in__backdrop"></div>
      {/* Form */}
      <Form className="shadow p-4 bg-white form-login rounded" onSubmit={handleSubmit}>
        {/* Header */}
        <img
          className="img-thumbnail mx-auto d-block mb-2 img_logo-login"
          src={Logo}
          alt="logo"
        />
        <div className="h4 mb-2 text-center">Đăng Nhập</div>
        {/* ALert */}
        {show ? (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Tên đăng nhập hoặc mật khẩu của bạn không chính xác.
          </Alert>
        ) : (
          <div />
        )}
        <Form.Group className="mb-2" controlId="username">
          <Form.Label style={{ fontWeight: 500 }}>Tài khoản</Form.Label>
          <Form.Control
            type="text"
            value={inputUsername}
            placeholder="Tài khoản"
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label style={{ fontWeight: 500 }}>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            value={inputPassword}
            placeholder="Mật khẩu"
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="checkbox">
          <Form.Check type="checkbox" label="Nhớ tài khoản" />
        </Form.Group>
        <div id="button_login">
          {!loading ? (
            <Button className="w-100 btn_login-submit" variant="primary" type="submit">
              Đăng Nhập
            </Button>
          ) : (
            <Button className="w-100" variant="primary" type="submit" disabled>
              Đang Đăng Nhập...
            </Button>
          )}
        </div>
        <div id="blk_nav">
          <div className="nav_text">
            <a href="/signup" className="nav_text-signup">
              Đăng ký tài khoản!
            </a>
          </div>
          <div className="d-grid justify-content-end">
            <a
              href="/forgot-pass"
              className="text-muted px-0 btn_forgot-pass"
              variant="link"
              onClick={handlePassword}
            >
              Quên mật khẩu?
            </a>
          </div>
        </div>
      </Form>
      <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
        Copyright © 2024 ShopPhuKien by FITNLU
      </div>
    </div>
  );
};

export default Login;
