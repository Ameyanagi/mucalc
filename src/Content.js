import React from 'react'

const Content = () => {
    return (
        <main>
            <div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <p>Enter the chemical formula for the sample</p>
                    <input
                        autoFocus
                        type="text"
                        placeholder="H2O"
                        value={0}
                        onChange={0}
                    />
                    <br />
                    <p>Enter the chemical formula for diluent</p>
                    <input
                        type="text"
                        placeholder="H2O"
                        value={0}
                        onChange={0}
                    />
                    <br />
                    <p>Enter the total mass of diluted sample</p>
                    <input
                        type="Number"
                        placeholder="100"
                        value={0}
                        onChange={0}
                    />
                    <br />
                    <p>Choose the edge</p>
                    <select
                    >
                        <option value="K">K edge</option>
                        <option value="L1">L1 edge</option>
                        <option value="L2">L2 edge</option>
                        <option value="L3">L3 edge</option>
                        <option value="M">M edge</option>
                    </select>
                    <p>Enter the area: <input type="text" /> or the Diameter: <input type="text" /></p>
                    <p>Choose</p>

                    <button type="submit">Calculate</button>


                </form>
            </div>
        </main>
    )
}

export default Content