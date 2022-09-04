import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

const EditUser = ({file, setFile}) => {
  const params = useParams();
  const { editUser, users } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: '',
    file:''
  })
  const navigate = useNavigate();
  const currentUserId = params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find(user => user.id === userId);
    setSelectedUser(selectedUser);
    console.log(selectedUser);
  }, [currentUserId, users])

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    navigate('/');
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
      <div className="bottom text-center p-4 flex flex-column justify-content-center align-items-center">
          <div className="left">
            <img
            style={{
              width:"70px",
              height:"70px",
              borderRadius: "50%",
              objectFit:"cover",
              border:"1px solid green"
              }}
              src={
                selectedUser.file
                  ? URL.createObjectURL(selectedUser.file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form >
              <div className="formInput text-white m-3">
                <label htmlFor="file" style={{backgroundColor: "#FF0000"}} className="rounded">
                  Click Here to edit image 
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setSelectedUser({ ...selectedUser, file: e.target.files[0] }) }
                  style={{ display: "none" }}
                />
              </div>
            </form>
          </div>
        </div>
        <Label className="text-white">Edit name</Label>
        <Input type="text" value={selectedUser.name} onChange={onChange} name="name" placeholder="Enter user" required></Input>
      </FormGroup>
      <Button className="mx-3 bg-success" type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}


export default EditUser