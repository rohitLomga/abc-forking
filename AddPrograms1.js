// ADD PROGRAMS 1

import AddProgramBar from "../Componenets/Add Program Bar/AddProgramBar";
import MainMenuBarAndTopBar from "../Componenets/Main Menu and Search Bar/MainMenu";
import SemesterNo from "../Componenets/Semester no/SemesterNo";

import { LuEye } from "react-icons/lu"; // EYE ICON


import './AddPrograms1.css'

export default function AddPrograms1(){

    return(
        <div>
            < MainMenuBarAndTopBar />
            < AddProgramBar />
            < SemesterNo />

            <div id="tableDetails">
                <table>
                    <tr>
                        <th>SLNO</th>
                        <th>Course code</th>
                        <th>Name of Course</th>
                        <th>L</th>
                        <th>T</th>
                        <th>P</th>
                        <th>Credit</th>
                        <th>View</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>SEPCT3030</td>
                        <td>Operating System</td>
                        <td>3</td>
                        <td>0</td>
                        <td>0</td>
                        <td>3</td>
                        <td>< LuEye className="eyeIcon"/></td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>SEOXXX</td>
                        <td>Open Elective M3</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>4</td>
                        <td>< LuEye className="eyeIcon"/></td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>SECPT59</td>
                        <td>Applicatio Security</td>
                        <td>3</td>
                        <td>0</td>
                        <td>0</td>
                        <td>3</td>
                        <td>< LuEye className="eyeIcon"/></td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>SEPT77898</td>
                        <td>Summer Internship III</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>4</td>
                        <td>< LuEye className="eyeIcon"/></td>
                    </tr>

                    <tr>
                        <td>5</td>
                        <td>SCPT5789</td>
                        <td>Linux Programming</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>3</td>
                        <td>< LuEye className="eyeIcon"/></td>
                    </tr>

                    <tr>
                        <td>6</td>
                        <td>SCPT666</td>
                        <td>Open elective #4</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>3</td>
                        <td>< LuEye className="eyeIcon"/></td>
                    </tr>

                    <tr>
                        <td>7</td>
                        <td>SCPT888</td>
                        <td>Psychology and Mental health</td>
                        <td>0</td>
                        <td>0</td>
                        <td>2</td>
                        <td>1</td>
                        <td>< LuEye className="eyeIcon"/></td>
                    </tr>

                    <tr>
                        <td>8</td>
                        <td>SECPT59</td>
                        <td>Enterpreneurship and Start-up</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>2</td>
                        <td>< LuEye className="eyeIcon"/></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><b>Total Credit</b></td>
                        <td></td>
                        <td><b>23</b></td>
                        <td></td>
                    </tr>
   
                </table>
            </div>
        </div>
    )
}