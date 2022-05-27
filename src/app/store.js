import { combineReducers, configureStore } from "@reduxjs/toolkit";

import intangibleReducer from "../features/request/intangible/intangibleSlice";
import tangibleReducer from "../features/request/tangible/tangibleSlice";
import userReducer from "../features/user/userSlice";

export default configureStore({
  reducer: {
    request: combineReducers({
      intangible: intangibleReducer,
      tangible: tangibleReducer,
    }),
    user: userReducer,
  },
});
