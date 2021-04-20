export const addBus = (business) => {
  return (dispatch) => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${business.address}&key=AIzaSyDyre8M7zQqm4OfYWjPMncW4BMLrDaERDU`)
    .then((res) => res.json())
    .then((response) => {
      business.lat = response.results[0].geometry.location.lat;
      business.lng = response.results[0].geometry.location.lng;
      const action ={
        type: "ADD_BUSINESS",
        value: BusinessTwoTone
      };
      dispatch(action)
    })
  }
}

export const removeBus = (id) => {
  return {
    type: "REMOVE_BUSINESS",
    value: id,
  };
};

export const loggedIn = (Boolean) => {
  return { type: "LOG_IN", value: Boolean };
};

export const setUser = (username) => {
  return {
    type: "SET_USER",
    value: username,
  };
};