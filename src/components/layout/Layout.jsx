import BottomNavigation from "./BottomNavigation"

const Layout = (props) => {
    return (
        <>
            <div className="mt-10 mb-14">
                {props.children}
            </div>
            <BottomNavigation />
        </>
    )
}

export default Layout
