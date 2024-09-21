import { useAppSelector } from "@/Redux/Store";
import Register from "./register/[Register]";
import Dashboard from "@/Component/Dashboard";


export default function Home() {
  const { user } = useAppSelector((state) =>
    state.user
  )
  console.log(user);

  return (
    <>
      {
        user ? <Dashboard /> : <Register />
      }

    </>
  )
}
