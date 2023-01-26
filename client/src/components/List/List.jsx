import Card from "../Card/Card"
import "./List.scss"

export default function List() {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/4263691/pexels-photo-4263691.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2: "https://images.pexels.com/photos/4263692/pexels-photo-4263692.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Long Sleeve T-Shirt",
            isNew: true,
            oldPrice: 700,
            newPrice: 300
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/3869556/pexels-photo-3869556.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2: "https://images.pexels.com/photos/3869555/pexels-photo-3869555.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Coat",
            isNew: true,
            oldPrice: 700,
            newPrice: 300
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/1759619/pexels-photo-1759619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Yellow T-Shirt",
            isNew: false,
            oldPrice: 700,
            newPrice: 300
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/3848178/pexels-photo-3848178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/3848180/pexels-photo-3848180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Beautiful Dress",
            isNew: false,
            oldPrice: 700,
            newPrice: 300
        }
    ]

    return (
        <div className="list">
            {data.map(item => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    )
}