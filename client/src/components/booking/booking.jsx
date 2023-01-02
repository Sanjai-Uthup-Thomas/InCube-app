import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import Slots from '../modal/booking'
import Booked from '../modal/booked'

export default function Booking() {
  const [app, setApp] = useState([])
  const [divid, setDivid] = useState()
  const [slotBooking, setSlotBooking] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const[isBooked, setIsBooked] = useState(false)
  const [viewApp, setViewApp] = useState([])
  const [reducerValue, forceUpdate] = useReducer(x => x + 1, 1)

  useEffect(() => {
    async function fetchData() {
      const slots = await axios.get('http://localhost:4000/admin/slots')
      if (slots) {
        setApp(slots.data)
      }

    }
    fetchData()

  }, [reducerValue])
  const View = (e, id, status) => {
    console.log("id: " + id);
    if (status === "booked") {
      setIsBooked(true)
    } else {
      setIsOpen(true)
      axios.get('http://localhost:4000/admin/approved')
        .then((response) => {
          setViewApp(response.data);
        })
      setDivid(id)
    }
  }
  const submit = () => {
    const data = { slotBooking, divid }
    if(data.slotBooking!==undefined){
    axios.post("http://localhost:4000/admin/booking", data).then((response) => {
      forceUpdate()
    setIsOpen(false)
    setSlotBooking()
    })}
    
  }
  return (
    <div className='w-full px-16'>
      <h1 className='text-2xl font-bold text-blue-900 uppercase text-center'>Booking</h1>

      <div className='pt-12 grid sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-8 gap-4 pl-3'>
        {app.map((app, index) => (
          <div key={index} className='h-28 rounded-lg' style={{ backgroundColor: app.status === 'booked' ? 'rgb(161 161 170)' : ' rgb(30 58 138)' }} onClick={
            (e) => {
              View(e, app._id, app.status)
            }
          }></div>


        )

        )}
        <Slots open={isOpen} onClose={() => { setIsOpen(false) }}>
          {
            <div>
              <p className='text-black'>Booking</p>
              <div className='p-5'>
                <select className='w-full p-2.5 text-white bg-blue-900 rounded'
                  onChange={(e) => setSlotBooking(e.target.value)}>
                  <option selected>--SELECT--</option>
                  {viewApp.map((item, index) => (
                    <option key={index} value={item._id}>{item.CompanyName}</option>
                  ))}

                </select>
              </div>
              <button onClick={submit}>book</button>
            </div>
          }

        </Slots>
        <Booked bopen={isBooked} onClose={() => { setIsBooked(false) }}></Booked>
      </div>

    </div>
  )
}