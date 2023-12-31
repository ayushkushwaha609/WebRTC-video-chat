import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';

import { SocketContext } from '../Context';

// const useStyles = makeStyles((theme) => ({
//   video: {
//     width: '550px',
//     [theme.breakpoints.down('xs')]: {
//       width: '300px',
//     },
//   },
//   gridContainer: {
//     justifyContent: 'center',
//     [theme.breakpoints.down('xs')]: {
//       flexDirection: 'column',
//     },
//   },
//   paper: {
//     padding: '10px',
//     border: '2px solid black',
//     margin: '10px',
//   },
// }));
const useStyles = makeStyles((theme) => ({
  video: {
    maxWidth: '550px', /* Use maxWidth for responsiveness */
    margin: 'auto', /* Center the video */
    [theme.breakpoints.down('xs')]: {
      maxWidth: '300px',
    },
  },
  gridContainer: {
    color: 'blue',
    justifyContent: 'center',
    alignItems: 'center', /* Vertically align items */
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: theme.spacing(2), /* Use theme spacing for consistency */
    borderRadius: theme.spacing(0), /* Add subtle border radius */
    border: '1px solid #000000', /* Use a lighter border color */
    marginBottom: theme.spacing(2), /* Adjust spacing for visual balance */
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
