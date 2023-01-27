import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export default function Cart() {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/4263691/pexels-photo-4263691.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2: "https://images.pexels.com/photos/4263692/pexels-photo-4263692.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Long Sleeve T-Shirt",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
            isNew: true,
            oldPrice: 700,
            newPrice: 300
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/3869556/pexels-photo-3869556.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2: "https://images.pexels.com/photos/3869555/pexels-photo-3869555.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Coat",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
            isNew: true,
            oldPrice: 700,
            newPrice: 300
        }
    ]

    console.log(data)

    return (
        <div className="cart">
            <h3>Product in your cart</h3>
            {data?.map((item) => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h4>{item.title}</h4>
                        <p>{item.desc?.substring(0,100)}</p>
                        <div className="price">1 x ₹1000</div>
                    </div>
                    <DeleteOutlinedIcon className="delete" />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>₹1000</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset">Reset Cart</span>
        </div>
    )
}