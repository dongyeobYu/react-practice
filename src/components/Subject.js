import React from 'react';

function Subject(props){
<<<<<<< HEAD

    return (
        <header>
          <h1><a href='/' onClick={(e) => {
            e.preventDefault(); // preventDefault -> 기본적인 태그의 동작을 막음 -> a 태그는 href 링크로 이동, 이동을 막음
            props.onChangePage();
          }}>{props.title}</a></h1>
=======
    return (
        <header>
          <h1>{props.title}</h1>
>>>>>>> 7da937a13c6f022f6d72c3c19284665231a839b3
          {props.sub}
        </header>
    );
  }

export default Subject;