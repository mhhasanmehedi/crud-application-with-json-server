import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles,
  Button,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteUser, getUsers } from '../Service/api';

const useStyle = makeStyles({
  table: {
    width: '90%',
    margin: ' 50px auto',
  },
  thead: {
    '& > *': {
      backgroundColor: '#000000',
      color: 'white',
      fontSize: 20,
    },
  },
  row: {
    '& > *': {
      fontSize: 20,
    },
  },
});

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  const classes = useStyle();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  return (
    <Table className={classes.table}>
      <TableHead className={classes.thead}>
        <TableCell>Id</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Username</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Phone</TableCell>
        <TableCell>Action</TableCell>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow className={classes.row}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                component={Link}
                variant='contained'
                color='primary'
                style={{ marginRight: '10px' }}
                to={`/edit/${user.id}`}
              >
                Edit
              </Button>
              <Button
                variant='contained'
                color='secondary'
                onClick={() => deleteUserData(user.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllUsers;
