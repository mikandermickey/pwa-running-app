import React from 'react';
import { Link, Router } from '@reach/router'
import Home from "./components/Home"
import Page from "./components/Page"
import OneSignal from 'react-onesignal';
import Otherpage from './components/Otherpage';
import PWAPrompt from 'react-ios-pwa-prompt'
import Testbase from "./components/Testbase"
import Notfound from './components/Notfound';
import Localbase from "localbase"

let myDatabase = new Localbase('myDatabase')

OneSignal.initialize('e5b94a5a-a3b9-4f0b-b5a1-54d44283e640', {
  safari_web_id: "web.onesignal.auto.3a3b4186-8f32-4bbf-a810-be3f3be590a9"
})


function App() {
  return (
    <>
    <nav>
      <Link to="/">Homepage</Link>
      <Link to="/page">subpage</Link>
      <Link to="/otherpage">otherpage</Link>
      <Link to="/testbase">testbase</Link>
      <Link to="/contact">contact</Link>
    </nav>
    <Router>
      <Home path="/" />
      <Page path="/page" />
      <Otherpage path="/otherpage" />
      <Testbase path="/testbase" />
      <Notfound default />
    </Router>
    <PWAPrompt promptOnVisit={1} timesToShow={3} copyClosePrompt="Close" permanentlyHideOnDismiss={false} />
    </>
  );
}

export default App;
