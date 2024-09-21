import { useAppSelector } from '@/Redux/Store'
import Image from 'next/image'
import React, { useMemo } from 'react'
import { format } from 'date-fns'

const Dashboard = () => {
  const { user } = useAppSelector((state) =>
    state.user
  )

  const createsAt = useMemo(() => {
    if (!user?.createdAt) {
      return null
    } else {
      return format(new Date(user.createdAt), 'HH:mm:ss');
    }
  }, [user?.createdAt])
  return (
    <section className="py-8 z-10 font-serif">
      <div>
        <h1 >Last seen : {createsAt} </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto">
        <div className="w-full md:w-1/2 py-8">
          <h1 className="text-purple-900 text-7xl font-semibold leading-none tracking-tighter">
            Welcome to <br /><span className="text-blue-500">My Website, <br /></span> I am Web Developer.
          </h1>
        </div>
        <div className="w-full md:w-1/2 py-8">
          <Image src="https://www.svgrepo.com/show/493509/person-who-invests.svg" width={500} height={500} className="g-image " alt={''} />
        </div>
      </div>
    </section>
  )
}

export default Dashboard