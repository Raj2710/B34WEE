import React from 'react'

function Details(props) {
  return <>
    <table>
       <tbody>
       <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
        </tr>
            {
                props.details.map((e,i)=>{
                    return <tr key={i}>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.mobile}</td>
                    </tr>
                })
            }
       </tbody>
    </table>
  </>
}

export default Details