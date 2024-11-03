import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../assests/SportsBetLogo.jpg";

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar variant="dense">
        <Box
          component={"img"}
          src={logo}
          alt="Company Logo"
          sx={{ height: 90, marginRight: 2 }}
        />
        <Box sx={{ flexGrow: 1 }} />
        <Button
          variant="contained"
          color="info"
          href="https://www.sportsbet.com.au/"
        >
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
