import React, {Component, PropTypes} from 'react'
import { Map, Marker, Popup, TileLayer, Polyline, LayerGroup, Path, CircleMarker } from 'react-leaflet'

export default class FiberCenter extends Component {

  render(){

    const { map, center, id } = this.props
    
    const centerLatlng = [center.latitude, center.longitude] // Q: Why is this step necessary?

    const centerElement = <CircleMarker center={centerLatlng} map={map} color='#a00' radius={5} setZIndexOffset={100}>
      <Popup><span>Fiber #{id}</span></Popup>
    </CircleMarker>

    return centerElement
  }

}