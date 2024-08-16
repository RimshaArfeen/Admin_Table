import React from 'react'
import './UserDetails.css'
import DelUser from '../../DeleteAllUser/DelUser';
import { FakeUserData } from '../../../Api';
import { useDispatch } from 'react-redux';
import { addUser } from '../../../Store/Slices__/User_slice';
import DisplayUsers from '../../Display_users/DisplayUsers';

const UserDetails = () => {
    const dispatch = useDispatch();
    const adduser = (payload) => {
        const newUser = FakeUserData();  // Fetch the fake user data
        dispatch(addUser(newUser));


    }

    return (
        <section className="text-gray-600 body-font w-full lg:w-5/6 mx-auto my-8">
            <div className="w-full px-5 py-8 mx-auto flex flex-wrap justify-between ">
                <h2 className="sm:text-3xl text-4xl uppercase text-gray-700 font-medium title-font mb-2 ">list of users</h2>
                <button className="addUser text-lg text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded" onClick={() => { adduser(FakeUserData()) }}>Add User</button>


            </div>
            <hr className=" w-full mx-auto border-gray-400 rounded-full" />
            <ul className=' my-8'>
                <DisplayUsers />
            </ul>
            <DelUser />
        </section>
    )
}

export default UserDetails;

// Key Concepts:
// useDispatch: Hook from react-redux to dispatch actions to the Redux store.
// createSlice: Function from Redux Toolkit to create a slice of the Redux state with predefined actions and reducers.
// dispatch(action): Sends an action to the Redux store, triggering the corresponding reducer to update the state