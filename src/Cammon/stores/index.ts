import SpotifyHomeService from '../services/SpotifyHomeService/index.api'
import CounterStore from './CounterStore'
import ProfileStore from './ProfileStore'
import SpotifyHomeStore from './SpotifyHomeStore'
import SpecificPlayListStore from './SpecificPlayListStore'
import YourMusicStore from './YourMusicStore'
import PlayListStore from './PlayListStore'

// import SpotifyHomeModel from './models/SpotifyHomeModel'
const spotifyHomeService = new SpotifyHomeService()
// const spotifyHomeModel = new SpotifyHomeModel()

const counterStore = new CounterStore()
const profileStore = new ProfileStore()
const spotifyHomeStore = new SpotifyHomeStore(spotifyHomeService)
const specificPlayListStore = new SpecificPlayListStore()
const yourMusicStore = new YourMusicStore()
const playListStore = new PlayListStore()

export default {
   counterStore,
   profileStore,
   spotifyHomeStore,
   specificPlayListStore,
   yourMusicStore,
   playListStore
}
