import React, { Component } from 'react'
import Playlist from './Playlist'

class PlaylistCollection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectPlaylistId: null

    }
    this.selectPlaylistTrigger = this.selectPlaylistTrigger.bind(this)
  }

  selectPlaylistTrigger(id) {
    this.setState({ selectPlaylistId: id })
  }


   render() {
     console.log(this.state.selectPlaylistId)
    let playlists = this.props.playlists.map((playlistData)=>{

      let handleClick = () => {
        this.selectPlaylistTrigger(playlistData.id)
      }

      let selected
      if (playlistData.id === this.state.selectPlaylistId) {
        selected = "selected"
      }

      return(
        <Playlist
          key={playlistData.id}
          name={playlistData.name}
          handleClick={handleClick}
          className={selected}
        />
      )
    })

    return (
      <div>
      {playlists}
      </div>
      )
    }

}

export default PlaylistCollection;
