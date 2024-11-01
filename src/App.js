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

  if(mode === 'welcome'){
    _title = state.welcome.title; 
    _desc = state.welcome.desc;   
    _article = <ReadContent title={_title} sub={_desc}></ReadContent>;
  } else if(mode === 'read'){
    var i=0;
    while(i < state.contents.length){
        var data = state.contents[i];
        if(data.id === selected_content_id){
          _title = data.title; 
          _desc = data.desc;   
          break;
        }
        i += 1;
    };
  } else if(mode === 'create'){
    _article = <CreateContent onSubmit={(_title, _desc) => {
        // add Content to state.contents
    }}></CreateContent>;
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
