export const addList = (listing) => {
  return {
    type: 'ADD_LISTING',
    value: listing
  }
}

export const removeList = (index) => {
  return {
    type: 'REMOVE_LISTING',
    value: index
  }
}

export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    value: user
  }
}

export const deleteUser = () => {
  return{
    type: 'DELETE_USER',
    value: {}
  }
}

export const getLocation = (address) => {
  return (dispatch) => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDyre8M7zQqm4OfYWjPMncW4BMLrDaERDU`)
    .then(res => res.json())
    .then(data => {
      let coordinates = {
        latitude: data.results[0].geometry.location.lat,
        longitude: data.results[0].geometry.location.long
      }
      return dispatch(getCoordinates(coordinates))
    })
  }
}

export const resetGoogleMap = () => {
  return{
    type: 'RESET_MAP',
    value: {}
  }
}