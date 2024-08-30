import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Footer from "../../Footer.jsx";
import EmissionsChart from "./EmissionChart";
import { excavatingTools, electricEquipment, fuelType,electricityUsage } from "./tool.js";
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

  const calculateEnergy = () => {
    const P = parseFloat(power) || 0;
    const t = parseFloat(time) || 0;
    const energyKWh = (P * t) / 1000;
    const equipment = electricEquipment.find(
      (tool) => tool.name === electricTool
    );
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
        (totalEmissions + transportEmissions + electricEmissions) /
        employeeCount;
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

  const calculateAll = () => {
    calculateEmissions();
    calculateTransportEmission();
    calculateEnergy();
    calculatePerCapitaEmission();
    calculateTotalEmissions();
  };

  return (
    <>
      <div className="m">
        <div className="k1"><h1 class="l1">Emission Calculation</h1></div>
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
              label="Fuel of Transport vehicle (litre/gallon)"
              value={fuelOfTransport}
              onChange={(e) => setFuelOfTransport(e.target.value)}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Distance (km)"
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
              label="Water Usage (liters or cubic meters)"
              value={power}
              onChange={(e) => setPower(e.target.value)}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Waste Generated (tons)"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Number of Employees"
              value={employees}
              onChange={(e) => setEmployees(e.target.value)}
              fullWidth
              size="small"
            />
          </Grid>
        </Grid>

        <Box mt={4} className="graph-btns">
          <Button
            variant="outlined"
            onClick={() => {
              calculateAll();
              setChartType("individual");
              window.location.href = '/new-page'; // Replace with your desired URL
            }}
          >
            Show Analytics
          </Button>
        </Box>

        {/* Display chart */}
        {/* <Box mt={4}>
          <EmissionsChart
            emissionsData={{
              individual: [
                total,
                transportEmission,
                energy,
                capitaEmissions || 0,
              ],
              total: [finalEmission],
            }}
            type={chartType}
          />
        </Box> */}
      </Box>

      <div className="footer-container">
        <Footer />
      </div>
      </div>
      </>
  );
}