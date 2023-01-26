import "./Products.scss"
import { useParams } from "react-router-dom"
import { useState } from "react"
import List from "../../components/List/List"

export default function Products() {

    const {id} = useParams()
    console.log(id)
    const catId = parseInt(id)
    const [maxPrice,setMaxPrice] = useState(10000)
    const [sort,setSort] = useState(null)

    return (
        <div className="products">
            <div className="left">
                <div className="filterItem">
                    <h3>Product Categories</h3>
                    <div className="inputItem">
                        <input type="checkbox" id="1" value={1} />
                        <label htmlFor="1">Shoes</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="2" value={2} />
                        <label htmlFor="2">Skirts</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="3" value={3} />
                        <label htmlFor="3">Coats</label>
                    </div>
                </div>
                <div className="filterItem">
                    <h3>Filter by Price</h3>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" min={0} max={10000} onChange={(e) => setMaxPrice(e.target.value)} />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h3>Sort by</h3>
                    <div className="inputItem">
                        <input type="radio" id="asc" value="asc" name="price" onChange={ e => setSort("asc")} />
                        <label htmlFor="asc">Price (Lowest First)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id="dsc" value="dsc" name="price" onChange={e => setSort("dsc")} />
                        <label htmlFor="dsc">Price (Highest First)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img 
                    className="catImg" 
                    src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                />
                <List catId={catId} maxPrice={maxPrice} sort={sort} />
            </div>
        </div>
    )
}