import './map.scss'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Pin from '../pin/Pin'
// [-27.677236354309805, 152.7955140968954]

function Map({items}){
    return (

    <MapContainer 
        center={[-27.380596781963632, 153.0241451156151]} 
        zoom={11} 
        scrollWheelZoom={false}
        className='map'>

        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {items.map((item) => (
            <Pin key={item.id} item={item} />
        ))}
    </MapContainer>

)
}

export default Map