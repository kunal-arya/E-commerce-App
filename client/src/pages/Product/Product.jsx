import {useState} from "react"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./Product.scss"

export default function Product() {
    const [selectedImg, setSelectedImg] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const images = [ 
    "https://images.pexels.com/photos/4263691/pexels-photo-4263691.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4263692/pexels-photo-4263692.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]

    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt=""  onClick={() => setSelectedImg(0)}/>
                    <img src={images[1]} alt="" onClick={() => setSelectedImg(1)}/>
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className="price">₹ 1000</span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida.
                </p>
                <div className="quantity">
                    <button
                        onClick={e => setQuantity(prev => prev === 1 ? 1 : prev - 1 )}
                    >-</button>
                    {quantity}
                    <button
                        onClick={e => setQuantity(prev => prev + 1)}      
                    >+</button>
                </div>
                <button className="add">
                    <AddShoppingCartIcon /> ADD TO CART
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon /> ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <BalanceIcon /> ADD TO COMPARE
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}