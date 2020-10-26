import React, { useEffect, useContext } from 'react';
import { StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearError } = useContext(AuthContext);
  useEffect(() => {
    const listener = navigation.addListener('blur', () => {
      clearError();
    });
    return listener;
  }, [navigation]);
  return (
    <AuthForm
      headerText='Sign in for Tracks'
      errorMessage={state.errorMessage}
      buttonText='Sign In'
      onSubmit={signin}
      routeName='Signup'
      navText='Don´t have an account? Sign up instead'
    />
  );
};

export default SigninScreen;

const styles = StyleSheet.create({});
