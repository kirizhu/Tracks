import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
//our reducer function gets called with 2 arguments
const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
      break;
  }
};
//action functions
const signup = async (dispatch) => {
  return ({ email, password }) => {
    //Try to signup
    try {
    } catch (err) {}

    //Handle success by updating state
    //Handle failure by showing error msg
  };
};
const signin = (dispatch) => {
  return ({ email, password }) => {
    //Try to signin
    //Handle success by updating state
    //Handle failure by showing error msg
  };
};
const signout = (dispatch) => {
  return () => {
    //Try to signout
  };
};

//export the provider and context to the rest of our application
export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false }
);
