import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  header: {
    backgroundColor: '#111111',
  },
  tabs: {
    color: '#ffffff',
    marginRight: 20,
    fontSize: 20,
    textDecoration: 'none',
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.header} position='static'>
      <Toolbar>
        <NavLink className={classes.tabs} to='/'>
          CRUD APPLICATION{' '}
        </NavLink>
        <NavLink className={classes.tabs} to='/all'>
          All Users
        </NavLink>
        <NavLink className={classes.tabs} to='/add'>
          Add User{' '}
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
