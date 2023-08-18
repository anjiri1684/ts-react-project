import Header from "./components/Header"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import ProductList from "./components/ProductList"
import { useState } from "react"

function App() { 
  const [viewCart, setviewCart] = useState<boolean>(false)

  const pageContent = viewCart ? <Cart /> : <ProductList />
  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setviewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </>
  )

  return content
}

export default App
