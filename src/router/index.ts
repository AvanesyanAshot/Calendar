import Calendar from "../pages/Calendar";
import Login from "../pages/Login";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}
export enum RouteName {
  LOGIN = "/login",
  CALENDAR = "/",
}

export const publicRoutes: IRoute[] = [
  { path: RouteName.LOGIN, exact: true, component: Login },
];

export const privateRoutes: IRoute[] = [
  { path: RouteName.CALENDAR, exact: true, component: Calendar },
];
