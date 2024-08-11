// COMPONENT
// SEARCH BAR

import './Internship.css';

import { IoIosSearch } from "react-icons/io"; // SEARCH ICON

function SearchBar(){
    return(
        <div>
            {/* <TopBar /> */}

            <div id="searchBar">

                <div id="courseCategory">
                    <p>Course Category</p>
                    <select>
                        <option>Select Course Category</option>
                    </select>
                </div>

                <div id="session">
                    <p>Session</p>
                    <select>
                        <option>Select Session</option>
                    </select>
                </div>

                <button id="srch">Search</button>

                <div id="searchInput">
                    <label>Search : </label>
                    <input type="text" name="search" id="search" />
                    < IoIosSearch id="searchIcon"/>
                </div>
            </div>
        </div>
    )
}

export default SearchBar