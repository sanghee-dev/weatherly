import React from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekends = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Time = () => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekend = date.getDay();
  return (
    <div className="Time">
      {weekends[weekend]} {day}, {months[month - 1]}
    </div>
  );
};

export default Time;
