import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 – Present"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Quality Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Siemens Energy – Transformers Factory, Tenjo</h4>
            <p>
              Conducted research on advanced electronic systems for predictive maintenance and process optimization. Analyzed manufacturing processes to improve quality and efficiency.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 (Aug) – 2024"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">R&D Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Verivolt (Remote)</h4>
            <p>
              Developed and optimized electronic control systems for industrial applications, contributing to the reliability and performance of hardware platforms.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 – 2024"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Undergraduate Research Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Dept. of Electronic Engineering, Uniandes</h4>
            <p>
              Research on advanced electronics systems and AI model deployment for vibration analysis. Supported academic content creation for MAIA master's program.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2023 – Aug 2023"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">DiDi S.A.</h4>
            <p>
              Analyzed large datasets to improve service delivery. Deployed prediction models for customer segmentation based on dynamic business logic.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 – 2023"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Control & Development Leader – Autonomous Submarine</h3>
            <h4 className="vertical-timeline-element-subtitle">ROBOCOL – University of the Andes</h4>
            <p>
              Led interdisciplinary teams for submarine development. Implemented 3D kinematic simulation and stability systems using IMU sensors.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 – 2020"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Assistant (RAS & Computer Society)</h3>
            <h4 className="vertical-timeline-element-subtitle">University of the Andes</h4>
            <p>
              Supported robotics and computer science research, focusing on control systems and embedded development.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 – 2023"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">University of the Andes</h4>
            <p>
              Guided courses such as Digital Systems Architecture, Intelligent Maintenance Monitoring, and Calculus I–III. Provided academic support and hands-on assistance to students.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019 – 2024"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor's in Electronic Engineering & Mechanical Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">University of the Andes – Bogotá, Colombia</h4>
            <p>
              Dual-degree student with focus on robotics, manufacturing systems, control, AI, and embedded electronics.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
