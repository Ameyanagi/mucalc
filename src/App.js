import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { useState } from 'react';
import LineChart from "./LineChart";
import { getZ, mucal, calcXRange, calcAbsorption, calcEdgeStep, getEdgeEnergy } from "./mucalc"

function App() {

  // store object for calculating x range
  const [xrange, setXRange] = useState();
  const [atom, setAtom] = useState(JSON.parse(localStorage.getItem('atom')) || "Ru");
  const [diluent, setDiluent] = useState(JSON.parse(localStorage.getItem('diluent')) || "BN");
  const [sample, setSample] = useState(JSON.parse(localStorage.getItem('sample')) || "Ru");
  const [mass, setMass] = useState(JSON.parse(localStorage.getItem('mass')) || 0.15);
  const [edge, setEdge] = useState(JSON.parse(localStorage.getItem('edge')) || "K");
  const [area, setArea] = useState(JSON.parse(localStorage.getItem('area')) || 0.938559020685955);
  const [diameter, setDiameter] = useState(JSON.parse(localStorage.getItem('diameter')) || 1.3);
  const [angle, setAngle] = useState(JSON.parse(localStorage.getItem('angle')) || 45);
  const [x_minmax, setX_minmax] = useState(JSON.parse(localStorage.getItem('x_minmax')) || [-200, 1000]);
  const [x_step, setX_step] = useState(JSON.parse(localStorage.getItem('x_step')) || 1);
  const [plotflag, setPlotflag] = useState(false);
  const [absorption, setAbsorption] = useState({ labels: [0], datasets: [{ label: "total", data: [0] }] });
  const [targetedgestep, setTargetedgestep] = useState(JSON.parse(localStorage.getItem('targetedgestep')) || 1);
  const [samplemass, setSamplemass] = useState(0);
  const [diluentmass, setDiluentmass] = useState(0);
  const [absorptiondata, setAbsorptiondata] = useState(0);

  const setAndSaveAtom = (newAtom) => {
    setAtom(newAtom);
    localStorage.setItem('atom', JSON.stringify(newAtom));
  }

  const setAndSaveDiluent = (newDiluent) => {
    setDiluent(newDiluent);
    localStorage.setItem('diluent', JSON.stringify(newDiluent));
  }

  const setAndSaveSample = (newSample) => {
    setSample(newSample);
    localStorage.setItem('sample', JSON.stringify(newSample));
  }

  const setAndSaveMass = (newMass) => {
    setMass(newMass);
    localStorage.setItem('mass', JSON.stringify(newMass));
  }

  const setAndSaveEdge = (newEdge) => {
    setEdge(newEdge);
    localStorage.setItem('edge', JSON.stringify(newEdge));
  }

  const setAndSaveArea = (newArea) => {
    setArea(newArea);
    localStorage.setItem('area', JSON.stringify(newArea));
  }

  const setAndSaveDiameter = (newDiameter) => {
    setDiameter(newDiameter);
    localStorage.setItem('diameter', JSON.stringify(newDiameter));
  }

  const setAndSaveAngle = (newAngle) => {
    setAngle(newAngle);
    localStorage.setItem('angle', JSON.stringify(newAngle));
  }

  const setAndSaveX_minmax = (newX_minmax) => {
    setX_minmax(newX_minmax);
    localStorage.setItem('x_minmax', JSON.stringify(newX_minmax));
  }

  const setAndSaveX_step = (newX_step) => {
    setX_step(newX_step);
    localStorage.setItem('x_step', JSON.stringify(newX_step));
  }

  const setAndSaveXRange = (newX_range) => {
    setXRange(newX_range);
  }

  const setAndSavePlotflag = (newPlotflag) => {
    setPlotflag(newPlotflag);
    localStorage.setItem('plotflag', JSON.stringify(newPlotflag));
  }

  const setAndSaveTargetedgestep = (newTargetedgestep) => {
    setTargetedgestep(newTargetedgestep);
    localStorage.setItem('targetedgestep', JSON.stringify(newTargetedgestep));
  }

  const resetAtom = () => {
    setAndSaveAtom("Ru");
  }

  const resetDiluent = () => {
    setAndSaveDiluent("BN");
  }

  const resetSample = () => {
    setAndSaveSample("Ru");
  }

  const resetMass = () => {
    setAndSaveMass(0.15);
  }

  const resetEdge = () => {
    setAndSaveEdge("K");
  }

  const resetArea = () => {
    setAndSaveArea(0.938559020685955);
  }

  const resetDiameter = () => {
    setAndSaveDiameter(1.3);
  }

  const resetAngle = () => {
    setAndSaveAngle(45);
  }

  const resetX_minmax = () => {
    setAndSaveX_minmax([-200, 1000]);
  }

  const resetX_step = () => {
    setAndSaveX_step(1);
  }

  const resettargetedgestep = () => {
    setAndSaveTargetedgestep(1);
  }

  const resetAll = () => {
    resetAtom();
    resetDiluent();
    resetSample();
    resetMass();
    resetEdge();
    resetArea();
    resetDiameter();
    resetAngle();
    resetX_minmax();
    resetX_step();
    resettargetedgestep();
    setAndSavePlotflag(false);
  }

  const handleAtomChange = (e) => {
    setAndSaveAtom(e.target.value);
  }

  const handleDiluentChange = (e) => {
    setAndSaveDiluent(e.target.value);
  }

  const handleSampleChange = (e) => {
    setAndSaveSample(e.target.value);
  }

  const handleMassChange = (e) => {
    setAndSaveMass(e.target.value);
  }

  const handleEdgeChange = (e) => {
    setAndSaveEdge(e.target.value);
  }

  const handleAreaChange = (e) => {
    const newArea = e.target.value;
    setAndSaveArea(newArea);
    calcDiameter(newArea, angle);
  }

  const handleDiameterChange = (e) => {
    const newDiameter = e.target.value;
    setAndSaveDiameter(newDiameter);
    calcArea(newDiameter, angle);
  }

  const handleAngleChange = (e) => {
    const newAngle = e.target.value;
    setAndSaveAngle(newAngle);
    calcArea(diameter, newAngle);
  }

  const handleX_minmaxChange = (e) => {
    setAndSaveX_minmax(e.target.value);
  }

  const handleX_minChange = (e) => {
    // the values are in eV
    const newx_range = [e.target.value, x_minmax[1]];
    setAndSaveX_minmax(newx_range);
  }

  const handleX_maxChange = (e) => {
    // the values are in eV
    const newx_range = [x_minmax[0], e.target.value];
    setAndSaveX_minmax(newx_range);
  }

  const handleX_stepChange = (e) => {
    // the values are in eV
    setAndSaveX_step(e.target.value);
  }

  const handlePlotFlagChange = (e) => {
    setAndSavePlotflag(e.target.checked);
    if (e.target.checked) {
      calcAbsorptionData();
    }
  }

  const handleTargetedgestepChange = (e) => {
    setAndSaveTargetedgestep(e.target.value);
  }

  const calcArea = (diameter, angle) => {
    let area = diameter * diameter * Math.PI / 4 * Math.cos(angle * Math.PI / 180);
    setAndSaveArea(area);
  }

  const calcDiameter = (area, angle) => {
    let diameter = Math.sqrt(area * 4 / Math.PI / Math.cos(angle * Math.PI / 180));
    setAndSaveDiameter(diameter);
  }

  const calcAngle = (area, diameter) => {
    let angle = Math.acos(4 * area / Math.PI / diameter / diameter) * 180 / Math.PI;
    setAndSaveAngle(angle);
  }

  const calcSampleWeight = () => {
    const sample_edge = calcEdgeStep(sample, atom, edge, x_step / 1000, area);
    const diluent_edge = calcEdgeStep(diluent, atom, edge, x_step / 1000, area);

    const sample_weight = (targetedgestep - diluent_edge * mass) / (sample_edge - diluent_edge);
    const diluent_weight = (-targetedgestep + sample_edge * mass) / (sample_edge - diluent_edge);


    setSamplemass(sample_weight);
    setDiluentmass(diluent_weight);

    return { sample_weight, diluent_weight };
  }

  const calcAbsorptionData = () => {
    const { sample_weight, diluent_weight } = calcSampleWeight();

    const edgeenergy = getEdgeEnergy(atom, edge);

    const newX_range = calcXRange('atom', edgeenergy + x_minmax[0] / 1000, edgeenergy + x_minmax[1] / 1000, x_step / 1000);
    setAndSaveXRange(newX_range);

    let newabsorptiondata = { "sample": { "absorption": [], }, "diluent": { "absorption": [] }, "total": { "absorption": [] } };

    for (let i = 0; i < newX_range.length; i++) {
      newabsorptiondata["sample"].absorption.push(calcAbsorption(sample, newX_range[i], area) * sample_weight);
      newabsorptiondata["diluent"].absorption.push(calcAbsorption(diluent, newX_range[i], area) * diluent_weight);
      newabsorptiondata["total"].absorption.push(newabsorptiondata["sample"].absorption[i] + newabsorptiondata["diluent"].absorption[i]);
    }

    const newchartdata = {
      labels: newX_range,
      datasets: [
        {
          label: "sample",
          data: newabsorptiondata["sample"].absorption,
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          pointRadius: 0,
          borderWidth: 1,
        },
        {
          label: "diluent",
          data: newabsorptiondata["diluent"].absorption,
          borderColor: "rgba(54, 162, 235, 1)",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          pointRadius: 0,
          borderWidth: 1,
        },
        {
          label: "total",
          data: newabsorptiondata["total"].absorption,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgb(75, 192, 192)',
          pointRadius: 0,
          borderWidth: 1
        }],
    }

    setAbsorptiondata(newchartdata);


  }

  const handleSubmit = (e) => {
    e.preventDefault();
    calcAbsorptionData();
  }

  const linechartoption = {
    scales: {
      x: {
        display: true,
        ticks: {
          callback: function (value, index, ticks) {
            return Math.round(this.getLabelForValue(value) * 1000) / 1000;
          },
        }
      }
    }
  }

  return (
    <div className="App">
      <Header />
      <Content
        atom={atom}
        diluent={diluent}
        sample={sample}
        mass={mass}
        edge={edge}
        area={area}
        diameter={diameter}
        angle={angle}
        x_minmax={x_minmax}
        x_step={x_step}
        plotflag={plotflag}
        targetedgestep={targetedgestep}
        samplemass={samplemass}
        diluentmass={diluentmass}
        handleAtomChange={handleAtomChange}
        handleDiluentChange={handleDiluentChange}
        handleSampleChange={handleSampleChange}
        handleMassChange={handleMassChange}
        handleEdgeChange={handleEdgeChange}
        handleAreaChange={handleAreaChange}
        handleDiameterChange={handleDiameterChange}
        handleAngleChange={handleAngleChange}
        handleX_minmaxChange={handleX_minmaxChange}
        handleX_minChange={handleX_minChange}
        handleX_maxChange={handleX_maxChange}
        handleX_stepChange={handleX_stepChange}
        handlePlotFlagChange={handlePlotFlagChange}
        handleTargetedgestepChange={handleTargetedgestepChange}
        handleSubmit={handleSubmit}
        resetAll={resetAll}
        chartData={absorptiondata}
        linechartoption={linechartoption}
      />
      <Footer />
    </div>
  );
}

export default App;
