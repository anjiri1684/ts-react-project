type Propstype = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}

const Nav = ({ viewCart, setViewCart}: Propstype) => {
    const button = viewCart
        ? <button onClick={() => setViewCart(false)}>View Products</button>
        : <button onClick={() => setViewCart(true)}>view Cart</button>

    const content = (
        <nav className="nav">{button}</nav>
    )

    return content
  
}

export default Nav