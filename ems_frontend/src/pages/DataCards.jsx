import React from 'react'

const DataCards = ({icon, text, number, color}) => {
  return (
    <div className='rounded flex bg-white text-black'>
     <div className={`text-3xl flex justify-center items-center ${color} text-white px-4`}>
         {icon}
     </div>
<div className='pl-4 py-2'>
    <p className='text-lg font-semibold'>{text}</p>
    <p className='text-xl font-semibold'>{number}</p>
</div>

    </div>
  )
}

export default DataCards


///Ui mee jana hai
