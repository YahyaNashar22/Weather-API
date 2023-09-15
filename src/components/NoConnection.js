import React, { useState, useEffect } from "react";

const NoInternetConnection = (props) => {
  const [isOnline, setOnline] = useState(true);
  useEffect(() => {
    setOnline(navigator.onLine);
  }, []);
  window.addEventListener("online", () => {
    setOnline(true);
  });

  window.addEventListener("offline", () => {
    setOnline(false);
  });
  if (isOnline) {
    return props.children;
  } else {
    return (
      <h1 className="noconnection">
        No Internet Connection, Please try again later{" "}
        <p className="face">\&#62;^&#60;/</p>
      </h1>
    );
  }
};

export default NoInternetConnection;
