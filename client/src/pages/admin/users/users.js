import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { getAuthToken } from '../../../services/auth.service';
import './users.css';

const Users = () => {
  const { token, user } = getAuthToken();
  const [users, setUsers] = useState({
    result: [],
    update: false,
  });

  useEffect(() => {
    axios
      .get('http://localhost:3000/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(data => {
        setUsers({ ...users, result: data.data.users });
        console.log(data.data.users);
      })
      .catch(err => {
        alert('some error occurred1');
        console.log(err);
      });
  }, [users.update]);

  return (
    <div>
      <div
        className="head"
        style={{ paddingBottom: '0px', paddingRight: '1150px' }}
      >
        <Link to="/addusers">
          <Button
            variant="primary"
            type="submit"
            style={{ backgroundColor: 'black' }}
          >
            Add Users
          </Button>
        </Link>
      </div>
      <div className="card-body">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.result.map(user => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    {!user.isActive && (
                      <button
                        onClick={() => {
                          axios
                            .put(
                              `http://localhost:3000/approve/${user.id}`,
                              {
                                key: 'value',
                              },
                              {
                                headers: {
                                  Authorization: `Bearer ${token}`,
                                },
                              }
                            )
                            .then(data => {
                              alert(data.data.message);
                              setUsers({
                                ...users,
                                update: !users.update,
                              });
                            })
                            .catch(err => console.log(err));
                        }}
                        className="btn btn-success btn-sm"
                        style={{color:"black"}} >
                        approve
                      </button>
                    )}
                    <Link to={`/update_user/${user.id}`}>
                    <button className="btn btn-success btn-sm" style={{color:"black"}}>
                      Update
                    </button>
                    </Link>

                    <button
                      onClick={() => {
                        axios
                          .delete(
                            `http://localhost:3000/user/${user.id}`,
                            {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            }
                          )
                          .then(data => {
                            alert(data.data.message);
                            setUsers({
                              ...users,
                              update: !users.update,
                            });
                          })
                          .catch(err => {
                            alert('some error happen');
                            console.log(err);
                          });
                      }}
                      className="btn btn-danger btn-sm"
                      style={{color:"black"}}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Users;
