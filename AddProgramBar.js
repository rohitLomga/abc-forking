// COMPONENT
// ADD PROGRAM BAR

import './AddProgramBar.css'

export default function AddProgramBar(){

    return(
        <div>
            <div id="addBar">

                <div id="program">
                    <p>Program</p>
                    <select>
                        <option>Select Program</option>
                    </select>
                </div>

                <div id="session">
                    <p>Session</p>
                    <select>
                        <option>Select Session</option>
                    </select>
                </div>

                <button className="srchAndProgramBtn">Search</button>

                <button className="srchAndProgramBtn">Add Programs</button>
            </div>
        </div>
    )
}