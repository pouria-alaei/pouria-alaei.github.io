export type PortfolioProject = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  organization: string;
  period: string;
  projectType: string;
  headlineMetric?: string;
  problem: string;
  role: string;
  keyWork: string[];
  outcomes: string[];
  capabilities: string[];
  tags: string[];
  confidentialityNote: string;
  imageBase: string;
  cover?: string;
  gallery: string[];
  featured: boolean;
};

export const projects: PortfolioProject[] = [
  {
    slug: "linux-conference-voting-system",
    imageBase: "/images/projects/linux-conference-voting-system",
    title: "ARM Linux Conference and Video Platform",
    subtitle:
      "Modernizing an STM32 conference product into a compact ARM Linux platform for professional audio, video, voting, and device control.",
    organization: "Zarrin Samane Shargh",
    period: "2024 - Present",
    projectType: "Embedded Linux product platform",
    headlineMetric: "6-month delivery / up to 10x capacity",
    summary:
      "Designed and integrated the Linux platform for a connected conference and video communication product. The system combines a compact Buildroot image, Qt HMI, audio/video workflows, networking, peripheral control, and backend communication on production hardware.",
    problem:
      "A previous STM32-based product had reached practical limits in processing capacity and development speed. The replacement needed to preserve core conference behavior while supporting richer audio/video features, a touch interface, networking, hardware-control services, and a maintainable path for future development within tight storage constraints.",
    role:
      "Owned Linux platform architecture and cross-layer integration. Defined boundaries between hardware-control services, Qt UI, networking, peripherals, and backend communication; contributed to ARM board bring-up and drove validation across the complete product.",
    keyWork: [
      "Built a roughly 90 MB Buildroot platform containing U-Boot, configured Linux kernel, RootFS, systemd services, and the Qt runtime.",
      "Contributed to BSP integration on custom Allwinner T113-S3 hardware using bootloader configuration, Device Tree, menuconfig, and Linux image customization.",
      "Integrated C/C++ device-control services with the Qt HMI, audio/video paths, Ethernet/PoE, USB, display, touch, and backend communication.",
      "Defined interface behavior across hardware, embedded services, UI, networking, and validation teams.",
      "Created repeatable checks for 12 critical audio, video, UI, network, display, and peripheral workflows before release.",
    ],
    outcomes: [
      "Delivered comparable product functionality in 6 months instead of nearly 2 years.",
      "Enabled up to 10x higher processing capacity than the previous MCU-based platform.",
      "Kept the production Linux image to approximately 90 MB while retaining the required UI and system services.",
      "Validated 12 release-critical workflows across the full hardware/software stack.",
    ],
    capabilities: [
      "Embedded Linux architecture",
      "Buildroot and BSP integration",
      "Cross-layer debugging",
      "Qt and device-service integration",
      "System validation",
      "Cross-functional technical ownership",
    ],
    tags: [
      "Buildroot",
      "C/C++",
      "Qt",
      "Allwinner T113-S3",
      "U-Boot",
      "Device Tree",
      "Systemd",
      "Ethernet/PoE",
    ],
    confidentialityNote:
      "Product-specific implementation details, customer information, and sensitive audio/video architecture are intentionally omitted.",
    gallery: [],
    featured: true,
  },
  {
    slug: "industrial-openwrt-gateway",
    imageBase: "/images/projects/industrial-openwrt-gateway",
    title: "Industrial OpenWrt Modem and Router",
    subtitle:
      "Turning HLK-7628 hardware into a maintainable industrial connectivity gateway with LTE, Wi-Fi, routing, and secure remote communication.",
    organization: "Zarrin Samane Shargh / Pilotech",
    period: "Professional project",
    projectType: "Industrial connectivity platform",
    headlineMetric: "LTE + Wi-Fi in one managed platform",
    summary:
      "Designed and implemented custom OpenWrt firmware for an industrial modem/router, combining cellular connectivity, local networking, service management, and security-aware configuration in a deployable embedded platform.",
    problem:
      "The product required reliable remote connectivity while also acting as a managed router for local devices. Cellular modem behavior, Wi-Fi, routing, NAT, firewall policy, service isolation, and remote communication all had to work together on constrained embedded hardware.",
    role:
      "Owned OpenWrt firmware customization and Linux networking integration, including service behavior, connectivity configuration, routing policy, and system-level troubleshooting.",
    keyWork: [
      "Customized the OpenWrt image and services for the HLK-7628 target.",
      "Integrated LTE modem connectivity and Wi-Fi networking.",
      "Configured routing, NAT, firewall rules, and service isolation for the product use case.",
      "Implemented service control and startup behavior suitable for unattended field operation.",
      "Debugged connectivity across modem, Linux network stack, local interfaces, and remote services.",
    ],
    outcomes: [
      "Combined modem, router, and remote-connectivity responsibilities in one embedded Linux platform.",
      "Established a maintainable firmware base for industrial telemetry and remote-device products.",
      "Reduced integration complexity by managing network policy and services within OpenWrt.",
    ],
    capabilities: [
      "OpenWrt firmware engineering",
      "Linux networking",
      "Industrial connectivity",
      "System service design",
      "Field-oriented debugging",
    ],
    tags: ["OpenWrt", "HLK-7628", "LTE", "Wi-Fi", "NAT", "Firewall", "Linux Networking"],
    confidentialityNote:
      "Deployment topology, remote endpoints, credentials, and customer-specific security configuration are not shown.",
    gallery: [],
    featured: true,
  },
  {
    slug: "embedded-linux-vending-machine",
    imageBase: "/images/projects/embedded-linux-vending-machine",
    title: "Embedded Linux Smart Vending Platform",
    subtitle:
      "A service-oriented device platform connecting the HMI, inventory, database, MQTT, payment-related flows, and physical machine control.",
    organization: "Zarrin Samane Shargh",
    period: "2024 - Present",
    projectType: "Connected embedded product",
    headlineMetric: "90%+ QA validation pass rate",
    summary:
      "Built Embedded C++ device-control modules and system integrations for a smart vending platform. The runtime coordinates local UI, inventory and slot state, SQLite persistence, MQTT communication, and hardware services while remaining testable and maintainable.",
    problem:
      "A self-service vending product must keep physical machine state, user interaction, inventory, local persistence, and cloud-facing messages consistent. Failures can span UI, IPC, database, networking, and hardware, making clear service boundaries and repeatable validation essential.",
    role:
      "Defined parts of the service-oriented architecture, implemented C++ device-control modules, integrated software and hardware services, and built regression-oriented unit and smoke tests.",
    keyWork: [
      "Separated UI, inventory, MQTT, database, and hardware responsibilities into clearer service boundaries.",
      "Implemented Embedded C++ modules for product, slot, inventory, and unlock workflows.",
      "Integrated IPC, SQLite, GUI, MQTT, and hardware services into one runtime flow.",
      "Built unit and smoke tests for product, slot, inventory, unlock, IPC, MQTT, and database behavior.",
      "Supported production-oriented debugging across software, networking, and machine hardware.",
    ],
    outcomes: [
      "Achieved a 90%+ QA validation pass rate across the tested device workflows.",
      "Improved maintainability by reducing coupling between UI, business state, messaging, persistence, and hardware control.",
      "Created reusable foundations for vending machines and other connected self-service devices.",
    ],
    capabilities: [
      "Embedded C++ design",
      "Service-oriented architecture",
      "IPC and persistence",
      "MQTT integration",
      "Automated validation",
      "Hardware/software integration",
    ],
    tags: ["Embedded C++", "Embedded Linux", "IPC", "SQLite", "MQTT", "Qt", "Unit Testing"],
    confidentialityNote:
      "Payment details, commercial workflows, customer configuration, and internal service contracts are intentionally generalized.",
    gallery: [],
    featured: true,
  },
  {
    slug: "compact-embedded-linux-ui",
    imageBase: "/images/projects/compact-embedded-linux-ui",
    title: "Compact Yocto Linux UI Image",
    subtitle:
      "Making a complete Linux and LVGL user-interface stack practical on Allwinner T113 hardware with roughly 60 MB of NAND.",
    organization: "Pilotech / Kimia Electronic",
    period: "2019 - 2024",
    projectType: "Resource-constrained Linux platform",
    headlineMetric: "~60 MB production image",
    summary:
      "Built and optimized a Yocto/BitBake Linux image for an Allwinner T113 product, fitting the operating system, required services, and LVGL-based interface into a tightly constrained NAND target.",
    problem:
      "The hardware platform offered the flexibility of Linux but only about 60 MB of NAND for the deployable image. The system needed a usable graphical interface and reliable product behavior without exceeding the storage budget.",
    role:
      "Handled Yocto/BitBake image work, package and RootFS optimization, UI integration, target bring-up support, and validation on the real device.",
    keyWork: [
      "Configured the Yocto image and RootFS for the Allwinner T113 platform.",
      "Integrated the LVGL-based user interface into the Linux product image.",
      "Reviewed packages, services, and filesystem content against the NAND budget.",
      "Balanced boot requirements, runtime functionality, and maintainability while reducing image size.",
      "Validated the optimized image on target hardware rather than relying only on desktop or emulated behavior.",
    ],
    outcomes: [
      "Fit a complete embedded Linux and graphical UI product into approximately 60 MB of NAND.",
      "Made Linux viable for a storage-constrained device that still required a local interface.",
      "Established practical experience in image composition, RootFS tradeoffs, and target-level optimization.",
    ],
    capabilities: [
      "Yocto and BitBake",
      "RootFS optimization",
      "Resource-constrained engineering",
      "Embedded UI integration",
      "Target validation",
    ],
    tags: ["Yocto", "BitBake", "Allwinner T113", "LVGL", "RootFS", "NAND", "Embedded Linux"],
    confidentialityNote:
      "The product UI, proprietary recipes, and board-specific configuration are not published.",
    gallery: [],
    featured: true,
  },
  {
    slug: "diesel-generator-controller",
    imageBase: "/images/projects/diesel-generator-controller",
    title: "STM32F429 Generator Controller",
    subtitle:
      "Deterministic Zephyr RTOS firmware for generator monitoring, protection logic, actuator control, and industrial field operation.",
    organization: "Pilotech / Kimia Electronic",
    period: "2019 - 2024",
    projectType: "Real-time industrial controller",
    headlineMetric: "1 ms real-time task budget",
    summary:
      "Designed Zephyr RTOS firmware for an STM32F429-based generator controller, organizing monitoring, protection decisions, and actuator control around deterministic execution and production hardware constraints.",
    problem:
      "Generator control requires time-bounded acquisition and decisions, predictable actuator behavior, fault handling, and robust interaction with industrial IO. The software architecture had to meet a 1 ms task budget while remaining testable on custom hardware.",
    role:
      "Designed the RTOS task structure and implemented low-level firmware, peripheral integration, control behavior, debugging, and target validation.",
    keyWork: [
      "Structured Zephyr RTOS tasks for monitoring, protection logic, and actuator control within a 1 ms budget.",
      "Implemented timer-driven behavior, interrupt handling, GPIO, and device-control logic on STM32F429.",
      "Integrated sensors, relays, and industrial IO with firmware fault handling.",
      "Debugged hardware and software interaction during board bring-up and prototype validation.",
      "Supported production diagnostics and field-oriented reliability checks.",
    ],
    outcomes: [
      "Created a deterministic firmware structure for time-sensitive generator control.",
      "Connected protection and actuator logic to real industrial hardware interfaces.",
      "Reduced product risk through target-level debugging and validation before deployment.",
    ],
    capabilities: [
      "Zephyr RTOS",
      "Real-time firmware architecture",
      "STM32 development",
      "Industrial control",
      "Low-level debugging",
    ],
    tags: ["STM32F429", "Zephyr RTOS", "Embedded C", "Timers", "Interrupts", "GPIO", "Control Logic"],
    confidentialityNote:
      "Protection thresholds, customer requirements, and safety-critical control rules are intentionally omitted.",
    gallery: [],
    featured: true,
  },
  {
    slug: "edge-ai-vision-pipeline",
    imageBase: "/images/projects/edge-ai-vision-pipeline",
    title: "Resource-Constrained Edge AI Vision",
    subtitle:
      "An optimized object-detection pipeline for deploying useful computer vision on limited embedded hardware.",
    organization: "Pilotech / Freelance",
    period: "Professional and applied research work",
    projectType: "Edge AI and computer vision",
    headlineMetric: "80%+ detection accuracy",
    summary:
      "Developed and optimized object-detection and inference pipelines using Python, OpenCV, YOLO, and TensorFlow Lite, with attention to the memory, compute, and deployment limits of edge hardware.",
    problem:
      "Desktop vision models often exceed the compute and memory budget of embedded targets. The work required balancing detection quality, preprocessing cost, model size, and inference behavior to produce a deployable pipeline.",
    role:
      "Worked across dataset and preprocessing decisions, model evaluation, inference-pipeline design, optimization, and deployment-oriented testing.",
    keyWork: [
      "Developed preprocessing and object-detection workflows with Python and OpenCV.",
      "Evaluated YOLO-based detection behavior against the target use case.",
      "Used TensorFlow Lite and model-optimization techniques for constrained inference.",
      "Measured detection results and iterated on the pipeline to balance accuracy and deployability.",
      "Connected an AI and robotics background to practical embedded-system limitations.",
    ],
    outcomes: [
      "Achieved more than 80% detection accuracy in the evaluated application.",
      "Produced an inference pipeline designed for resource-limited edge deployment.",
      "Demonstrated end-to-end capability from vision experimentation to embedded deployment constraints.",
    ],
    capabilities: [
      "Computer vision",
      "Edge inference",
      "Model optimization",
      "Applied machine learning",
      "Performance tradeoff analysis",
    ],
    tags: ["Python", "OpenCV", "YOLO", "TensorFlow Lite", "Edge AI", "Model Optimization"],
    confidentialityNote:
      "Application-specific datasets, model assets, and customer context are not included.",
    gallery: [],
    featured: true,
  },
  {
    slug: "mc60-gsm-opencpu-datalogger",
    imageBase: "/images/projects/mc60-gsm-opencpu-datalogger",
    title: "MC60 GSM/GNSS OpenCPU Datalogger",
    subtitle:
      "Custom hardware and firmware for cellular telemetry, positioning, and remote data collection.",
    organization: "Embedded product development",
    period: "Professional project",
    projectType: "Cellular embedded device",
    summary:
      "Developed a compact datalogger around the Quectel MC60 OpenCPU platform, covering schematic and PCB-level decisions, embedded firmware, GSM/GNSS integration, communication testing, and field debugging.",
    problem:
      "The device needed to collect and transmit data through a compact cellular platform while maintaining stable power, modem communication, positioning behavior, and recoverability under real network conditions.",
    role:
      "Worked across hardware design, OpenCPU firmware, cellular and GNSS integration, bring-up, communication testing, and field validation.",
    keyWork: [
      "Designed the hardware platform around the Quectel MC60 module.",
      "Developed embedded firmware for device operation, data collection, and communication.",
      "Configured GSM connectivity and tested cellular data transfer under field conditions.",
      "Integrated and debugged GNSS positioning behavior.",
      "Validated power and communication behavior during hardware bring-up.",
    ],
    outcomes: [
      "Created an end-to-end cellular embedded device spanning PCB, firmware, modem, and field testing.",
      "Established a reusable foundation for tracking, telemetry, and remote data-collection products.",
      "Demonstrated ownership beyond firmware through hardware design and system validation.",
    ],
    capabilities: [
      "Embedded hardware design",
      "OpenCPU firmware",
      "Cellular and GNSS integration",
      "Board bring-up",
      "Field debugging",
    ],
    tags: ["Quectel MC60", "OpenCPU", "GSM", "GNSS", "Embedded C", "Hardware Design", "Altium"],
    confidentialityNote:
      "PCB details and product-specific communication protocols will be reviewed before publication.",
    gallery: [],
    featured: false,
  },
];
