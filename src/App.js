import React from 'react';
import { Router } from '@reach/router'
import OneSignal from 'react-onesignal';
import PWAPrompt from 'react-ios-pwa-prompt'
//import Localbase from "localbase"
import Home from "./views/Home";

// let myDatabase = new Localbase('myDatabase')

OneSignal.initialize('e5b94a5a-a3b9-4f0b-b5a1-54d44283e640', {
  safari_web_id: "web.onesignal.auto.3a3b4186-8f32-4bbf-a810-be3f3be590a9"
})

function App() {
  return (
    <>
    <Router>
      <Home path="/"/>
    </Router>
      <PWAPrompt promptOnVisit={1} timesToShow={3} copyClosePrompt="Close" permanentlyHideOnDismiss={false} />
    </>
  );
}

export default App;
