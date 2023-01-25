import Slider from "../../components/Slider/Slider.jsx"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts.jsx"

export default function Home() {
    return (
        <div className="home">
            <Slider />
            <FeaturedProducts type="Featured" />
            <FeaturedProducts type="Trending" />
        </div>
    )
}