const Layout = (layout) => {
    return (
        <div className="layout">
            <h1>Delivery Tracking</h1>
            {layout.children}
        </div>
        );
    };

export default Layout;