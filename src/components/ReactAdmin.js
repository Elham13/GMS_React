import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const ReactAdmin = ({ history }) => {
  return (
    <Admin dataProvider={jsonServerProvider("http://localhost:5000")}>
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
};

export default ReactAdmin;
