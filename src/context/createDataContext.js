import React, { useReducer } from 'react';

//create and export function that takes a Reducer, Actions and an initialState.
export default (reducer, actions, initialState) => {
  //create context
  const Context = React.createContext();
  //create helper provider component that takes some children as props
  const Provider = ({ children }) => {
    //make use of the useReducer hook
    //the reducer is passed down from the arguments received
    const [state, dispatch] = useReducer(reducer, initialState);
    //create an empty object of actions
    const boundActions = {}; //will be the functions we use to change our state
    //the Actions is passed down from the arguments received
    //we then iterate trough those key value pairs of the actions object, call each one with our dispatch and set them to boundActions
    for (const key in actions) {
      boundActions[key] = actions[key](dispatch); //this gives our action functions access to dispatch
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};
