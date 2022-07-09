import React from 'react'

function Form() {
  return <>
    <div>
        <label>Name:</label>
        &nbsp;
        <input type={"text"}/>
    </div>
    <br></br>
    <div>
        <label>Email:</label>
        &nbsp;
        <input type={"email"}/>
    </div>
    <br></br>
    <div>
        <label>Mobile:</label>
        &nbsp;
        <input type={"text"}/>
    </div>
    <br></br>
    <div>
        <button>Submit</button>
    </div>

  </>
}

export default Form