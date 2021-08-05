import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
//components
import Cart from './components/Cart'
import Header from './components/Header'
import Home from './components/Home'

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </Router>
  )
}

export default App
