import React, { useState } from "react";
import {
  Grid,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  TextField,
  Modal,
  Box,
  Button,
  InputLabel,
  InputAdornment,
  ButtonBase,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";
import { green } from "@mui/material/colors";
import { Search } from "@mui/icons-material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import JobContent from "./JobContent";

const Content = ({
  categoryData,
  SubcategoryData,
  AssemblyData,
  ModalData,
}) => {
  const [currentCategory, setCurrentCategory] = useState("Categories");
  const [previousCategory, setPreviousCategory] = useState("Categories");
  const [openModal, setOpenModal] = useState(false);
  const [assemblyCount, setAssemblyCount] = useState("");
  const [assemblyLength, setAssemblyLength] = useState("");
  const [searchCategory, setSearchCategory] = useState("categories");

  const handleCategoryChange = (category) => {
    setPreviousCategory(currentCategory);
    setCurrentCategory(category);
    setSearchCategory(category);
  };

  const handleBack = () => {
    if (currentCategory === "Sub Categories") {
      setCurrentCategory("Categories");
      setPreviousCategory("");
      setSearchCategory("categories");
    } else if (currentCategory === "Assemblies") {
      setCurrentCategory("Sub Categories");
      setPreviousCategory("Categories");
      setSearchCategory("subcategories");
    }
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleAssemblyAdd = () => {
    // Perform assembly add logic here
    handleModalClose();
  };

  const handleSearch = () => {
    // Perform search logic here
    // Update the category labels based on the search
    if (searchCategory === "categories") {
      setCurrentCategory("Categories");
    } else if (searchCategory === "subcategories") {
      setCurrentCategory("Sub Categories");
    } else if (searchCategory === "assembly") {
      setCurrentCategory("Assemblies");
    }
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <div style={{ position: "relative", marginTop: "25px" }}>
          <Box fontWeight="bold" fontSize={"25px"}>
            <IconButton onClick={handleBack}>
              <ArrowBackIcon />
            </IconButton>

            {currentCategory}
          </Box>
          <Typography
            variant="h6"
            component="div"
            style={{ position: "absolute", top: -17, right: 60 }}
          >
            <TextField
              label="Search"
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
              size="extra small"
              variant="outlined"
              sx={{
                width: "180px",
                height: "30px",
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

          {currentCategory === "Categories" && (
            <TableContainer sx={{ backgroundColor: "#fff" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "grey" }}>SI No</TableCell>
                    <TableCell sx={{ color: "grey" }}>Name</TableCell>
                    <TableCell sx={{ color: "grey" }}>Type</TableCell>
                    <TableCell sx={{ color: "grey" }}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {categoryData.map((category, index) => (
                    <TableRow key={index}>
                      <TableCell style={{ fontWeight: "bold" }}>
                        {index + 1}
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        <InputLabel style={{ fontWeight: "bold" }}>
                          {category.Name}
                        </InputLabel>
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        <InputLabel style={{ fontWeight: "bold" }}>
                          {category.Type}
                        </InputLabel>
                      </TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => handleCategoryChange("Sub Categories")}
                        >
                          <ArrowForwardIcon style={{ color: "#2D47B2" }} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {currentCategory === "Sub Categories" && (
            <TableContainer sx={{ backgroundColor: "#fff" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "grey" }}>SI No</TableCell>
                    <TableCell sx={{ color: "grey" }}>Name</TableCell>
                    <TableCell sx={{ color: "grey" }}>Type</TableCell>
                    <TableCell sx={{ color: "grey" }}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {SubcategoryData.map((Subcategory, index) => (
                    <TableRow key={index}>
                      <TableCell style={{ fontWeight: "bold" }}>
                        {index + 1}
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        <InputLabel style={{ fontWeight: "bold" }}>
                          {Subcategory.Name}
                        </InputLabel>
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        <InputLabel style={{ fontWeight: "bold" }}>
                          {Subcategory.Type}
                        </InputLabel>
                      </TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => handleCategoryChange("Assemblies")}
                        >
                          <ArrowForwardIcon style={{ color: "#2D47B2" }} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                  {SubcategoryData.length < 14 &&
                    Array.from({ length: 14 - SubcategoryData.length }).map(
                      (_, index) => (
                        <ButtonBase
                          key={index}
                          onClick={handleModalOpen}
                          style={{ width: "100%" }}
                        >
                          <TableRow>
                            <TableCell style={{ fontWeight: "bold" }}>
                              &nbsp;
                            </TableCell>
                            <TableCell style={{ fontWeight: "bold" }}>
                              &nbsp;
                            </TableCell>
                            <TableCell style={{ fontWeight: "bold" }}>
                              &nbsp;
                            </TableCell>
                            <TableCell>&nbsp;</TableCell>
                          </TableRow>
                        </ButtonBase>
                      )
                    )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {currentCategory === "Assemblies" && (
            <TableContainer sx={{ backgroundColor: "#fff" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "grey" }}>SI No</TableCell>
                    <TableCell sx={{ color: "grey" }}>Name</TableCell>
                    <TableCell sx={{ color: "grey" }}>Type</TableCell>
                    <TableCell sx={{ color: "grey" }}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {AssemblyData.map((assembly, index) => (
                    <TableRow key={index}>
                      <TableCell style={{ fontWeight: "bold" }}>
                        {index + 1}
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        <InputLabel style={{ fontWeight: "bold" }}>
                          {assembly.Name}
                        </InputLabel>
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        <InputLabel style={{ fontWeight: "bold" }}>
                          {assembly.Type}
                        </InputLabel>
                      </TableCell>
                      <TableCell>
                        <ButtonBase onClick={handleModalOpen}>
                          <IconButton>
                            <AddIcon style={{ color: green[500] }} />
                          </IconButton>
                        </ButtonBase>
                      </TableCell>
                    </TableRow>
                  ))}

                  {AssemblyData.length < 14 &&
                    Array.from({ length: 14 - AssemblyData.length }).map(
                      (_, index) => (
                        <TableRow key={index}>
                          <TableCell style={{ fontWeight: "bold" }}>
                            &nbsp;
                          </TableCell>
                          <TableCell colSpan={2} style={{ fontWeight: "bold" }}>
                            &nbsp;
                          </TableCell>
                          <TableCell>&nbsp;</TableCell>
                        </TableRow>
                      )
                    )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      </Grid>
      <Grid item xs={7}>
        <JobContent/>
      </Grid>
      <Modal open={openModal} onClose={handleModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            variant="h4"
            component="div"
            textAlign={"center"}
            gutterBottom
          >
            Add Assembly to the Project
          </Typography>
          <Typography variant="body1" sx={{ color: "grey" }}>
            Assembly Name
            <Box
              component="span"
              fontWeight="bold"
              color={"black"}
              sx={{ marginLeft: "20px" }}
            >
              {" "}
              2x4" Drop-in-T-Bar(1/2"Flex)
            </Box>
          </Typography>
          <div style={{ display: "flex" }}>
            <TextField
              label="Count"
              value={assemblyCount}
              onChange={(e) => setAssemblyCount(e.target.value)}
              variant="outlined"
              margin="normal"
              style={{ marginRight: "1rem" }}
            />
            <TextField
              label="Length in M"
              value={assemblyLength}
              onChange={(e) => setAssemblyLength(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </div>
          <Typography variant="h6" component="div" gutterBottom>
            Assembly Description
          </Typography>

          <TableContainer style={{ backgroundColor: "#E9EAEF" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>SI No</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Fct1</TableCell>
                  <TableCell>Fct2</TableCell>
                  <TableCell>Catalog Number</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ModalData.map((modal, index) => (
                  <TableRow key={index}>
                    <TableCell style={{ fontWeight: "bold" }}>
                      {modal["SI No"]}
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      {modal.Description}
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      {modal.Quantity}
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      {modal["Fct 1"]}
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      {modal["Fct 2"]}
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      {modal["Catalog Number"]}
                    </TableCell>
                    <TableCell>
                      <IconButton sx={{ color: "black" }}>
                        <EditOutlinedIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}
          >
            <Button onClick={handleModalClose} sx={{ marginRight: 2 }}>
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleAssemblyAdd}
              sx={{ bgcolor: "#2D47B2", color: "#fff" }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Modal>
    </Grid>
  );
};

export default Content;
