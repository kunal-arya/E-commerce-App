import Slider from "../../components/Slider/Slider.jsx"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts.jsx"
import Categories from "../../components/Categories/Categories.jsx"

export default function Home() {
    return (
        <div className="home">
            <Slider />
            <FeaturedProducts type="Featured" />
            <Categories />
            <FeaturedProducts type="Trending" />
        </div>
    )
}