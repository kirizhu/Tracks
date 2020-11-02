import React, { useContext } from 'react';
import { Button, Input } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext';
import Spacer from './Spacer';
import useSaveTrack from '../hooks/useSaveTrack';
const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();
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
      <Spacer />
      {!recording && locations.length ? (
        <Button title='Save Recording' onPress={saveTrack} />
      ) : null}
    </>
  );
};

export default TrackForm;
