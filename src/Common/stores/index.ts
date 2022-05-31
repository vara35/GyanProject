import CounterStore from './CounterStore'
import ProfileStore from './ProfileStore'
import SpotifyHomeStore from './SpotifyHomeStore'
import SpecificPlayListStore from './SpecificPlayListStore'
import YourMusicStore from './YourMusicStore'

const counterStore = new CounterStore()
const profileStore = new ProfileStore()
const spotifyHomeStore = new SpotifyHomeStore()
const specificPlayListStore = new SpecificPlayListStore()
const yourMusicStore = new YourMusicStore()

export default {
   counterStore,
   profileStore,
   spotifyHomeStore,
   specificPlayListStore,
   yourMusicStore
}
