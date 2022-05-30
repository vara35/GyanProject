import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {
   NOT_FOUND_PAGE_PATH,
   NOT_FOUND_PAGE
} from '../constants/NavigationConstants'
import PageNotFound404 from '../components/PageNotFound404'

import CounterWithToast from './CounterWithToast'
import CardsPage from './CardsPage'

import AllDomainsPage from './AllDomainsPage'
import PostScreen from './PostScreen'
import CreatingCreatePostPage from './CreatingCreatePostPage'
import SecondPlatFormReviewPage from './SecondPlatFormReviewPage'
import PlatFormHomePage from './PlatFormHomePage'
import SecondPlatFormPostPage from './SecondPlatFormPostPage'
import PlatFormReviewPageSecond from './PlatFormReviewPageSecond'
import WritePostTextEnterScreen from './WritePostTextEnterScreen'
import PlatFormDomainPage from './PlatFormDomainPage'
import HomeScreen from './HomeScreen'
import PostScreenComponent from './PostScreenComponent'
import PostScreenPage from './PostScreen'

//Spotify
import LoginForm from './LoginForm'
import ProtectedRoute from './ProtectedRoute'
import Profile from './ProfileRoute'
import SpotifyHome from './SpotifyHome'
import SpotifyEditorPlayList from './SpotifyEditorPlayList'
import SpotifyNewRelease from './SpotifyNewRelease'

//

export const routes = (): React.ReactElement => (
   <Router>
      <Switch>
         <Route exact path='/alldomainspage' component={AllDomainsPage} />
         <Route
            exact
            path='/PostScreenComponent'
            component={PostScreenComponent}
         />
         <Route
            exact
            path='/writeposttextenterscreen'
            component={WritePostTextEnterScreen}
         />
         <Route exact path='/PostScreenPage' component={PostScreenPage} />
         <Route exact path='/homescreen' component={HomeScreen} />
         <Route
            exact
            path='/creatingcreatepostpage'
            component={CreatingCreatePostPage}
         />
         <Route
            exact
            path='/platformdomainpage'
            component={PlatFormDomainPage}
         />
         <Route
            exact
            path='/SecondPlatFormPostPage'
            component={SecondPlatFormPostPage}
         />
         <Route exact path='/postscreen' component={PostScreen} />
         <Route exact path='/cardspage' component={CardsPage} />
         <Route exact path='/counter' component={CounterWithToast} />
         <Route exact path='/platformhomepage' component={PlatFormHomePage} />
         <Route
            exact
            path='/secondplatformreviewpage'
            component={SecondPlatFormReviewPage}
         />
         <Route
            exact
            path='/platformreviewpagesecond'
            component={PlatFormReviewPageSecond}
         />

         <Route exact path='/login' component={LoginForm} />
         <Route exact path='/profile' component={Profile} />
         <Route exact path='/spotifyhome' component={SpotifyHome} />
         <Route exact path='/editor/:id' component={SpotifyEditorPlayList} />
         <Route exact path='/newrelease/:id' component={SpotifyNewRelease} />

         <Route
            path={NOT_FOUND_PAGE_PATH}
            key={NOT_FOUND_PAGE}
            component={PageNotFound404}
         />
      </Switch>
   </Router>
)
