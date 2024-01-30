import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-geolocate',
  templateUrl: './geolocate.page.html',
  styleUrls: ['./geolocate.page.scss'],
})
export class GeolocatePage implements OnInit {

  constructor() { }

  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia3V5YWtlbiIsImEiOiJjbHJmM2dyOTEwMTA2MmpwbnFobnMyNXBwIn0.JMwE-R1YaXBSQNvTYSg4Iw';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      zoom: 9
    });

    map.on('load', () => {
      const geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      });

      geolocate.on('geolocate', (event: any) => {
        const { longitude, latitude } = event.coords;
        console.log('Latitude:', latitude);
        console.log('Longitude:', longitude);

        // Set the map center to the user's location
        map.setCenter([longitude, latitude]);

        // Reverse geocoding.
        this.reverseGeocode(longitude, latitude);
      });

      // Add geolocate control to the map
      map.addControl(geolocate);

      // Trigger geolocation when the map is loaded
      geolocate.trigger();
    });
  }

  reverseGeocode(longitude: number, latitude: number): void {
    const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxgl.accessToken}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const location = data.features[0].place_name;
        console.log('Current Location:', location);
      })
      .catch(error => {
        console.error('Error fetching location:', error);
      });
  }
}
