import { Plant } from '../types';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { Action } from 'redux';

export const ADD_PLANT = 'ADD_PLANT';
export const UPDATE_PLANT = 'UPDATE_PLANT';
export const SET_PLANTS = 'SET_PLANTS';

const MOCK_PLANTS: Plant[] = [
  {
    id: '1',
    name: 'Snake Plant',
    category: 'Indoor',
    imageUrl: 'https://example.com/snake-plant.jpg',
    images: ['https://example.com/snake-plant-1.jpg', 'https://example.com/snake-plant-2.jpg'],
    wateringFrequency: 'Every 2-3 weeks',
    dailyCare: 'Keep in indirect sunlight and avoid overwatering',
  },
  {
    id: '2',
    name: 'Spider Plant',
    category: 'Indoor',
    imageUrl: 'https://example.com/spider-plant.jpg',
    images: ['https://example.com/spider-plant-1.jpg', 'https://example.com/spider-plant-2.jpg'],
    wateringFrequency: 'Every 1-2 weeks',
    dailyCare: 'Keep in bright indirect light and maintain moderate humidity',
  },
  // Add more mocked plants as needed
];



export const addPlant = (plant: Plant): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  // In a real-world app, this should call an API to save the new plant.
  dispatch({
    type: ADD_PLANT,
    plant,
  });
};

export const updatePlant = (
  id: string,
  updates: Partial<Plant>
): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
  // In a real-world app, this should call an API to update the plant.
  dispatch({
    type: UPDATE_PLANT,
    id,
    updates,
  });
};

export const fetchPlants_origin = (): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
  // In a real-world app, this should call an API to fetch the plants.
  const plants: Plant[] = [
    // Add mock data
  ];
  dispatch({
    type: SET_PLANTS,
    plants,
  });
};

export const setPlants = (plants: Plant[]) => ({
  type: SET_PLANTS,
  plants,
});

export const fetchPlants = (): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  // Replace the following line with a call to the API in a real-world app
  dispatch(setPlants(MOCK_PLANTS));
};

export const fetchPlantById_origin = (id: string): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  // In a real-world app, this should call an API to fetch the plant by ID.
  const plant: Plant | null = null;
  dispatch({
    type: SET_PLANTS,
    plants: plant ? [plant] : [],
  });
};

export const setPlant = (plant: Plant) => ({
  type: SET_PLANTS,
  plant,
});

export const fetchPlantById = (id: string): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  // Replace the following line with a call to the API in a real-world app
  dispatch(setPlant(MOCK_PLANTS.find((plant) => plant.id === id)));
};

