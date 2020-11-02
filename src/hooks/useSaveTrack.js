import { useContext } from 'react';
import { Context as LocationContext } from '../context/LocationContext';
import { Context as TrackContext } from '../context/TrackContext';
import { navigate } from '../RootNavigation';
export default () => {
  const {
    state: { locations, name },
    reset,
  } = useContext(LocationContext);
  const { createTrack } = useContext(TrackContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    navigate('List');
  };
  return [saveTrack];
};
