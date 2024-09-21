import React, { useMemo, useState } from 'react'
import { useAppSelector } from '@/Redux/Store'
import { BiCalendar } from 'react-icons/bi'
import { format } from 'date-fns'
import EditModel from '../Modals/EditModel'



const UserBio: React.FC<UserProp> = () => {
    const [editModal, setEdimodal] = useState<any>(false)
    const { user } = useAppSelector((state) =>
        state.user
    )
    function fun() {
        setEdimodal(true)
    }


    const createsAt = useMemo(() => {
        if (!user?.createdAt) {
            return null
        } else {
            return format(new Date(user.createdAt), 'MMMM yyyy')
        }
    }, [user?.createdAt])

    return (
        <>
            <div className='border-b-[1px] border-neutral-800 pb-4'>
                <div className='flex justify-end p-2'>
                    <>
                        <p className='font-bold text-lg cursor-pointer' onClick={() => fun()} >Edit profile</p>
                        <EditModel
                            editModal={editModal}
                            setEdimodal={setEdimodal}
                            data={user}
                        />
                    </>
                    <div className='flex items-center gap-8'>
                        {
                        }
                    </div>

                </div>
                <div className='mt-8 px-4'>
                    <div className='flex flex-col'>
                        <p className='text-2xl font-semibold'>
                            {user?.name}
                        </p>
                        <p className='text-md text-neutral-500'>
                            @{user?.email}
                        </p>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <p className=''>
                            enter your biogrophy
                        </p>
                    </div>
                    <div className='flex flex-row items-center mt-4 gap-3 text-neutral-500'>
                        <BiCalendar size={24} />
                        <p className=''>
                            joined {createsAt}
                        </p>
                    </div>
                    <div className='flex flex-row items-center mt-4 gap-6'>
                        <div className='flex flex-row items-center gap-1'>
                            <p className=''>

                            </p>
                            <p className='text-neutral-500'>
                                Following
                            </p>
                        </div>
                        <div className='flex flex-row items-center gap-1'>
                            <p className='text-white'>

                            </p>
                            <p className='text-neutral-500'>
                                Followers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserBio