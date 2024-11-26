import { Outlet } from "react-router"
import { Header } from "./header"

export const RootLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  )
}
