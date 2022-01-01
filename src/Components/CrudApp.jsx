import React from 'react';
import Youtube from '../Assets/Images/youtube.png';
import InstaTele from '../Assets/Images/InstaTele.jpeg';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  image: {
    width: '50%',
    height: '50%',
  },
  component: {
    margin: 50,
  },
});

const CrudApp = () => {
  const classes = useStyles();
  return (
    <Box className={classes.component}>
      <Typography variant='h4' style={{ marginBottom: 50 }}>
        Crud App
      </Typography>
      <Box style={{ display: 'flex' }}>
        <img className={classes.image} src={Youtube} />
        <img src={InstaTele} />
      </Box>
    </Box>
  );
};

export default CrudApp;
