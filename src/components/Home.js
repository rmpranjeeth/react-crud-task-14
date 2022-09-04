import React from 'react';
import  Heading  from "./Heading";
import  UserList  from "./UserList";

const Home = () => {
  return (
    <>
      <Heading />
      <label className="rounded m-3 p-1 d-flex justify-content-center text-white"><h4>List of users :</h4></label>
      <UserList />
    </>
  )
}

export default Home