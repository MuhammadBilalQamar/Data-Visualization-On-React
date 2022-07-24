import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import DATA from "../data/StreamingHistory0.json"
import { convertMsArrayToHrArray, getTopNValues, convertArrayOfObjectToArray } from "../utils/functions";
import moment from "moment";

class BarLineChart extends React.Component {
  state = {
    dataBar: null,
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }

  componentDidMount = () => {
    const { fileData } = this.props;
    try {
      if (fileData) {
        this.getData(fileData)
      }
    }
    catch (error) {
      console.log("error in horizontal bar chart-----", error)
    }
  }


  getData = (array) => {
    try {
      const groups = array.reduce((groups, item) => {
        const date = item.endTime.split(' ')[1];
        const nDate = date.split(':')[0]

        if (!groups[nDate]) {
          groups[nDate] = [];
        }
        groups[nDate].push(item);
        return groups;
      }, {});
      if (groups) {
        let data = [];
        for (const key in groups) {
          if (Object.hasOwnProperty.call(groups, key)) {
            data.push({
              hours: key,
              dataPoint: groups[key].length
            })
          }
        }
        const sortedData = data.sort((a, b) => a.hours > b.hours ? 1 : -1);
        const labels = convertArrayOfObjectToArray(sortedData, 'hours');
        const dataPoints = convertArrayOfObjectToArray(sortedData, 'dataPoint');

        this.setState({
          dataBar: {
            labels: labels,
            datasets: [
              {
                label: "Song played count",
                data: dataPoints,
                backgroundColor: [
                  "rgba(255, 134,159,0.4)",
                  "rgba(98,  182, 239,0.4)",
                  "rgba(255, 218, 128,0.4)",
                  "rgba(113, 205, 205,0.4)",
                  "rgba(170, 128, 252,0.4)",
                  "rgba(255, 177, 101,0.4)",
                  "rgba(255, 218, 128, 1)",
                  "rgba(98,  182, 239,0.4)",
                  "rgba(255, 134,159,0.4)",
                  "rgba(255, 218, 128,0.4)",
                  "rgba(170, 128, 252,0.4)",
                  "rgba(98,  182, 239,0.4)",
                  "rgba(255, 134,159,0.4)",
                  "rgba(255, 177, 101,0.4)",
                  "rgba(255, 134,159,0.4)",
                  "rgba(255, 177, 101,0.4)",
                  "#669999",
                  "#FF3300",
                  "purple",
                  "rgba(255, 218, 128, 1)",
                ],
                borderWidth: 2,
                borderColor: [
                  "rgba(255, 134, 159, 1)",
                  "rgba(98,  182, 239, 1)",
                  "rgba(255, 218, 128, 1)",
                  "rgba(113, 205, 205, 1)",
                  "rgba(170, 128, 252, 1)",
                  "rgba(255, 218, 128, 1)",
                  "rgba(255, 134,159,0.4)",
                  "rgba(255, 134,159,0.4)",
                  "rgba(255, 134,159,0.4)",
                  "rgba(255, 218, 128, 1)",
                  "rgba(170, 128, 252, 1)",
                  "rgba(98,  182, 239, 1)",
                  "rgba(255, 134, 159, 1)",
                  "rgba(255, 218, 128, 1)",
                  "rgba(113, 205, 205, 1)",
                  "rgba(170, 128, 252, 1)",
                  "rgba(255, 218, 128, 1)",
                  "rgba(98,  182, 239, 1)",
                  "rgba(255, 134,159,0.4)",
                  "rgba(255, 177, 101,0.4)",
                ]
              }
            ]
          }
        })
      }
    } catch (error) {
      console.log("error in horizontal bar chart-----", error)
    }
  }

  render() {
    const { dataBar } = this.state;
    return (
      <MDBContainer>
        {dataBar &&
          <>
            <h3 className="mt-5">Average Distribution of Streaming Over Day Hours</h3>
            <Bar
              data={this.state.dataBar}
              options={this.state.barChartOptions}
              legend={false}
              height={300}
            />
            <b>(Hours (in 24 hour format))</b>
          </>
        }
      </MDBContainer>
    );
  }
}

export default BarLineChart;