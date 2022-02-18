import Grid from '@mui/material/Grid';
import {EventList} from "./components/EventList";
import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { drawerWidth } from './utils/const';
import { TopBar } from './components/TopBar';
import {useStore} from "./store";
import { Betslip } from './components/Betslip';


const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})<{
    open?: boolean;
}>(({theme, open}) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    }),
}));


const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

function App() {
    const theme = useTheme();

    const isOpen = useStore(state => state.isOpenDrawer);
    const onOpenDrawer = useStore(state => state.onOpen);

    return (
        <div className="App">
            <TopBar open={isOpen} onOpen={onOpenDrawer} />
            <Main open={isOpen}>
                <DrawerHeader/>
                <Grid container textAlign="center">
                    <Grid xs>
                        <EventList/>
                    </Grid>
                </Grid>
            </Main>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant="persistent"
                anchor="right"
                open={isOpen}
            >
                <DrawerHeader>
                    <IconButton onClick={() => onOpenDrawer(false)}>
                        {theme.direction === 'rtl' ? "Left" : "Close"}
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                <Betslip/>
            </Drawer>

        </div>
    );
}

export default App;
