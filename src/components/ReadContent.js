import React from 'react';

function ReadContent(props){

    return(
      <article>
              <h2>
                  {props.title}
              </h2>
              {props.sub}
          </article>
    );
  }
  

export default ReadContent;