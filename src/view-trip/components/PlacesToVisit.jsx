import React, { useState, useEffect } from 'react'
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({trip}) {
    const [tripData, setTripData] = useState();

    useEffect(() => {
        if (trip && trip.tripData) {
            setTripData(trip.tripData.travelPlan);
        }
    }, [trip]);

    if (!tripData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2 className='font-bold text-lg'>Places to Visit</h2>
            <div>
                {tripData.itinerary && Object.keys(tripData.itinerary).map((dayKey, index) => (
                    console.log(tripData.itinerary[dayKey]),
                    <div key={index}>
                        <div>
                        <h2 className='font-medium text-lg'>{tripData.itinerary[dayKey].theme}</h2>
                        <PlaceCardItem places={tripData.itinerary[dayKey].places} />
                        </div>
                        <p>Best Time to Visit: {tripData.itinerary[dayKey].bestTimeToVisit}</p>
                            <div key={index}>
                                 <h3>{tripData.itinerary[dayKey].places[0].placeName}</h3>
                                 <p>{tripData.itinerary[dayKey].places[0].placeDetails}</p>
                                 <img src={tripData.itinerary[dayKey].places[0].placeImageUrl} alt={tripData.itinerary[dayKey].places[0].placeName} style={{ width: '100px', height: '100px' }} />
                                 <p>Ticket Pricing: {tripData.itinerary[dayKey].places[0].ticketPricing}</p>
                                 <p>Rating: {tripData.itinerary[dayKey].places[0].rating}</p>
                                 <p>Travel Time: {tripData.itinerary[dayKey].places[0].travelTime}</p>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PlacesToVisit