import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReduser from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReduser,
  },
});

// import { configureStore } from "@reduxjs/toolkit";
// import contactsReducer from "./contactsSlice";
// import filtersReducer from "./filtersSlice";
// import storage from "redux-persist/lib/storage";
// import { persistStore, persistReducer } from "redux-persist";
// import { combineReducers } from "redux";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const rootResucer = combineReducers({
//   contacts: contactsReducer,
//   filters: filtersReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootResucer);

// export const store = configureStore({
//   reducer: persistedReducer,
// });

// export const persistor = persistStore(store);
