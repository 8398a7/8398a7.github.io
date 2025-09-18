import type { AnyAction, Middleware } from 'redux';
import { pageview, set } from 'react-ga';

const options = {};

const trackPage = (page: string) => {
  set({
    page,
    ...options,
  });
  pageview(page);
};

let currentPage = '';

type LocationChangeAction = AnyAction & {
  type: '@@router/LOCATION_CHANGE';
  payload: {
    location: {
      pathname: string;
      search: string;
    };
  };
};

const isLocationChangeAction = (action: AnyAction): action is LocationChangeAction =>
  action.type === '@@router/LOCATION_CHANGE' &&
  typeof action.payload?.location?.pathname === 'string' &&
  typeof action.payload?.location?.search === 'string';

export const googleAnalytics: Middleware<Record<string, never>, unknown> = () => (next) => (action) => {
  if (isLocationChangeAction(action)) {
    const { pathname, search } = action.payload.location;
    const nextPage = `${pathname}${search}`;

    if (currentPage !== nextPage) {
      currentPage = nextPage;
      trackPage(nextPage);
    }
  }

  return next(action);
};
