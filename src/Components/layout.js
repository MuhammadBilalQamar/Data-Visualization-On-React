import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBIcon, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import FooterPage from './footer'
import BarChart from './barChart';
import HorizontalBarChart from './horizontalBarChart';
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
                <MDBIcon icon="gem" size="2x" onClick={() => window.location.reload()}>
                  <b style={{ fontSize: "30px" }}>Data Visualization</b>
                </MDBIcon>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem active>
                    <MDBNavLink to="#" onClick={() => window.location.reload()}>Dashboard</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

        </header>

        <main style={{ display: 'flex', height: '100vh', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ padding: 10, marginTop: 70 }}>

            <MDBContainer className="text-center my-5">
              <MyDropzone getFileData={(data) => this.setState({ fileData: data })} fileData={this.state.fileData} />

              {/* HORIZONTAL BAR CHART RENDERING */}
              {fileData &&
                <div style={{ boxShadow: "0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)" }}>
                  {<HorizontalBarChart fileData={fileData} />}
                </div>
              }

              {/* BAR CHART RENDERING */}
              {fileData &&
                <div style={{ backgroundColor: "white", boxShadow: "0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)" }}>
                  {<BarChart fileData={fileData} />}
                </div>
              }

              {/* PIE CHART RENDERING */}
              {fileData &&
                <div style={{ backgroundColor: "white", boxShadow: "0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)" }}>
                  {<PieChart fileData={fileData} />}
                </div>
              }
            </MDBContainer>

          </div>
          <FooterPage />
        </main>
      </div>
    );
  }
}

export default Layout;