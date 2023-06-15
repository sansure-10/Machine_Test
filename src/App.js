import React from "react";
import { Grid } from "@mui/material";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import Content from "./Content";

const App = () => {
   // Data for categories
  const categoryData = [
    { "SI No": 1, Name: "Fixtures", Type: "C" },
    { "SI No": 2, Name: "Switches", Type: "C" },
    { "SI No": 3, Name: "Receptacles", Type: "C" },
    { "SI No": 4, Name: "Computer&Phone", Type: "C" },
    { "SI No": 5, Name: "Fire Alarm", Type: "C" },
    { "SI No": 6, Name: "EMT(Branch)", Type: "C" },
    { "SI No": 7, Name: "EMT(Feeder)", Type: "C" },
    { "SI No": 8, Name: "GRC(Feeder)", Type: "C" },
    { "SI No": 9, Name: "GRC(Branch)", Type: "C" },
    { "SI No": 10, Name: "Cable(Branch)", Type: "C" },
    { "SI No": 11, Name: "Cable(Feeder)", Type: "C" },
    { "SI No": 12, Name: "Services", Type: "C" },
    { "SI No": 13, Name: "Panels", Type: "C" },
    { "SI No": 14, Name: "Manual Disconnects", Type: "C" },
  ];
 // Data for subcategories
  const SubcategoryData = [
    { "SI No": 1, Name: "Recessed Fluoroscent", Type: "C" },
    { "SI No": 2, Name: "Surface Fluorescent", Type: "C" },
    { "SI No": 3, Name: "Recessed Incandescent", Type: "C" },
    { "SI No": 4, Name: "Surface Incandescent", Type: "C" },
    { "SI No": 5, Name: "Recessed HO", Type: "C" },
    { "SI No": 6, Name: "Surface HO", Type: "C" },
    { "SI No": 7, Name: "Exit&Emergency", Type: "C" },
    { "SI No": 8, Name: "Fans&Miscellaneous", Type: "C" },
    { "SI No": 9, Name: "Spec Fixtures(Type A...)", Type: "C" },
    { "SI No": 10, Name: "Fixture Connections", Type: "C" },
  ];
   // Data for assemblies
  const AssemblyData = [
    { "SI No": 1, Name: "2x4” Drop-In T-Bar (1/2” Flex)", Type: "A" },
    { "SI No": 2, Name: "1x4” Drop-In T-Bar (1/2” Flex)", Type: "A" },
    { "SI No": 3, Name: "2x4” Drop-In T-Bar (14/2” BX)", Type: "A" },
    { "SI No": 4, Name: "1x4” Drop-In T-Bar (14/2” BX)", Type: "A" },
    { "SI No": 5, Name: "2x2” Drop-In T-Bar (14/2” BX)", Type: "C" },
    { "SI No": 6, Name: "2x4” Drop-In T-Bar (12/2” BX)", Type: "C" },
    { "SI No": 7, Name: "1x4” Drop-In T-Bar (12/2” BX)", Type: "C" },
    { "SI No": 8, Name: "2x4” Drop-In T-Bar (12/2” BX)", Type: "C" },
    { "SI No": 9, Name: "1x4” Drop-In T-Bar (14/2” Teck)", Type: "C" },
    { "SI No": 10, Name: "1x4” Drop-In T-Bar (12/2” Teck)", Type: "C" },
  ];

  
  // Data for modals
  const ModalData = [
    {
      "SI No": 1,
      Description: '4x11/2" SQ Box 1/2"KO',
      Quantity: "2",
      "Fct 1": "2",
      "Fct 2": "2",
      "Catalog Number": "32321AA15",
    },
    {
      "SI No": 2,
      Description: '4"SQ Blank Cover',
      Quantity: "3",
      "Fct 1": "3",
      "Fct 2": "3",
      "Catalog Number": "455641JJH",
    },
  ];

  return (
    <Grid container style={{ backgroundColor: "#f5f6fa" }}>
      <Grid item xs={12}>
        <TopBar />
      </Grid>
      <Grid item container>
        <Grid item xs={1}>
          <SideBar />
        </Grid>
        <Grid item xs={11} style={{ marginLeft: "0" }}>
          <Content
            categoryData={categoryData}
            SubcategoryData={SubcategoryData}
            AssemblyData={AssemblyData}
            ModalData={ModalData}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
