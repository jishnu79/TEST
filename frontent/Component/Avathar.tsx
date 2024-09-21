import { getUser } from "@/Api/User"
import { useAppSelector } from "@/Redux/Store"
import Image from "next/image"
import { useEffect, useState } from "react"

interface AvatharProp {
    userId?: string
    isLarge?: boolean
    hasBorder?: boolean
    ischat?: boolean
    currentUser?: string
}

const Avathar: React.FC<AvatharProp> = ({
    userId, hasBorder, isLarge
}) => {
    const [user1, setUser] = useState<any>({})
    const { user } = useAppSelector((state) =>
        state.user
      )
    useEffect(() => {
        getUser(userId as string).then((data: any) => {
            if (data?.success) {
                setUser(data?.data)
            } else {
                return
            }
        })
    }) 

    return (
        <div className={`
        ${hasBorder ? 'border-4 border-black' : ''}
        ${isLarge ? 'h-[20%] ' : 'h-56'}
        ${isLarge ? 'w-[30%] ' : 'w-56'}
        rounded-full hover:opacity-90 transition cursor-pointer relative
        `}>
            <Image
                fill
                style={{
                    objectFit: "cover",
                    borderRadius: '100%',
                }}
                alt="Avathar"
                src={user?.profileImage ? user?.profileImage : `/image/avathar.jpg`}
            />
        </div>
    )
}

export default Avathar