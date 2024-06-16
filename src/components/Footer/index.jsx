import {
  Box,
  AppBar,
  Toolbar,
  BottomNavigation,
  Paper,
  BottomNavigationAction,
} from "@mui/material";

export const Footer = (props) => {
  const {} = props;

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#000333",
      }}
    >
      <BottomNavigation
        sx={{
          backgroundColor: "#000333",
          height: 80,
          
        }}
      >
        <BottomNavigationAction
          label="Recents"
          icon={
            <Box
              component="img"
              sx={{ width: 40, height: 40 }}
              src="/images/hammer-90.png"
            />
          }
        />
        <BottomNavigationAction
          label="Recents"
          icon={
            <Box
              component="img"
              sx={{ width: 40, height: 40 }}
              src="/images/light-coin-90.png"
            />
          }
        />
        <BottomNavigationAction
          label="Recents"
          icon={
            <Box
              component="img"
              sx={{ width: 40, height: 40 }}
              src="/images/wheel-90.png"
            />
          }
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
