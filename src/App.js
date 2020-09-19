import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './components/Home'

function App(){
    return(
        <BrowserRouter>
        <div class="container-fluid">
        <Switch>
              <Route path="/" component={Home} exact ={true}/>
        </Switch>

        </div>
        </BrowserRouter>
    )
}
export default App