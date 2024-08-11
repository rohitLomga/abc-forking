// COURSE LAST THIRD PAGE

import MainMenuBarAndTopBar from "../Componenets/Main Menu and Search Bar/MainMenu";
import SearchBar from "../Componenets/Main Menu and Search Bar/SearchBar";

import './CourseThirdLastPage.css'
function CourseThirdLastPage(){
    return(
        <div>
            <MainMenuBarAndTopBar />
            <SearchBar />

            <div id="categoriesTable">

                <table>
                    <tr>
                        <th>SLNO</th>
                        <th>CATEGORIES</th>
                        <th>Breakup of Credit</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Humanities and social sciences courses</td>
                        <td>15/15</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Basic Sciences Courses</td>
                        <td>23/24</td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>Engineering Sciences Courses</td>
                        <td>21/22</td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>Program core Courses(Branch Specific)</td>
                        <td>54/59</td>
                    </tr>

                    <tr>
                        <td>5</td>
                        <td>Professional Elective Course(Branch Specific)</td>
                        <td>18/24</td>
                    </tr>

                    <tr>
                        <td>6</td>
                        <td>Open Elective Courses (Cross Discipline Subjects)</td>
                        <td>15/24</td>
                    </tr>

                    <tr>
                        <td>7</td>
                        <td>Project work Seminar and internship in industry or elsewhere</td>
                        <td>16/20</td>
                    </tr>

                    <tr>
                        <td>8</td>
                        <td>Audit Courses</td>
                        <td>0</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td><b>Total</b></td>
                        <td>162/188</td>
                    </tr>
                </table>

            </div>

            <div id="humanitiesAndSocial">
                <p id="courseTitle"><b>HUMANITIES AND SOCIAL SCIENCES COURSES [HS]</b></p>

                <table>
                    <tr>
                        <th>SLNO</th>
                        <th>Course code</th>
                        <th>Name of Course</th>
                        <th>L</th>
                        <th>T</th>
                        <th>P</th>
                        <th>Session</th>
                        <th>Credit</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>SEHST201</td>
                        <td>English Fundamental and Communication Skill</td>
                        <td>3</td>
                        <td>0</td>
                        <td>0</td>
                        <td>II</td>
                        <td>3</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>SEHST101</td>
                        <td>Sociology and Elements of Indian History for Engineers</td>
                        <td>3</td>
                        <td>0</td>
                        <td>0</td>
                        <td>I</td>
                        <td>3</td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>SEHST301</td>
                        <td>Enterpreneurship and Strat-up</td>
                        <td>3</td>
                        <td>0</td>
                        <td>0</td>
                        <td>VI</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>SEHST401</td>
                        <td>Organization Behaviour</td>
                        <td>3</td>
                        <td>0</td>
                        <td>0</td>
                        <td>VII</td>
                        <td>3</td>
                    </tr>

                    <tr>
                        <td>5</td>
                        <td>SEHST302</td>
                        <td>Psychology and Mental health</td>
                        <td>3</td>
                        <td>0</td>
                        <td>0</td>
                        <td>VI</td>
                        <td>3</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td><b>MINIMUM CREDIT REQUIRED</b></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><b>15</b></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default CourseThirdLastPage