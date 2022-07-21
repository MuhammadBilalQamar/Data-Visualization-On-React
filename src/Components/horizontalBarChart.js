import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import DATA from "../data/StreamingHistory0.json"
import { convertArrayOfObjectToArray, convertMonthsNumberToName } from "../utils/functions";

class HorizontalBarChart extends React.Component {
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
        const date = item.endTime.split('-')[1];
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(item);
        return groups;
      }, {});
      if (groups) {
        let data = [];
        for (const key in groups) {
          if (Object.hasOwnProperty.call(groups, key)) {
            data.push({
              label: key,
              dataPoint: groups[key].length
            })
          }
        }
        const sortedData = data.sort((a, b) => a.label > b.label ? 1 : -1);
        const labels = convertArrayOfObjectToArray(sortedData, 'label');
        const dataPoints = convertArrayOfObjectToArray(sortedData, 'dataPoint');

        this.setState({
          dataBar: {
            labels: convertMonthsNumberToName(labels),
            datasets: [
              {
                label: "Average Spotify Usage over Years",
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
            <h3 className="mt-5">Day wise % of spotify streaming</h3>
            <HorizontalBar
              data={this.state.dataBar}
              options={this.state.barChartOptions}
              legend={false}
              height={300}
            />
            <b>(songs played in counts)</b>
          </>
        }
      </MDBContainer>
    );
  }
}

export default HorizontalBarChart;