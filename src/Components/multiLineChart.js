import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class MultiLineChart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataLine: {
        labels: null,
        datasets: null
      }
    }
  }

  dateFormat(d) {
    var monthShortNames = ["January", "Feburary", "March", "April", "May", "June",
      "July", "August", "September", "Octuber", "November", "December"
    ];
    var t = new Date(d);
    return monthShortNames[t.getMonth()];
  }



  async componentDidMount() {

    if (this.props.multilineChartData) {

      let Datasets = [];
      let labels = [];
      let rotiDataPoints = [];
      let biryaniDataPoints = [];
      let tandoorDataPoints = [];
      let muttonSalanDataPoints = [];
      let chickenSalanDataPoints = [];
      let chickenChineseDataPoints = [];
      let sweetsDrinksDataPoints = [];
      let vegiterianChineseDataPoints = [];
      let soupsDataPoints = [];
      let seaFoodDataPoints = [];
      let paneerDataPoints = [];
      let weekSpecialDataPoints = [];
      let vegitableDataPoints = [];
      let curryOnlyDataPoints = [];
      let todaysDataPoints = [];

      let rotiTempPrice = null;
      let biryaniTempPrice = null;
      let tandoorTempPrice = null;
      let muttonSalanTempPrice = null;
      let chickenSalanTempPrice = null;
      let chickenChineseTempPrice = null;
      let sweetDrinksTempPrice = null;
      let vegiterianChineseTempPrice = null;
      let soupsTempPrice = null;
      let seaFoodTempPrice = null;
      let paneerTempPrice = null;
      let weekSpecialTempPrice = null;
      let vegitableTempPrice = null;
      let curryOnlyTempPrice = null;
      let todaysTempPrice = null;

      this.props.multilineChartData.filter((item, i) => {

        if (this.props.multilineChartData[i + 1]) {

          if (item.ITEMGROUPCODE != null) {
            if (labels.includes(this.dateFormat(item.DATEG)) == false) {
              labels.push(this.dateFormat(item.DATEG))
            }
          }

          if (item.ITEMGROUPCODE == "1001") {
            if (this.dateFormat(item.DATEG) == this.dateFormat(this.props.multilineChartData[i + 1].DATEG)) {
              rotiTempPrice += item.ITEMNETPRICE;
            }
            else {
              rotiDataPoints.push(rotiTempPrice);
              rotiTempPrice = 0;
            }
          }
          if (item.ITEMGROUPCODE == "1002") {
            if (this.dateFormat(item.DATEG) == this.dateFormat(this.props.multilineChartData[i + 1].DATEG)) {
              biryaniTempPrice += item.ITEMNETPRICE;
            }
            else {
              biryaniDataPoints.push(biryaniTempPrice);
              biryaniTempPrice = 0;
            }
          }
          if (item.ITEMGROUPCODE == "1003") {

            if (this.dateFormat(item.DATEG) == this.dateFormat(this.props.multilineChartData[i + 1].DATEG)) {
              tandoorTempPrice += item.ITEMNETPRICE;
            }
            else {
              tandoorDataPoints.push(tandoorTempPrice);
              tandoorTempPrice = 0;

            }
          }
          if (item.ITEMGROUPCODE == "1004") {
            if (this.dateFormat(item.DATEG) == this.dateFormat(this.props.multilineChartData[i + 1].DATEG)) {
              muttonSalanTempPrice += item.ITEMNETPRICE;
            }
            else {
              muttonSalanDataPoints.push(muttonSalanTempPrice);
              muttonSalanTempPrice = 0;

            }

          }
          if (item.ITEMGROUPCODE == "1005") {
            if (this.dateFormat(item.DATEG) == this.dateFormat(this.props.multilineChartData[i + 1].DATEG)) {
              chickenSalanTempPrice += item.ITEMNETPRICE;
            }
            else {
              chickenSalanDataPoints.push(chickenSalanTempPrice);
              chickenSalanTempPrice = 0;

            }
          }
          if (item.ITEMGROUPCODE == "1006") {
            if (this.dateFormat(item.DATEG) == this.dateFormat(this.props.multilineChartData[i + 1].DATEG)) {
              chickenChineseTempPrice += item.ITEMNETPRICE;
            }
            else {
              chickenChineseDataPoints.push(chickenChineseTempPrice);
              chickenChineseTempPrice = 0;
            }

          }
          if (item.ITEMGROUPCODE == "1007") {
            if (this.dateFormat(item.DATEG) == this.dateFormat(this.props.multilineChartData[i + 1].DATEG)) {
              sweetDrinksTempPrice += item.ITEMNETPRICE;
            }
            else {
              sweetsDrinksDataPoints.push(sweetDrinksTempPrice);
              sweetDrinksTempPrice = 0;
            }

          }
          if (item.ITEMGROUPCODE == "1008") {
            if (this.dateFormat(item.DATEG) == this.dateFormat(this.props.multilineChartData[i + 1].DATEG)) {
              vegiterianChineseTempPrice += item.ITEMNETPRICE;
            }
            else {
              vegiterianChineseDataPoints.push(vegiterianChineseTempPrice);
              vegiterianChineseTempPrice = 0;
            }

          }
          if (item.ITEMGROUPCODE == "1010") {
            if (this.dateFormat(item.DATEG) == this.dateFormat(this.props.multilineChartData[i + 1].DATEG)) {
              soupsTempPrice += item.ITEMNETPRICE;
            }
            else {
              soupsDataPoints.push(soupsTempPrice);
              soupsTempPrice = 0;
            }
          }
          if (item.ITEMGROUPCODE == "1011") {
            if (this.dateFormat(item.DATEG) == this.dateFormat(this.props.multilineChartData[i + 1].DATEG)) {
              seaFoodTempPrice += item.ITEMNETPRICE;
            }
            else {
              seaFoodDataPoints.push(seaFoodTempPrice);
              seaFoodTempPrice = 0;
            }
          }
          if (item.ITEMGROUPCODE == "1012") {
            if (this.dateFormat(item.DATEG) == this.dateFormat(this.props.multilineChartData[i + 1].DATEG)) {
              paneerTempPrice += item.ITEMNETPRICE;
            }
            else {
              paneerDataPoints.push(paneerTempPrice);
              paneerTempPrice = 0;
            }
          }
          if (item.ITEMGROUPCODE == "1013") {
            if (this.dateFormat(item.DATEG) == this.dateFormat(this.props.multilineChartData[i + 1].DATEG)) {
              weekSpecialTempPrice += item.ITEMNETPRICE;
            }
            else {
              weekSpecialDataPoints.push(weekSpecialTempPrice);
              weekSpecialTempPrice = 0;
            }
          }
          if (item.ITEMGROUPCODE == "1014") {
            if (this.dateFormat(item.DATEG) == this.dateFormat(this.props.multilineChartData[i + 1].DATEG)) {
              vegitableTempPrice += item.ITEMNETPRICE;
            }
            else {
              vegitableDataPoints.push(vegitableTempPrice);
              vegitableTempPrice = 0;

            }
          }
          if (item.ITEMGROUPCODE == "1015") {
            if (this.dateFormat(item.DATEG) == this.dateFormat(this.props.multilineChartData[i + 1].DATEG)) {
              curryOnlyTempPrice += item.ITEMNETPRICE;
            }
            else {
              curryOnlyDataPoints.push(curryOnlyTempPrice);
              curryOnlyTempPrice = 0;
            }
          }
          if (item.ITEMGROUPCODE == "1016") {
            if (this.dateFormat(item.DATEG) == this.dateFormat(this.props.multilineChartData[i + 1].DATEG)) {
              todaysTempPrice += item.ITEMNETPRICE;
            }
            else {
              todaysDataPoints.push(todaysTempPrice);
              todaysTempPrice = 0;
            }
          }
        }
      });

      Datasets.push(this.assignDataSetObjects("roti", rotiDataPoints, "coral", "gray"))
      Datasets.push(this.assignDataSetObjects("biryani", biryaniDataPoints, "turquoise", "gray"))
      Datasets.push(this.assignDataSetObjects("tandoor", tandoorDataPoints, "lightpink", "black"))
      Datasets.push(this.assignDataSetObjects("mutton sallan", muttonSalanDataPoints, "red", "red"))

      Datasets.push(this.assignDataSetObjects("chicken sallan", chickenSalanDataPoints, "#fee140", "#fee140"))
      Datasets.push(this.assignDataSetObjects("chicken chinese", chickenChineseDataPoints, "#b490ca", "#b490ca"))
      Datasets.push(this.assignDataSetObjects("sweet drinks", sweetsDrinksDataPoints, "#38f9d7", "#38f9d7"))
      Datasets.push(this.assignDataSetObjects("vegiterian chinese", vegiterianChineseDataPoints, "#2575fc", "#2575fc"))

      Datasets.push(this.assignDataSetObjects("soups", soupsDataPoints, "#2E40A3", "#2E40A3"))
      Datasets.push(this.assignDataSetObjects("sea food", seaFoodDataPoints, "#1FE331", "#1FE331"))
      Datasets.push(this.assignDataSetObjects("paneer", paneerDataPoints, "#D0F500", "#D0F500"))
      Datasets.push(this.assignDataSetObjects("week special", weekSpecialDataPoints, "#00ff7f", "#00ff7f"))

      Datasets.push(this.assignDataSetObjects("vegitable", vegitableDataPoints, "#EB6BDD", "#EB6BDD"))
      Datasets.push(this.assignDataSetObjects("curry only", curryOnlyDataPoints, "#E56E11", "#E56E11"))
      Datasets.push(this.assignDataSetObjects("today's", todaysDataPoints, "#00FAB2", "#00FAB2"))

      this.setState({
        dataLine: {
          labels: labels,
          datasets: Datasets
        }
      })
    }


  }


  assignDataSetObjects = (label, dataPoints, backgroundColor, borderColor) => {
    let obj = {
      label: label,
      fill: true,
      lineTension: 0.3,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      // pointBorderColor: "rgb(205, 130,1 58)",
      // pointBackgroundColor: "rgb(255, 255, 255)",
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(0, 0, 0)",
      pointHoverBorderColor: "rgba(220, 220, 220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 0.2,
      pointHitRadius: 10,
      data: dataPoints
    }
    // console.log(obj)
    return obj;
  }

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Line chart</h3>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default MultiLineChart;

