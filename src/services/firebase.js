import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAe_aqN6SBhE2TvfAg97fRVL6ll0WbVLBU",
  authDomain: "chat-app-30e07.firebaseapp.com",
  databaseURL: "https://chat-app-30e07.firebaseio.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();