import React from "react"

export default function Cards(props){
    return(
        <div className="card">
            <img className="card-img" src={props.item.imageUrl} />
            <div className="card-body">
                <div className="card-header">
                    <p className="card-place">📍 {props.item.location}</p>
                    <a className="card-map" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card-title">{props.item.title}</h1>
                <p className="card-date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card-text">{props.item.description}</p>
            </div>
        </div>
    )
}