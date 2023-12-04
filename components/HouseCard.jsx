import React from "react"

export default function HouseCard({houseData, index, array}) {
		return (
			<div className="house-card">
				<p>
					Listing {index + 1} of {array.length}
				</p>
				<img src={houseData.image} />
				<div>
					<ul>
						<li>
							<span>Price:</span> 
                            {houseData.price}
						</li>
						<li>
							<span>Location:</span> 
                            {houseData.location}
						</li>
						<li>
							<span>Square Feet:</span> 
                            {houseData.squareFeet}
						</li>
						<li>
							<span>Acres:</span> 
                            {houseData.acres}
						</li>
						<li>
							<span>Year Built:</span> 
                            {houseData.yearBuilt}
						</li>
						<li>
							<span>Bedrooms:</span> 
                            {houseData.bedrooms}
						</li>
						<li>
							<span>Bathrooms:</span> 
                            {houseData.bathrooms}
						</li>
						<li>
							<span>Other Rooms:</span> 
                            {houseData.otherRooms}
						</li>
						<li>
							<span>Garage:</span> 
                            {houseData.garage ? "Yes" : "No"}
						</li>
						<li>
							<span>Air Conditioning:</span>
                            {houseData.airConditioning ? "Yes" : "No"}
						</li>
						<li>
							<span>Heating:</span> 
                            {houseData.heating ? "Yes" : "No"}
						</li>
						<li>
							<span>Haunted:</span> 
                            {houseData.haunted ? "Yes" : "No"}
						</li>
					</ul>
				</div>
			</div>
		)
	}