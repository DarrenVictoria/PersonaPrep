import  React,{ useEffect, useState } from "react";
// import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import DashboardHeader from "./dashboardHeader";
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
import { getFirestore, collection, getDocs } from "firebase/firestore";

// //below code is to show the percentage in the piechart itself
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
  
const AdminDash = () => {
  const [PieChartData, setPieChartData] = useState([]);
  const PieChartCOLORS = ['#161863', '#00bffe']; // Colors for the pie chart
  const [RecBarChartData, setRecBarChartData] = useState([]);
  const [userCount, setUserCount] = useState(0);//to store the user count that is taken from the DB
  const [feedbackCount, setFeedbackCount] = useState(0);//to store the reviews count that is taken from the DB
  const [DegbarChartData, setDegBarChartData] = useState([]);
  useEffect(() => {
      fetchDataFromFirestore();
  }, []);

  const fetchDataFromFirestore = async () => {
    const firestore = getFirestore();
    const feedbackSnapshot = await getDocs(collection(firestore, "feedback"));
    setFeedbackCount(feedbackSnapshot.size);//to get the reviews count from the db
    const snapshot = await getDocs(collection(firestore, "studentdetails")); 
    setUserCount(snapshot.size);//to get and set the user count from the db
    const data = snapshot.docs.map(doc => doc.data());
    const recruitedCount = data.filter(item => item["Recruitment-Status"] === "recruited").length;
    const nonRecruitedCount = data.filter(item => item["Recruitment-Status"] === "not-recruited").length;
    console.log(nonRecruitedCount);
    console.log(recruitedCount)
    setPieChartData([
        { name: 'Recruited', value: recruitedCount },
        { name: 'Not Recruited', value: nonRecruitedCount }
    ]);

    // Organize data by batch and recruitment status
    const batchMap = new Map();
    data.forEach(item => {
      const batch = item.batch;
      const status = item["Recruitment-Status"];
      const count = batchMap.get(batch) || { Recruited: 0, NotRecruited: 0 };
      if (status === "recruited") {
        count.Recruited++;
      } else if (status === "not-recruited") {
        count.NotRecruited++;
      }
      if(count.Recruited>=1||count.NotRecruited>=1)
      {
      batchMap.set(batch, count);
      }
    });

    // Convert map to array for bar chart data
    const RecChartData = Array.from(batchMap)
    .map(([name, { Recruited, NotRecruited }]) => ({
      name: Number(name) || 0, 
      Recruited,
      NotRecruited
    })).sort((a, b) => a.name - b.name);

    setRecBarChartData(RecChartData);
    console.log(RecChartData);
    
    // Organize data by batch and degree
    const batchDegreeMap = new Map();
    data.forEach(item => {
      const batch = item.batch;
      const degree = item.degree;
      if (degree === "Plymouth University" || degree === "NSBM Green University" || degree === "Victoria University") {
        const count = batchDegreeMap.get(batch) || {};
        count[degree] = (count[degree] || 0) + 1;
        batchDegreeMap.set(batch, count);
      }
      
    });

    // Convert map to array for bar chart data
    const DegChartData = Array.from(batchDegreeMap)
    .map(([batch, degreeCounts]) => ({
      batch: Number(batch) || 0, // Handle potential non-numeric batch names
      ...degreeCounts
    })).sort((a, b) => a.batch - b.batch);

    setDegBarChartData(DegChartData);
    console.log(DegChartData);
};

     
return ( 
  <Box sx={{ display: 'flex'}}>
    <DashboardHeader />
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#d1d1d1',width:"100%" }} >
        <Toolbar />
        <Box sx={{ flexGrow: 1 }}>
          <Grid
              container
              spacing={{ xs: 2, md: 2,sm: 2 }}
              columns={{ md: 12 }}
              //below styling is to align the grids inside the contianer center.
              sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              }}>
              
            <Grid xs={12} sm={6} md={3} >
            {/* <Grid xs="auto" sm="auto" md="auto"> */}
              <Card
                  sx={{
                  maxWidth: 387,
                  minHeight: 150,
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
                      
                      </Avatar>
                  }
                  title="Users"
                  subheader={userCount}//the user count 
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
            <Grid xs={12} sm={6} md={3} >
            {/* <Grid xs="auto" sm="auto" md="auto"> */}
                <Card
                    sx={{
                    maxWidth: 387,
                    minHeight: 150,
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
                    title="CVs Generated"
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
            <Grid xs={12} sm={6} md={3} >
            {/* <Grid xs="auto" sm="auto" md="auto"> */}
                <Card
                    sx={{
                    maxWidth: 387,
                    minHeight: 150,
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
                    title="Interviews taken"
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
            <Grid xs={12} sm={6} md={3} >
            {/* <Grid xs="auto" sm="auto" md="auto"> */}
                <Card
                    sx={{
                    maxWidth: 387,
                    minHeight: 150,
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
                    subheader={feedbackCount} //reviews count 
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
                <Grid item xs={12} sm={6} md={6} mt={3}>
                <Card sx={{borderRadius:"25px",display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column"}}>
                    <h3>Batch Wise Degree</h3>
                    <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={DegbarChartData} margin={{top: 5, right: 30, left: 20,bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="batch" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {/* {Object.keys(DegBarChartData[0] || {}).filter(key => key !== 'batch').map((degree, index) => ( */}
                        <Bar dataKey="Plymouth University" stackId="a" fill="#8884d8" />
                        <Bar dataKey="Victoria University" stackId="a" fill="#82ca9d" />
                        <Bar dataKey="NSBM Green University" stackId="a" fill="#ffc107" />
                      {/* ))} */}
                    </BarChart>
                    </ResponsiveContainer>
                </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} mt={3}>
                <Card sx={{borderRadius:"25px",display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column"}}>
                    <h3>Batch Wise Recruitement</h3>
                    <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={RecBarChartData} margin={{top: 5, right: 30, left: 20,bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Recruited" stackId="a" fill="#8884d8"/>
                        <Bar dataKey="NotRecruited" stackId="a" fill="#82ca9d"/>
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
                <Grid item xs={12} sm={6} md={6} mt={3}>
                <Card sx={{borderRadius:"25px",display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column"}}>
                    <h3>Top Skills</h3>
                    <ResponsiveContainer width="100%" height={400}>
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
                <Grid item xs={12} sm={6} md={6} mt={3}>
                <Card sx={{borderRadius:"25px",display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column"}}>
                    <h3>Your Pie Chart</h3>
                    <ResponsiveContainer width="100%" height={400}>
                    <PieChart >
                        <Pie
                        data={PieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        // label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
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
    </Box>
  </Box>
  );
}
 
export default AdminDash;