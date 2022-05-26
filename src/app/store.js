import { configureStore } from "@reduxjs/toolkit";

import intangibleRequestSlice from "../features/intangibleRequest/intangibleRequestSlice";
import tangibleRequestSlice from "../features/tangibleRequest/tangibleRequestSlice";

export default configureStore({
  reducer: {
    tangibleRequest: tangibleRequestSlice,
    intangibleRequest: intangibleRequestSlice,
  },
});
