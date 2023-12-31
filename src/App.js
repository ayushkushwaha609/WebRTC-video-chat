import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     borderRadius: 15,
//     margin: '30px 100px',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '600px',
//     border: '2px solid black',

//     [theme.breakpoints.down('xs')]: {
//       width: '90%',
//     },
//   },
//   image: {
//     marginLeft: '15px',
//   },
//   wrapper: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '100%',
//   },
// }));
const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: theme.spacing(2),
    margin: 'auto',
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between', /* Distribute items with spacing */
    alignItems: 'center',
    padding: theme.spacing(2),
    border: '1px solid #eee',
    marginBottom: theme.spacing(4), /* Add bottom margin for breathing room */

    [theme.breakpoints.down('xs')]: {
      maxWidth: '90%',
    },
  },
  image: {
    marginLeft: theme.spacing(1),
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: theme.spacing(2), /* Add top margin within wrapper */
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">RealTime Video-Chat</Typography>
      </AppBar>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
  );
};

export default App;
