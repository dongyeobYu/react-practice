import React from 'react';

function CreateContent(props){

    return(
      <article>
              <h2>
                  CREATE
              </h2>
              <form action='/create_process' method='post' onSubmit={(e) => {
                  e.preventDefault();
                  props.onSubmit(e.target.title.value, e.target.desc.value);
                  debugger;
              }}>
                <p>
                  <input type="text" name="title" placeholder='title'></input>
                </p>
                <p>
                  <textarea name="desc" placeholder='desc'></textarea>
                </p>
                <p><input type='submit'></input></p>
              </form>
          </article>
    );
  }
  
export default CreateContent;