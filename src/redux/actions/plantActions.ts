import { Dispatch } from 'redux';

export const FETCH_PLANTS = 'FETCH_PLANTS';
export const ADD_PLANT = 'ADD_PLANT';
export const UPDATE_PLANT = 'UPDATE_PLANT';
export const DELETE_PLANT = 'DELETE_PLANT';

export const fetchPlants = () => async (dispatch: Dispatch) => {
  // Replace this with an API call to fetch plants data
  const mockData = [
    { id: '1', name: 'Aloe Vera' },
    { id: '2', name: 'Snake Plant' },
    { id: '3', name: 'Peace Lily' },
  ];

  dispatch({
    type: FETCH_PLANTS,
    payload: mockData,
  });
};

export const addPlant = (plant) => ({
  type: ADD_PLANT,
  payload: plant,
});

export const updatePlant = (plant) => ({
  type: UPDATE_PLANT,
  payload: plant,
});

export const deletePlant = (plantId) => ({
  type: DELETE_PLANT,
  payload: plantId,
});
