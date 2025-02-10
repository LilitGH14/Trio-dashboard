import React from "react";

const ProjectManagement = () => <div>ProjectManagement Module</div>;

const compnent = {
  routeProps: {
    path: "/project_management",
    element: <ProjectManagement />,
    children:[
       {
        path: "/project_1",
        name: "Project 1",
        element: <ProjectManagement />,
        children:[]
      },
      {
        path: "/project2",
        name: "Project 2",
        element: <ProjectManagement />,
        children:[]
      },
    ]
  },
  name: "Project Management",
};

export default compnent;
