var externalData = {
    sources: [
      {
          "name": 'PCW',
          "type": 'geojson',
          "url": './map/sources/network.geojson'
        },
    ],
    layers: [
      {
          "id": "pcw-points",
          "type": "circle",
          "source": "PCW",
        //  "source-layer": "",
          "layout": {
              
          },
          "paint": {
              "circle-radius": 2,
              "circle-color": "red",
              "circle-stroke-width": 0.5,
              "circle-stroke-color": "black"

          }
      }
    ]
};