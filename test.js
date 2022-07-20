import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import DATA from "../data/StreamingHistory0.json"
import { convertMonthsNumberToName, convertMsToHM } from "../utils/functions";

class BarChart extends React.Component {
    state = {
        dataBar: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: "% of Votes",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        "rgba(255, 134,159,0.4)",
                        "rgba(98,  182, 239,0.4)",
                        "rgba(255, 218, 128,0.4)",
                        "rgba(113, 205, 205,0.4)",
                        "rgba(170, 128, 252,0.4)",
                        "rgba(255, 177, 101,0.4)"
                    ],
                    borderWidth: 2,
                    borderColor: [
                        "rgba(255, 134, 159, 1)",
                        "rgba(98,  182, 239, 1)",
                        "rgba(255, 218, 128, 1)",
                        "rgba(113, 205, 205, 1)",
                        "rgba(170, 128, 252, 1)",
                        "rgba(255, 177, 101, 1)"
                    ]
                }
            ]
        },
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

    componentDidMount() {
        const { fileData } = this.props;
        const result = this.groupByArtist(DATA);
        const formatedData = this.formatData(result)
        // console.log("result=======",result)
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
                    const artistName = key;
                    tempData.push({ totalHours: convertMsToHM(total), artistName: key })
                    // console.log("total---------",total,key)
                    // element.forEach(element => {

                    // });
                }
                // console.log("element======",element)
            }
        }
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
        return (
            <MDBContainer>
                <h3 className="mt-5">Bar chart</h3>
                <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
            </MDBContainer>
        );
    }
}

export default BarChart;
