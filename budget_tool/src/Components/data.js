const data = {
  labels: ["Food", "Auto", "Home", "Other"],
  datasets: [
    {
      label: "Percentages from total budget",
      data: [10, 20, 30, 40],
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

export default data;
