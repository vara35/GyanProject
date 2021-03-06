import React from 'react'
import {
   BrowserRouter as Router,
   Switch,
   Route,
   useHistory
} from 'react-router-dom'

import {
   NOT_FOUND_PAGE_PATH,
   NOT_FOUND_PAGE
} from '../constants/NavigationConstants'
import PageNotFound404 from '../componentsCopy/PageNotFound404'

import CounterWithToast from './CounterWithToast'

//Spotify
import SpotifyLoginForm from './SpotifyLoginForm'
import ProtectedRoute from './ProtectedRoute'
import Profile from './ProfileRoute'
import SpotifyHome from './SpotifyHome'
import SpotifyCommonRoute from './SpotifyCommonRoute'
import GenreAndMoods from './GenresAndMoods'
import YourMusic from './SpotifyYourMusic'
import SpotifyPlayList from './SpotifyPlayList'
import SpotifyNewReleaseRoute from './SpotifyNewReleaseRoute'

//

export const routes = (): React.ReactElement => (
   <Router>
      <Switch>
         <Route exact path='/counter' component={CounterWithToast} />

         <Route exact path='/login' component={SpotifyLoginForm} />
         <Route exact path='/' component={SpotifyHome} />
         <ProtectedRoute exact path='/profile' component={Profile} />
         <ProtectedRoute
            exact
            path='/editor/:id'
            component={SpotifyCommonRoute}
         />
         <ProtectedRoute exact path='/category/:id' component={GenreAndMoods} />
         <ProtectedRoute
            exact
            path='/newrelease/:id'
            component={SpotifyCommonRoute}
         />
         <ProtectedRoute exact path='/yourmusic' component={YourMusic} />
         <ProtectedRoute exact path='/playlist' component={SpotifyPlayList} />
         <Route
            path={NOT_FOUND_PAGE_PATH}
            key={NOT_FOUND_PAGE}
            component={PageNotFound404}
         />
      </Switch>
   </Router>
)
