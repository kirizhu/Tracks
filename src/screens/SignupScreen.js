import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
            <Input
              label='Email'
              value={email}
              onChangeText={setEmail}
              autoCapitalize='none'
              autoCorrect={false}
            />
          </Spacer>
          <Spacer>
            <Input
              label='Password'
              value={password}
              onChangeText={setPassword}
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry
            />
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
