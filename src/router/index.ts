import Calendar from "../pages/Calendar";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

export interface IRoute {
  path: string;
  component: React.ComponentType;
}
export enum RouteName {
  LOGIN = "/login",
  CALENDAR = "/",
  NOTFOUND = "*",
}

export const publicRoutes: IRoute[] = [
  { path: RouteName.LOGIN, component: Login },
  { path: RouteName.NOTFOUND, component: NotFound },
];

export const privateRoutes: IRoute[] = [
  { path: RouteName.CALENDAR, component: Calendar },
  { path: RouteName.NOTFOUND, component: NotFound },
];
