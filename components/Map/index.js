import L from 'leaflet';
import style from './map.module.scss';
const Map = () => {
  React.useLayoutEffect(() => {
    const isMapInitialized = L.DomUtil.get('map');

    if (isMapInitialized === null) {
      const map = L.map('mapid', { center: [51.9194, 19.1451], zoom: 7 });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      map.invalidateSize();
    }
  }, []);

  return (
    <div className={style.container}>
      <div
        id="mapid"
        style={{
          height: '100%',
          width: '100%',
        }}
        className={style.map}
      ></div>
    </div>
  );
};
export default Map;
