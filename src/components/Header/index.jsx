import { AppBar, IconButton, Toolbar, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import {Close as CloseIcon, MoreVert as MoreIcon} from '@mui/icons-material'
import { useTelegram } from "../../hooks/useTelegram";

export const Header = () => {
const {onClose} = useTelegram()

  return (
    <AppBar>
      <Toolbar>
        <Box display="flex" justifyContent="space-between" width="100%">
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ color: grey[500] }} />
          </IconButton>
          <Typography variant="h6">Voltum</Typography>
          <IconButton>
            <MoreIcon sx={{ color: grey[500] }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
