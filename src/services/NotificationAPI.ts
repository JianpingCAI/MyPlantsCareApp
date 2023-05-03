import PushNotification from 'react-native-push-notification';

export const scheduleNotification = (title: string, message: string, date: Date) => {
  PushNotification.localNotificationSchedule({
    title: title,
    message: message,
    date: date,
    allowWhileIdle: true,
  });
};

export const cancelAllNotifications = () => {
  PushNotification.cancelAllLocalNotifications();
};
