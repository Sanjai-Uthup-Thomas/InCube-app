import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Modal from '../modal/modal'

export default function Decline() {
    const [app,setApp]=useState([])
    const [isOpen,setIsOpen]=useState(false)
  const [viewApp,setViewApp]=useState({})
    useEffect(()=>{
  async function fetchData(){    
  const application= await axios.get('http://localhost:4000/admin/declined')
      if(application){
        setApp(application.data)
        
      }
  }
  fetchData()
    },[])
    const View=(e,id)=>{
      setIsOpen(true)
      axios.get('http://localhost:4000/admin/view/'+id)
      .then((response)=>{
  
        setViewApp(response.data);
        console.log(viewApp);
      })
    }
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
            <th
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
            >
              View
            </th>
            
          </tr>
        </thead>
        <tbody> 
        {app.map((app,index)=>(
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
            <p className="text-gray-900 whitespace-no-wrap">{app.CompanyName}</p>

          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-600 whitespace-no-wrap">{app.Email}</p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-600 whitespace-no-wrap">{app.Status}</p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={
              (e)=>{
                View(e,app._id)
              }
            }>
              View
            </button>
            <Modal open={isOpen} onClose={()=>{setIsOpen(false)}}>
              {
                <div>
                  <p className='text-black'>Details</p>
                  <div className='flex justify-center'>
                  <div>
                  <p className='text-black'>Name:</p>
                  <p className='text-black'>Company Name:</p>
                  <p className='text-black'>Product Name:</p>
                  <p className='text-black'>Company Email:</p>
                  <p className='text-black'>Phonenumber:</p>
                  <p className='text-black'>Marketsize:</p>
                  </div>
                  <div>
                  
                  <p className='text-black pl-2'>{viewApp.Name}</p>
                  <p className='text-black pl-2'>{viewApp.CompanyName}</p>
                  <p className='text-black pl-2'>{viewApp.Product}</p>
                  <p className='text-black pl-2'>{viewApp.Email}</p>
                  <p className='text-black pl-2'>{viewApp.PhoneNumber}</p>
                  <p className='text-black pl-2'>{viewApp.MarketSize}</p>
                  </div>
                  </div>
                 

                  
                

                </div>
              }

            </Modal>
          </td>
          


          </tr>
          ))}
        </tbody>
       
      </table>
    </div>
  )
}