import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../RootNavigation';

//our reducer function gets called with 2 arguments
const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { errorMessage: '', token: action.payload };
    case 'clear_error':
      return { ...state, errorMessage: '' };
    case 'signout':
      return { token: null };
    default:
      return state;
      break;
  }
};

const localSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');

  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigate('Main', { screen: 'List' });
  } else {
    navigate('Signup');
  }
};
//action functions
const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });

    navigate('Main', { screen: 'List' });
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong, email already in use',
    });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
    navigate('Main', { screen: 'List' });
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong, email and password don´t match',
    });
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
  navigate('Signup');
};

const clearError = (dispatch) => () => {
  dispatch({ type: 'clear_error' });
};

//export the provider and context to the rest of our application
export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearError, localSignin },
  { token: null, errorMessage: '' }
);
