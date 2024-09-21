import { useAppSelector } from "@/Redux/Store"
import { useRouter } from "next/router"
import React from "react"
import { BiLogIn, BiNotification } from "react-icons/bi"
import { BsChat } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"
import { GrDashboard } from "react-icons/gr"

const SideBarItem = () => {
  const router = useRouter()
  const { user } = useAppSelector((state) =>
    state.user
  )

  const handleClick = (arg: string) => {
    if (user) {
      if (arg === "dashboard") {
        router.push(`/dashboard/${user._id}`)
       }
       if (arg==="notification") {
        router.push(`/notification/${user._id}`)
       }if(arg==='profile'){
        router.push(`/profile/${user._id}`)
       }
    }else{
      router.push(`/register/4`)
    }
  }
  return (
    <>
      <div
        onClick={()=>{
          handleClick("dashboard")
        }}
        className={`flex flex-row items-center `}>

        <div className="
            relative lg:flex items-center gap-4 p-4 rounded-full
              hover:opacity-85 cursor-pointer
            ">
          <GrDashboard size={26} color="black" />
          <p className="
                hidden lg:block  text-lg
                ">
            Dashboard
          </p>
        </div>
      </div>

      <div
      onClick={()=>{
        handleClick("notification")
      }}
        className={`flex flex-row items-center `}>

        <div className="
            relative lg:flex items-center gap-4 p-4 rounded-full
              hover:opacity-85 cursor-pointer
            ">
          <BiNotification size={26} color="black" />
          <p className="
                hidden lg:block  text-lg
                ">
            Notification
          </p>
        </div>
      </div>
      <div
        className={`flex flex-row items-center `}>

        <div className="
            relative  lg:flex items-center gap-4 p-4 rounded-full
              hover:opacity-85 cursor-pointer
            ">
          <BsChat size={26} color="black" />
          <p className="
                hidden lg:block  text-lg
                ">
            Chat
          </p>
        </div>
      </div>
      {
        user?._id ? (
          <div
          onClick={()=>{
            handleClick('profile')
          }}
            className={`flex flex-row items-center `}>

            <div className="
              relative  lg:flex items-center gap-4 p-4 rounded-full
                hover:opacity-85 cursor-pointer
              ">
              <CgProfile size={26} color="black" />
              <p className="
                  hidden lg:block  text-lg
                  ">
                kannan
              </p>
            </div>
          </div>
        ) : (
          <div
            onClick={() => {
              handleClick("login")
            }}
            className={`flex flex-row items-center `}>

            <div className="
              relative  lg:flex items-center gap-4 p-4 rounded-full
                hover:opacity-85 cursor-pointer
              ">
              <BiLogIn size={26} color="black" />
              <p className="
                  hidden lg:block  text-lg
                  ">
                Login
              </p>
            </div>
          </div>
        )
      }
    </>
  )
}

export default SideBarItem