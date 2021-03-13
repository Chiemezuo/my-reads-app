import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import App2 from './App2'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render( <BrowserRouter> 
                    <App2/> 
                    </BrowserRouter>,
                document.getElementById('root'))
