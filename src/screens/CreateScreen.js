import '../_mockLocations';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../components/Map';
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';
import { Context as LocationContext } from '../context/LocationContext';

const CreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err, setErr] = useState('');

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          addLocation(location);
        }
      );
    } catch (err) {
      setErr(err);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
