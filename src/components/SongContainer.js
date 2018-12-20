import React from 'react'
import Song from './Song'
class SongContainer extends React.Component {
  constructor(props){
   super(props)
 }
 render(){
   return(
     <div>
      <Song
        songName = {this.props.songs.name}
        songArtist = {this.props.songs.artist}
      />
     </div>
   )
 }
}


export default SongContainer
