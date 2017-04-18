import React, { Component } from 'react';
import './App.css';
import Key from  './components/Keys';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Calculator!</h1>
        <div className="box">
          <div className="title">
            <p>GA Instruments TI-WDI</p>
          </div>
          <div className="display">
            <input type="text" readOnly size="18" id="d"/>
          </div>
          <div className="App-keys">
            <p>
              <Key type="button" className="button gray" value="mrc" />
              <Key type="button" className="button gray" value="m-" />
              <Key type="button" className="button gray" value="m+" />
              <Key type="button" className="button pink" value="/" />
            </p>
            <p>
            <Key type="button" className="button black" value="7" />
              <Key type="button" className="button black" value="8" />
                <Key type="button" className="button black" value="9" />
                <Key type="button" className="button pink" value="*" />
              </p>
              <p>
                <Key type="button" className="button black" value="4" />
                <Key type="button" className="button black" value="5" />
                  <Key type="button" className="button black" value="6" />
                  <Key type="button" className="button pink" value="-" />
                  </p>
                <p>
                  <Key type="button" className="button black" value="1" />
                <Key type="button" className="button black" value="2" />
                  <Key type="button" className="button black" value="3" />
                  <Key type="button" className="button pink" value="+" />

                  </p>
                <p>
                  <Key type="button" className="button black" value="0" />
                <Key type="button" className="button black" value="." />
                  <Key type="button" className="button black" value="C" />
                  <Key type="button" className="button orange" value="=" />

                  </p>
              </div>
            </div>
          </div>
    );
  }
}

export default App;
