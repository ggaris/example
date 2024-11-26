import { useRoutes } from "react-router"
import { routes } from "./routes"

export const RouterPage = () => {
    
  const routesElement = useRoutes(routes)
  return routesElement
}
