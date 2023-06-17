import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {Header, Meme, App, AppConundrum, AppCounter, FlippingState, ComplexState, Api, AppWindowTracker} from "./index"



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <Meme />

    {/* <App />
    <AppCounter />
    <FlippingState />
    <AppConundrum />
    <ComplexState />
    <Api />
    <AppWindowTracker /> */}
  
  </>,
)
