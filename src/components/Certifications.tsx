import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAws,
  faPython,
} from '@fortawesome/free-brands-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import {
  faBrain,
  faCertificate
} from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Certifications.scss';

const certifications = [
    {
      label: 'AWS Certified Cloud Practitioner',
      icon: faAws,
      color: '#FF9900',
      link: 'https://www.credly.com/badges/aws-cloud-practitioner'
    },
    {
      label: 'AWS Developer – Associate',
      icon: faAws,
      color: '#FF9900',
      link: 'https://www.credly.com/badges/aws-developer-associate'
    },
    {
      label: 'AWS Solutions Architect – Associate',
      icon: faAws,
      color: '#FF9900',
      link: 'https://www.credly.com/badges/aws-solutions-architect-associate'
    },
    {
      label: 'NVIDIA Deep Learning Certificate',
      icon: faMicrochip,
      color: '#76B900',
      link: 'https://developer.nvidia.com/deep-learning-certification'
    },
    {
      label: 'Python for Everybody – Coursera',
      icon: faPython,
      color: '#3670A0',
      link: 'https://www.coursera.org/specializations/python'
    },
    {
      label: 'Machine Learning with Python – IBM',
      icon: faPython,
      color: '#052FAD',
      link: 'https://www.coursera.org/learn/machine-learning-with-python'
    },
    {
      label: 'OpenAI Developer Fundamentals',
      icon: faBrain,
      color: '#10A37F',
      link: 'https://platform.openai.com/docs'
    },
    {
      label: 'Alteryx Designer Core Certification',
      icon: faCertificate,
      color: '#1F4373',
      link: 'https://www.credly.com/badges/alteryx-core-certification'
    },
    {
      label: 'Foundations of Data Science – UC Berkeley',
      icon: faCertificate,
      color: '#003262',
      link: 'https://data.berkeley.edu/education/courses/data-8'
    }
  ];
  

function Certifications() {
  return (
    <div className="certifications-container" id="certifications">
      <h1>Certifications</h1>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div className="cert-item" key={index}>
            <FontAwesomeIcon icon={cert.icon} size="2x" className="cert-icon" />
            <Chip label={cert.label} className="cert-chip" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
