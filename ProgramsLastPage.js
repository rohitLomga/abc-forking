// PROGRAMS LAST PAGE

import './ProgramsLastPage.css';

import MainMenuBarAndTopBar from '../Componenets/Main Menu and Search Bar/MainMenu';
import SyllabusAndReference from '../Componenets/Syllabus and Reference/SyllabusAndReference';

function ProgramsLastPage(){
    
    return(
        <div>

            {/* MAIN MENU BAR AND TOP BAR */}
            <MainMenuBarAndTopBar />

           <SyllabusAndReference />
        </div>
    )
}

export default ProgramsLastPage;