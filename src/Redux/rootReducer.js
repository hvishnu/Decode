import { combineReducers } from 'redux'

import CountriesReducer from './Countries/CountriesReducer'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  countriesList: CountriesReducer,
})

export default rootReducer