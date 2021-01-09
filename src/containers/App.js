import '../css/App.css';
import { WelcomePage } from './WelcomePage';
import { GeneratorPage } from './GeneratorPage';
import { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

class App extends Component{
	render() {
		return (
      <Router>
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route path="/welcome">
            <WelcomePage />
          </Route>
          <Route path="/generator">
            <GeneratorPage />
          </Route>
        </Switch>
      </Router>
		);
	}
}

export default App;
