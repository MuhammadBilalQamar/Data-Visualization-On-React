import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import DATA from "../data/StreamingHistory0.json"
import moment from "moment";
import { percentage, convertArrayOfObjectToArray } from "../utils/functions";


class PieChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataPie: null
        }
    }

    async componentDidMount() {
        const { fileData } = this.props;
        try {
            if (fileData) {
                const total = this.calculateTotal(fileData)
                const result = await this.groupByDays(fileData);
                const formatedData = await this.formatData(result, total);
                const labels = convertArrayOfObjectToArray(formatedData, 'day');
                const dataPoints = convertArrayOfObjectToArray(formatedData, 'percentage');
                this.setState({
                    dataPie: {
                        labels: labels,
                        datasets: [
                            {
                                data: dataPoints,
                                backgroundColor: [
                                    "#F7464A",
                                    "#46BFBD",
                                    "#FDB45C",
                                    "#949FB1",
                                    "#4D5360",
                                    "#AC64AD",
                                    "#BD3C20",

                                ],
                                hoverBackgroundColor: [
                                    "#FF5A5E",
                                    "#5AD3D1",
                                    "#FFC870",
                                    "#A8B3C5",
                                    "#616774",
                                    "#DA92DB"
                                ]
                            }
                        ]
                    }
                })

            }
        } catch (error) {
            console.log("pie chart error=======", error);
        }
    }

    formatData = (objects, total) => {
        let tempData = []
        for (const key in objects) {
            if (Object.hasOwnProperty.call(objects, key)) {
                const element = objects[key];
                if (element && element.length != 0) {
                    const obtain = this.calculateTotal(element)
                    const calculatedPercentage = percentage(obtain, total);
                    // tempData.push({ totalHours: Number(convertMsToHM(total)), artistName })
                    tempData.push({ day: key, percentage: Number(calculatedPercentage) })
                }
            }
        }
        return tempData;
    }

    groupByDays = (data) => {
        const groups = data.reduce((groups, item) => {
            // const data = item.endTime.split('-')[1];
            const data = moment(item.endTime).format('dddd');
            if (!groups[data]) {
                groups[data] = [];
            }
            groups[data].push(item);
            return groups;
        }, {});
        return groups;
    }

    calculateTotal = (arr) => {
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

    render() {
        const { dataPie } = this.state;
        return (
            <MDBContainer>
                {dataPie &&
                    <>
                        <h3 className="mt-5">Day wise % of spotify streaming</h3>
                        <Pie data={this.state.dataPie} options={{ responsive: true }} height={100} />
                    </>
                }
            </MDBContainer>
        );
    }
}

export default PieChart;