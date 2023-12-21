import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import HiIamJohnCreativeTechnologist from './views/hi-iam-john-creative-technologist'
import MobileHeader from './views/mobile-header'
import Featuredworks from './views/featuredworks'
import Makingadesignsystemfromscratch from './views/makingadesignsystemfromscratch'
import Group1 from './views/group1'
import DesignPattern from './views/design-pattern'
import Rectangle24 from './views/rectangle24'
import Download from './views/download'
import Ametminimmollitnondeseruntullamcoestsitaliquadolor from './views/ametminimmollitnondeseruntullamcoestsitaliquadolor'
import Recentposts from './views/recentposts'
import Ametminimmollitnondeseruntullamcoestsitaliquadolor1 from './views/ametminimmollitnondeseruntullamcoestsitaliquadolor1'
import Ametminimmollitnondeseruntullamcoestsitaliquadolor2 from './views/ametminimmollitnondeseruntullamcoestsitaliquadolor2'
import DesignPattern1 from './views/design-pattern1'
import Rectangle25 from './views/rectangle25'
import Rectangle23 from './views/rectangle23'
import Worklistmobile from './views/worklistmobile'
import Footer from './views/footer'
import CreatingpixelperfecticonsinFigma from './views/creatingpixelperfecticonsin-figma'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={HiIamJohnCreativeTechnologist}
          exact
          path="/hi-iam-john-creative-technologist"
        />
        <Route component={MobileHeader} exact path="/mobile-header" />
        <Route component={Featuredworks} exact path="/featuredworks" />
        <Route
          component={Makingadesignsystemfromscratch}
          exact
          path="/makingadesignsystemfromscratch"
        />
        <Route component={Group1} exact path="/" />
        <Route component={DesignPattern} exact path="/design-pattern" />
        <Route component={Rectangle24} exact path="/rectangle24" />
        <Route component={Download} exact path="/download" />
        <Route
          component={Ametminimmollitnondeseruntullamcoestsitaliquadolor}
          exact
          path="/ametminimmollitnondeseruntullamcoestsitaliquadolor"
        />
        <Route component={Recentposts} exact path="/recentposts" />
        <Route
          component={Ametminimmollitnondeseruntullamcoestsitaliquadolor1}
          exact
          path="/ametminimmollitnondeseruntullamcoestsitaliquadolor1"
        />
        <Route
          component={Ametminimmollitnondeseruntullamcoestsitaliquadolor2}
          exact
          path="/ametminimmollitnondeseruntullamcoestsitaliquadolor2"
        />
        <Route component={DesignPattern1} exact path="/design-pattern1" />
        <Route component={Rectangle25} exact path="/rectangle25" />
        <Route component={Rectangle23} exact path="/rectangle23" />
        <Route component={Worklistmobile} exact path="/worklistmobile" />
        <Route component={Footer} exact path="/footer" />
        <Route
          component={CreatingpixelperfecticonsinFigma}
          exact
          path="/creatingpixelperfecticonsin-figma"
        />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
