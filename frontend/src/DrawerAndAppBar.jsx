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
import { withRouter } from "react-router-dom";


const DRAWER_WIDTH = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        // marginLeft: DRAWER_WIDTH, //doesn't seem to do anything
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    drawer: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
    },
    //The Paper element within the drawer is the main visible container.
    drawerPaper: {
        width: DRAWER_WIDTH,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        //NOT SURE WHAT THE ABOVE CODE AND COMMENT MEAN. It seems that the code just makes the drawer heading be the same size as the appBar height.
        justifyContent: 'flex-end',
    },
}));


const DrawerAndAppBar = ({ history, propPassedNavTo : navigateTo, open, setOpen }) => {

    const classes = useStyles();

    const itemsList = [
        { text: 'Home',
        icon: <InboxIcon />,
        handleClick: () => navigateTo("/"),
        }, 
        { text: 'Login',
        icon: <MailIcon />,
        handleClick: () => navigateTo("/login"),
        },
        { text: 'Projects',
        icon: <InboxIcon />,
        handleClick: () => navigateTo("/projects"),
        }, 
        { text: 'Drafts',
        icon: <MailIcon />,
        }
    ];

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    return (
        <>
        <AppBar 
            position="fixed"
            className={ `${open ? classes.appBarShift : classes.appBar}` }
        >
            <Toolbar>
                {!open 
                    ? <IconButton 
                    edge="start" 
                    className={classes.menuButton} 
                    color="inherit" 
                    aria-label="open drawer"
                    onClick={handleDrawerOpen} >
                        <MenuIcon />
                    </IconButton>
                    : <span></span>
                }
                <Typography variant="h6" className={`${classes.title} ${classes.principalMargin}`} >
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
            className={classes.drawer}
            style={{width: "500px"}}
            classes={{ paper: classes.drawerPaper }}
        >
            <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
            </IconButton>
            </div>
            <Divider />
            <List>
            {itemsList.map(({ text, icon, handleClick }, index) => (
                <ListItem button key={text} onClick={handleClick} >
                {/*  icon && means 'if the icon is not undefined...'  */}
                {icon && <ListItemIcon> {icon} </ListItemIcon>}
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

//wrapping your component around withRouter gives you extra tools/functionality.
//e.g. it passes the history variable into the DrawerAndAppBar props
export default withRouter(DrawerAndAppBar);