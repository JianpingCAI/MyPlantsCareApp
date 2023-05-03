import { FETCH_PLANTS, ADD_PLANT, UPDATE_PLANT, DELETE_PLANT } from '../redux/actions/plantActions';

const initialState = {
  plants: [],
};

const plantReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLANTS:
      return {
        ...state,
        plants: action.payload,
      };
    case ADD_PLANT:
      return {
        ...state,
        plants: [...state.plants, action.payload],
      };
    case UPDATE_PLANT:
      return {
        ...state,
        plants: state.plants.map((plant) =>
          plant.id === action.payload.id ? action.payload : plant
        ),
      };
    case DELETE_PLANT:
      return {
        ...state,
        plants: state.plants.filter((plant) => plant.id !== action.payload),
      };
    default:
      return state;
  }
};

export default plantReducer;
