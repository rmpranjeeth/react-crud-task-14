import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";


import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

const AddUser = ({file, setFile}) => {
  const [name, setName] = useState('');
  //const [file, setFile] = useState("");
  const { addUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    setFile(null);
  },[0]);



  

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name,
      file
    }
    addUser(newUser);
    navigate('/');
    console.log(newUser)
  }

  const onChange = (e) => {
    setName(e.target.value);
    
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
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form >
              <div className="formInput text-white m-3">
                <label htmlFor="file" style={{backgroundColor: "#FF0000"}} className="rounded">
                  Click here to Choose Image
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
            </form>
          </div>
        </div>
        <Label className="text-white">Name</Label>
        <Input type="text" value={name} onChange={onChange} name="name" placeholder="Enter user" required></Input>
      </FormGroup>
      <Button className="mx-3 bg-success" type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}

export default AddUser



















// import React, { useState, useContext } from 'react';
// import { GlobalContext } from "../context/GlobalState";
// import { v4 as uuid } from "uuid";
// import { Link, useNavigate } from "react-router-dom";
// import { InputText } from 'primereact/inputtext'
// //import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog';
// import profile from "./profile.jpg";
// import Avatar from "react-avatar-edit"

// import {
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Button
// } from "reactstrap";

// const AddUser = () => {
//   const [image, setImage] = useState('');
//   const [imagecrop, setImagecrop] = useState(false);
//   const [src, setsrc] = useState(false);
//   const [profile, setProfile] = useState([]);
//   const [preview, setPreview]  = useState(false)
//   const [name, setName] = useState('');
//   const { addUser } = useContext(GlobalContext);
//   const navigate = useNavigate();
//   const profileFinal=profile.map((item)=>item.preview);

//   const onClose = () => {
//     setPreview(null);
//   }

//   const onCrop = (view) => {
//     setPreview(view)
//   };
//   const saveCropImage = () => {
//     setProfile([...profile, {preview}]);
//     setImagecrop(false);
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const newUser = {
//       id: uuid(),
//       name
//     }
//     addUser(newUser);
//     navigate('/');
//   }

//   const onChange = (e) => {
//     setName(e.target.value);
//   }

//   return (
//     <Form onSubmit={onSubmit}>
//       <FormGroup>
//       <div className="profile_img text-center p-4 flex flex-column justify-content-center align-items-center">
       
//           <img style={{
//             width:"60px",
//             height:"60px",
//             borderRadius: "50%",
//             objectFit:"cover",
//             border:"4px solid green"
//           }}
//           onClick={()=> setImagecrop(true)}
//           src={profileFinal.length ? profileFinal : profile} 
//           alt=""
//           />
//           <Dialog 
//           visible={imagecrop}
//           header={()=> (
//             <p htmlFor="" className="text-2xl font-semibold textColor">
//               Update Profile
//             </p>
//           )}
//           onHide={()=>setImagecrop(false)}      
//           />
//           <div className="confirmation-conent flex flex-column align-items-center">
//             <Avatar 
//               width={60}
//               height={60}
//               onCrop={onCrop}
//               onClose={onClose}
//               src={src}
//               shadingColor={"#474649"}
//               backgroundColor={"#474649"}
//             />
//             <div className="flex flex-column align-items-center mt-5 w-12">
//               <div className="flex justify-content-around w-12 mt-4">
//                 <Button
//                   onClick={saveCropImage}
//                   lave="Save"
//                   icon="pi pi-check"
//                 />
//               </div>
//             </div>
//           </div>
//           <InputText 
//           type="file"
//           accept="./image/*"
//           style={{display:"none"}}
//           onChange={(event)=>{
//             const file=event.target.files[0];
//             if(file&&file.type.substring(0,5)==="image"){
//               setImage(file);
//             }
//             else{
//               setImage(null);
//             }
//           }}
//           />
        
//       </div>
//         <Label>Name</Label>
//         <Input type="text" value={name} onChange={onChange} name="name" placeholder="Enter user" required></Input>
//       </FormGroup>
//       <Button className="mx-3" type="submit">Submit</Button>
//       <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
//     </Form>
//   )
// }

// export default AddUser