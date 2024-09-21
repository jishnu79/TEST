import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { getUser } from '@/Api/User'
import Avathar from '../Avathar'

interface UserProp {
  userId: string
}

const UserHero: React.FC<UserProp> = ({ userId }) => {
  const [user, setUser] = useState<any>({})

  useEffect(() => {
    getUser(userId).then((data: any) => {
      setUser(data)
    })
  })
  return (
    <div>
      <div className='bg-neutral-700 text-white h-44 relative'>
        {
          user?.image && (
            <Image
              src='https://res.cloudinary.com/dxzt4brja/image/upload/v1722919320/products/cok3p1e9gxlm71xn9nyn.jpg'
              fill
              alt='Cover image'
              style={{ objectFit: "cover" }}
            />)
        }
         <div className='absolute -bottom-16 left-4'>
          <Avathar userId={userId} />
        </div>
      </div>
    </div>
  )
}

export default UserHero