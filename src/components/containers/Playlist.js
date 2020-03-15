import React from 'react';
import Nightmode from '../Nightmode';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import StyledPlaylist from '../styles/StyledPlaylist';

const Playlist = () => {
  return (
    <StyledPlaylist>
      <Nightmode />
      <PlaylistHeader />
      <PlaylistItems />
    </StyledPlaylist>
  );
}

export default Playlist;
