import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {    
    return (
      <BrowserRouter>
        <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
        </div>
      </BrowserRouter>
    )
}

export default App; 
  

ReactDOM.render(<App />, document.getElementById('app'))