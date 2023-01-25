import {useState,useEffect} from "react"
import EastOutlinedIcon from "@mui/icons-material/EastOutlined"
import WestOutlinedIcon from "@mui/icons-material/WestOutlined"
import "./Slider.scss"

export default function slider() {

    const [currentSlide,setCurrentSlide] = useState(0)

    const data = [
        "https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1980",
        "https://images.pexels.com/photos/2263952/pexels-photo-2263952.jpeg?auto=compress&cs=tinysrgb&w=1980",
        "https://images.pexels.com/photos/2330169/pexels-photo-2330169.jpeg?auto=compress&cs=tinysrgb&w=1980",
      ]

    const nextSlide = () => {
        setCurrentSlide(currSlide => (currSlide == 2) ? 0 : currSlide + 1)
    }

    const prevSlide = () => {
        setCurrentSlide(currSlide => (currSlide == 0) ? 2 : currSlide - 1)
    }

    useEffect(() => {
        const slider = setInterval(() => {
            nextSlide()
        },5000)

        return () => clearInterval(slider)
    },[currentSlide])

    return (
        <div className="slider">
            <div className="container"  style = {{transform: `translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>

            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>
        </div>
    )
}