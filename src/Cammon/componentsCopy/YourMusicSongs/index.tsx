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
      yourMusicArtist: string,
      playerUrl: string
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
      updateSong(
         yourMusicImageUrl,
         yourMusicSongName,
         yourMusicArtist,
         previewUrl
      )
   }

   const yourMusicDuration = () => {
      const convertToSeconds = parseInt(duration) / 1000
      const convertToMinutes = convertToSeconds / 60
      const slicedTime = convertToMinutes.toString().slice(0, 4)
      return slicedTime
   }

   return (
      <YourMusicContainer>
         <YourMusicSongButton type='button' onClick={updateSongUrl}>
            <SongImageAndDetailsContainer>
               <Thumbnail src={yourMusicImageUrl} alt='movieImg' />
               <YourMusicSongDetails>
                  <YourMusicSongName>{yourMusicSongName}</YourMusicSongName>
                  <YourMusicDescription>
                     {yourMusicArtist} · {movieName}
                  </YourMusicDescription>
               </YourMusicSongDetails>
            </SongImageAndDetailsContainer>
            <YourMusicDescription>{yourMusicDuration()}</YourMusicDescription>
         </YourMusicSongButton>
      </YourMusicContainer>
   )
}

export default YourMusicSongs
