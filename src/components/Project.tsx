import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Robotics & AI Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <img src={mock01} className="zoom" alt="Delta Robot" width="100%" />
                    <h2>Tendon-Driven Delta Robot</h2>
                    <p>Inspired by Dr. Octavius, this robot uses cable-driven actuation. Built in ROS2 and controlled via C++, featuring inverse kinematics and embedded control systems.</p>
                </div>

                <div className="project">
                    <img src={mock02} className="zoom" alt="Autonomous Submarine" width="100%" />
                    <h2>Autonomous Underwater Robot (Robocol)</h2>
                    <p>Built and simulated a 6-DOF underwater robot using IMU stabilization and ROS integration. Developed SLAM-based localization and depth control modules.</p>
                </div>

                <div className="project">
                    <img src={mock03} className="zoom" alt="Mechatronic Exoskeleton" width="100%" />
                    <h2>Rehabilitation Exoskeleton</h2>
                    <p>Designed an assistive lower-limb exoskeleton for physical therapy. Developed signal acquisition, real-time control logic, and cloud monitoring dashboard.</p>
                </div>

                <div className="project">
                    <img src={mock04} className="zoom" alt="AI Maintenance" width="100%" />
                    <h2>Predictive Maintenance with AI</h2>
                    <p>Applied machine learning models to detect early failures using vibration signals. Used Python, scikit-learn, and OpenAI APIs for signal classification.</p>
                </div>

                <div className="project">
                    <img src={mock05} className="zoom" alt="Control Simulation" width="100%" />
                    <h2>Modeling & Control Simulation</h2>
                    <p>Built simulation environments for testing PID and LQR controllers in MATLAB and Python. Integrated real-time feedback using virtual sensors and actuators.</p>
                </div>

                <div className="project">
                    <img src={mock06} className="zoom" alt="RL Robot" width="100%" />
                    <h2>Reinforcement Learning for Robotics</h2>
                    <p>Experimented with Deep Q-Learning and PPO agents to train robotic arms in simulated environments for adaptive object manipulation tasks.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;
