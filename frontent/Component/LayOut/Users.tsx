import React from 'react'
import UserList from './UserList'

function Users() {
    return (
        <div className="xl:col-span-3 px-6 py-4 hidden xl:block">
            <div className="flex flex-col items-center">
                <div className="space-y-2 lg:w-[260px]">
                    <h2 className='flex items-center justify-center'> users</h2>
                    <UserList/>
                </div>
            </div>
        </div>
    )
}



export default Users