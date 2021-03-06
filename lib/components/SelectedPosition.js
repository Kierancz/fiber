import React, {Component, PropTypes} from 'react'
import { Map, Marker, Popup, TileLayer, Polyline, LayerGroup, Path, Circle, CircleMarker } from 'react-leaflet'
import { NEARBY_METERS } from '../constants'

export default class SelectedPosition extends Component {

  render(){
    const { map, selectedPosition } = this.props

    if (selectedPosition){

      const nearbyCircle = <Circle center={selectedPosition} map={map} radius={NEARBY_METERS}/>

      const marker = <CircleMarker center={selectedPosition} map={map} radius={10}/>

      return <div>
        { nearbyCircle }
        { marker }
      </div>
    } else {
      return null
    }
  }
}
