import {Routes,Route} from "react-router-dom"

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<span>Home</span>} />
        <Route path="/products/:id" element={<span>Category</span>} />
        <Route path="/product/:id" element={<span>Product</span>} />
      </Routes>
    </>
  )
}
