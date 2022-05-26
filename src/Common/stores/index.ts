import CounterStore from './CounterStore'
import ProfileStore from './ProfileStore'
import SpotifyHomeStore from './SpotifyHomeStore'

const counterStore = new CounterStore()
const profileStore = new ProfileStore()
const spotifyHomeStore = new SpotifyHomeStore()

export default {
   counterStore,
   profileStore,
   spotifyHomeStore
}
