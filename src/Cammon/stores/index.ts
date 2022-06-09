import SpotifyHomeService from '../services/SpotifyHomeService/index.api'
import SpotifyPlayListService from '../services/SpotifyPlayListService/index.api'
import SpotifyYourMusicService from '../services/SpotifyYourMusicService/index.api'
import SpotifyProfileService from '../services/SpotifyProfileService/index.api'

import CounterStore from './CounterStore'
import ProfileStore from './ProfileStore'
import SpotifyHomeStore from './SpotifyHomeStore'
import SpecificPlayListStore from './SpecificPlayListStore'
import YourMusicStore from './YourMusicStore'
import PlayListStore from './PlayListStore'

const spotifyHomeService = new SpotifyHomeService()
const spotifyYourMusicService = new SpotifyYourMusicService()
const spotifyPlayListService = new SpotifyPlayListService()
const spotifyProfileService = new SpotifyProfileService()

const counterStore = new CounterStore()
const profileStore = new ProfileStore(spotifyProfileService)
const spotifyHomeStore = new SpotifyHomeStore(spotifyHomeService)
const specificPlayListStore = new SpecificPlayListStore()
const yourMusicStore = new YourMusicStore(spotifyYourMusicService)
const playListStore = new PlayListStore(spotifyPlayListService)

export default {
   counterStore,
   profileStore,
   spotifyHomeStore,
   specificPlayListStore,
   yourMusicStore,
   playListStore
}
