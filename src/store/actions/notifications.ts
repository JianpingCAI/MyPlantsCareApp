import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { Action } from 'redux';
import { scheduleNotification, cancelAllNotifications } from '../../services/NotificationAPI';

export const SCHEDULE_NOTIFICATION = 'SCHEDULE_NOTIFICATION';
export const CANCEL_ALL_NOTIFICATIONS = 'CANCEL_ALL_NOTIFICATIONS';

export const schedulePlantNotification = (
  title: string,
  message: string,
  date: Date
): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
  scheduleNotification(title, message, date);
  dispatch({
    type: SCHEDULE_NOTIFICATION,
  });
};

export const cancelAllPlantNotifications = (): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  cancelAllNotifications();
  dispatch({
    type: CANCEL_ALL_NOTIFICATIONS,
  });
};
