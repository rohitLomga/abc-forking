import './StudentDetails.css';

import profileImage from './Images/profile.png'


// ICONS
import { RiDashboardHorizontalFill } from "react-icons/ri"; // DASHBOARD ICON
import { FaUser } from "react-icons/fa"; // USER ICON
import { LiaBookSolid } from "react-icons/lia"; // PROGRAM ICON
import { MdOutlineLogout } from "react-icons/md"; // LOG OUT ICON
import { IoSettingsOutline } from "react-icons/io5"; // SETTING ICON
import { IoMdHelpCircle } from "react-icons/io"; // HELP ICON
import { BiSolidMessageSquareDetail } from "react-icons/bi"; // MESSAGE ICON
import { IoIosNotifications } from "react-icons/io"; // NOTIFICATION ICON

// FONTS
import "@fontsource/comfortaa"; // Defaults to weight 400
import "@fontsource/comfortaa/400.css"; // Specify weight
// import "@fontsource/comfortaa/400-italic.css"; // Specify weight and style

function StudentDetails(){
    return(
        <div>

            {/* TOP BAR */}
            <div id='top-bar'>
                <h1>ZedSync</h1>

                {/* RIGHT ICONS */}
                <div id='icons'>

                    {/* MESSAGE ICON */}
                    <BiSolidMessageSquareDetail className='cursor'/>

                    {/* NOTIFICATION ICON */}
                    <IoIosNotifications className='cursor'/>

                    {/* PROFILE IMAGE */}
                    <img 
                        src={profileImage} 
                        alt='profile image' 
                        id='profileImage' 
                        className='cursor'
                    />
                </div>
            </div>

            {/* MAIN MENU */}
            <div id='main-menu-bar'>
                <p id='mainMenuText'>Main menu</p>
                <div id='horizontalBar'></div> {/* LINE */}
                
                {/* UPPER CONTAINER OF THE MAIN MENU BAR */}
                <div id='upper-container' className='lists'>

                   <ul>
                        {/* DASHBOARD WITH ICON */}
                        <li>
                            <RiDashboardHorizontalFill 
                                id='dashIcon' 
                                className='menuIcons' 
                            />
                            <p className='pText'>dashboard</p>
                            
                        </li>

                        {/* STUDENT WITH ICON */}
                        <li id='student'>
                            <FaUser className='menuIcons' /> 
                            <p className='pText'>students</p>
                        </li>

                        {/* PROGRAMS WITH ICON */}
                        <li>
                            <LiaBookSolid className='menuIcons'/>
                            <p className='pText'>programs</p>
                        </li>

                        {/* COURSES WITH ICON */}
                        <li>
                            <LiaBookSolid id='coursesIcon' className='menuIcons'/>
                            <p className='pText'>courses</p>
                        </li>
                   </ul>

                </div>
                
                {/* LOG OUT CONTAINER */}
                <div id='logout-container' className='lists'>
                
                <ul>
                    {/* LOG OUT WITH ICON */}
                    <li>
                        < MdOutlineLogout className='menuIcons'/> 
                        <p className='pText'>Log out</p>
                    </li>

                    {/* SETTING WITH ICON */}
                    <li>
                        <IoSettingsOutline className='menuIcons'/>
                        <p className='pText'>Setting</p>
                    </li>

                    {/* HELP TEXT WITH ICON */}
                    <li>
                        <IoMdHelpCircle className='menuIcons'/>
                        <p className='pText'>Help</p>
                    </li>
                </ul>

                </div>
            </div>

            <div id='chooseDetails'>

                <div>
                    <p>Campus name</p>
                    <select>
                        <option value="selectCampus">Select Campus</option>
                    </select>
                </div>
                
                <div>
                    <p>Session</p>
                    <select>
                        <option>Session</option>
                    </select>
                </div>

                <div>
                    <p>Course</p>
                    <select>
                        <option value="courseName">Select Course</option>
                    </select>
                </div>

                <button id='searchBtn' className='btn'>Search</button>
                <button id='exportBtn' className='btn'>Export</button>
            </div>

            <div id='studentList'>

                <h3>Students List</h3>
                <label for='search' id='searchLabel'>Search : </label>
                <input type='text' name='search' id='searchInput' />
                <button>+ Add New</button>
            </div>
        </div>
    )
}

export default StudentDetails;