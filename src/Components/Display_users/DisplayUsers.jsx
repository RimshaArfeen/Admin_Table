
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import "./DisplayUsers.css"
import { removeUser } from '../../Store/Slices__/User_slice';

const DisplayUsers = () => {
    const dispath = useDispatch(); 
    const users = useSelector((state) => { 
         const users = state.users || []
        return users});


        useEffect(() => {
            localStorage.setItem('Users', JSON.stringify(users))
        
        }, [users])

        useEffect(() => {
           const storedUsers =  JSON.parse(localStorage.getItem("Users"));
           console.log(storedUsers)
        
        }, [])
        
        
        console.log(users); // Ensure this logs the correct data
        const delUser = (id) => {
          dispath(removeUser(id))
        }
        

//         Why do we use useSelector?
//           Access Data: When your React component needs to display or work with some data from the Redux store, you use useSelector to grab just that specific piece of data.
//           Reactivity: If the data in the store changes, useSelector will ensure your component automatically re-renders with the new data.

    return (
        <div>
            <ul>
            {users.map((user, id)=>{
               return <li key={id}  
               className='userList text-left flex justify-between text-lg  '>{user}
               <button onClick={delUser}>
               <i className="ri-delete-bin-4-fill text-red-700" ></i>

               </button>
               </li>
            })}
          
            </ul>
        </div>
    );
}

export default DisplayUsers;
