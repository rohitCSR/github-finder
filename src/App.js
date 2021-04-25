import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import About from './components/pages/About'
import Navbar from './components/layouts/Navbar'
import Home from './components/pages/home'
import Userdata from './components/Users/Userdata'
import Alert from './components/layouts/Alert'
import NotFound from './components/pages/NotFound'

import AlertState from './context/alert/AlertState'
import GithubState from './context/github/GithubState'

const App = () =>  {
    

      return (
       <GithubState>
         <AlertState>
            <Router>
                <div className="App">
                      <Navbar />
                          <div className='container'>
                              <Alert/>
                                    <Switch> 
                                       <Route exact path ='/' component={Home}/>
                                       <Route exact path= '/about' component={About} />
                                       <Route exact path ='/user/:login' component={Userdata}/>
                                       <Route component={NotFound}/>
                                    </Switch> 
                            </div>
                </div>
            </Router>
         </AlertState>
      </GithubState>
       );
}

export default App;

