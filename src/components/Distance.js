/** @jsxImportSource @emotion/react */
import { geolocated } from "react-geolocated";
import Localbase from "localbase"

const Distance = ({
    dis,
    isGeolocationAvailable,
    isGeolocationEnabled,
    coords
    }) => {

    
    let myDatabase = new Localbase('myDatabase')
        const insertIntoDb = () => {
            setInterval(() => {
                console.log("triggered")
                myDatabase.collection('users').add({
                longitude: coords.longitude,
                latitude: coords.latitude,
            })
        }, 4000)}
   
    return !isGeolocationAvailable ? ( 
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? ( 
        <div>
            <p>Latitude: {coords.latitude}</p>
            <button onClick={insertIntoDb}>adduser</button>
            <p>Longtitude: {coords.longitude}</p>
        </div>
    ) : (
        <div>Getting the location data&hellip; </div>
    )
}
 
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 10000,
})(Distance);