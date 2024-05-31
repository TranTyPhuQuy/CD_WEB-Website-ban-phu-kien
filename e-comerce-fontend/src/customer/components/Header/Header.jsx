import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Logout, PersonAdd, Settings, ShoppingCart } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { cartItemsCountSelector } from "../../pages/Cart/Selectors";
import { useNavigate } from "react-router-dom";
import AutocompleteSearchBar from "./component/AutocompleteSearchBar";
import { useEffect } from "react";
import productApi from "../../../api/productApi";
import { useState } from "react";
import { Avatar, Divider, ListItemIcon, Tooltip } from "@mui/material";
import { CategoryContext } from "../../../constants/common";

export default function Header() {
  const navigate = useNavigate();

  const handleClickIconShoppingCart = () => {
    navigate(`/cart`);
  };
  const handleClickLogo = () => {
    navigate("/");
  };

  const [list, setList] = useState([]);
  const [suggest, setSuggest] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await productApi.getProductNameSuggest(suggest);
        console.log("ds product name", res);
        setList(res);
      } catch (error) {
        console.log("Loi lay chi tiet san pham", error);
      }
    })();
  }, [suggest]);
  const handleInputChange = (suggest) => {
    console.log("handleInputChange: ", suggest);
    setSuggest(suggest);
  };
  const handleEnterKeyword = (keyword) => {
    console.log("handleEnterKeyword: ", keyword);
    navigate(`/products/name/${keyword}`);
  };

  const [accountAnchorEl, setAccountAnchorEl] = React.useState(null);
  const [categoryAnchorEl, setCategoryAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const cartItem = useSelector(cartItemsCountSelector);

  const isOpenAccount = Boolean(accountAnchorEl);
  const isOpenCategory = Boolean(categoryAnchorEl);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleAccountMenuOpen = (event) => {
    setAccountAnchorEl(event.currentTarget);
  };
  const handleCategoryMenuOpen = (event) => {
    setCategoryAnchorEl(event.currentTarget);
  };
  const handleAccountMenuClose = () => {
    setAccountAnchorEl(null);
  };
  const handleCategoryMenuClose = () => {
    setCategoryAnchorEl(null);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const renderAccountMenu = (
    <Menu
      anchorEl={accountAnchorEl}
      id="account-menu"
      open={isOpenAccount}
      onClose={handleAccountMenuClose}
      onClick={handleAccountMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem onClick={handleCategoryMenuClose}>
        <Avatar /> Profile
      </MenuItem>
      <MenuItem onClick={handleCategoryMenuClose}>
        <Avatar /> My account
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleCategoryMenuClose}>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Add another account
      </MenuItem>
      <MenuItem onClick={handleCategoryMenuClose}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={handleCategoryMenuClose}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
  const categories = React.useContext(CategoryContext);

  const renderCategoryMenu = (
    <Menu
      anchorEl={categoryAnchorEl}
      id="account-menu"
      open={isOpenCategory}
      onClose={handleCategoryMenuClose}
      onClick={handleCategoryMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {categories.map((c) => (
        <MenuItem onClick={handleCategoryMenuClose}>
          <a className="block-pages" href={`/categories/${c.categoryName}`}>
            {c.categoryName}
          </a>
        </MenuItem>
      ))}
    </Menu>
  );
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleAccountMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <AppBar
      position="sticky"
      style={{ backgroundColor: "#0f1230", zIndex: 1000 }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon onClick={handleCategoryMenuOpen} />
        </IconButton>

        <Typography
          variant="h6"
          noWrap
          component="div"
          color="#FFFF00	"
          sx={{ display: { xs: "none", sm: "block" }, cursor: "pointer" }}
          onClick={handleClickLogo}
        >
          SHOP PHU KIEN
        </Typography>
        <AutocompleteSearchBar
          list={list}
          onInChange={handleInputChange}
          onEnChange={handleEnterKeyword}
        />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            onClick={handleClickIconShoppingCart}
          >
            <Badge badgeContent={cartItem} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleAccountMenuOpen}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={isOpenAccount ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={isOpenAccount ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
      {renderMobileMenu}
      {renderAccountMenu}
      {renderCategoryMenu}
    </AppBar>
  );
}
