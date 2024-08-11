// ADD PROGRAM

import MainMenuBarAndTopBar from "../Componenets/Main Menu and Search Bar/MainMenu";
import { IoIosSearch } from "react-icons/io"; // SEARCH ICON

import './AddPrograms.css'
import AddProgramBar from "../Componenets/Add Program Bar/AddProgramBar";
function AddPrograms(){

    return(
        <div>

            <MainMenuBarAndTopBar />
            < AddProgramBar />

             {/* DIV UNDER TOP BAR */}
             <div id='infoDiv'>

            {/* SUBJECT NAME LINE */}
            <div id='subjectNameLine' className='line'>
                <p className='names'><b>subject name : physics</b></p>
                    <div id='credit' className='rightSideText'>
                        <p><b>L</b></p>
                        <p><b>T</b></p>
                        <p><b>P</b></p>
                    </div>
                    <p id='cr'><b>credit</b></p>

            </div>

            {/* COURSE CODE LINE */}
            <div id='courseCode' className='line'>
                <p className='names'><b>course code : sebst101</b></p>
                <div id='courseCodeDetails' className='rightSideText'>
                    <p id='l'><b>3</b></p>
                    <p id='t'><b>0</b></p>
                    <p id='p'><b>0</b></p>
                </div>
                <p id='c'><b>3</b></p>

            </div>

            <div id='categoryLine' className='line'>
                <p className='names'><b>category : basic sciences</b></p>
                <p id='semester'><b>semester : first</b></p>
            </div>
            </div>

            {/* REFERENCE */}
            <div id='syllabusContainer' className='container'>
            {/* SYLLABUS TEXT */}
            <div id='syllabus' className='title'>
                <h1>SYLLABUS</h1>
            </div>

            {/* MODULE 1 */}
            <div id='module1' className='module'>
                <p className='moduleTitle'>module 1 : laser and optical fiber</p>
                <p className='lectures'>08 lectures</p>
            </div>

            {/* DETAILS OF MODULE 1 */}
            <div id='detialsOfModule1'>
                <p className='paragraph'>
                    LASER: Characteristic properties of a LASER beam, Interaction of Radiation with Matter, Einstein's A and B Coefficients and 
                    Expression for Energy Density (Derivation), Laser Action, Population Inversion, Metastable State, Requisites of a laser system, Semiconductor Diode Laser, 
                    Applications: Bar code scanner, Laser Printer, Laser Cooling(Qualitative), Numerical Problems. Optical Fiber: Principle and structure, Propagation of Light,
                    Acceptance angle and Numerical Aperture (NA), Derivation of Expression for NA, Modes of Propagation, RI Profile, Classification of Optical Fibers, 
                    Attenuation and Fiber Losses, Applications: Fiber Optic networking, Fiber Optic Communication. Numerical Problems
                </p>
            </div>

            {/* MODULE 2 */}
            <div id='module2' className='module'>
                <p className='moduleTitle'>module 2 : quantum mechanics</p>
                <p className='lectures'>08 lectures</p>
            </div>

            {/* DETAILS OF MODULE 2 */}
            <div id='detailsOfModule2'>
                <p className='paragraph'>
                    de Broglie Hypothesis and Matter Waves, de Broglie wavelength and derivation of expression by analogy, Phase Velocity and Group Velocity, 
                    Heisenberg's Uncertainty Principle and its application (Non existence of electron inside the nucleus - Non Relativistic), Principle of Complementarity, 
                    Wave Function, Time independent Schrödinger wave equation (Derivation), Physical Significance of a wave function and Born Interpretation, 
                    Expectation value, Eigen functions and Eigen Values, Particle inside one dimensional infinite potential well, Quantization of Energy States, Waveforms 
                    and Probabilities. Numerical Problems
                </p>
            </div>

            {/* MODULE 2 */}
            <div id='module3' className='module'>
                <p className='moduleTitle'>module 3 : quantum computing</p>
                <p className='lectures'>08 lectures</p>
            </div>

            {/* DETAILS OF MODULE 3 */}
            <div id='detailsOfModule3'>
                <p className='paragraph'>
                    Principles of Quantum Information & Quantum Computing: Introduction to Quantum Computing, Moore's law & its end, Differences between 
                    Classical & Quantum computing. Concept of qubit and its properties. Representation of qubit by Bloch sphere. Single and Two qubits. Extension to N qubits. 
                    Dirac representation and matrix operations: Matrix representation of 0 and 1 States, Identity Operator I,  Applying | to |0 )and |1) states, Pauli Matrices and 
                    its operations on |0›and |1)states,
                </p>
            </div>
            </div>

            {/* REFERENCE */}
            <div id='reference' className='container'>

            {/* REFERENCE TITLE */}
            <div id='referenceTitle' className='title'>
                <h1>REFERENCE</h1>
            </div>

            {/* REFERENCE BOOK TITLE */}
            <div id='referenceBooks' className='referenceTopics'>
                <h3>text and reference books</h3>
            </div>

            {/* REFERENCE BOOKS DETAILS */}
            <div className='detailsLists'>
                <ol>
                    <li>Principles of Layers " by Orazio Svelto</li>
                    <li>Principles of Quantum Mechanics “ by R. Shankar</li>
                    <li>Quantum Computation  and Quantum  information “ by Michael A . Nielsen and Isaac  L. Chuang</li>
                    <li>Itroduction to Solid State Physics “ by  Charles Kittel</li>
                    <li>Physcis for Game Developers “ by David M . Boung and Bryan Bywalec</li>
                    <li>Introduction to the Practice of Statistics “ by David S . Moore ,George P . McCabe , and Bruce A. Craig</li>
                </ol>
            </div>

            {/* DIGITAL RESOURCES */}
            <div className='referenceTopics'>
                <h3>DIGITAL RESOURCES</h3>
            </div>

            <div className='detailsLists'>
                <ol>
                    <li>MIT OpenCourseWare - Laser and  Optical Engineering ( URL - https;//ocw .mit/edu/6-007 -electromagnetic-energy-from-motors-to-lasers-spring-2011)</li>
                    <li>Stanford Online - Quantum Mechanics and Quantum Computation (URL -  https;//online.standard.edu/courses/soe-yeeqmse01- quantum-mechanics - scientists - and - engineers)</li>
                    <li>MIT OpenCourse - Quantum  Physcis | ( URL -  https;/ocw .mit.edu/courses/8-04- quantum - physicsi - spring - 2013/)</li>
                    <li>Microsoft Quantum Devlopment Kit (URL - https;//learn.microsoft.com/en-us/azure/quantum/)</li>
                    <li>MIT OpenCourseWare - Solid State Chemistry ( URL - https ; // ocw . mit.edu /courses/5-112-principles - of - chemical - science - fall - 2005 /) </li>
                </ol>
            </div>
            </div>

        </div>
    )
}

export default AddPrograms