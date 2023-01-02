import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Allocated() {
  const [app, setApp] = useState([])


  useEffect(() => {
     function fetchData() {
      console.log("1st");
       axios.get('http://localhost:4000/admin/status')
       .then((response) =>{
        console.log("2nd");
        console.log(response);

        setApp(response.data)
       })
      
       

      
    }
    fetchData()
  }, [])
  return (
    <div className='p-12 align-middle w-full '>
      <table className="min-w-full leading-normal overflow-x-auto">
        <thead>
          <tr>
            <th
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
            >
              No
            </th>
            <th
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
            >
              Company Name
            </th>
            <th
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
            >
              Company Email
            </th>
            <th
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody>

          {app.map((item,index)=>
            <tr key={index}>

<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
  <div className="flex">
    <div className="flex-shrink-0 w-10 h-10">
      <p className="text-gray-900 whitespace-no-wrap">{index+1}</p>
    </div>
    <div className="ml-3">
      <p className="text-gray-900 whitespace-no-wrap">

      </p>
      <p className="text-gray-600 whitespace-no-wrap"></p>
    </div>
  </div>
</td>
<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
  <p className="text-gray-900 whitespace-no-wrap">{item.CompanyName}</p>

</td>
<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
  <p className="text-gray-600 whitespace-no-wrap">{item.Email}</p>
</td>
<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
  <div className='w-full h-2 bg-blue-200 rounded-full'>
    {item.Status==="new"? <div className='w-1/5 h-full text-center text- xs text-white bg-blue-900 rounded-full'>

    </div>:item.Status==="declined"? <div className='w-5/5 h-full text-center text- xs text-white bg-red-700 rounded-full'>

    </div>:item.Status==="accepted"?<div className='w-3/5 h-full text-center text- xs text-white bg-blue-900 rounded-full'>
      </div>:<div className='w-5/5 h-full text-center text- xs text-white bg-blue-900 rounded-full'>
      </div>}
   
  </div>
  <p className="text-gray-600 whitespace-no-wrap text-center uppercase">{item.Status}</p>
</td>
</tr>
          )}
          
        </tbody>
      </table>
    </div>
  )
}