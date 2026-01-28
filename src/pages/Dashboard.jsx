import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  Avatar,
  AvatarGroup,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Doughnut, Bar } from "react-chartjs-2";

// Icons
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import GroupIcon from "@mui/icons-material/Group";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingIcon from "@mui/icons-material/Pending";
import BusinessIcon from "@mui/icons-material/Business";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  // Sample data for upcoming milestones
  const upcomingMilestones = [
    { task: "Product Beta Launch", date: "Feb 15, 2026", progress: 85, priority: "High" },
    { task: "Seed Round Closing", date: "Feb 28, 2026", progress: 60, priority: "Critical" },
    { task: "Marketing Campaign", date: "Mar 5, 2026", progress: 40, priority: "Medium" },
    { task: "Team Expansion", date: "Mar 10, 2026", progress: 25, priority: "High" },
  ];

  // Team performance data
  const teamPerformance = [
    { dept: "Engineering", members: 5, completion: 78 },
    { dept: "Marketing", members: 2, completion: 92 },
    { dept: "Sales", members: 3, completion: 65 },
    { dept: "Product", members: 2, completion: 88 },
  ];

  // Recent activities
  const activities = [
    { icon: <AttachMoneyIcon />, title: "New investor commitment", desc: "$250K secured", time: "2h ago", color: "#4caf50" },
    { icon: <GroupIcon />, title: "Developer joined team", desc: "John Smith - Senior Dev", time: "5h ago", color: "#2196f3" },
    { icon: <CheckCircleIcon />, title: "MVP milestone completed", desc: "Beta testing begins", time: "1d ago", color: "#ff9800" },
    { icon: <BusinessIcon />, title: "Partnership signed", desc: "Strategic collaboration", time: "2d ago", color: "#9c27b0" },
  ];

  // Funding progress chart
  const fundingData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Funding Raised ($K)",
        data: [0, 150, 350, 500, 650, 800],
        borderColor: "#1f4d3a",
        backgroundColor: "rgba(31, 77, 58, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Revenue projection chart
  const revenueData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Projected",
        data: [50, 120, 200, 350],
        backgroundColor: "#1f4d3a",
      },
      {
        label: "Actual",
        data: [45, 110, 0, 0],
        backgroundColor: "#4caf50",
      },
    ],
  };

  // Milestone completion chart
  const milestoneChart = {
    labels: ["Completed", "In Progress", "Pending"],
    datasets: [
      {
        data: [8, 4, 3],
        backgroundColor: ["#4caf50", "#ff9800", "#e0e0e0"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <Box>
      {/* ================= WELCOME SECTION ================= */}
      <Box
        sx={{
          bgcolor: "linear-gradient(135deg, #1f4d3a 0%, #2d7a54 100%)",
          background: "linear-gradient(135deg, #1f4d3a 0%, #2d7a54 100%)",
          color: "white",
          p: 3,
          borderRadius: 3,
          mb: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Welcome back! 👋
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            Here's what's happening with your startup today
          </Typography>
          <Box display="flex" gap={2} mt={2}>
            <Chip
              label="Seed Stage"
              sx={{ bgcolor: "rgba(255,255,255,0.2)", color: "white" }}
            />
            <Chip
              label="8 Active Projects"
              sx={{ bgcolor: "rgba(255,255,255,0.2)", color: "white" }}
            />
            <Chip
              label="Q1 2026"
              sx={{ bgcolor: "rgba(255,255,255,0.2)", color: "white" }}
            />
          </Box>
        </Box>
        <RocketLaunchIcon sx={{ fontSize: 120, opacity: 0.2 }} />
      </Box>

      {/* ================= KEY METRICS ================= */}
      <Grid container spacing={3} mb={3}>
        {/* Funding Card */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Card sx={{ borderRadius: 3, height: "100%" }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="start">
                <Box>
                  <Typography color="text.secondary" variant="body2" gutterBottom>
                    Total Funding Raised
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" color="#1f4d3a">
                    $800K
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={0.5}>
                    Target: $2M
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: "#e8f5e9" }}>
                  <AttachMoneyIcon sx={{ color: "#1f4d3a" }} />
                </Avatar>
              </Box>
              <Box mt={2}>
                <LinearProgress
                  variant="determinate"
                  value={40}
                  sx={{
                    height: 8,
                    borderRadius: 5,
                    bgcolor: "#e0e0e0",
                    "& .MuiLinearProgress-bar": { bgcolor: "#1f4d3a" },
                  }}
                />
                <Box display="flex" justifyContent="space-between" mt={1}>
                  <Chip
                    label="+$150K this month"
                    size="small"
                    color="success"
                    icon={<TrendingUpIcon />}
                  />
                  <Typography variant="caption" color="text.secondary">
                    40%
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Team Size Card */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Card sx={{ borderRadius: 3, height: "100%" }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="start">
                <Box>
                  <Typography color="text.secondary" variant="body2" gutterBottom>
                    Team Members
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" color="#1f4d3a">
                    12
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={0.5}>
                    Across 4 departments
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: "#e3f2fd" }}>
                  <GroupIcon sx={{ color: "#2196f3" }} />
                </Avatar>
              </Box>
              <Box mt={2}>
                <AvatarGroup max={4} sx={{ justifyContent: "start" }}>
                  <Avatar sx={{ bgcolor: "#1f4d3a", width: 32, height: 32 }}>A</Avatar>
                  <Avatar sx={{ bgcolor: "#4caf50", width: 32, height: 32 }}>B</Avatar>
                  <Avatar sx={{ bgcolor: "#2196f3", width: 32, height: 32 }}>C</Avatar>
                  <Avatar sx={{ bgcolor: "#ff9800", width: 32, height: 32 }}>D</Avatar>
                </AvatarGroup>
                <Box display="flex" gap={1} mt={1.5}>
                  <Chip label="+3 this month" size="small" color="success" />
                  <Chip label="25% growth" size="small" variant="outlined" color="success" />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Milestones Card */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Card sx={{ borderRadius: 3, height: "100%" }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="start">
                <Box>
                  <Typography color="text.secondary" variant="body2" gutterBottom>
                    Milestones Progress
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" color="#1f4d3a">
                    8/15
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={0.5}>
                    Completed this quarter
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: "#fff3e0" }}>
                  <CheckCircleIcon sx={{ color: "#ff9800" }} />
                </Avatar>
              </Box>
              <Box mt={2}>
                <LinearProgress
                  variant="determinate"
                  value={53.3}
                  sx={{
                    height: 8,
                    borderRadius: 5,
                    bgcolor: "#e0e0e0",
                    "& .MuiLinearProgress-bar": { bgcolor: "#ff9800" },
                  }}
                />
                <Box display="flex" justifyContent="space-between" mt={1}>
                  <Chip label="4 in progress" size="small" color="warning" />
                  <Typography variant="caption" color="text.secondary">
                    53.3%
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Compliance Card */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Card sx={{ borderRadius: 3, height: "100%" }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="start">
                <Box>
                  <Typography color="text.secondary" variant="body2" gutterBottom>
                    Legal Compliance
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" color="#1f4d3a">
                    9/12
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={0.5}>
                    Items completed
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: "#f3e5f5" }}>
                  <BusinessIcon sx={{ color: "#9c27b0" }} />
                </Avatar>
              </Box>
              <Box mt={2}>
                <LinearProgress
                  variant="determinate"
                  value={75}
                  sx={{
                    height: 8,
                    borderRadius: 5,
                    bgcolor: "#e0e0e0",
                    "& .MuiLinearProgress-bar": { bgcolor: "#9c27b0" },
                  }}
                />
                <Box display="flex" justifyContent="space-between" mt={1}>
                  <Chip label="3 pending" size="small" color="secondary" />
                  <Typography variant="caption" color="text.secondary">
                    75%
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* ================= CHARTS SECTION ================= */}
      <Grid container spacing={3} mb={3}>
        {/* Funding Progress Chart */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    Fundraising Progress
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Monthly funding raised over time
                  </Typography>
                </Box>
                <IconButton size="small">
                  <MoreVertIcon />
                </IconButton>
              </Box>
              <Box sx={{ height: 300 }}>
                <Line
                  data={fundingData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: { display: false },
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        grid: { color: "#f5f5f5" },
                      },
                      x: {
                        grid: { display: false },
                      },
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Milestone Distribution */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ borderRadius: 3, height: "100%" }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    Milestone Status
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Overall completion
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ height: 240, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Doughnut
                  data={milestoneChart}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: { position: "bottom" },
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* ================= REVENUE & TEAM PERFORMANCE ================= */}
      <Grid container spacing={3} mb={3}>
        {/* Revenue Projection */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    Revenue Projection
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Quarterly comparison (in $K)
                  </Typography>
                </Box>
                <Chip label="2026" size="small" />
              </Box>
              <Box sx={{ height: 280 }}>
                <Bar
                  data={revenueData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: { position: "top" },
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        grid: { color: "#f5f5f5" },
                      },
                      x: {
                        grid: { display: false },
                      },
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Team Performance */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    Team Performance
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Department-wise completion rate
                  </Typography>
                </Box>
                <IconButton size="small">
                  <ArrowForwardIcon />
                </IconButton>
              </Box>
              <Box>
                {teamPerformance.map((team, idx) => (
                  <Box key={idx} mb={2.5}>
                    <Box display="flex" justifyContent="space-between" mb={0.5}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Typography variant="body2" fontWeight="500">
                          {team.dept}
                        </Typography>
                        <Chip label={`${team.members} members`} size="small" sx={{ height: 20 }} />
                      </Box>
                      <Typography variant="body2" fontWeight="bold" color="#1f4d3a">
                        {team.completion}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={team.completion}
                      sx={{
                        height: 8,
                        borderRadius: 5,
                        bgcolor: "#e0e0e0",
                        "& .MuiLinearProgress-bar": {
                          bgcolor:
                            team.completion >= 80
                              ? "#4caf50"
                              : team.completion >= 60
                              ? "#ff9800"
                              : "#f44336",
                        },
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* ================= UPCOMING MILESTONES & RECENT ACTIVITY ================= */}
      <Grid container spacing={3}>
        {/* Upcoming Milestones */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    Upcoming Milestones
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Key tasks in the pipeline
                  </Typography>
                </Box>
                <IconButton size="small">
                  <ArrowForwardIcon />
                </IconButton>
              </Box>

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><b>Task</b></TableCell>
                    <TableCell><b>Due Date</b></TableCell>
                    <TableCell><b>Progress</b></TableCell>
                    <TableCell><b>Priority</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {upcomingMilestones.map((milestone, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{milestone.task}</TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center" gap={0.5}>
                          <CalendarTodayIcon fontSize="small" sx={{ color: "#999" }} />
                          <Typography variant="body2">{milestone.date}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center" gap={1}>
                          <LinearProgress
                            variant="determinate"
                            value={milestone.progress}
                            sx={{
                              width: 80,
                              height: 6,
                              borderRadius: 5,
                              bgcolor: "#e0e0e0",
                              "& .MuiLinearProgress-bar": { bgcolor: "#1f4d3a" },
                            }}
                          />
                          <Typography variant="caption">{milestone.progress}%</Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={milestone.priority}
                          size="small"
                          color={
                            milestone.priority === "Critical"
                              ? "error"
                              : milestone.priority === "High"
                              ? "warning"
                              : "default"
                          }
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Activity */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Card sx={{ borderRadius: 3, height: "100%" }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    Recent Activity
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Latest updates
                  </Typography>
                </Box>
                <IconButton size="small">
                  <MoreVertIcon />
                </IconButton>
              </Box>

              <Box>
                {activities.map((activity, idx) => (
                  <Box
                    key={idx}
                    display="flex"
                    gap={2}
                    mb={2.5}
                    pb={2.5}
                    sx={{
                      borderBottom: idx < activities.length - 1 ? "1px solid #f0f0f0" : "none",
                    }}
                  >
                    <Avatar sx={{ bgcolor: activity.color, width: 40, height: 40 }}>
                      {activity.icon}
                    </Avatar>
                    <Box flex={1}>
                      <Typography variant="body2" fontWeight="500">
                        {activity.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" display="block">
                        {activity.desc}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
                        {activity.time}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}