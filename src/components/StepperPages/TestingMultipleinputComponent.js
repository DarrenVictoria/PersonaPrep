import  React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';//for the line chart
import { BarChart, Bar} from 'recharts';//for the bar chart
import { PieChart, Pie, Sector, Cell } from 'recharts';//for the pie chart
import Table from '@mui/material/Table';//Table with progress and percentage
import TableBody from '@mui/material/TableBody';//Table with progress and percentage
import TableCell from '@mui/material/TableCell';//Table with progress and percentage
import TableContainer from '@mui/material/TableContainer';//Table with progress and percentage
import TableHead from '@mui/material/TableHead';//Table with progress and percentage
import TableRow from '@mui/material/TableRow';//Table with progress and percentage

const LineChartData = [
  {
    name: 'Monday',
    LastWeek: 4000,
    ThisWeek: 2400,
    amt: 2400,
  },
  {
    name: 'Tuesday',
    LastWeek: 3000,
    ThisWeek: 1398,
    amt: 2210,
  },
  {
    name: 'Wednesday',
    LastWeek: 2000,
    ThisWeek: 9800,
    amt: 2290,
  },
  {
    name: 'Thursday',
    LastWeek: 2780,
    ThisWeek: 3908,
    amt: 2000,
  },
  {
    name: 'Friday',
    LastWeek: 1890,
    ThisWeek: 4800,
    amt: 2181,
  },
  {
    name: 'Saturday',
    LastWeek: 2390,
    ThisWeek: 3800,
    amt: 2500,
  },
  {
    name: 'Sunday',
    LastWeek: 3490,
    ThisWeek: 4300,
    amt: 2100,
  },
];
const BarChartData = [
  {
    name: '20.3',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '20.4',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '21.1',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '21.2',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '21.3',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '21.4',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '22.1',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '22.2',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '22.3',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '22.4',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '23.1',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];
const PieChartData = [
  { name: 'Recruted', value: 63 },
  { name: 'Not Recruted', value: 47 },
  
];
const PieChartCOLORS = ['#161863', '#00bffe'];
//below code is to show the percentage in the piechart itself
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

//Code for Table with progress and percentage
const rows = [
  { name: 'C#', popularity: 66, color: '#007bff' },
  { name: 'Web', popularity: 75, color: '#28a745' },
  { name: 'Database', popularity: 34, color: '#ffc107' },
  { name: 'Full-stack', popularity: 52, color: '#dc3545' },
];

function createData(name, popularity, color) {
  return { name, popularity, color };
}
//End of Code for Table with progress and percentage

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3,sm: 2 }}
        columns={{ md: 12 }}
        //below styling is to align the grids inside the contianer center.
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        
          {/* <Grid xs={2} sm={4} md={2} > */}
          <Grid xs="auto" sm="auto" md="auto">
          <Card
            sx={{
              maxWidth: 230,
              minHeight: 100,
              bgcolor: "white",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: blue[800] }} aria-label="review">
                  {/* You can add an icon here if you want */}
                </Avatar>
              }
              title="Reviews Received"
              subheader="88"
              sx={{
                "& .MuiCardHeader-title": {
                  fontSize: "13px",
                  fontWeight: "bold",
                  
                },
                "& .MuiCardHeader-subheader": {
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "black",
                },
              }}
            />
          </Card>
          </Grid>
          {/* <Grid xs={2} sm={4} md={2} > */}
          <Grid xs="auto" sm="auto" md="auto">
              <Card
                sx={{
                  maxWidth: 230,
                  minHeight: 100,
                  bgcolor: "white",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: blue[800] }} aria-label="review">
                      {/* You can add an icon here if you want */}
                    </Avatar>
                  }
                  title="Reviews Received"
                  subheader="88"
                  sx={{
                    "& .MuiCardHeader-title": {
                      fontSize: "13px",
                      fontWeight: "bold",
                      paddingRight: "1px",
                    },
                    "& .MuiCardHeader-subheader": {
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "black",
                    },
                  }}
                />
              </Card>
          </Grid>
          {/* <Grid xs={2} sm={4} md={2} > */}
          <Grid xs="auto" sm="auto" md="auto">
              <Card
                sx={{
                  maxWidth: 230,
                  minHeight: 100,
                  bgcolor: "white",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: blue[800] }} aria-label="review">
                      {/* You can add an icon here if you want */}
                    </Avatar>
                  }
                  title="Reviews Received"
                  subheader="88"
                  sx={{
                    "& .MuiCardHeader-title": {
                      fontSize: "13px",
                      fontWeight: "bold",
                      paddingRight: "1px",
                    },
                    "& .MuiCardHeader-subheader": {
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "black",
                    },
                  }}
                />
              </Card>
          </Grid>
          {/* <Grid xs={2} sm={4} md={2} > */}
          <Grid xs="auto" sm="auto" md="auto">
              <Card
                sx={{
                  maxWidth: 230,
                  minHeight: 100,
                  bgcolor: "white",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: blue[800] }} aria-label="review">
                      {/* You can add an icon here if you want */}
                    </Avatar>
                  }
                  title="Reviews Received"
                  subheader="88"
                  sx={{
                    "& .MuiCardHeader-title": {
                      fontSize: "13px",
                      fontWeight: "bold",
                      paddingRight: "1px",
                    },
                    "& .MuiCardHeader-subheader": {
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "black",
                    },
                  }}
                />
              </Card>
        </Grid>
          
        
      </Grid>
      <Grid 
        container spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
      }}
      >
          <Grid item xs={12} sm={5} md={4} mt={3}>
          <Card sx={{borderRadius:"25px",display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column"}}>
            <h3>New signups</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={LineChartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="ThisWeek" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="LastWeek" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
          </Grid>
          <Grid item xs={12} sm={5} md={4} mt={3}>
          <Card sx={{borderRadius:"25px",display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column"}}>
            <h3>Batch Wise Recruitement</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={BarChartData} margin={{top: 5, right: 30, left: 20,bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
          </Grid>

      </Grid>
      <Grid 
        container spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
      }}
      >
          <Grid item xs={12} sm={5} md={4} mt={3}>
          <Card sx={{borderRadius:"25px",display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column"}}>
            <h3>Top Skills</h3>
            <ResponsiveContainer width="100%" height={300}>
              <TableContainer>
                <Table aria-label="simple table" sx={{ borderCollapse: 'collapse' }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Rank</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Popularity</TableCell>
                      <TableCell>Percentage</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={index} >
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell >
                          <div
                            style={{
                              width: '80%', // Reduced width
                              height: 8, // Increased height
                              backgroundColor: 'grey',
                              borderRadius: 4,
                              marginBottom: 5, // Added margin for spacing
                            }}
                          >
                            <div
                              style={{
                                width: `${row.popularity}%`,
                                height: '8px', // Increased height
                                backgroundColor: row.color,
                                borderRadius: 4,
                              }}
                            ></div>
                          </div>
                        </TableCell>
                        <TableCell >{row.popularity}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </ResponsiveContainer>
          </Card>
          </Grid>
          <Grid item xs={12} sm={5} md={4} mt={3}>
          <Card sx={{borderRadius:"25px",display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column"}}>
            <h3>Your Pie Chart</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart >
                <Pie
                  data={PieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {PieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PieChartCOLORS[index % PieChartCOLORS.length]} />
                  ))}
                  
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
          </Grid>

      </Grid>
              
    </Box>
    
  );
}
