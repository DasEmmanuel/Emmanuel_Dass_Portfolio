import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route path="/not-found" component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
