import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Footer from "../../Footer.jsx";
import { useNavigate } from "react-router-dom";
import { excavatingTools, electricEquipment, fuelType, electricityUsage } from "./tool.js";
import "./BasicSelect.css";  // Ensure this file exists

export default function BasicSelect() {
  const [selectedTool, setSelectedTool] = useState("");
  const [electricTool, setElectricTool] = useState("");
  const [coalAmount, setCoalAmount] = useState("");
  const [reduction, setReduction] = useState("");
  const [emissions, setEmissions] = useState(0);
  const [fuelConsumption, setFuelConsumption] = useState("");
  const [fuelEmission, setFuelEmission] = useState(0);
  const [hoursImplemented, setHoursImplemented] = useState("");
  const [total, setTotal] = useState(0);
  const [fuelOfTransport, setFuelOfTransport] = useState("");
  const [distanceTravelled, setDistanceTravelled] = useState("");
  const [transportEmission, setTransportEmission] = useState(0);
  const [power, setPower] = useState("");
  const [time, setTime] = useState("");
  const [energy, setEnergy] = useState(0);
  const [employees, setEmployees] = useState("");
  const [capitaEmissions, setCapitaEmissions] = useState(null);
  const [finalEmission, setFinalEmission] = useState(0);
  const [chartType, setChartType] = useState("individual");
  const [openDialog, setOpenDialog] = useState(false);  // State for controlling dialog visibility
  const navigate = useNavigate();
  const calculateEnergy = () => {
    const P = parseFloat(power) || 0;
    const t = parseFloat(time) || 0;
    const energyKWh = (P * t) / 1000;
    const equipment = electricEquipment.find((tool) => tool.name === electricTool);
    if (equipment) {
      const EF = equipment.emissionFactor;
      const equipmentUsage = energyKWh * EF;
      setEnergy(equipmentUsage);
    }
  };

  const calculateEmissions = () => {
    const tool = excavatingTools.find((tool) => tool.name === selectedTool);
    if (tool) {
      const EF = tool.emissionFactor;
      const A = parseFloat(coalAmount) || 0;
      const ER = parseFloat(reduction) || 0;
      const H = parseFloat(hoursImplemented) || 0;
      const F = parseFloat(fuelConsumption) || 0;

      const excavationEmission = A * EF * H * (1 - ER / 100);
      const fuelEmissions = EF * F;

      setEmissions(excavationEmission);
      setFuelEmission(fuelEmissions);

      const totalEmissions = excavationEmission + fuelEmissions;
      setTotal(totalEmissions);
    }
  };

  const calculateTransportEmission = () => {
    const fuel = parseFloat(fuelOfTransport) || 0;
    const transportEmission = fuel * 2.67;
    setTransportEmission(transportEmission);
  };

  const calculatePerCapitaEmission = () => {
    const totalEmissions = total;
    const transportEmissions = transportEmission;
    const electricEmissions = energy;
    const employeeCount = parseFloat(employees) || 0;

    if (employeeCount > 0) {
      const capitaEmission =
        (totalEmissions + transportEmissions + electricEmissions) / employeeCount;
      setCapitaEmissions(capitaEmission);
    } else {
      setCapitaEmissions(0);
    }
  };

  const calculateTotalEmissions = () => {
    const Emission = total || 0;
    const transportEmissions = transportEmission || 0;
    const energyEmissions = energy || 0;
    const capitaEmission = capitaEmissions || 0;

    const totalMonthlyEmissions =
      Emission + transportEmissions + energyEmissions + capitaEmission;
    setFinalEmission(totalMonthlyEmissions);
  };


const calculateAll = async () => {
  calculateEmissions();
  calculateTransportEmission();
  calculateEnergy();
  calculatePerCapitaEmission();
  calculateTotalEmissions();
  await saveResults();  // Ensure saveResults completes before opening dialog
  setOpenDialog(true);  // Open dialog after calculations
};

const saveResults = async () => {
  // Prepare the data to send to the backend
  const data = {
    mineLocation: 'Location A',        // Example value
    mineSize: 100,                     // Example value
    fuelType: 'Coal',                  // Example value
    fuelQuantity: 50,                 // Example value
    electricityUsage: 'High',         // Example value
    electricityConsumed: 200,         // Example value
    excavationTool: 'Excavator',      // Example value
    electricTool: 'Drill',            // Example value
    coalAmount: 150,                  // Example value
    hoursWorked: 8,                   // Example value
    areaCovered: 500,                 // Example value
    fuelEfficiency: 20,               // Example value
    fuelOfTransport: 30,              // Example value
    distanceTravelled: 100,           // Example value
    waterUsage: 300,                  // Example value
    wasteGenerated: 50,              // Example value
    employees: 10,                    // Example value
    emissions: 200,                   // Example value
    fuelEmission: 150,                // Example value
    transportEmission: 50,            // Example value
    energy: 1000,                     // Example value
    capitaEmissions: 20,              // Example value
    finalEmission: 250                // Example value
  };

  try {
    const response = await axios.post('http://localhost:7000/api/emissions/save', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 201) {
      console.log('Data saved successfully');
    } else {
      console.error('Failed to save data');
    }
  } catch (error) {
    console.error('Error saving data:', error);
  }
};

saveResults();  // Call saveResults function

  return (
    <>
      <div className="m">
        <div className="k1"><h1 className="l1">Emission Calculation</h1></div>
        <Box sx={{ minWidth: 120 }} style={{ padding: "0.1rem 2rem 1rem" }}>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={12}>
              <TextField
                label="Mine Location"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Mine Size (in sq. km.)"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Type of Fuel Used</InputLabel>
                <Select
                  value={selectedTool}
                  onChange={(e) => setSelectedTool(e.target.value)}
                >
                  {fuelType.map((tool) => (
                    <MenuItem key={tool.name} value={tool.name}>
                      {tool.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Fuel Quantity Used (litres)"
                value={hoursImplemented}
                onChange={(e) => setHoursImplemented(e.target.value)}
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} mt={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Electricity Usage</InputLabel>
                <Select
                  value={selectedTool}
                  onChange={(e) => setSelectedTool(e.target.value)}
                >
                  {electricityUsage.map((tool) => (
                    <MenuItem key={tool.name} value={tool.name}>
                      {tool.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Electricity Consumed (kWh)"
                value={hoursImplemented}
                onChange={(e) => setHoursImplemented(e.target.value)}
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>
          <br></br>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Excavation Tool</InputLabel>
                <Select
                  value={selectedTool}
                  onChange={(e) => setSelectedTool(e.target.value)}
                >
                  {excavatingTools.map((tool) => (
                    <MenuItem key={tool.name} value={tool.name}>
                      {tool.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Electric Tool</InputLabel>
                <Select
                  value={electricTool}
                  onChange={(e) => setElectricTool(e.target.value)}
                >
                  {electricEquipment.map((tool) => (
                    <MenuItem key={tool.name} value={tool.name}>
                      {tool.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={2} mt={2}>
            <Grid item xs={12}>
              <TextField
                label="Coal Amount (tons)"
                value={coalAmount}
                onChange={(e) => setCoalAmount(e.target.value)}
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Hours worked (excavation tool)"
                value={reduction}
                onChange={(e) => setReduction(e.target.value)}
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Area Covered By Vegetation (hectares)"
                value={hoursImplemented}
                onChange={(e) => setHoursImplemented(e.target.value)}
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} mt={2}>
            <Grid item xs={12}>
              <TextField
                label="Fuel Efficiency"
                value={fuelConsumption}
                onChange={(e) => setFuelConsumption(e.target.value)}
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Fuel Transport Distance (km)"
                value={distanceTravelled}
                onChange={(e) => setDistanceTravelled(e.target.value)}
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} mt={2}>
            <Grid item xs={12}>
              <TextField
                label="No. of Employees"
                value={employees}
                onChange={(e) => setEmployees(e.target.value)}
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} mt={2}>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={calculateAll}>
                Calculate Emissions
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Emission Results</DialogTitle>
          <DialogContent>
            <p><strong>Coal Amount:</strong> {coalAmount} tons</p>
            <p><strong>Reduction:</strong> {reduction}%</p>
            <p><strong>Excavation Emissions:</strong> {emissions.toFixed(2)} kg CO2</p>
            <p><strong>Fuel Consumption:</strong> {fuelConsumption} litres</p>
            <p><strong>Fuel Emissions:</strong> {fuelEmission.toFixed(2)} kg CO2</p>
            <p><strong>Transport Emissions:</strong> {transportEmission.toFixed(2)} kg CO2</p>
            <p><strong>Electricity Usage:</strong> {energy.toFixed(2)} kWh</p>
            <p><strong>Total Emissions:</strong> {finalEmission.toFixed(2)} kg CO2</p>
            <p><strong>Per Capita Emissions:</strong> {capitaEmissions?.toFixed(2)} kg CO2</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <Footer />
    </>
  );
}
