import axios from "axios";
//get data for the pie chart
import React from "react";
import { Component } from "react";

const nameData = [];
const percentData = [];
//data for the pie chart
export const data = {
  labels: nameData,
  datasets: [
    {
      label: "Percentages from total budget",
      data: percentData,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
      hoverOffset: 10,
      spacing: 2,
    },
  ],
};
//options for the pie chart
const percentage = (tooltipItem, data) => {
  //   console.log("data" + data);
  //   console.log(tooltipItem);
  return tooltipItem.label + ": " + tooltipItem.parsed + "%";
};
export const options = {
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "My Budget",
      font: {
        size: 25,
      },
    },
    legend: {
      position: "bottom",
    },
    tooltip: {
      callbacks: {
        label: percentage,
      },
    },
  },
};
