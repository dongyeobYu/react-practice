import React from 'react';

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

    return (
        <header>
          <nav>
          <ul>
              {lists}
          </ul>
          </nav>
        </header>
    );
  }

  export default TOC;