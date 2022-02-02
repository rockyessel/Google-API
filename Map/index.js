const myMap = () => {
  const mapProp = {
    center: new google.maps.LatLng(51.508742, -0.12085),
    zoom: 5,
  };

  const map = new google.maps.Map(
    document.querySelector("#googleMap"),
    mapProp
  );
};
