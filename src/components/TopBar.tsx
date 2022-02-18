import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar/AppBar";
import { drawerWidth } from "../utils/const";


interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

type Props = {
    open: boolean;
    onOpen: (open: boolean) => void;
}

export const TopBar = ({open, onOpen}: Props) => {
    return <AppBar position="fixed" open={open}>
        <Toolbar>
            <Typography variant="h6" noWrap sx={{flexGrow: 1}} component="div">
                Persistent drawer
            </Typography>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={() => onOpen(true)}
                sx={{...(open && {display: 'none'})}}
            >
                Open
            </IconButton>
        </Toolbar>
    </AppBar>
}