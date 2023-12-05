import React from "react"
import { nanoid } from "nanoid"
import housesForSale from "./data/housesForSale"
import Logo from "./images/logo.png"
import HouseCard from "./components/HouseCard"

export default function App() {
    
	const houseCards = housesForSale.map((houseData, index, array) => {
		return (
			<HouseCard 
				key={houseData.id}
				houseData={houseData}
				index={index}
				array={array}
			/>
		)
	})

	return (
		<div className="wrapper">
			<header>
				<img className="logo" src="images/logo.png" />
			</header>
			<div className="house-cards-container">
                {houseCards}
            </div>
		</div>
	)
}
