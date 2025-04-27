import React, { useState } from "react";
import Header from "./Header";  

function MainBody() {
    // const [count, setCount] = useState(0)

  return (
    <>
        <h1>Carlos Arce</h1>
        <p>Software Engineer</p>
        <h2>Vite + React + ReactRouter</h2>
        <p>Recreating my ancient portfolio site from: <a href='https://s3.amazonaws.com/arcecode.ninja/index.html' target='_blank'>AWS S3 Buckett</a></p>
        <p>Using React library and frameworks to modernize my old portfolio page.</p>
        {/* <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div> */}
        
        
    </>
  );
}

export default MainBody;