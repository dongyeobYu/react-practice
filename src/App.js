import React, { useState } from 'react';
import './App.css';
import TOC from './components/Toc';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
 
function App() {
 
  const [mode, setMode] = useState('create');

  const [selected_content_id, setSelected_content_id] = useState(1);
 
  const [state, setState] = useState({
    subject : {title:'WEB', sub:'World Wide Web'},
    welcome:{title:'welcome', desc:'Hello, React.'},
    contents : [
      {id:1, title:'HTML', desc:'HTML is HyperText ...'},
      {id:2, title:'CSS', desc:'CSS is For design ...'},
      {id:3, title:'JavaScript', desc:'JavaScript is interactive ...'}
    ]
  }); 

  var _title;
  var _desc;
  var _article;

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
