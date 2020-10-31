import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
  let points = [];
  let length = 20;
  for (let i = 0; i < length; i++) {
    points.push({
      latitude: 59.334591 + i * 0.001,
      longitude: 18.06324 + i * 0.001,
    });
  }
  return (
    <View>
      <MapView
        showsUserLocation
        style={styles.mapStyle}
        initialRegion={{
          latitude: 59.334591,
          longitude: 18.06324,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={points} />
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
