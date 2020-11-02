import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Mapview, { Polyline } from 'react-native-maps';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as TrackContext } from '../context/TrackContext';

const DetailScreen = ({ navigation, route }) => {
  const { _id } = route.params;
  const { state, deleteTrack } = useContext(TrackContext);
  const track = state.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;
  return (
    <View>
      <Text>{track.name}</Text>
      <Mapview
        style={styles.mapStyle}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </Mapview>
      <Spacer>
        <Button title='Delete Track' onPress={() => deleteTrack(_id)} />
      </Spacer>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  mapStyle: {
    height: 300,
  },
});
