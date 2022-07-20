import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { convertMonthsNumberToName } from "../utils/functions";
import DATA from "../data/Person1History.json"


class SingleLineChart extends React.Component {
    state = {
        dataLine: null,
        years: null,
        selectedYear: null
    };

    componentDidMount() {
        const { fileData } = this.props;
        this.getYears(fileData)
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



    handleChangeYear = (value) => {
        try {
            if (value !== '0') {
                const { yearsWithData } = this.state;
                const selectedYearData = yearsWithData[value];
                const result = this.getMonthsAndDataPoints(selectedYearData)
                this.setState({
                    dataLine: {
                        labels: convertMonthsNumberToName(result.months),
                        datasets: [
                            {
                                label: "Total ms played",
                                fill: true,
                                lineTension: 0.3,
                                backgroundColor: "rgba(225, 204,230, .3)",
                                borderColor: "rgb(205, 130, 158)",
                                borderCapStyle: "butt",
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: "miter",
                                pointBorderColor: "rgb(205, 130,1 58)",
                                pointBackgroundColor: "rgb(255, 255, 255)",
                                pointBorderWidth: 10,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: "rgb(0, 0, 0)",
                                pointHoverBorderColor: "rgba(220, 220, 220,1)",
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data: result.dataPoints
                            }
                        ]
                    },
                    selectedYearData: value
                })
            }
        } catch (error) {
            console.log('single line chart error=====', error)
        }
    }


    render() {
        const { years, selectedYear, dataLine } = this.state;
        return (
            <MDBContainer>
                <h3 className="mt-5">Line chart</h3>
                {years && years.length > 0 &&
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
                        <div>
                            <b>Select year</b>
                            <select className="browser-default custom-select" onChange={(e) => this.handleChangeYear(e.target.value)}>
                                <option value={'0'}>Select year</option>
                                {years.map((item, index) => {
                                    return (
                                        <option value={item} key={index}>{item}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                }

                {dataLine && <Line data={this.state.dataLine} options={{ responsive: true }} />}
            </MDBContainer>
        );
    }
}

export default SingleLineChart;