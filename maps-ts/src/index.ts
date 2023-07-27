import { Company } from "./Company";
import { User } from "./User";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();

async function initMap(): Promise<void> {
  const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;

  const customMap = new CustomMap('map', Map);
  customMap.addMarker(user);
  customMap.addMarker(company);
}

initMap();