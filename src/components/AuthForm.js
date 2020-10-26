import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { useNavigation } from '@react-navigation/native';

const AuthForm = ({
  headerText,
  errorMessage,
  buttonText,
  onSubmit,
  routeName,
  navText,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.flexGrow}>
      <ScrollView style={styles.contentContainerStyle}>
        <View style={styles.container}>
          <Spacer>
            <Text h3 style={styles.textCenter}>
              {headerText}
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
            {errorMessage ? (
              <Text style={styles.errorMessage}>{errorMessage}</Text>
            ) : null}
          </Spacer>
          <Spacer>
            <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
              <Text style={styles.signinLink}>{navText}</Text>
            </TouchableOpacity>
          </Spacer>
        </View>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <Button
          title={buttonText}
          onPress={() => onSubmit({ email, password })}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthForm;

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
