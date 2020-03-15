import React from 'react';
import Nightmode from '../Nightmode';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';

const Playlist = () => {
  return (
    <>
      <Nightmode />
      <PlaylistHeader />
      <PlaylistItems />
    </>
  );
}

export default Playlist;
