/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { geolocated } from "react-geolocated";
import Localbase from "localbase"
import { getDistance } from 'geolib';
import { useState } from "react";
import Stopwatch from './Stopwatch';

const Distance = ({
    dis,
    isGeolocationAvailable,
    isGeolocationEnabled,
    coords,
    }) => {
    
    const [totalDistance, setTotalDistance] = useState(0)
    
     const style = css`
        padding: 2em;
        text-transform: uppercase;
        background-color: black;
        color: white;
        border-radius: 30px;
    `;
     const div = css`
        display: flex;
        justify-content: space-around;
        margin-top: 2em;
    `;
    const dist = css`
        text-align: center;
    `;
    
    
    
    let myDatabase = new Localbase('myDatabase')
        const insertIntoDb = () => {
            setInterval(() => {
                console.log("triggered")
                myDatabase.collection('positions').add({
                longitude: coords.longitude,
                latitude: coords.latitude,
            })
        }, 4000)}

        const HentDB = () => {
                myDatabase.collection('positions').get().then(positions => {
                    positions.forEach((position, index, array) => {
                        //console.log(array[index+1].longitude)
                        if(index !== array.length-1){
                            let dist = getDistance(
                                { latitude: position.latitude, longitude: position.longitude },
                                { latitude: array[index+1].latitude, longitude: array[index+1].longitude }
                                );
                                console.log(dist)
                                setTotalDistance(totalDistance + dist)
                }
            })
        console.log(positions)
            })
        }
   
    return !isGeolocationAvailable ? ( 
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? ( 

        <div>
        <div css={div}>
            <button css={style} onClick={insertIntoDb}>Start run</button>
            <button css={style} onClick={HentDB}>Calculate</button>
        </div>
        <h1 css={dist}>{totalDistance}</h1>
        <div css={div}>
        <Stopwatch/>
        
        </div>
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