import Navbar from "@components/Navbar/Navbar"

const Layout :React.FC =({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <footer>Footer template</footer>
        </div>
    )
}

export default Layout
