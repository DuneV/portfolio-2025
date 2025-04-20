import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faRobot, faMicrochip, faDraftingCompass, faBrain, faTools } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const roboticsStack = [
    "ROS", "ROS2", "Python", "C++", "Embedded C", "IMU", "Edge Computing", "Control Systems", "Kinematics", "Sensors"
];

const devOpsStack = [
    "Git", "GitHub", "GitHub Actions", "Docker", "AWS Lambda", "Fargate", "ECS", "Linux", "CI/CD", "Bash"
];

const designStack = [
    "Autodesk Inventor", "Fusion 360", "Onshape", "ANSYS", "3D Printing", "Cura", "PrusaSlicer", "Mechanism Design"
];

const dataAiStack = [
    "Pandas", "NumPy", "Stanza", "Dash","PySpark","scikit-learn", "OpenAI API", "Snowflake", "Alteryx", "TensorFlow", "PyTorch", "Data Visualization"
];

const pcbDesignStack = [
    "Eagle", "KiCad", "PCB Layout", "Schematic Capture", "Gerber Files", "Signal Integrity", "DFM", "DRC"
];

const manufacturingStack = [
    "CAM", "Fusion 360 CAM", "CNC Programming", "SOFA", "Foundry Processes", "Metal Casting", "Manufacturing Simulation"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faRobot} size="3x" />
                        <h3>Robotics & Embedded Systems</h3>
                        <p>I develop intelligent robotic systems integrating embedded hardware, control algorithms, and real-time simulation using ROS/ROS2 and low-level programming in C++ and Python.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {roboticsStack.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>Cloud & DevOps for Robotics</h3>
                        <p>I integrate robotics and AI systems with modern cloud platforms using containerization and automation tools to ensure scalable and reliable deployments.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {devOpsStack.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDraftingCompass} size="3x" />
                        <h3>Mechanical Design & Prototyping</h3>
                        <p>I specialize in designing and simulating mechanical components for robotics and automation, with experience in CAD software, FEA, and 3D printing workflows.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tools:</span>
                            {designStack.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faBrain} size="3x" />
                        <h3>AI, Data Science & Automation</h3>
                        <p>I apply AI models and data analytics tools to build intelligent systems for automation, decision support, and predictive modeling. I also leverage tools like Alteryx for visual data workflows.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tools & Frameworks:</span>
                            {dataAiStack.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faMicrochip} size="3x" />
                        <h3>PCB Design & Hardware Prototyping</h3>
                        <p>I design and prototype custom PCBs for embedded systems using tools like Eagle and KiCad, focusing on reliability, signal integrity, and manufacturability.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tools:</span>
                            {pcbDesignStack.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faTools} size="3x" />
                        <h3>Manufacturing, CNC & Simulation</h3>
                        <p>I work with digital manufacturing processes including CNC programming, metal casting, and advanced simulations to validate and optimize fabrication workflows.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tools & Processes:</span>
                            {manufacturingStack.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;
