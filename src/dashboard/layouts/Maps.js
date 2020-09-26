import React from "react";
import {Map, YMaps} from 'react-yandex-maps';


export default function Maps() {
    return (
        <YMaps>
            <Map width="100%" height="90vh" defaultState={{center: [55.75, 37.57], zoom: 9}}/>
        </YMaps>
    );
}
