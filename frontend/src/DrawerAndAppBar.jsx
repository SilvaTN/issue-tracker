import React from "react";
import { 
    AppBar,
    Badge,
    Button,
    Divider, 
    Drawer, 
    IconButton, 
    List, 
    ListItem, 
    ListItemIcon,
    ListItemText,
    makeStyles,
    Toolbar,
    Typography,
} from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    mainContent: {
        paddingTop: theme.spacing(10),
        paddingRight: theme.spacing(9),
        paddingBottom: theme.spacing(9),
        paddingLeft: theme.spacing(9),
        minHeight: "100vh",
    }
}));


function DrawerAndAppBar({ propPassedNavTo : navigateTo}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    return (
        <>
        <AppBar position="fixed">
            <Toolbar>
                <IconButton 
                    edge="start" 
                    className={classes.menuButton} 
                    color="inherit" 
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Issue Tracker
                </Typography>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <Button color="inherit" onClick={() => navigateTo("/login")}>Logout</Button>
            </Toolbar>
        </AppBar>
        <Drawer
        variant="persistent"
        sr="left"
        open={open}
        >
            <div>
            <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
            </IconButton>
            </div>
            <Divider />
            <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
                </ListItem>
            ))}
            </List>
            <Divider />
            <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
                </ListItem>
            ))}
            </List>
        </Drawer>
        </>
    )
}

export default DrawerAndAppBar;