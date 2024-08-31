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
  const [location, setLocation] = useState("");
  const [mineSize, setMineSize] = useState(0);
  const [fuelType2, setFuelType2] = useState("");
  const [fuelQuantity, setFuelQuantity] = useState(0);
  const [electricityUsage2, setElectricityUsage2] = useState("");
  const [electricityConsumed, setElectricityConsumed] = useState(0);
  const [selectedTool, setSelectedTool] = useState("");
  const [electricTool, setElectricTool] = useState("");
  const [coalAmount, setCoalAmount] = useState(0);
  const [reduction, setReduction] = useState(0);
  const [emissions, setEmissions] = useState(0);
  const [fuelConsumption, setFuelConsumption] = useState(0);
  const [fuelEmission, setFuelEmission] = useState(0);
  const [hoursImplemented, setHoursImplemented] = useState(0);
  const [areaCovered, setAreaCovered] = useState(0);
  const [fuelEfficiency, setFuelEfficiency] = useState(0);
  const [total, setTotal] = useState(0);
  const [fuelOfTransport, setFuelOfTransport] = useState("");
  const [distanceTravelled, setDistanceTravelled] = useState(0);
  const [transportEmission, setTransportEmission] = useState(0);
  const [power, setPower] = useState("");
  const [time, setTime] = useState("");
  const [energy, setEnergy] = useState(0);
  const [employees, setEmployees] = useState(0);
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
    mineLocation: location,
    mineSize: parseFloat(mineSize) || 0,
    fuelType: fuelType2,
    fuelQuantity: parseFloat(fuelQuantity) || 0,
    electricityUsage: electricityUsage2,
    electricityConsumed: parseFloat(electricityConsumed) || 0,
    excavationTool: selectedTool,
    electricTool: electricTool,
    coalAmount: parseFloat(coalAmount) || 0,
    hoursWorked: parseFloat(reduction) || 0,
    areaCovered: parseFloat(areaCovered) || 0,
    fuelEfficiency: parseFloat(fuelEfficiency) || 0,
    fuelOfTransport: parseFloat(fuelOfTransport) || 0,
    distanceTravelled: parseFloat(distanceTravelled) || 0,
    waterUsage: 0, // Default value
    wasteGenerated: 0, // Default value
    employees: parseInt(employees, 10) || 0,
    emissions: parseFloat(emissions.toFixed(2)),
    fuelEmission: parseFloat(fuelEmission.toFixed(2)),
    transportEmission: parseFloat(transportEmission.toFixed(2)),
    energy: parseFloat(energy.toFixed(2)),
    capitaEmissions: parseFloat(capitaEmissions?.toFixed(2)) || 0,
    finalEmission: parseFloat(finalEmission.toFixed(2)),
    date: new Date()
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
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Mine Size (in sq. km.)"
              fullWidth
              size="small"
              value={mineSize}
              onChange={(e) => setMineSize(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Type of Fuel Used</InputLabel>
              <Select
                value={fuelType2}
                onChange={(e) => setFuelType2(e.target.value)}
              >
                {fuelType.map((fuel) => (
                  <MenuItem key={fuel.name} value={fuel.name}>
                    {fuel.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Fuel Quantity Used (litres)"
              value={fuelQuantity}
              onChange={(e) => setFuelQuantity(e.target.value)}
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
                value={electricityUsage2}
                onChange={(e) => setElectricityUsage2(e.target.value)}
              >
                {electricityUsage.map((usage) => (
                  <MenuItem key={usage.name} value={usage.name}>
                    {usage.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Electricity Consumed (kWh)"
              value={electricityConsumed}
              onChange={(e) => setElectricityConsumed(e.target.value)}
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
              value={hoursImplemented}
              onChange={(e) => setHoursImplemented(e.target.value)}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Area Covered By Vegetation (hectares)"
              value={areaCovered}
              onChange={(e) => setAreaCovered(e.target.value)}
              fullWidth
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={12}>
            <TextField
              label="Fuel Efficiency"
              value={fuelEfficiency}
              onChange={(e) => setFuelEfficiency(e.target.value)}
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
