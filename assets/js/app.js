import React from "react";
import {graphql, QueryRenderer} from 'react-relay';
import ReactDOM from 'react-dom';
import environment from './environment.js'
import Players from './rushing/Players.js'
import css from "../css/app.css"
import "phoenix_html"

export default class App extends React.Component {
  render() {
    return <Players />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));