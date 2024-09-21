import React, { useEffect } from "react"
import SideBar from "./LayOut/SideBar"
import Users from "./LayOut/Users"
import { getCurrentUser } from "@/Api/Auth"
import { useDispatch } from "react-redux"
import { setUser } from "@/Redux/Features/GetUser"
import { useAppSelector } from "@/Redux/Store"

interface LayoutProps {
    children: React.ReactNode
}

const Laout: React.FC<LayoutProps> = ({ children }) => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        getCurrentUser().then((data: any) => {
            if (data) {
                dispatch(setUser(data.data))
            } else {
                return
            }
        })
    })

    return (
        <div className="h-screen ">
            <div className="h-full">
                <div className="grid grid-cols-12 h-full">
                    <SideBar />
                    <div className="col-span-10 md:col-span-10 lg:col-span-9 xl:col-span-7 border-x-[1px] border-neutral-800">
                        {children}
                    </div>
                    <Users />
                </div>
            </div>
        </div>
    )
}

export default Laout