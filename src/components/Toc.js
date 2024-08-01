import React from 'react';

<<<<<<< HEAD
function TOC(props){
  var lists = [];
  var data = props.data;

  var i = 0;

  while(i< data.length){
    lists.push(
      <li key={data[i].id}>
        <a href={"/contents/"+data[i].id}
          data-id = {data[i].id}
          onClick={(e) => {
            e.preventDefault();
            props.onChangePage(Number(e.target.dataset.id));
          }}
        >
          {data[i].title}
        </a>
      </li>
      );
    i += 1;
  }

=======
function TOC(){
>>>>>>> 7da937a13c6f022f6d72c3c19284665231a839b3
    return (
        <header>
          <nav>
          <ul>
<<<<<<< HEAD
              {lists}
=======
              <li><a href="1.html">HTML</a></li>
              <li><a href="2.html">CSS</a></li>
              <li><a href="3.html">JavaScript</a></li>
>>>>>>> 7da937a13c6f022f6d72c3c19284665231a839b3
          </ul>
          </nav>
        </header>
    );
  }

  export default TOC;