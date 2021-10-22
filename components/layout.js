import SideBar from "./sidebar";
import Navigation from "./navigation"
export default function Layout({ children }) {
    return (
        <>
        <SideBar/>
        <Navigation/>
            <main>{children}</main>
        </>
    )
}