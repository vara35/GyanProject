import {
   YourMusicContainer,
   YourMusicSongButton,
   SongImageAndDetailsContainer,
   Thumbnail,
   YourMusicSongDetails,
   YourMusicSongName,
   YourMusicDescription
} from './styledComponents'

const YourMusicSongs = () => (
   <YourMusicContainer>
      <YourMusicSongButton type='button'>
         <SongImageAndDetailsContainer>
            <Thumbnail src='https://res.cloudinary.com/image-link-getter/image/upload/v1653572729/Rectangle_480_cedyqi.png' />
            <YourMusicSongDetails>
               <YourMusicSongName>Hello Guru</YourMusicSongName>
               <YourMusicDescription>
                  Afroz Ali · Reddy Gari Ammai ( Telugu love song) Aishwarya
                  reddy, CNU
               </YourMusicDescription>
            </YourMusicSongDetails>
         </SongImageAndDetailsContainer>
      </YourMusicSongButton>
   </YourMusicContainer>
)

export default YourMusicSongs
