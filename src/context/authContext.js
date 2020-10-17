import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../RootNavigation';

//our reducer function gets called with 2 arguments
const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
      return { errorMessage: '', token: action.payload };
    default:
      return state;
      break;
  }
};
//action functions
const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    console.log(response.data.token);
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signup', payload: response.data.token });
    navigate('Main', { screen: 'List' });
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong, email already in use',
    });
  }
};

const signin = (dispatch) => ({ email, password }) => {
  //Try to signin
  //Handle success by updating state
  //Handle failure by showing error msg
};

const signout = (dispatch) => () => {
  //Try to signout
};

//export the provider and context to the rest of our application
export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: '' }
);
