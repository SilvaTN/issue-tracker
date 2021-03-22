import { makeStyles } from '@material-ui/core/styles';

const DRAWER_WIDTH = 240;

const useStylesForMain = makeStyles((theme) => ({
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


export default useStylesForMain;