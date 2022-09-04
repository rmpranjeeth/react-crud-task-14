import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
        <>
          {users.map(user => (
            <ListGroupItem className="d-flex justify-content-between align-items-center" key={user.id}>
              <div className="d-flex align-items-center" >
              <img className="mx-3"
            style={{
              width:"45px",
              height:"45px",
              borderRadius: "50%",
              objectFit:"cover",
              border:"1px solid green"
              }}
              src={
                user.file
                  ? URL.createObjectURL(user.file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
              
              <strong>{user.name}</strong>
              </div>
               
              <div className="ml-auto">
                <Link to={`/edit/${user.id}`} color="warning" className="btn btn-warning mx-2">Edit</Link>
                <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
          <h4 className="text-center text-white">No Users</h4>
        )}
    </ListGroup>
  )
}

export default UserList
