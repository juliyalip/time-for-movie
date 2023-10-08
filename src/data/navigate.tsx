import { Router } from "./routes";

export interface INavigate {
  path: string;
  title: string;
}

export const navigateData: INavigate[] = [
    { path: Router.Home, title: "home" }
];
