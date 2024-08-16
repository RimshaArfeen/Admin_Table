
import { configureStore } from "@reduxjs/toolkit";
import User_slice from "./Slices__/User_slice"; 

const store = configureStore({
    reducer: {
        users: User_slice.reducer, // Use the default export directly as a reducer
    }
});

export default store;

 
//if the reducer have only one function then it works as the root reducer for whole code.
    
// if it is an object of slices having multiiple functions then configureStore automatically creates root reducer by passing the object in user combined utiltity.

// when any  action the person have performed in the webpage then the trigerring function first go to the store . in the store it checks the reducer object in the reducer obj it checks the slice which the triggerred function belong to and the go to to the slices.

// Purpose of the Store in Redux:
// The store is the central part of a Redux application. It serves a few key purposes:

// Holds the State:

// The store is where the entire state of your application lives. In your case, the state includes the list of users. Instead of managing the state within individual components, Redux centralizes it in the store, making it easier to manage and debug.
// Manages State Changes:

// The store listens for actions dispatched by components (like when you dispatch the addUser action). When an action is dispatched, the store checks which reducer should handle it and then updates the state accordingly. This ensures that the state changes in a predictable way.
// Provides Access to the State:

// The store allows any component in your application to access the state, no matter where it is in the component tree. Components can subscribe to specific parts of the state using useSelector or similar hooks, ensuring that they always have the latest data.