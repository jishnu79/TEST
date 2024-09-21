import { getUser } from '@/Api/User'
import Header from '@/Component/LayOut/Header'
import UserBio from '@/Component/user/UserBio'
import UserHero from '@/Component/user/UserHero'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Profile = () => {
  const [user, setUser] = useState<any>({})
  
  const router = useRouter()
  const {profile}  = router.query
  useEffect(() => {
    getUser(profile as string).then((data: any) => {
        if (data) {
            setUser(data)
        } else {
            return
        }
    })
}, [profile])
  return (
    <>
      <Header showBackArrow label={user?.name} />
      <UserHero userId={profile as string}/>
      <UserBio userId={profile as string}/>
    </>
  )
}

export default Profile