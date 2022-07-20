import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBIcon, MDBRow, MDBBtn, MDBCol, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import FooterPage from './footer'
import SingleLineChart from './singleLineChart';
import BarChart from './barChart';
import MultiLineChart from './multiLineChart';
import PieChart from './pieChart';
import MyDropzone from './fileUploader';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      labels: null,
      dataPoints: [0, 0],
      isloading: false,
      isButtonShow: true,
      barChartData: null,
      singleLineChartData: null,
      multilineChartData: null,
      dateFrom: null,
      dateTo: null,
      errorMessage: null,
      fileData: null
    };
  }




  async componentDidMount() {


  }



  render() {
    const { fileData } = this.state;
    return (
      <div>
        <header>
          <Router >
            <MDBNavbar color="bg-primary" fixed="top" dark expand="md">
              <MDBNavbarBrand href="/">
                <MDBIcon icon="gem" size="2x">
                  <b style={{ fontSize: "30px" }}>Data Visualization</b>
                </MDBIcon>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem active>
                    <MDBNavLink to="#">Dashboard</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

        </header>

        <main >
          <div style={{ padding: 10, marginTop: 70 }}>


            <MDBContainer className="text-center my-5">
              <MyDropzone getFileData={(data) => this.setState({ fileData: data })} />
              {/* <MyDropzone getFileData={(data) => console.log('hey=====',data)} /> */}

              {fileData &&
                <div style={{ backgroundColor: "white", boxShadow: "0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)" }}>
                  {<PieChart fileData={fileData} />}
                </div>
              }

              {/* <div style={{ backgroundColor: "white", boxShadow: "0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)" }}>
                {<BarChart fileData={fileData} />}
              </div> */}

              {/* BAR CHART RENDERING */}
              {fileData &&
                <div style={{ backgroundColor: "white", boxShadow: "0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)" }}>
                  {<BarChart fileData={fileData} />}
                </div>
              }
              {fileData &&
                <div style={{ boxShadow: "0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)" }}>
                  {<SingleLineChart fileData={fileData} />}
                </div>
              }

            </MDBContainer>

            {/* LODER WHILE DATA IS LOADING */}
            {this.state.isloading ?
              <div style={{ textAlign: "center", verticalAlign: "center", height: "100vh", padding: 180 }}>
                <div className="spinner-grow text-info" role="status" style={{ height: 200, width: 200 }}>
                  <span className="sr-only">Loading...</span>
                </div>
                <h3 style={{ fontStyle: "italic", fontWeight: "bolder" }}>Please wait for 2min approx while data is loading......</h3>
              </div>

              : <MDBContainer className="text-center my-5">

                {/* SINGLE LINE CHART RENDERING */}
                <div style={{ backgroundColor: "white", boxShadow: "0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)" }}>
                  {/* {this.state.labels != null && <SingleLineChart labels={this.state.labels} dataPoints={this.state.dataPoints} />} */}
                  {this.state.singleLineChartData != null && <SingleLineChart singleLineChartData={this.state.singleLineChartData} />}

                </div>

                {/* BAR CHART RENDERING */}
                <div style={{ backgroundColor: "white", boxShadow: "0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)" }}>
                  {this.state.barChartData != null && <BarChart barChartData={this.state.barChartData} />}
                </div>

                {/* MULTILINE LINE CHART RENDERING */}
                <div style={{ backgroundColor: "white", boxShadow: "0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)" }}>
                  {this.state.multilineChartData != null && <MultiLineChart multilineChartData={this.state.multilineChartData} />}
                </div>


                {/* ERROR MESSAGE WHILE DATA DOES NOT EXISTS */}

                <div style={{ backgroundColor: "white", boxShadow: "0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)" }}>
                  {this.state.errorMessage != null && <h1>{this.state.errorMessage}</h1>}
                </div>

              </MDBContainer>}

          </div>
          {this.state.singleLineChartData != null && <FooterPage />}

        </main>
      </div>
    );
  }
}

export default Layout;