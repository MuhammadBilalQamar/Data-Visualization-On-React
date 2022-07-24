
// indexs description

// Bar Chart Data index=2
// single line chart data index=4
// Multiline chart data index= 1




//---------API CALLING-----------------------

// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

// var urlencoded = new URLSearchParams();
// urlencoded.append("identifier", "KKJED");
// urlencoded.append("query", Query('01-JAN-2019', '31-DEC-2019'));
// // declare @DateFrom nvarchar(12)\ndeclare @DateTo nvarchar(12)\nSET @DateFrom = '01-JAN-2019'\nSET @DateTo = '31-DEC-2019'\nSELECT COUNT(*)ASDAYS,SUM(SESSIONCOUNT) SESSIONCOUNT,SUM(ORDERS)ORDERS,SUM(HOrderNetAmount)HOrderNetAmount,SUM(TaxAmount)TaxAmount,SUM(GrossWTax)GrossWTax  FROM V_SalesSumByDate where DATEG BETWEEN @DateFrom AND @DateTo\nSELECT DATEG,ITEMGROUPCODE,ITEMGROUPNAMEE,SUM(ITEMNETPRICE)ITEMNETPRICE FROM V_SalesSumByItems\nwhere DATEG BETWEEN @DateFrom AND @DateTo\nGROUP BY DATEG, ITEMGROUPCODE,ITEMGROUPNAMEE ORDER BY ITEMGROUPCODE\nSELECT ITEMGROUPCODE,ITEMGROUPNAMEE,SUM(ITEMNETPRICE)ITEMNETPRICE FROM V_SalesSumByItems\nwhere DATEG BETWEEN @DateFrom AND @DateTo\nGROUP BY ITEMGROUPCODE,ITEMGROUPNAMEE ORDER BY ITEMGROUPCODE\nSELECT  ItemCode,ItemDescription,SUM(ITEMQTY)ITEMQTY,SUM(ITEMNETPRICE)ITEMNETPRICE FROM V_SalesSumByItems\nwhere DATEG BETWEEN @DateFrom AND @DateTo\nGROUP BY ITEMCODE,ITEMDESCRIPTION ORDER BY ItemNetPrice desc\nSELECT DATEG,HOrderNetAmount FROM V_SalesSumByDate where DATEG BETWEEN @DateFrom AND @DateTo
// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: urlencoded,
//   redirect: 'follow'
// };


// componentdidmount ka hy ye
 // var { barChartData, singleLineChartData, multilineChartData } = this.state;
    // await fetch(proxyurl + "http://192.236.178.77:3001/", requestOptions)
    //   .then(response => response.json())
    //   .then(result => {
    //     barChartData = result[2];
    //     singleLineChartData = result[4];
    //     multilineChartData = result[1];
    //     console.log(result[1]);
    //   })
    //   .catch(error => console.log('error', error));
    // console.log("component did mount complete")
    // this.setState({
    //   isloading: false,
    //   singleLineChartData,
    //   multilineChartData,
    //   barChartData
    // })
