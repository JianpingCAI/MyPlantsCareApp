import { SCHEDULE_NOTIFICATION, CANCEL_ALL_NOTIFICATIONS } from '../actions/notifications';

const initialState = {
  scheduled: false,
};

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCHEDULE_NOTIFICATION:
      return { ...state, scheduled: true };
    case CANCEL_ALL_NOTIFICATIONS:
      return { ...state, scheduled: false };
    default:
      return state;
  }
};

export default notificationsReducer;
