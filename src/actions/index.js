const API_URL = "https://rest.bandsintown.com/artists"
const APP_ID = "task4delta"


export const receiveArtist = (json) => {
  return {
    type: 'RECEIVE_ARTIST',
    artist: json,
    receivedAt: Date.now()
  }
}


export const deleteArtist = (value) => {
  return {
    type: 'DELETE_ARTIST',
    id: value
  }
}
export const fetchData = (name) => {
  return function(dispatch) {
    return Promise.all([
      fetch(`${API_URL}/${name}?app_id=${APP_ID}`).then(response =>response.json()).catch(err => err.response),
      fetch(`${API_URL}/${name}/events?app_id=${APP_ID}`).then(response =>response.json()).catch(err => err.response),
    ])
      .then(json => dispatch(receiveArtist(json)))
    }
}
