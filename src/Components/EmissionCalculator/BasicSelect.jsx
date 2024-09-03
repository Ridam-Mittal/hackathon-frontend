import React, { useState } from 'react';
import axios from 'axios';
import { Box, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { pdfMake } from 'pdfmake/build/pdfmake';
import { vfs } from 'pdfmake/build/vfs_fonts';
import './BasicSelect.css';
import Footer from "../../Footer.jsx";
import {
  excavatingTools,
  electricEquipment,
  fuelType, // Import the correct array
  electricityUsage // Import the correct array
} from "./tool.js";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;



// Function to get suggestions from ChatGPT
const getSuggestionsFromChatGPT = async (data) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant."
          },
          {
            role: "user",
            content: `Given the following input values, provide suggestive measures to reduce carbon emissions:\n\n${JSON.stringify(data, null, 2)}\n\nSuggestions:`
          }
        ],
        max_tokens: 1500
      },
      {
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        }
      }
    );
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return "An error occurred while fetching suggestions.";
  }
};

// Function to generate and download PDF
const generatePDF = (data, suggestions) => {
  pdfMake.vfs = vfs; // Set the font virtual file system

  const documentDefinition = {
    content: [
      { text: 'Emission Calculation Report', style: 'header' },
      { text: `Date: ${new Date().toLocaleDateString()}`, style: 'subheader' },
      { text: 'Input Data', style: 'subheader' },
      {
        ul: [
          `Location: ${data.location}`,
          `Mine Size: ${data.mineSize} hectares`,
          `Fuel Type: ${data.fuelType}`,
          `Fuel Quantity: ${data.fuelQuantity} liters`,
          `Electricity Usage: ${data.electricityUsage}`,
          `Electricity Consumed: ${data.electricityConsumed} kWh`,
          `Selected Excavation Tool: ${data.selectedExcavationTool}`,
          `Selected Electric Equipment: ${data.selectedElectricTool}`,
          `Coal Amount: ${data.coalAmount} tons`,
          `Hours Excavation Tool Used: ${data.hoursExcavationToolUsed}`,
          `Area Vegetation: ${data.areaVegetation} hectares`,
          `Fuel Efficiency: ${data.fuelEfficiency}`,
          `Fuel Transport Distance: ${data.fuelTransportDistance} km`,
          `Number of Employees: ${data.numberOfEmployees}`,
          `Area New Plantation: ${data.areaNewPlantation} hectares`,
          `Sequestration Rate: ${data.sequestrationRate} kg CO2e / hectare`,
          `Market Rate for Carbon Credits: ${data.marketRate} USD / ton`,
          `Reduction in Fuel Usage: ${data.reductionInFuelUsage}%`,
          `Emission Reduction Factor: ${data.emissionReductionFactor}`,
          `Emission from Excavation: ${data.emissionFromExcavation} tons`,
          `Fuel Emission: ${data.fuelEmission} tons`,
          `Transport Emission: ${data.transportEmission} tons`,
          `Electricity Emission: ${data.electricityEmission} tons`,
          `Carbon Sink Gap: ${data.carbonSinkGap} tons`,
          `Afforestation Offset: ${data.afforestationOffset} tons`,
          `Carbon Credits: ${data.carbonCredits} USD`,
          `Reduction Through Technology: ${data.reductionThroughTech} tons`,
          `Per Capita Emissions: ${data.perCapitaEmissions} tons`,
          `Final Emission: ${data.finalEmission} tons`
        ],
        style: 'list'
      },
      { text: 'Suggestions', style: 'subheader' },
      { text: suggestions, style: 'content' }
    ],
    styles: {
      header: { fontSize: 18, bold: true },
      subheader: { fontSize: 14, bold: true, margin: [0, 10, 0, 5] },
      content: { fontSize: 12 },
      list: { margin: [0, 10, 0, 20] }
    }
  };

  pdfMake.createPdf(documentDefinition).download('emission_calculation_report.pdf');
};

