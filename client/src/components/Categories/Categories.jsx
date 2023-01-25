import "./Categories.scss"
import {Link} from "react-router-dom"

export default function Categories() {
    return (
        <div className="categories">
            <div className="sale">
                <img src="https://images.pexels.com/photos/5622859/pexels-photo-5622859.jpeg?auto=compress&cs=tinysrgb&h=400" alt="" />
                <button>
                    <Link className="link" to="/products/1" >Sale</Link>
                </button>
            </div>
            <div className="women">
                <img src="https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&h=400" alt="" />
                <button>
                    <Link className="link" to="/products/1">Women</Link>
                </button>
            </div>
            <div className="newSeason">
                <img src="https://images.pexels.com/photos/1805412/pexels-photo-1805412.jpeg?auto=compress&cs=tinysrgb&h=800" alt="" />
                <button>
                    <Link className="link" to="/products/1">New Season</Link>
                </button>
            </div>
            <div className="men">
                <img src="https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg?auto=compress&cs=tinysrgb&h=400" alt="" />
                <button>
                    <Link className="link" to="/products/1">Men</Link>
                </button>
            </div>
            <div className="accessories">
                <img src="https://images.pexels.com/photos/6153883/pexels-photo-6153883.jpeg?auto=compress&cs=tinysrgb&h=400" alt="" />
                <button>
                    <Link className="link" to="/products/1">Accessories</Link>
                </button>
            </div>
            <div className="shoes">
                <img src="https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&h=400" alt="" />
                <button>
                    <Link className="link" to="/products/1">Shoes</Link>
                </button>
            </div>
        </div>
    )
}