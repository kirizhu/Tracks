import '../_mockLocations';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const CreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(addLocation);

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
