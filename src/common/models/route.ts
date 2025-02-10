import { ReactNode } from "react";

interface IRouteProps {
  path: string;
  element: ReactNode;
  children?: IRouteProps[];
  name: string;
}

export interface IRoute {
  routeProps: {
    path: string;
    element?: ReactNode;
    children?: IRouteProps[];
  };
  name: string;
}


export interface IIconProps {
  fillColor: string;
  className?:string
}
