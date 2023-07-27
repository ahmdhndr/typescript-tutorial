import { User } from './User';
import { Company } from './Company';

// Instructions to every other class
// on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
};

export class CustomMap {
  private map: google.maps.Map;

  constructor(divId: string, Map: typeof google.maps.Map) {
    this.map = new Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0
        },
        mapId: 'DEMO_MAP_ID'
      }
    );
  }
  async addMarker(mappable: Mappable): Promise<void> {
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
    const marker = new AdvancedMarkerElement({
      map: this.map,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open({
        anchor: marker,
        map: this.map
      });
    });
  }
}