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
            myDatabase.collection('users').add({
                longitude: coords.longitude,
                altitude: coords.altitude
            })
        }

    const removeTable = () => {
        myDatabase.delete()
    }
   
    return !isGeolocationAvailable ? ( 
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? ( 
        <div>
            <p>Longtitude: {coords.longitude}</p>
            <p>Altitude: {coords.altitude}</p>
            <button onClick={insertIntoDb}>adduser</button>
            <button onClick={removeTable}>delete table</button>
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