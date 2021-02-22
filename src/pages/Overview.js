import React from 'react'
import * as AiIcons from "react-icons/ai";
import Chart from "react-google-charts";
import { Card, ListGroup } from "react-bootstrap";
import './Overview.css'

function Overview() {
    return (
        <div className='dashboard'>
             <h3  style={{position:'absolute', top:'81px', fontSize:'29px', left:'78px'}}>Dashboard<AiIcons.AiFillDashboard style={{fontSize:'20px', color:'#fff', marginLeft:'5px'}}/></h3>
             <div className="dash-container">
      <div className="dash-content">
        <div className="piech">
          <Card className="dash-card-1">
            {}
            <ListGroup variant="flush">
              <ListGroup.Item className="chart-padding">
                <Chart
                  width={"500px"}
                  height={"250px"}
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Task", "Hours per Day"],
                    ["Open", 3],
                    ["Bounce", 1.5],
                    ["Unsubscribe", 3],
                  ]}
                  options={{
                    allowHtml: "true",
                    title: "",
                    /*width: "100%",
                    height: "100%",*/
                    padding: "0px",
                    margin: "0px",
                  }}
                  rootProps={{ "data-testid": "1" }}
                />
              </ListGroup.Item>
              {/* <ListGroup.Item>
                <AccessTimeIcon style={{ marginRight: "10px" }} />
                Campaign sent 2 days ago
              </ListGroup.Item> */}
            </ListGroup>
          </Card>
        </div>
        <div className="linegph">
          <Card>
            <Card.Header>
              <Card.Title>User Behaviour</Card.Title>
              <Card.Subtitle className="text-muted">
                24 Hours Performance
              </Card.Subtitle>
            </Card.Header>
            <Card.Body className='line-graph-padding'>
              <Chart
                width={"600px"}
                height={"280px"}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Time", "Open", "Click",'Click Second Time'],
                  [0, 0, 0, 0],
                  [1, 100, 180, 130 ],
                  [2, 200, 150, 115],
                  [3, 170, 300, 200 ],
                  [4, 180, 150, 130],
                  [5, 280, 323, 350],
                  [6, 110, 301, 275],
                  [7, 270, 190, 230],
                ]}
                options={{
                  hAxis: {
                    title: "",
                  },
                  vAxis: {
                    title: "",
                  },
                  series: {
                    0: { curveType: "function" },
                    1: { curveType: "function" },
                    2: { curveType: "function" },
                  },
                }}
                rootProps={{ "data-testid": "3" }}
              />
            </Card.Body>
            
          </Card>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Overview