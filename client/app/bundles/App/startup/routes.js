import React from 'react'
import {Route, Switch} from 'react-router-dom'

import HelloWorld from '../containers/HelloWorld'
import Sample from '../containers/Sample'

export default (
  <Switch>
    <Route exact path="/hello_world" component={HelloWorld}/>
    <Route exact path="/sample" component={Sample}/>
  </Switch>
)