import ReactDOM from 'react-dom';
/* eslint-disable */
import React from 'react';
// import styles from './style.scss';
/* eslint-enable */
import routes from './config/routes.jsx';
import { Provider } from 'react-redux';
import store  from './store/store';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      {routes}
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));

/*
 var pls = {
     players: [
         {id:1,name:'zdzis',gold:0},
         {id:2,name:'edek',gold:100}
     ]
 }

 var p = 1;
 var obj = {gold: 22}
 var chpls = Object.assign({}, pls, {
     players: pls.players.map(pl => {
         if (pl.id === p) {
            return Object.assign({}, pl, {gold: 22})
         }
         return pl;
     })
 })

 console.log(chpls);
*/