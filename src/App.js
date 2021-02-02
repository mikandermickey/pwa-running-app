import React from 'react';
import { Router } from '@reach/router'
import OneSignal from 'react-onesignal';
import PWAPrompt from 'react-ios-pwa-prompt'
//import Localbase from "localbase"
import Home from "./views/Home";

// let myDatabase = new Localbase('myDatabase')

OneSignal.initialize('6476da31-4579-4739-81b3-12266fba26f4', {
  safari_web_id: "web.onesignal.auto.39e347a3-7290-467c-af89-3542a6fc2365"
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
