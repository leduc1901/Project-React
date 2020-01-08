  
// reducers/index.js

import { combineReducers } from 'redux'
import people from './peopleReducer'
// định nghĩa các reducer khác ...

const rootReducer = combineReducers({
  people,
  // nếu có reducer khác thì add thêm ở đây
})

export default rootReducer