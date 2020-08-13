import * as actionTypes from './actionTypes';

export const activeNationality = (id) => ({
  type: actionTypes.ACTIVE_NATIONALITY,
  id,
});

export const deactiveAllNationalities = () => ({
  type: actionTypes.DEACTIVE_ALL_NATIONALITIES,
});
