import React from 'react'
import { CSVLink } from 'react-csv'
import LineChart from './LineChart'

// arugument for the content component
// atom={atom}
// diluent={diluent}
// sample={sample}
// mass={mass}
// edge={edge}
// area={area}
// diameter={diameter}
// angle={angle}
// x_minmax={x_minmax}
// x_step={x_step}
// handleAtomChange={handleAtomChange}
// handleDiluentChange={handleDiluentChange}
// handleSampleChange={handleSampleChange}
// handleMassChange={handleMassChange}
// handleEdgeChange={handleEdgeChange}
// handleAreaChange={handleAreaChange}
// handleDiameterChange={handleDiameterChange}
// handleAngleChange={handleAngleChange}
// handleX_minmaxChange={handleX_minmaxChange}
// handleX_stepChange={handleX_stepChange}
// resetAll={resetAll}
// resetAtom={resetAtom}
// resetDiluent={resetDiluent}
// resetSample={resetSample}
// resetMass={resetMass}
// resetEdge={resetEdge}
// resetArea={resetArea}
// resetDiameter={resetDiameter}
// resetAngle={resetAngle}
// resetX_minmax={resetX_minmax}
// resetX_step={resetX_step}

const Content = ({
    atom,
    diluent,
    sample,
    mass,
    edge,
    area,
    diameter,
    angle,
    x_minmax,
    x_step,
    plotflag,
    targetedgestep,
    samplemass,
    diluentmass,
    csvdata,
    handleAtomChange,
    handleDiluentChange,
    handleSampleChange,
    handleMassChange,
    handleEdgeChange,
    handleAreaChange,
    handleDiameterChange,
    handleAngleChange,
    handleX_minmaxChange,
    handleX_minChange,
    handleX_maxChange,
    handleX_stepChange,
    handlePlotFlagChange,
    handleTargetedgestepChange,
    handleSubmit,
    resetAll,
    chartData,
    linechartoption,
}) => {
    return (
        <main>
            <form className="mucalform" onSubmit={handleSubmit}>
                <h2>Sample information</h2>
                <label htmlFor="sample">Chemical formula(sample)</label>
                <input
                    autoFocus
                    type="text"
                    placeholder="e.g. Ru2O3"
                    value={sample}
                    onChange={handleSampleChange}
                />
                <br />
                <label htmlFor="diluent">Chemical formula(diluent)</label>
                <input
                    type="text"
                    placeholder="e.g. BN"
                    value={diluent}
                    onChange={handleDiluentChange}
                />
                <br />
                <label htmlFor="mass">Total mass of the pellet</label>
                <input
                    type="number"
                    placeholder="e.g. 1.0"
                    value={mass}
                    onChange={handleMassChange}
                    step="any"
                    min="0.0"
                /> g
                <br />
                <br />
                <label htmlFor="area">Area of the pellet</label>
                <input
                    type="number"
                    placeholder="e.g. 1.0"
                    value={area}
                    onChange={handleAreaChange}
                    step="any"
                    min="0.0"
                /> cm^2 <br />
                <label htmlFor="diameter">Diameter pellet</label>
                <input
                    type="number"
                    placeholder="e.g. 1.0"
                    value={diameter}
                    onChange={handleDiameterChange}
                    step="any"
                    min="0.0" /> cm <br />
                <label htmlFor="angle">Angle of the measurement</label>
                <input
                    type="number"
                    placeholder="e.g. 45"
                    value={angle}
                    onChange={handleAngleChange}
                    step="any"
                    min="0.0"
                    max="90.0" /> deg
                <br />
                <h2>Calculation and Plotting</h2>

                <label htmlFor="atom">Choose the edge</label>
                <select
                    value={atom}
                    onChange={handleAtomChange}
                >
                    <option value="H">H</option>
                    <option value="He">He</option>
                    <option value="Li">Li</option>
                    <option value="Be">Be</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="N">N</option>
                    <option value="O">O</option>
                    <option value="F">F</option>
                    <option value="Ne">Ne</option>
                    <option value="Na">Na</option>
                    <option value="Mg">Mg</option>
                    <option value="Al">Al</option>
                    <option value="Si">Si</option>
                    <option value="P">P</option>
                    <option value="S">S</option>
                    <option value="Cl">Cl</option>
                    <option value="Ar">Ar</option>
                    <option value="K">K</option>
                    <option value="Ca">Ca</option>
                    <option value="Sc">Sc</option>
                    <option value="Ti">Ti</option>
                    <option value="V">V</option>
                    <option value="Cr">Cr</option>
                    <option value="Mn">Mn</option>
                    <option value="Fe">Fe</option>
                    <option value="Co">Co</option>
                    <option value="Ni">Ni</option>
                    <option value="Cu">Cu</option>
                    <option value="Zn">Zn</option>
                    <option value="Ga">Ga</option>
                    <option value="Ge">Ge</option>
                    <option value="As">As</option>
                    <option value="Se">Se</option>
                    <option value="Br">Br</option>
                    <option value="Kr">Kr</option>
                    <option value="Rb">Rb</option>
                    <option value="Sr">Sr</option>
                    <option value="Y">Y</option>
                    <option value="Zr">Zr</option>
                    <option value="Nb">Nb</option>
                    <option value="Mo">Mo</option>
                    <option value="Tc">Tc</option>
                    <option value="Ru">Ru</option>
                    <option value="Rh">Rh</option>
                    <option value="Pd">Pd</option>
                    <option value="Ag">Ag</option>
                    <option value="Cd">Cd</option>
                    <option value="In">In</option>
                    <option value="Sn">Sn</option>
                    <option value="Sb">Sb</option>
                    <option value="Te">Te</option>
                    <option value="I">I</option>
                    <option value="Xe">Xe</option>
                    <option value="Cs">Cs</option>
                    <option value="Ba">Ba</option>
                    <option value="La">La</option>
                    <option value="Ce">Ce</option>
                    <option value="Pr">Pr</option>
                    <option value="Nd">Nd</option>
                    <option value="Pm">Pm</option>
                    <option value="Sm">Sm</option>
                    <option value="Eu">Eu</option>
                    <option value="Gd">Gd</option>
                    <option value="Tb">Tb</option>
                    <option value="Dy">Dy</option>
                    <option value="Ho">Ho</option>
                    <option value="Er">Er</option>
                    <option value="Tm">Tm</option>
                    <option value="Yb">Yb</option>
                    <option value="Lu">Lu</option>
                    <option value="Hf">Hf</option>
                    <option value="Ta">Ta</option>
                    <option value="W">W</option>
                    <option value="Re">Re</option>
                    <option value="Os">Os</option>
                    <option value="Ir">Ir</option>
                    <option value="Pt">Pt</option>
                    <option value="Au">Au</option>
                    <option value="Hg">Hg</option>
                    <option value="Tl">Tl</option>
                    <option value="Pb">Pb</option>
                    <option value="Bi">Bi</option>
                    <option value="Po">Po</option>
                    <option value="At">At</option>
                    <option value="Rn">Rn</option>
                    <option value="Fr">Fr</option>
                    <option value="Ra">Ra</option>
                    <option value="Ac">Ac</option>
                    <option value="Th">Th</option>
                    <option value="Pa">Pa</option>
                    <option value="U">U</option>
                    <option value="Np">Np</option>
                    <option value="Pu">Pu</option>
                    <option value="Am">Am</option>
                    <option value="Cm">Cm</option>
                    <option value="Bk">Bk</option>
                    <option value="Cf">Cf</option>
                    <option value="Es">Es</option>
                    <option value="Fm">Fm</option>
                    <option value="Md">Md</option>
                    <option value="No">No</option>
                    <option value="Lr">Lr</option>
                    <option value="Rf">Rf</option>
                    <option value="Db">Db</option>
                    <option value="Sg">Sg</option>
                    <option value="Bh">Bh</option>
                    <option value="Hs">Hs</option>
                    <option value="Mt">Mt</option>
                    <option value="Ds">Ds</option>
                    <option value="Rg">Rg</option>
                    <option value="Cn">Cn</option>
                </select>
                <select
                    value={edge}
                    onChange={handleEdgeChange}
                >
                    <option value="K">K edge</option>
                    <option value="L1">L1 edge</option>
                    <option value="L2">L2 edge</option>
                    <option value="L3">L3 edge</option>
                    <option value="M">M edge</option>
                </select>
                <br />
                <label>Target Edge Step </label>
                <input
                    type="number"
                    value={targetedgestep}
                    onChange={handleTargetedgestepChange}
                />
                <br />
                <label htmlFor="x_min">Calc Range: min</label>
                <input
                    type="number"
                    value={x_minmax[0]}
                    onChange={handleX_minChange}
                    step="1"
                    max={x_minmax[1]}
                    min="any"
                /> eV
                <br />
                <label htmlFor="x_max">max</label>
                <input
                    type="number"
                    value={x_minmax[1]}
                    onChange={handleX_maxChange}
                    step="1"
                    min={x_minmax[0]}
                /> eV
                <br />
                <label htmlFor="step">step</label>
                <input
                    type="number"
                    value={x_step}
                    onChange={handleX_stepChange}
                    step="0.1"
                    min="0"
                /> eV
                <br />
                <label htmlFor="plot">Plot chart</label>
                <input type="checkbox" checked={plotflag} onChange={handlePlotFlagChange} />
                <br />
                <br />
                <button type="submit">Calculate</button>
                <button onClick={resetAll}>Reset</button>
            </form>
            <br />
            {(samplemass > 0) ?
                <><h2>Results{(samplemass < 0) || (diluentmass < 0) ? <p style={{ "color": "red" }}>Area or mass is not suitable for edge step of {targetedgestep} eV</p> : null}</h2>
                    Sample weight: {Math.round(samplemass*10000)/10000} g<br />
                    Diluent weight: {Math.round(diluentmass*10000)/10000} g<br />
                </> : null}

                {(csvdata) ? <><CSVLink filename={"simulated_absorption.csv"} data={csvdata}>Download CSV</CSVLink><br /></>: null}

            {plotflag ? <LineChart
                style={{ width: '50%' }}
                chartData={chartData}
                linechartoption={linechartoption} /> : null}
        </main>
    )
}

export default Content