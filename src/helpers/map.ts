const accessToken = import.meta.env.PUBLIC_MAPBOX_ACCESS_TOKEN;

export function setMap(
  mapElement: HTMLElement,
  {
    latitude,
    longitude,
    zoom,
    markerMarkup = "",
  }: {
    latitude: number;
    longitude: number;
    zoom: number;
    markerMarkup?: string;
  }
) {
  (async () => {
    const {
      icon: leafletIcon,
      map: leafletMap,
      marker: leafletMarker,
      tileLayer,
    } = await import("leaflet");

    const map = leafletMap(mapElement).setView([latitude, longitude], zoom);
    tileLayer(
      `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}{r}?access_token=${accessToken}`,
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 19,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: import.meta.env.PUBLIC_MAPBOX_ACCESS_TOKEN,
        detectRetina: true,
      }
    ).addTo(map);

    if (markerMarkup !== "") {
      leafletMarker([latitude, longitude])
        .bindPopup(markerMarkup)
        .addTo(map)
        .openPopup();
    } else {
      leafletMarker([latitude, longitude]).addTo(map);
    }
  })();
}
