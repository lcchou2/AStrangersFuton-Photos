import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="app-content">
                <span className="simListings">Similar Listings</span>
                <div className="individual-component">
                    <img className="houseImg" src="https://a0.muscache.com/im/pictures/7b5c5ead-61b9-4e5f-b72f-f47de812d6a1.jpg?aki_policy=xx_large"></img>
                    <br />
                    <span className="roomDes">ENTIRE VILLA • Banjar </span>
                    <br />
                    <div className="namePlace">Villa Kupu Kupu Lovina with great service and view </div>
                    <span className="costPlace">$76 per night</span>
                    <br />
                    <span className="starsContainer">★★★★★</span>
                    <span className="ratingCount">97</span>
                </div>
                <div className="individual-component">
                    <img className="houseImg" src="https://a0.muscache.com/im/pictures/26178246/b9e66506_original.jpg?aki_policy=xx_large"></img>
                    <br />
                    <span className="roomDes">ENTIRE HOUSE • Abiansemal </span>
                    <br />
                    <div className="namePlace">Stunning All Bamboo House on Pristine Valley edge </div>
                    <span className="costPlace">$325 per night</span>
                    <br />
                    <span className="starsContainer">★★★★★</span>
                    <span className="ratingCount">83</span>
                </div>
                <div className="individual-component">
                    <img className="houseImg" src="https://a0.muscache.com/im/pictures/56343235/e9240a06_original.jpg?aki_policy=xx_large"></img>
                    <br />
                    <span className="roomDes">ENTIRE VILLA • Banjar </span>
                    <br />
                    <div className="namePlace">EXCLUSIVE AND UNIQUE BEACHFRONT POOL VILLA ! </div>
                    <span className="costPlace">$760 per night</span>
                    <br />
                    <span className="starsContainer">★★★★★</span>
                    <span className="ratingCount">97</span>
                </div>
            </div >
        );
    }
}
export default App;