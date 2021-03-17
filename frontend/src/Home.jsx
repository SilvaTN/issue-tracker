import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from "@material-ui/core";

const DRAWER_WIDTH = 240;

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
      paddingRight: theme.spacing(9.2),
      paddingBottom: theme.spacing(9),
      paddingLeft: theme.spacing(9.2),
      minHeight: "100vh",
      transition: theme.transitions.create(['margin'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      [theme.breakpoints.down("xs")]: {
        //whatever is in here will be applied when the theme's breakpoint is extra small or above.
        paddingLeft: theme.spacing(8.4),
      }
    },
    mainContentShift: {
      marginLeft: DRAWER_WIDTH,
      paddingTop: theme.spacing(10),
      paddingRight: theme.spacing(3),
      paddingBottom: theme.spacing(9),
      paddingLeft: theme.spacing(3),
      minHeight: "100vh",
      [theme.breakpoints.down("xs")]: {
        //whatever is in here will be applied when the theme's breakpoint is extra small or above.
        paddingLeft: theme.spacing(2.3),
      }
    },
}));

const Home = ( { open } ) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={`${classes.mainContent} ${open ? classes.mainContentShift : ""}`}>

        This is HOME, and not projects

        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Why do we use it?

        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </Paper>
    </div>
  );
}


export default Home;