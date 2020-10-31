import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size='large' style={{ marginTop: 200 }} />;
  }
  return (
    <View>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        // region={{
        //   ...currentLocation.coords,
        //   latitudeDelta: 0.01,
        //   longitudeDelta: 0.01,
        // }}
      >
        <Circle
          center={currentLocation.coords}
          radius={25}
          strokeColor='rgba(158,158,255,1.0)'
          fillColor='rgba(158,158,255,0.3)'
        />
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  mapStyle: {
    height: 300,
  },
});
