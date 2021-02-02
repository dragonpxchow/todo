import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore"; // <- needed if using firestore
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({
  // the key name will be the data property on the state object
  firebase: firebaseReducer, // v3 of react-react-firebase
  firestore: firestoreReducer, // <- needed if using firestore
  auth: authReducer,
  project: projectReducer,
});

export default rootReducer;
