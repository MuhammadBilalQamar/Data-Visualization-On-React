// import React from "react";
// import { Pie } from "react-chartjs-2";
// import { MDBContainer } from "mdbreact";
// import pieData from './piechartData';

// var Labels = [];
// var dataPoints = [];
// pieData.forEach(element => {
//     Labels.push(element.ITEMGROUPNAMEE)
//     dataPoints.push(element.ITEMNETPRICE)
// });


// class PieChart extends React.Component {


//     constructor(props) {
//         super(props);
//         this.state = {
//             dataPie: {
//                 labels: Labels,
//                 datasets: [
//                     {
//                         data: dataPoints,
//                         backgroundColor: [
//                             "#F7464A",
//                             "#46BFBD",
//                             "#FDB45C",
//                             "#949FB1",
//                             "#4D5360",
//                             "#AC64AD",
//                             "#BD3C20",
//                             "#86CB1B",
//                             "#A3AB09",
//                             "#2B20CC",
//                             "#E10FC4",
//                             "#DC79B2",
//                             "#E20728",
//                             "#FF5733",
//                             "#23E2EE",
//                             "#EDFC00",

//                         ],
//                         hoverBackgroundColor: [
//                             "#FF5A5E",
//                             "#5AD3D1",
//                             "#FFC870",
//                             "#A8B3C5",
//                             "#616774",
//                             "#DA92DB"
//                         ]
//                     }
//                 ]
//             }
//         }
//     }
//     async componentDidMount() {

//     }


//     render() {
//         return (
//             <MDBContainer>
//                 <h3 className="mt-5">Pie chart</h3>
//                 <Pie data={this.state.dataPie} options={{ responsive: true }} />
//             </MDBContainer>
//         );
//     }
// }

// export default PieChart;