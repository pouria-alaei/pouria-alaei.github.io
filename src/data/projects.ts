export type PortfolioProject = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  problem: string;
  role: string;
  keyWork: string[];
  tags: string[];
  impact: string;
  confidentialityNote: string;
  imageBase: string;
  cover?: string;
  gallery: string[];
};

export const projects: PortfolioProject[] = [
  {
    slug: "video-conference-system",
    imageBase: "/images/projects/video-conference-system",
    title: "Video Conference System",
    subtitle:
      "Embedded video communication system with hardware/software integration and real-world deployment focus.",
    summary:
      "Designed and developed parts of a video conference system involving embedded software, device integration, networking, user interface, and system-level debugging.",
    problem:
      "The project required a reliable embedded communication platform that could combine video communication, device-level integration, networking, and a user-facing interface in a practical product environment.",
    role:
      "Embedded software development, system integration, debugging, and coordination between hardware, software, and user-facing components.",
    keyWork: [
      "Integrated embedded software components with device-level hardware behavior.",
      "Worked on networking and communication-related system behavior.",
      "Supported debugging across software, hardware, and UI layers.",
      "Contributed to system-level validation and practical deployment readiness.",
    ],
    tags: ["Embedded Systems", "Networking", "UI", "Hardware/Software Integration", "System Design"],
    impact:
      "Delivered a practical communication-oriented embedded system suitable for real operational environments.",
    confidentialityNote:
      "Some technical details, customer information, and internal implementation specifics are omitted for confidentiality.",
    gallery: [],
  },
  {
    slug: "linux-conference-voting-system",
    imageBase: "/images/projects/linux-conference-voting-system",
    title: "Linux Conference and Voting System",
    subtitle:
      "Linux-based wired conference and voting platform with HMI units, Ethernet communication, and central control.",
    summary:
      "Built a Linux-based conference and voting system using touch HMI units, Ethernet communication, central control, web management features, voting workflow, and low-latency system behavior.",
    problem:
      "The system needed to support reliable wired conference operation, local user interaction, voting workflows, central control, and stable communication between multiple embedded units.",
    role:
      "System architecture, embedded Linux integration, Qt HMI development, communication design, testing, and system-level debugging.",
    keyWork: [
      "Designed the embedded Linux-based system architecture for conference units.",
      "Implemented Qt-based touch HMI behavior for user interaction.",
      "Developed Ethernet/UDP communication logic between units and central control.",
      "Supported voting workflow and central management features.",
      "Tested multi-unit behavior and low-latency communication in real operating conditions.",
    ],
    tags: ["Embedded Linux", "Qt", "Ethernet", "UDP", "Voting System", "HMI", "System Integration"],
    impact:
      "Created a complete conference platform combining user interaction, communication, voting, and central management in a real embedded product.",
    confidentialityNote:
      "Images and screenshots will be reviewed before publication to remove sensitive customer, UI, and hardware details.",
    gallery: [],
  },
  {
    slug: "mc60-gsm-opencpu-datalogger",
    imageBase: "/images/projects/mc60-gsm-opencpu-datalogger",
    title: "MC60 GSM OpenCPU Datalogger",
    subtitle:
      "GSM/GNSS datalogger using Quectel MC60 OpenCPU with custom hardware and firmware.",
    summary:
      "Developed a cellular datalogger based on Quectel MC60 OpenCPU, including hardware design, firmware development, GSM/GNSS integration, communication testing, and field debugging.",
    problem:
      "The device needed to collect and transmit data through a compact GSM/GNSS-enabled embedded platform with reliable power, communication, and firmware behavior.",
    role:
      "Hardware design, firmware development, cellular communication setup, debugging, and system validation.",
    keyWork: [
      "Designed the hardware around the Quectel MC60 module.",
      "Developed OpenCPU firmware for device operation and communication.",
      "Configured GSM connectivity and tested cellular data communication.",
      "Worked on GNSS behavior and field debugging.",
      "Validated power and communication behavior during bring-up and testing.",
    ],
    tags: ["OpenCPU", "GSM", "GNSS", "Firmware", "Hardware Design", "Embedded C"],
    impact:
      "Created a compact GSM-based embedded device suitable for tracking, telemetry, and remote data collection applications.",
    confidentialityNote:
      "Hardware images and Altium screenshots should be reviewed before publishing to avoid exposing sensitive PCB or product details.",
    gallery: [],
  },
  {
    slug: "diesel-generator-controller",
    imageBase: "/images/projects/diesel-generator-controller",
    title: "Diesel Generator Controller",
    subtitle:
      "Industrial embedded controller for diesel generator monitoring, control, and field operation.",
    summary:
      "Developed an embedded control and monitoring system for diesel generator applications, involving hardware/software integration, sensor/IO handling, communication, reliability considerations, and industrial device behavior.",
    problem:
      "The controller needed to operate in an industrial environment, monitor generator-related signals, handle IO reliably, and support practical field operation requirements.",
    role:
      "Embedded system design, firmware development, hardware interface integration, testing, and field-oriented debugging.",
    keyWork: [
      "Developed firmware for generator monitoring and control behavior.",
      "Integrated hardware IO and sensor-related interfaces.",
      "Worked on reliability considerations for industrial field use.",
      "Supported debugging and validation of hardware/software interaction.",
      "Prepared the system for practical deployment and maintenance scenarios.",
    ],
    tags: ["Embedded Systems", "Industrial Control", "Firmware", "Hardware Integration", "Monitoring"],
    impact:
      "Delivered an industrial control-oriented embedded system designed for practical generator monitoring and operational reliability.",
    confidentialityNote:
      "Operational details, customer-specific requirements, and sensitive control logic are intentionally generalized.",
    gallery: [],
  },
  {
    slug: "embedded-linux-vending-machine",
    imageBase: "/images/projects/embedded-linux-vending-machine",
    title: "Embedded Linux Vending Machine Platform",
    subtitle:
      "Industrial vending machine platform with local HMI, backend services, networking, and payment integration.",
    summary:
      "Designed and developed a production-oriented vending machine platform combining Embedded Linux, Qt HMI, backend services, networking, payment integration, MQTT communication, and hardware/software integration.",
    problem:
      "The platform needed to combine local device control, HMI, networking, payment, backend services, logging, and hardware/software integration in a reliable self-service embedded product.",
    role:
      "System design, Embedded Linux integration, HMI development, backend coordination, hardware/software integration, and technical leadership.",
    keyWork: [
      "Designed the Embedded Linux software architecture for the device platform.",
      "Integrated Qt HMI with backend services and device-level behavior.",
      "Worked on networking, local web configuration, MQTT, and payment-related integration.",
      "Coordinated hardware/software integration and production-oriented debugging.",
      "Improved maintainability through modular services and clear system boundaries.",
    ],
    tags: ["Embedded Linux", "Qt", "Go", "Next.js", "MQTT", "Networking", "Industrial IoT"],
    impact:
      "Delivered a reusable industrial platform that can be adapted to vending machines, payment terminals, and other self-service embedded devices.",
    confidentialityNote:
      "Some implementation details, payment-related information, and customer-specific configurations are omitted for confidentiality.",
    gallery: [],
  },
];
