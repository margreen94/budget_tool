import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

export default class PieChart extends Component {
  render() {
    const nameData = [];
    const percentData = [];
    const colorData = [];

    for (var i in this.props.pieData) {
      nameData.push(this.props.pieData[i].name);
      percentData.push(this.props.pieData[i].percent);
      let colorRando = "#" + Math.floor(Math.random() * 16777215).toString(16);
      colorData.push(colorRando);
    }

    const data = {
      labels: nameData,
      datasets: [
        {
          label: "Percentages from total budget",
          data: percentData,
          backgroundColor: colorData,
          borderColor: colorData,
          borderWidth: 1,
          hoverOffset: 10,
          spacing: 2,
        },
      ],
    };
    //options for the pie chart
    const percentage = (tooltipItem, data) => {
      return tooltipItem.label + ": " + tooltipItem.parsed + "%";
    };
    const options = {
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

    return (
      <div>
        <Doughnut data={data} height={300} width={300} options={options} />
      </div>
    );
  }
}
