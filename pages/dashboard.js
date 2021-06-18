import React from "react";
import Admin from "../src/layouts/admin";
import Orders from "../src/components/orders";

export default function Dashboard() {
  return (
    <>
      <Orders />
    </>
  );
}

Dashboard.layout = Admin;
