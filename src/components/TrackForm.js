import React, { useContext } from 'react';
import { Button, Input } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext';
const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  console.log(locations.length);
  return (
    <>
      <Input
        placeholder='Name your track'
        value={name}
        onChangeText={changeName}
      />
      {recording ? (
        <Button title='Stop' onPress={stopRecording} />
      ) : (
        <Button title='Start Recording' onPress={startRecording} />
      )}
    </>
  );
};

export default TrackForm;