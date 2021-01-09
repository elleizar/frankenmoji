import '../css/App.css';
// import { DefaultReact } from '../components/DefaultReact';
import { WelcomePage } from './WelcomePage';
import { EditorPage } from './EditorPage';
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
          <Route path="/editor">
            <EditorPage />
          </Route>
        </Switch>
      </Router>
		);
	}
}

export default App;
