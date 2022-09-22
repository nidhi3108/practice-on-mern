import { AnimatePresence } from 'framer-motion';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import UpdateUser from './UpdateUser';

const UserManager = () => {
  const [userList, setUserList] = useState([]);//use
  const [showForm, setShowForm] = useState(false);
  const [userFormData, setUserFormData] = useState(null)
    const getDataFromBackend=async()=>{//use   backed se data lena

       const response=await fetch('http://localhost:4000/user/getall')
       const data= await response.json();
       console.log(data);
       setUserList(data);
       console.log('request sent');
    }

    useEffect(() => {
        getDataFromBackend();
    }, [])
    const deleteUser = async(id) => { //nouse
      // console.log(id);
      const response=await fetch('http://localhost:4000/user/delete/'+id,{
        method:'DELETE'
      })
      console.log(response.status);
      getDataFromBackend();
      toast.success('User Deleted👿')
    }

    const editUser=(userData)=>{//nouse
      console.log(userData);
      setUserFormData(userData);
      setShowForm(true);
    }
    
    const showUsers=()=>{
      return <table className='table table-white table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Age</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
         {userList.map((user,index)=>( //uselist usestate vala
          <tr key={index}>
            <td>{user._id}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
            <td>{user.age}</td>
            <td><button className='btn btn-outline-danger' onClick={()=>{editUser(user)}}><i class="fas fa-pen"></i></button></td>
            <td><button className='btn btn-outline-secondary' onClick={()=>{deleteUser(user._id)}}><i class="fas fa-trash"></i></button></td>
          </tr>
         ))}
          
        </tbody>
      </table>
    }
  return (
 
    <AnimatePresence className='container'>
        <h1 className='text-center'>user manager</h1>
        <button onClick={getDataFromBackend}>Refresh</button> //nouse
        <div className="row">
        <div className="col-md">
        {showUsers()}
        </div>
        {
          showForm?
          <div className="col-md">
            <UpdateUser userFormData={userFormData}/>
          </div>
          :
          ""
        }
        </div>
        </AnimatePresence>
  )
}

export default UserManager