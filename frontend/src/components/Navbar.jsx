import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { useGlobalContext } from "../context/AuthProvider";
import { Co2Sharp } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Stack from "@mui/material/Stack";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const pages = ["Register", "Login"];
const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const { setAuth, auth, amount } = useGlobalContext();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickBtn = (page) => {
    if (page === "Register") {
      navigate("./register");
    }
    if (page === "Login") {
      navigate("./login");
    }
    if (page === "Logout") {
      setAuth({
        username: undefined,
        password: undefined,
        token: undefined,
      });

      localStorage.clear();

      //setLoggedIn(false);
      console.log(localStorage.getItem("token"));
      console.log(auth);
      navigate("./login");
    }
    if (page === "Cart") {
      navigate("./cart");
    }
    if (page === "Dashboard") {
      navigate("./dashboard");
    }
    if (page === "Products") {
      navigate("./productList");
    }
    if (page === "Verify") {
      navigate("./users");
    }
    if (page === "VerifyOrder") {
      navigate("./verifyorderlist");
    }
    if (page === "MyOrder") {
      navigate("./myorder");
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {localStorage.getItem("loggedIn") ? (
                <div>
                  <MenuItem
                    key="logout"
                    onClick={() => handleClickBtn("Logout")}
                  >
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>

                  <div className="nav-container"></div>
                  <MenuItem key="cart" onClick={() => handleClickBtn("Cart")}>
                    <ShoppingCartIcon
                      sx={{ fontSize: 40, color: "white" }}
                    ></ShoppingCartIcon>
                    <div className="amount-container">
                      <p color="white" className="total-amount">
                        {amount}
                      </p>
                    </div>
                  </MenuItem>
                </div>
              ) : (
                <div>
                  <MenuItem
                    key="register"
                    onClick={() => handleClickBtn("register")}
                  >
                    <Typography textAlign="center">Register</Typography>
                  </MenuItem>
                  <MenuItem key="login" onClick={() => handleClickBtn("login")}>
                    <Typography textAlign="center">Login</Typography>
                  </MenuItem>
                </div>
              )}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {localStorage.getItem("loggedIn") ? (
              <Stack spacing={1} direction="row">
                <Button
                  key="logout"
                  onClick={() => handleClickBtn("Logout")}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Logout
                </Button>
                <MenuItem key="cart">
                  <Button onClick={() => handleClickBtn("Cart")}>
                    <ShoppingCartIcon
                      sx={{ fontSize: 40, color: "white" }}
                    ></ShoppingCartIcon>
                  </Button>
                </MenuItem>
                <Button
                  key="dashboard"
                  onClick={() => handleClickBtn("Dashboard")}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Dashboard
                </Button>
                <Button
                  key="produts"
                  onClick={() => handleClickBtn("Products")}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Products
                </Button>
                <Button
                  key="verify"
                  onClick={() => handleClickBtn("Verify")}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Verify Users
                </Button>
                <Button
                  key="verifyo"
                  onClick={() => handleClickBtn("VerifyOrder")}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Verify Order
                </Button>
                <Button
                  key="myorder"
                  onClick={() => handleClickBtn("MyOrder")}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  My order
                </Button>
              </Stack>
            ) : (
              <Stack spacing={1} direction="row">
                <Button
                  key="login"
                  onClick={() => handleClickBtn("Login")}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Login
                </Button>
                <Button
                  key="register"
                  onClick={() => handleClickBtn("Register")}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Register
                </Button>
              </Stack>
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
