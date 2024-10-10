import { ReactNode } from "react"
import { Navigate, Outlet } from "react-router-dom"

const PublicRoute = ({children}: {children: ReactNode}) => {

    const isLoggedIn : boolean = localStorage.getItem('login') === 'false'
    if(!isLoggedIn) {
        return <Navigate to='/' replace/>
    }
    return children ? children: <Outlet/>
}

export default PublicRoute