import React from "react"
import { nanoid } from "nanoid"
import housesForSale from "./data/housesForSale"
import HouseCard from "./components/HouseCard"
import {Logo} from ".images/logo.png"

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
				<img className="logo" src={Logo} />
			</header>
			<div className="house-cards-container">
                {houseCards}
            </div>
		</div>
	)
}