const EmissionCalculator = () => {
  // State variables
  const [location, setLocation] = useState('');
  const [mineSize, setMineSize] = useState('');
  const [fuelTypeSelected, setFuelTypeSelected] = useState('');
  const [fuelQuantity, setFuelQuantity] = useState('');
  const [electricityUsageSelected, setElectricityUsageSelected] = useState('');
  const [electricityConsumed, setElectricityConsumed] = useState('');
  const [selectedExcavationTool, setSelectedExcavationTool] = useState('');
  const [selectedElectricTool, setSelectedElectricTool] = useState('');
  const [coalAmount, setCoalAmount] = useState('');
  const [hoursExcavationToolUsed, setHoursExcavationToolUsed] = useState('');
  const [areaVegetation, setAreaVegetation] = useState('');
  const [fuelEfficiency, setFuelEfficiency] = useState('');
  const [fuelTransportDistance, setFuelTransportDistance] = useState('');
  const [numberOfEmployees, setNumberOfEmployees] = useState('');
  const [areaNewPlantation, setAreaNewPlantation] = useState('');
  const [sequestrationRate, setSequestrationRate] = useState('');
  const [marketRate, setMarketRate] = useState('');
  const [reductionInFuelUsage, setReductionInFuelUsage] = useState('');
  const [emissionReductionFactor, setEmissionReductionFactor] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  // Get emission factor based on selection
  const getEmissionFactor = (array, name) => {
    const item = array.find((i) => i.name === name);
    return item ? item.emissionFactor : 0;
  };

  // Calculate emissions and fetch suggestions
  const calculateAll = async () => {
    const excavationToolFactor = getEmissionFactor(excavatingTools, selectedExcavationTool);
    const electricToolFactor = getEmissionFactor(electricEquipment, selectedElectricTool);
    const fuelTypeFactor = getEmissionFactor(fuelType, fuelTypeSelected);
    const electricityUsageFactor = getEmissionFactor(electricityUsage, electricityUsageSelected);

    const emissionFromExcavation = parseFloat(coalAmount) * excavationToolFactor; // Example calculation
    const fuelEmission = parseFloat(fuelQuantity) * fuelTypeFactor;
    const transportEmission = parseFloat(fuelTransportDistance) * 0.3; // Dummy value
    const electricityEmission = parseFloat(electricityConsumed) * electricityUsageFactor;
    const carbonSinkGap = (parseFloat(sequestrationRate) * parseFloat(areaVegetation)) - emissionFromExcavation;
    const afforestationOffset = parseFloat(areaNewPlantation) * 0.6; // Dummy value
    const carbonCredits = afforestationOffset * parseFloat(marketRate); // Dummy value
    const reductionThroughTech = (parseFloat(reductionInFuelUsage) * 0.5); // Dummy value
    const perCapitaEmissions = emissionFromExcavation / parseFloat(numberOfEmployees); // Dummy value
    const finalEmission = emissionFromExcavation + fuelEmission + transportEmission + electricityEmission - afforestationOffset - reductionThroughTech; // Dummy value

    const data = {
      location,
      mineSize: parseFloat(mineSize) || 0,
      fuelType: fuelTypeSelected,
      fuelQuantity: parseFloat(fuelQuantity) || 0,
      electricityUsage: electricityUsageSelected,
      electricityConsumed: parseFloat(electricityConsumed) || 0,
      selectedExcavationTool,
      selectedElectricTool,
      coalAmount: parseFloat(coalAmount) || 0,
      hoursExcavationToolUsed: parseFloat(hoursExcavationToolUsed) || 0,
      areaVegetation: parseFloat(areaVegetation) || 0,
      fuelEfficiency: parseFloat(fuelEfficiency) || 0,
      fuelTransportDistance: parseFloat(fuelTransportDistance) || 0,
      numberOfEmployees: parseInt(numberOfEmployees, 10) || 0,
      areaNewPlantation: parseFloat(areaNewPlantation) || 0,
      sequestrationRate: parseFloat(sequestrationRate) || 0,
      marketRate: parseFloat(marketRate) || 0,
      reductionInFuelUsage: parseFloat(reductionInFuelUsage) || 0,
      emissionReductionFactor: parseFloat(emissionReductionFactor) || 0,
      emissionFromExcavation,
      fuelEmission,
      transportEmission,
      electricityEmission,
      carbonSinkGap,
      afforestationOffset,
      carbonCredits,
      reductionThroughTech,
      perCapitaEmissions,
      finalEmission
    };

    // Fetch suggestions from ChatGPT
    const suggestions = await getSuggestionsFromChatGPT(data);
    setSuggestions(suggestions);
    setOpenDialog(true);
  };

  // Download PDF
  const handleDownloadPDF = () => {
    const data = {
      location,
      mineSize: parseFloat(mineSize) || 0,
      fuelType: fuelTypeSelected,
      fuelQuantity: parseFloat(fuelQuantity) || 0,
      electricityUsage: electricityUsageSelected,
      electricityConsumed: parseFloat(electricityConsumed) || 0,
      selectedExcavationTool,
      selectedElectricTool,
      coalAmount: parseFloat(coalAmount) || 0,
      hoursExcavationToolUsed: parseFloat(hoursExcavationToolUsed) || 0,
      areaVegetation: parseFloat(areaVegetation) || 0,
      fuelEfficiency: parseFloat(fuelEfficiency) || 0,
      fuelTransportDistance: parseFloat(fuelTransportDistance) || 0,
      numberOfEmployees: parseInt(numberOfEmployees, 10) || 0,
      areaNewPlantation: parseFloat(areaNewPlantation) || 0,
      sequestrationRate: parseFloat(sequestrationRate) || 0,
      marketRate: parseFloat(marketRate) || 0,
      reductionInFuelUsage: parseFloat(reductionInFuelUsage) || 0,
      emissionReductionFactor: parseFloat(emissionReductionFactor) || 0
    };
    generatePDF(data, suggestions);
  };

  return (
    <div className="m" style={{ backgroundColor: "White" }}>
      <Box p={3}>
        <Grid container spacing={3}>
          {/* Input Fields */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Mine Size (hectares)"
              type="number"
              value={mineSize}
              onChange={(e) => setMineSize(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Fuel Type</InputLabel>
              <Select
                value={fuelTypeSelected}
                onChange={(e) => setFuelTypeSelected(e.target.value)}
              >
                {fuelType.map((type) => (
                  <MenuItem key={type.name} value={type.name}>{type.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Fuel Quantity (liters)"
              type="number"
              value={fuelQuantity}
              onChange={(e) => setFuelQuantity(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Electricity Usage</InputLabel>
              <Select
                value={electricityUsageSelected}
                onChange={(e) => setElectricityUsageSelected(e.target.value)}
              >
                {electricityUsage.map((usage) => (
                  <MenuItem key={usage.name} value={usage.name}>{usage.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Electricity Consumed (kWh)"
              type="number"
              value={electricityConsumed}
              onChange={(e) => setElectricityConsumed(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Excavation Tool</InputLabel>
              <Select
                value={selectedExcavationTool}
                onChange={(e) => setSelectedExcavationTool(e.target.value)}
              >
                {excavatingTools.map((tool) => (
                  <MenuItem key={tool.name} value={tool.name}>{tool.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Electric Equipment</InputLabel>
              <Select
                value={selectedElectricTool}
                onChange={(e) => setSelectedElectricTool(e.target.value)}
              >
                {electricEquipment.map((equipment) => (
                  <MenuItem key={equipment.name} value={equipment.name}>{equipment.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Coal Amount (in tons)"
              type="number"
              value={coalAmount}
              onChange={(e) => setCoalAmount(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Hours Excavation Tool Used"
              type="number"
              value={hoursExcavationToolUsed}
              onChange={(e) => setHoursExcavationToolUsed(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Area Vegetation (in hectares)"
              type="number"
              value={areaVegetation}
              onChange={(e) => setAreaVegetation(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Fuel Efficiency"
              type="number"
              value={fuelEfficiency}
              onChange={(e) => setFuelEfficiency(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Fuel Transport Distance (in km)"
              type="number"
              value={fuelTransportDistance}
              onChange={(e) => setFuelTransportDistance(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Number of Employees"
              type="number"
              value={numberOfEmployees}
              onChange={(e) => setNumberOfEmployees(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Area New Plantation (in hectares)"
              type="number"
              value={areaNewPlantation}
              onChange={(e) => setAreaNewPlantation(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Sequestration Rate (kg CO2e / hectare)"
              type="number"
              value={sequestrationRate}
              onChange={(e) => setSequestrationRate(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Market Rate for Carbon Credits (USD / ton)"
              type="number"
              value={marketRate}
              onChange={(e) => setMarketRate(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Reduction in Fuel Usage (%)"
              type="number"
              value={reductionInFuelUsage}
              onChange={(e) => setReductionInFuelUsage(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Emission Reduction Factor"
              type="number"
              value={emissionReductionFactor}
              onChange={(e) => setEmissionReductionFactor(e.target.value)}
            />
          </Grid>
          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={calculateAll}
            >
              Calculate
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleDownloadPDF}
              style={{ marginLeft: '16px' }}
            >
              Download PDF
            </Button>
          </Grid>
        </Grid>

        {/* Suggestions Dialog */}
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="lg" fullWidth>
          <DialogTitle>Suggestions to Reduce Carbon Emissions</DialogTitle>
          <DialogContent sx={{ width: '85vw', maxWidth: '90vw', maxHeight: '75vh', overflowY: 'auto' }}>
            {/* <Typography variant="body1">{suggestions}</Typography> */}
            <Typography component="pre" sx={{ whiteSpace: 'pre-wrap' }}>{suggestions}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} color="primary">Close</Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Footer />
    </div>
  );
};

export default EmissionCalculator;



