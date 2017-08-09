import {combineReducers} from "redux"
import {routerReducer} from 'react-router-redux'
import {helloWorldReducer} from "./modules/HelloWorld"
import {sampleReducer} from "./modules/Sample"

export default combineReducers({
  helloWorld: helloWorldReducer,
  sample: sampleReducer,
  routing: routerReducer
})