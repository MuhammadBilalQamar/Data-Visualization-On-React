import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import DATA from "../data/StreamingHistory0.json"
import { convertMsArrayToHrArray, getTopNValues, convertArrayOfObjectToArray } from "../utils/functions";

class BarChart extends React.Component {
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

  async componentDidMount() {
    const { fileData } = this.props;
    console.log("fileData---", fileData)
    try {
      if (fileData) {
        const result = await this.groupByArtist(DATA);
        const formatedData = await this.formatData(result);
        const top10RecordsByTime = await getTopNValues(formatedData, 10);
        const labels = convertArrayOfObjectToArray(top10RecordsByTime, 'artistName');
        const dataPoints = convertMsArrayToHrArray(top10RecordsByTime, 'totalHours')
        this.setState({
          dataBar: {
            labels: labels,
            datasets: [
              {
                label: "My top 10 favourite artist (based on hours)",
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
                ]
              }
            ]
          }
        })
      }
    } catch (error) {
      console.log("bar chart error=======", error);
    }
  }

  groupByArtist = (data) => {
    const groups = data.reduce((groups, item) => {
      const data = item.artistName;
      if (!groups[data]) {
        groups[data] = [];
      }
      groups[data].push(item);
      return groups;
    }, {});
    return groups;
  }

  formatData = (objects) => {
    let tempData = []
    for (const key in objects) {
      if (Object.hasOwnProperty.call(objects, key)) {
        const element = objects[key];
        if (element && element.length != 0) {
          const total = this.calculateSum(element)
          // console.log("total========",total)
          const artistName = key;
          // tempData.push({ totalHours: Number(convertMsToHM(total)), artistName })
          tempData.push({ totalHours: total, artistName })
        }
      }
    }
    return tempData;
  }

  calculateSum = (arr) => {
    if (arr) {
      const sum = arr.reduce((accumulator, object) => {
        return accumulator + object.msPlayed;
      }, 0);
      return sum;
    }
    else {
      return 0;
    }
  }

  convertArrayOfObjectToArray = (arr, key) => {
    try {
      const data = [];
      for (var i = 0; i < arr.length; i++) {
        data.push(arr[i][key]);
      }
      return data;
    } catch (error) {
      console.log(error)
    }
  }

  getYears = (array) => {
    try {
      const groups = array.reduce((groups, item) => {
        const date = item.endTime.split('-')[0];
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(item);
        return groups;
      }, {});
      if (groups) {
        this.setState({
          years: Object.keys(groups),
          selectedYear: Object.keys(groups)[0],
          yearsWithData: groups
        })
      }
    } catch (error) {
      console.log("error in single line chart-----", error)
    }
  }

  getMonthsAndDataPoints = (array) => {
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
        const months = Object.keys(groups);
        const dataPoints = Object.keys(groups).map((date) => {
          return this.calculateSum(groups[date])
        });
        return { months, dataPoints };
      }
    } catch (error) {
      console.log("error in single line chart-----", error)
    }
  }


  render() {
    const { dataBar } = this.state;
    const { fileData } = this.props;
    return (
      <MDBContainer>
        {dataBar &&
          <>
            <h3 className="mt-5">My top 10 favourite artist (based on hours)</h3>
            <Bar data={this.state.dataBar} options={this.state.barChartOptions} legend={false}/>
          </>
        }
      </MDBContainer>
    );
  }
}

export default BarChart;