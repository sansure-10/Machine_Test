import React, { useState } from "react";
import {
  Grid,
  Typography,
  IconButton,
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Select,
  MenuItem,
  Switch,
  InputAdornment,
  TextField,
} from "@mui/material";
import { green, red } from "@mui/material/colors";
import { Search, ImportExport, Delete, ChevronRight } from "@mui/icons-material";

// Component for displaying the content
const JobContent= () => {
  // State for unit (metric/us)
  const [unit, setUnit] = useState("metric");

  // Function to handle search
  const handleSearch = () => {
    // Perform search functionality here
    console.log("Performing search...");
  };

  // Function to handle unit change (metric/us)
  const handleUnitChange = () => {
    const updatedUnit = unit === "metric" ? "us" : "metric";
    setUnit(updatedUnit);
  };

  // Sample data for the table
  const Data = [
    {
      "SI No": 1,
      AssemblyName: "2”x4” Drop-in T-Bar (1/2” Flex)",
      Length: "100 M",
      Quantity: "- ",
    },
    {
      "SI No": 2,
      AssemblyName: "1”x4” Surface Fluor Fixt",
      Length: "-",
      Quantity: "120",
    },
    {
      "SI No": 3,
      AssemblyName: "1/2” EMT DC SS Connector",
      Length: "-",
      Quantity: "270",
    },
    {
      "SI No": 4,
      AssemblyName: "2”x4” Drop-in T-Bar (1” Flex)",
      Length: "1200 M",
      Quantity: "-",
    },
    {
      "SI No": 5,
      AssemblyName: "13” EMT DC SS Connector",
      Length: "-",
      Quantity: "500",
    },
    {
      "SI No": 6,
      AssemblyName: "2”x6” Surface Fluor Fixt",
      Length: "-",
      Quantity: "1200",
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid
          container
          alignItems="flex-start"
          justifyContent="flex-end"
          marginBottom={"24px"}
        >
          {/* Job title */}
          <Typography variant="h6" component="span" sx={{ marginRight: "382px" }}>
            <Box fontWeight="bold">Job</Box>
          </Typography>
          <Typography style={{ color: "grey" }}>Quote Status &nbsp;&nbsp;</Typography>
          {/* Select for quote status */}
          <Grid item style={{ marginRight: "12px", paddingBottom: "22px" }}>
            <Select value="Accepted" sx={{ bgcolor: "#258D1B", color: "white", height: "17px" }}>
              <MenuItem value="Accepted" sx={{ color: green[500] }}>Accepted</MenuItem>
              <MenuItem value="Rejected" sx={{ color: red[500] }}>Rejected</MenuItem>
            </Select>
          </Grid>
        </Grid>
        {/* Job details */}
        <Box sx={{ bgcolor: "#fff", padding: 2 }}>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={12} sm={6}>
              {/* Job name */}
              <Typography variant="body1" sx={{ color: "grey" }}>
                Job Name
                <Box component="span" fontWeight="bold" color={"black"} sx={{ marginLeft: "32px" }}>
                  Test Project
                </Box>
              </Typography>
              <br />
              {/* Job number */}
              <Typography variant="body1" sx={{ color: "grey" }}>
                Job Number
                <Box component="span" fontWeight="bold" color={"black"} sx={{ marginLeft: "20px" }}>
                  #ABV3265413
                </Box>
              </Typography>
              <br />
              {/* Unit (metric/us) */}
              <Typography variant="body1" sx={{ color: "grey" }}>
                Unit
                <Box component="span" fontWeight="bold" color={"black"} sx={{ marginLeft: "75px" }}>
                  <Switch
                    checked={unit === "us"}
                    onChange={handleUnitChange}
                    color="primary"
                    sx={{
                      "& .MuiSwitch-thumb": {
                        backgroundColor: unit === "us" ? "#4869ED" : "#fff",
                      },
                    }}
                  />
                  {unit === "us" ? "US" : "Metric"}
                </Box>
              </Typography>
              <br />
              {/* Difficulty level */}
              <Typography variant="body1" sx={{ color: "grey" }}>
                Difficulty Level
                <Box component="span" fontWeight="bold" color={"black"} sx={{ marginLeft: "18px" }}>
                  <Select value="high" style={{ height: "19px" }}>
                    <MenuItem value="high">High</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="low">Low</MenuItem>
                  </Select>
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container justifyContent="flex-end">
                <Grid item xs={6}>
                  {/* Buttons */}
                  <Button variant="contained" sx={{ bgcolor: "#2D47B2", color: "#fff", mb: 1 }}>
                    Job Details
                  </Button>
                  <Button variant="contained" sx={{ bgcolor: "#2D47B2", color: "#fff", mb: 1 }}>
                    Button 2
                  </Button>
                  <Button variant="contained" sx={{ bgcolor: "#fff", color: "#2D47B2" }}>
                    Button 3
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12}>
        {/* Search and sorting */}
        <Box sx={{ bgcolor: "#fff", padding: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" component="div">
                {/* Search field */}
                <TextField
                  label="Search Projects"
                  size="extra small"
                  variant="outlined"
                  sx={{
                    width: "150px",
                    height: "3px",
                    bottom: "9px",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Box sx={{ color: "action.active", cursor: "pointer" }}>
                          <Search onClick={handleSearch} />
                        </Box>
                      </InputAdornment>
                    ),
                  }}
                />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} container justifyContent="flex-end">
              <Typography sx={{ color: "grey" }}>Sort by</Typography>
              {/* Select for sorting */}
              <Select value="name" style={{ height: "21px", marginLeft: "8px", top: "4px" }}>
                <MenuItem value="name"> Name</MenuItem>
                <MenuItem value="date">Date</MenuItem>
                {/* Add more sorting options if needed */}
              </Select>
              <Box marginLeft="8px">
                {/* Import button */}
                <Button
                  variant="contained"
                  startIcon={<ImportExport />}
                  sx={{ bgcolor: "#fff", color: "#2D47B2", height: "21px" }}
                >
                  Import
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12}>
        {/* Data table */}
        <Box sx={{ bgcolor: "#fff", padding: 2 }}>
          <Table>
            <TableHead>
              {/* Table header */}
              <TableRow>
                <TableCell> </TableCell>
                <TableCell sx={{ color: "grey" }}>SI No</TableCell>
                <TableCell sx={{ color: "grey" }}>Assembly Name</TableCell>
                <TableCell sx={{ color: "grey" }}>Length</TableCell>
                <TableCell sx={{ color: "grey" }}>Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Table rows */}
              {Data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <ChevronRight style={{ color: "black", marginRight: 4 }} />
                    </Box>
                  </TableCell>
                  <TableCell>{row["SI No"]}</TableCell>
                  <TableCell>{row.AssemblyName}</TableCell>
                  <TableCell>
                    <Typography style={{ color: "#2341BD" }}>
                      {row.Length}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography style={{ color: "#2341BD" }}>
                      {row.Quantity}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {/* Delete button */}
                    <IconButton color="primary" style={{ color: "#4869ED" }}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              {/* Empty rows */}
              {Data.length < 9 &&
                Array.from({ length: 9 - Data.length }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell style={{ fontWeight: "bold" }}>&nbsp;</TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>&nbsp;</TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>&nbsp;</TableCell>
                    <TableCell>&nbsp;</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
      </Grid>
    </Grid>
  );
};

export default JobContent;
