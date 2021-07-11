import React from 'react'

export default function Employeelist() {
    return (
        <div className="card bg-primary" id="tab" >
        <div className="card" >
              <table >
              <tr className="bg-info" >
              <th>Employee ID</th>
              <th>Name </th>
              <th>Designation </th>
              <th>Salary </th>
              </tr>
              <tr>
              <td>1</td>
              <td>savinay</td>
              <td>Developer</td>
              <td>4l</td>
              </tr>
              <tr>
              <td>2</td>
              <td>asok</td>
              <td>TESTER</td>
              <td>3l</td>
              </tr>
              <tr>
              <td>3</td>
              <td>ram</td>
              <td>TESTER</td>
              <td>5l</td>
              </tr>
              <tr>
              <td>4</td>
              <td>sham</td>
              <td>Cloud</td>
              <td>10L</td>
              </tr>
                
              </table>
        </div>
        </div>

    )
}