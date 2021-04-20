export const state = {
  user: {},
  listings: [
      {
          id: 0,
          name: "The Austin Winery",
          description: "Winery",
          hours: "12 pm - 9 pm",
          location: {
              address: '440 E St Elmo Rd A1, Austin, TX 78745',
              lat: 30.215472,
              lng: -97.762861,
          }
      },
      {
          id: 1,
          name: "Austin Bouldering Project",
          description: "Gym",
          hours: "8 am - 11 pm",
          location: {
              address: '979 Springdale Rd #150, Austin, TX 78702',
              lat: 30.25876235961914,
              lng: -97.69993591308594,
          }
      }
  ],
  map: {
      lat: 0,
      lng: 0
  } 
}