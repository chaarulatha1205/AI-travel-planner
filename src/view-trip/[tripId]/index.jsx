import { getDoc , doc} from 'firebase/firestore';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '@/service/firebaseConfig';
import { toast } from 'sonner';
import { useEffect } from 'react';
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';
import PlacesToVisit from '../components/PlacesToVisit';

function Viewtrip() {

    const {tripId}= useParams();
    const [trip,setTrip]=useState([]);

    useEffect(()=>{
        tripId&&GetTripData();
    },[tripId]);

    /**
     * used to get trip information from firebase
     */
    const GetTripData=async()=>{
        const docRef=doc(db,'AITrips',tripId);
        const docsnap=await getDoc(docRef);

        if(docsnap.exists()){
            console.log("Document: ",docsnap.data());
            setTrip(docsnap.data());
        }
        else{
            console.log("No such document found");
            toast("No trip found!");
        }
    }

  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
        {/*Information section */}
        <InfoSection trip={trip}/>

        {/* Recommended Hotels */}
        <Hotels trip={trip}/>

        {/* Daily plans */}
        <PlacesToVisit trip={trip}/>

        {/* Footer */}


    </div>
  )
}

export default Viewtrip