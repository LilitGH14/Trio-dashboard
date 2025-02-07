import React from "react";

const Projects = () => <div>Projects Module</div>;

const compnent = {
  routeProps: {
    path: "/projects",
    children:[
      {
       path: "/project1",
       name: "Project 1",
       element: <Projects />,
       children:[]
     },
     {
       path: "/project2",
       name: "Project 2",
       element:<Projects />,
       children:[]
     },
   ]
  },
  name: "Projects",
};

export default compnent;
