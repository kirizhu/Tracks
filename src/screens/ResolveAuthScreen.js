import React, { useEffect, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const ResolveAuthScreen = () => {
  const { localSignin } = useContext(AuthContext);
  useEffect(() => {
    localSignin();
  }, []);
  return null;
};

export default ResolveAuthScreen;

const styles = StyleSheet.create({});
