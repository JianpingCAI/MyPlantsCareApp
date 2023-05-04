import { Plant } from "../types";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";
import { Action } from "redux";

export const ADD_PLANT = "ADD_PLANT";
export const UPDATE_PLANT = "UPDATE_PLANT";
export const SET_PLANTS = "SET_PLANTS";
export const GET_PLANT = "GET_PLANT";

interface AddPlantAction {
  type: typeof ADD_PLANT;
  plant: Plant;
}

interface UpdatePlantAction {
  type: typeof UPDATE_PLANT;
  id: string;
  updates: Partial<Plant>;
}

interface SetPlantsAction {
  type: typeof SET_PLANTS;
  plants: Plant[];
}

interface SetPlantAction {
  type: typeof GET_PLANT;
  plant: Plant;
}

export type PlantActions = AddPlantAction | UpdatePlantAction | SetPlantsAction | SetPlantAction;

const MOCK_PLANTS: Plant[] = [
  {
    id: "1",
    name: "Snake Plant",
    category: "Indoor",
    imageUrl:
      "https://img.etsystatic.com/il/a56b69/1504096858/il_340x270.1504096858_moqs.jpg?version=0",
    images: [
      "https://img-shoplineapp-com.s3.amazonaws.com/media/image_clips/5b2d279a10abb97d5900697f/large.jpg?1529685913",
      "https://img-shoplineapp-com.s3.amazonaws.com/media/image_clips/5b2d293910abb97da4005f38/large.jpg?1529686328",
    ],
    wateringFrequency: "Every 2-3 weeks",
    dailyCare: "Keep in indirect sunlight and avoid overwatering",
  },
  {
    id: "2",
    name: "Spider Plant",
    category: "Indoor",
    imageUrl:
      "https://m.media-amazon.com/images/I/71ebz3hq0aL._CR0,204,1224,1224_UX256.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71ebz3hq0aL._CR0,204,1224,1224_UX256.jpg",
      "https://m.media-amazon.com/images/I/71ebz3hq0aL._CR0,204,1224,1224_UX256.jpg",
    ],
    wateringFrequency: "Every 1-2 weeks",
    dailyCare: "Keep in bright indirect light and maintain moderate humidity",
  },
  // Add more mocked plants as needed
];

export const addPlant =
  (plant: Plant): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch) => {
    // In a real-world app, this should call an API to save the new plant.
    dispatch({
      type: ADD_PLANT,
      plant,
    });
  };

export const updatePlant =
  (
    id: string,
    updates: Partial<Plant>
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch) => {
    // In a real-world app, this should call an API to update the plant.
    dispatch({
      type: UPDATE_PLANT,
      id,
      updates,
    });
  };

export const fetchPlants_origin =
  (): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch) => {
    // In a real-world app, this should call an API to fetch the plants.
    const plants: Plant[] = [
      // Add mock data
    ];
    dispatch({
      type: SET_PLANTS,
      plants,
    });
  };

const setPlants = (plants: Plant[]) => ({
  type: SET_PLANTS,
  plants,
});

export const fetchPlants =
  (): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch) => {
    // Replace the following line with a call to the API in a real-world app
    dispatch(setPlants(MOCK_PLANTS));
  };

export const fetchPlantById_origin =
  (id: string): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch) => {
    // In a real-world app, this should call an API to fetch the plant by ID.
    const plant: Plant | null = null;
    dispatch({
      type: GET_PLANT,
      plant: plant ? [plant] : [],
    });
  };

export const setPlant = (plant: Plant | null | undefined) => ({
  type: GET_PLANT,
  plant,
});

export const fetchPlantById =
  (id: string): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch) => {
    // Replace the following line with a call to the API in a real-world app
    dispatch(setPlant(MOCK_PLANTS.find((plant) => plant.id === id)));
  };
