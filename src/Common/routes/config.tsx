import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {
   NOT_FOUND_PAGE_PATH,
   NOT_FOUND_PAGE
} from '../constants/NavigationConstants'
import PageNotFound404 from '../components/PageNotFound404'

import CounterWithToast from './CounterWithToast'
import Home from './Home'
import WritePostScreen from './WritePostScreen'
import WritePlainScreen from './WritePostPlainScreen'
import HomeScreen from './HomeScreen'
import PlatFormDomainPage from './PlatFormDomainPage'
import CreatePage from './CreatePage'
import PlatFormReviewPage from './PlatFormReviewPage'
export const routes = (): React.ReactElement => (
   <Router>
      <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/writepostscreen' component={WritePostScreen} />
         <Route exact path='/writeplainscreen' component={WritePlainScreen} />
         <Route exact path='/homescreen' component={HomeScreen} />
         <Route exact path='/createpage' component={CreatePage} />
         <Route
            exact
            path='/platformdomainpage'
            component={PlatFormDomainPage}
         />
         <Route
            exact
            path='/platformreviewpage'
            component={PlatFormReviewPage}
         />
         <Route path='/counter' component={CounterWithToast} />
         <Route
            path={NOT_FOUND_PAGE_PATH}
            key={NOT_FOUND_PAGE}
            component={PageNotFound404}
         />
      </Switch>
   </Router>
)
