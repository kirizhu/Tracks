import React from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.flexGrow}>
      <ScrollView style={styles.contentContainerStyle}>
        <View style={styles.container}>
          <Spacer>
            <Text h3 style={styles.textCenter}>
              Sign Up for Tracks
            </Text>
          </Spacer>
          <Spacer />
          <Spacer>
            <Input label='Email' />
          </Spacer>
          <Spacer>
            <Input label='Password' />
          </Spacer>
        </View>
      </ScrollView>

      <View style={styles.buttonWrapper}>
        <Button title='Sign Up' />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  flexGrow: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  contentContainerStyle: {
    paddingTop: 120,
  },
  buttonWrapper: {
    marginBottom: 30,
    marginHorizontal: 10,
    marginTop: -20,
  },
});
