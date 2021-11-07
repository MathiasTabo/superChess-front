export const ALERTS = {
  SUCCESS: 'ALERT_SUCCESS',
  ERROR: 'ALERT_ERROR',
  CLEAR: 'ALERT_CLEAR',
};

function success(message: string) {
  return { type: ALERTS.SUCCESS, message };
}

function error(message: string) {
  return { type: ALERTS.ERROR, message };
}

function clear() {
  return { type: ALERTS.CLEAR };
}

export const alertActions = {
  success,
  error,
  clear,
};
