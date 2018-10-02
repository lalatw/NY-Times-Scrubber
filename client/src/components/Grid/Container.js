import React from "react";

export const Container = ({ fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""} border mb-5`}>
    {children}
  </div>
);
