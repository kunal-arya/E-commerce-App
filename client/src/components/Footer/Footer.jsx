import "./Footer.scss"

export default function Footer() {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h2>Categories</h2>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h2>Link</h2>
                    <span>FAO</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h2>About</h2>
                    <span>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
                        amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
                        ut labore etdolore.
                    </span>
                </div>
                <div className="item">
                    <h2>Contact</h2>
                    <span>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
                        amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
                        ut labore etdolore.
                    </span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">Urban Oasis</span>
                    <span className="copyright">
                        © Copyright 2023. All Rights Reserved
                    </span>
                </div>
                <div className="right">
                    <img src="/images/payment.png" alt="" />
                </div>
            </div>
        </div>
    )
}