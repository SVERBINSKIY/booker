const initialState = {
  catalogLayout: 'grid',
  fromMainPage: {
    where: '',
    checkIn: {
      day: null,
      month: null,
      year: null
    },
    checkOut: {
      day: null,
      month: null,
      year: null
    },
    guest: {
      rooms: null,
      adults: null,
      children: null
    }
  }
}

export const catalogReducer = (state = initialState, action) => {
  return state
}