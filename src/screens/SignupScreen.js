import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, signup } = useContext(AuthContext);
  return (
    <KeyboardAvoidingView style={styles.flexGrow}>
      <ScrollView style={styles.contentContainerStyle}>
        <View style={styles.container}>
          <Spacer>
            <Text h3 style={styles.textCenter}>
              Sign Up for Tracks
            </Text>
          </Spacer>

          <Spacer>
            <Input
              label='Email'
              value={email}
              onChangeText={setEmail}
              autoCapitalize='none'
              autoCorrect={false}
            />

            <Input
              label='Password'
              value={password}
              onChangeText={setPassword}
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry
            />
            {state.errorMessage ? (
              <Text style={styles.errorMessage}>{state.errorMessage}</Text>
            ) : null}
          </Spacer>
          <Spacer>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
              <Text style={styles.signinLink}>
                Alredy have an account? Sign in instead
              </Text>
            </TouchableOpacity>
          </Spacer>
        </View>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <Button title='Sign Up' onPress={() => signup({ email, password })} />
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
    marginTop: -15,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginHorizontal: 10,
    marginTop: -20,
  },
  signinLink: {
    fontSize: 16,
    color: 'blue',
    marginHorizontal: 10,
  },
});
