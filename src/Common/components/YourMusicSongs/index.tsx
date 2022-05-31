import {
   YourMusicContainer,
   YourMusicSongButton,
   SongImageAndDetailsContainer,
   Thumbnail,
   YourMusicSongDetails,
   YourMusicSongName,
   YourMusicDescription
} from './styledComponents'

interface YourMusicSongsProps {
   albumDetails: {
      yourMusicImageUrl: string
      yourMusicSongName: string
      yourMusicArtist: string
      movieName: string
      duration: string
      previewUrl: string
   }
   updateSong: (
      previewUrl: string,
      yourMusicSongName: string,
      yourMusicArtist: string
   ) => void
}

const YourMusicSongs = (props: YourMusicSongsProps) => {
   const { albumDetails, updateSong } = props
   const {
      yourMusicImageUrl,
      yourMusicSongName,
      yourMusicArtist,
      movieName,
      duration,
      previewUrl
   } = albumDetails

   const updateSongUrl = () => {
      updateSong(previewUrl, yourMusicSongName, yourMusicArtist)
   }

   return (
      <YourMusicContainer>
         <YourMusicSongButton type='button' onClick={updateSongUrl}>
            <SongImageAndDetailsContainer>
               <Thumbnail src={yourMusicImageUrl} />
               <YourMusicSongDetails>
                  <YourMusicSongName>{yourMusicSongName}</YourMusicSongName>
                  <YourMusicDescription>
                     {yourMusicArtist} · {movieName}
                  </YourMusicDescription>
               </YourMusicSongDetails>
            </SongImageAndDetailsContainer>
            <YourMusicDescription>{duration}</YourMusicDescription>
         </YourMusicSongButton>
      </YourMusicContainer>
   )
}

export default YourMusicSongs
