import React from 'react';

const Booked=({bopen,onClose})=>{
    if(!bopen){return null}else{
    return(
        <div className='fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[400px] flex flex-col'>
                {/* <button className='text-white text-xl place-self-end' 
                onClick={()=> onClose()}>X</button> */}
                <div className='bg-blue-50 p-2 h-auto text-black rounded text-center'><p>Slot is already Booked</p><button className='bg-blue-900 w-20 text-white rounded text-center' onClick={()=> onClose()}>OK</button></div>
                
             </div>
        </div>
    )
    }
}
export default Booked