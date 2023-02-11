export const getEventCbTitle = (htmlEvent: keyof HTMLElementEventMap): string =>
  `on${htmlEvent[0].toUpperCase()}${htmlEvent.slice(1)}`;
