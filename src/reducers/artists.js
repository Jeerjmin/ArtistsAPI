const defaultState = []

export const ArtistsReducer = (state = defaultState, action) => {
  if (action.type === 'RECEIVE_ARTIST') {
    return [{data:action.artist, id:Math.random()*1000}, ...state ]
  }
  if (action.type ==='DELETE_ARTIST') {
    return state.filter((el,index) => el.id !== action.id)
  }
    return state;
};
