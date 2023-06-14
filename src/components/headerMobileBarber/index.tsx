import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "../../styles/headerMobileBarber/headerMobileBarber.module.css";
import profile from "../../../images/profile.jpg";
import { Menu, MenuItem } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../../../images/logo.png";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function headerMobileBarber(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ backgroundColor: "#494e5b", height: "100vh" }}>
      <Toolbar
        sx={{
          backgroundColor: "#494e5b",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={logo.src} className={styles.logoMob} />
      </Toolbar>
      <Divider sx={{ backgroundColor: "#948f8f" }} />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon sx={{ color: "#e9e9e9" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "#e9e9e9" }}>Dashboard</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AddBusinessIcon sx={{ color: "#e9e9e9" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "#e9e9e9" }}>Barbearia</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MoreTimeIcon sx={{ color: "#e9e9e9" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "#e9e9e9" }}>Horarios</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider sx={{ backgroundColor: "#948f8f" }} />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LockPersonIcon sx={{ color: "#e9e9e9" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "#e9e9e9" }}>Dados</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CreditCardIcon sx={{ color: "#e9e9e9" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "#e9e9e9" }}>Pagamentos</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon sx={{ color: "#e9e9e9" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "#e9e9e9" }}>Sair</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.headerMobileBody}>
      <CssBaseline />
      <AppBar
        position="absolute"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#24262c9c",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            $Icone da Aplicação
          </Typography>
          <img
            alt="profile"
            src={profile.src}
            width="10%"
            style={{ borderRadius: "30px" }}
            onClick={handleMenu}
          />
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </div>
  );
}
