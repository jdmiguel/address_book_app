import { nationalities } from '../utils/constants';

const { swiss, spanish, french, british } = nationalities;

const initialState = {
  nationalities: [
    {
      id: swiss.id,
      img: swiss.src,
      text: swiss.text,
      active: false,
    },
    {
      id: spanish.id,
      img: spanish.src,
      text: spanish.text,
      active: false,
    },
    {
      id: french.id,
      img: french.src,
      text: french.text,
      active: false,
    },
    {
      id: british.id,
      img: british.src,
      text: british.text,
      active: false,
    },
  ],
  currentNationalityId: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTIVE_NATIONALITY':
      return {
        ...state,
        nationalities: state.nationalities.map((nationality) => ({
          ...nationality,
          active: nationality.id === action.id,
        })),
        currentNationalityId: state.nationalities.find(
          (nationality) => nationality.id === action.id,
        ).id,
      };
    case 'DEACTIVE_ALL_NATIONALITIES':
      return {
        ...state,
        nationalities: state.nationalities.map((nationality) => ({
          ...nationality,
          active: false,
        })),
        currentNationalityId: '',
      };
    default:
      return state;
  }
};

export default reducer;
