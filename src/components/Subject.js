import React from 'react';

function Subject(props){

    return (
        <header>
          <h1><a href='/' onClick={(e) => {
            e.preventDefault(); // preventDefault -> 기본적인 태그의 동작을 막음 -> a 태그는 href 링크로 이동, 이동을 막음
            props.onChangePage();
          }}>{props.title}</a></h1>
          {props.sub}
        </header>
    );
  }

export default Subject;