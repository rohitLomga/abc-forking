// COURSE

import MainMenuBarAndTopBar from "../Componenets/Main Menu and Search Bar/MainMenu";
import { LuEye } from "react-icons/lu"; // EYE ICON
import SearchBar from "../Componenets/Main Menu and Search Bar/SearchBar";

import './Course.css'
import SemesterNo from "../Componenets/Semester no/SemesterNo";

function Course(){
    return(
        <div>
            {/* <TopBar /> */}
            <MainMenuBarAndTopBar />
            <SearchBar />
            < SemesterNo />

            <div id="tableDetails">
                <table>
                    <tr>
                        <th>SLNO</th>
                        <th>Course code</th>
                        <th>Name of Course</th>
                        <th>Program</th>
                        <th>Session</th>
                        <th>L</th>
                        <th>T</th>
                        <th>P</th>
                        <th>Credit</th>
                        <th>View</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>SEPCT3030</td>
                        <td>Mathematics 1</td>
                        <td>B-TECH</td>
                        <td>2023-24</td>
                        <td>3</td>
                        <td>0</td>
                        <td>0</td>
                        <td>3</td>
                        <td>< LuEye className="eyeIcon"/></td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>SEOXXX</td>
                        <td>Mathematics 1</td>
                        <td>BCA</td>
                        <td>2023-24</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>4</td>
                        <td>< LuEye className="eyeIcon"/></td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>SECPT59</td>
                        <td>Mathematics 1</td>
                        <td>MCA</td>
                        <td>2023-24</td>
                        <td>3</td>
                        <td>0</td>
                        <td>0</td>
                        <td>3</td>
                        <td>< LuEye className="eyeIcon"/></td>
                    </tr>
   
                </table>
            </div>
        </div>
    )
}

export default Course