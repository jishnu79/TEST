import { getAllUsers } from '@/Api/User';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function UserList() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers().then((user: any) => {
            if (user) {
                setUsers(user?.data)
            }
        })
    })

    return (
        <>
            <div className="w-full  mx-auto">
                <div className="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                            Latest Customers
                        </h3>

                    </div>
                    <div className="flow-root ">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">

                            {
                                users?.map((val:any, ind:number) => (
                                    <li key={ind} className="py-3 sm:py-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="relative w-8 h-8">
                                                <Image
                                                    fill
                                                    className="rounded-full"
                                                    src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                                                    alt="Neil image"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                   {val?.name}
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    {val?.email}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserList;
