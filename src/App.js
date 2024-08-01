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
      <Subject title={state.subject.title} sub={state.subject.sub} onChangePage={() => {
        setMode('welcome');
      }} ></Subject>
      <TOC data={state.contents} onChangePage={(id) => {
        setMode('read');
        setSelected_content_id(id);
      }}></TOC>
      <Control onChangeMode={(mode) => {
        setMode(mode);
      }}></Control>
      {_article}
    </div>
  );
}

export default App;
