
import React from 'react'
import { useDispatch } from 'react-redux';
// import { DelAllUsers } from '../../Store/Slices__/User_slice';
import { DelAllUsers } from '../../Store/actions/index';

const DelUser = () => {
  const dispatch = useDispatch();
  const DeleteAllData = (params) => {
    dispatch (DelAllUsers())
  }
  
  return (
    <div className=' w-full flex justify-end'>
       <button className="addUser text-lg text-white bg-red-800 border-0 py-2 px-4 focus:outline-none hover:bg-red-700 rounded" onClick={DeleteAllData}>Delete User</button>
    </div>
  )
}

export default DelUser;
