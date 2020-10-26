import React, { useEffect, useContext } from 'react';
import { StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearError } = useContext(AuthContext);
  useEffect(() => {
    const listener = navigation.addListener('blur', () => {
      clearError();
    });
    return listener;
  }, [navigation]);
  return (
    <AuthForm
      headerText='Sign Up for Tracks'
      errorMessage={state.errorMessage}
      buttonText='Sign Up'
      onSubmit={signup}
      routeName='Signin'
      navText='Alredy have an account? Sign in instead'
    />
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
