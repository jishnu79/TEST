import React from 'react'
import SideBarItem from './SideBarItem'

function SideBar() {
  return (
    <div className="lg:col-span-3
        xl:col-span-2 md:col-span-2 col-span-2 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-center">
        <div className="space-y-2 lg:w-[230px]">
          <h2 className='flex items-center justify-center'> SideBar</h2>
          <SideBarItem />
        </div>
      </div>
    </div>
  )
}

export default SideBar