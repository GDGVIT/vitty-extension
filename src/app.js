const mon = document.querySelectorAll('.mon')[0]
const tue = document.querySelectorAll('.tue')[0]
const wed = document.querySelectorAll('.wed')[0]
const thu = document.querySelectorAll('.thu')[0]
const fri = document.querySelectorAll('.fri')[0]
const sat = document.querySelectorAll('.sat')[0]
const sun = document.querySelectorAll('.sun')[0]
const main = document.querySelectorAll('.main')[0]
const upload = document.querySelectorAll('.upload1')[0]
const change = document.querySelectorAll('.upload4')[0]
const change1 = document.querySelectorAll('.upload4')[1]
const logout = document.querySelectorAll('.upload6')[0]
const courseName = {
  CSE1003: 'Digital Logic and Design',
  CSE1004: 'Network and Communication',
  CSE1007: 'Java Programming',
  CSE2001: 'Computer Architecture and Organization',
  CSE2004: 'Database Management Systems',
  CSE2005: 'Operating Systems',
  CSE2006: 'Microprocessor and Interfacing',
  CSE2011: 'Data Structures and Algorithms',
  CSE2012: 'Design and Analysis of Algorithms',
  CSE2013: 'Theory of Computation',
  CSE3001: 'Software Engineering',
  CSE3002: 'Internet and Web Programming',
  CSE4001: 'Parallel and Distributed Computing',
  EEE1001: 'Basic Electrical and Electronics Engineering',
  MAT1014: 'Discrete Mathematics and Graph Theory',
  MAT3004: 'Applied Linear Algebra',
  CSE1006: 'Blockchain and Cryptocurrency Technologies',
  CSE2014: 'Compiler Design',
  CSE3006: 'Embedded System Design',
  CSE3009: 'Internet of Things',
  CSE3011: 'Robotics and its Applications',
  CSE3013: 'Artificial Intelligence',
  CSE3016: 'Computer Graphics and Multimedia',
  CSE3018: 'Content Based Image and Video Retrieval',
  CSE3020: 'Data Visualization',
  CSE3021: 'Social and Information Networks',
  CSE3024: 'Web Mining',
  CSE3025: 'Large Scale Data Processing',
  CSE3029: 'Game Programming',
  CSE3035: 'Principles of Cloud Computing',
  CSE3501: 'Information Security Analysis and Audit',
  CSE3502: 'Information Security Management',
  CSE4003: 'Cyber Security',
  CSE4004: 'Digital Forensics',
  CSE4011: 'Virtualization',
  CSE4014: 'High Performance Computing',
  CSE4015: 'Human Computer Interaction',
  CSE4019: 'Image Processing',
  CSE4020: 'Machine Learning',
  CSE4022: 'Natural Language Processing',
  CSE4027: 'Mobile Programming',
  CSE4028: 'Object Oriented Software Development',
  MAT2002: 'Applications of Differential and Difference Equations',
  CHY1701: 'Engineering Chemistry',
  CSE1001: 'Problem Solving and Programming',
  CSE1002: 'Problem Solving and Object Oriented Programming',
  CSE1901: 'Technical Answers for Real World Problems (TARP)',
  CSE1902: 'Industrial Internship',
  CSE1903: 'Comprehensive Examination',
  CSE1904: 'Capstone Project',
  ENG1901: 'Technical English - I',
  ENG1902: 'Technical English - II',
  ENG1903: 'Advanced Technical English',
  ESP1001: 'ESPANOL FUNDAMENTAL',
  ESP2001: 'ESPANOL INTERMEDIO',
  FRE1001: 'Francais quotidien',
  FRE2001: 'Francais progressif',
  GER1001: 'Grundstufe Deutsch',
  GER2001: 'Mittelstufe Deutsch',
  GRE1001: 'Modern Greek',
  HUM1021: 'Ethics and Values',
  JAP1001: 'Japanese for Beginners',
  MAT1011: 'Calculus for Engineers',
  MAT2001: 'Statistics for Engineers',
  MGT1022: 'Lean Start-up Management',
  PHY1701: 'Engineering Physics',
  PHY1901: 'Introduction to Innovative Projects',
  RUS1001: 'Russian for Beginners',
  STS1001: 'Introduction to Soft Skills',
  STS1002: 'Introduction to Business Communication',
  STS1101: 'Fundamentals of Aptitude',
  STS1102: 'Arithmetic Problem Solving',
  STS1201: 'Introduction to Problem Solving',
  STS1202: 'Introduction to Quantitative, Logical and Verbal Ability',
  STS2001: 'Reasoning Skill Enhancement',
  STS2002: 'Introduction to Etiquette',
  STS2101: 'Getting Started to Skill Enhancement',
  STS2102: 'Enhancing Problem Solving Skills',
  STS2201: 'Numerical Ability and Cognitive Intelligence',
  STS2202: 'Advanced Aptitude and Reasoning Skills',
  STS3001: 'Preparedness for External Opportunities',
  STS3004: 'Data Structures and Algorithms',
  STS3005: 'Code Mithra',
  STS3006: 'Preparedness for External Opportunities',
  STS3007: 'Preparedness for Career Opportunities',
  STS3101: 'Introduction to Programming Skills',
  STS3104: 'Enhancing Programming Ability',
  STS3105: 'Computational Thinking',
  STS3201: 'Programming Skills for Employment',
  STS3204: 'JAVA Programming and Software Engineering Fundamentals',
  STS3205: 'Advanced JAVA Programming',
  STS3301: 'JAVA for Beginners',
  STS3401: 'Foundation to Programming Skills',
  STS5002: 'Preparing for Industry',
  BCD3001: 'Bayesian Data Analysis',
  BCD3002: 'Business Intelligence and Analytics',
  BCD3003: 'Cognitive Systems',
  BCD3004: 'Data Modeling and Simulation',
  BCI2001: 'Data Privacy',
  BCI2002: 'Image Processing',
  BCI3001: 'Web Security',
  BCI3002: 'Disaster Recovery and Business Continuity Management',
  BCI3003: 'Android Security',
  BCI3004: 'Security of E-Based Systems',
  BCI3005: 'Digital Watermarking and Steganography',
  BCI3006: 'Biometrics',
  BCI4001: 'Cyber Forensics and Investigation',
  BCI4002: 'Vulnerability Analysis and Penetration Testing',
  BCI4003: 'Malware Analysis',
  BCT3001: 'Wireless Ad-hoc and Sensor Networks',
  BCT3002: 'Embedded System Architecture and Design',
  BCT3004: 'Privacy and Security in Internet of Things',
  BCT3005: 'Fundamentals of Fog and Edge Computing',
  BCT3006: 'Industrial and Medical Internet of Things',
  BCT3007: 'Programming for Internet of Things Boards',
  BCT3008: 'Software Defined Networks',
  BCT4001: 'Sensors and Actuator Devices',
  BCT4002: 'Architecting Smart Internet of Things Devices',
  BCT4003: 'Wearable Computing',
  BCT4005: 'Design of Smart Cities',
  BCT4006: 'Cognitive Internet of Things',
  BCT4007: 'Applications of Internet of Things in Robotics',
  BCT4009: 'Internet of Things Architectures and its Protocol',
  BIT1001: 'Introduction to Life Sciences',
  BIT1002: 'Biostatistics',
  BIT1003: 'Biology for Engineers',
  BIT1004: 'Cell Biology and Biochemistry',
  BIT1005: 'Biochemistry',
  BIT1006: 'Cell Biology and Genetics',
  BIT1007: 'Microbiology',
  BIT1008: 'Principles of Chemical Engineering',
  BIT1009: 'Biobusiness',
  BIT1010: 'Computational Biochemistry',
  BIT1011: 'Social Entrepreneurship',
  BIT1012: 'Human Anatomy and Physiology',
  BIT1013: 'Semiconductor Devices and Circuits',
  BIT1014: 'Biomaterials',
  BIT1016: 'Biochemical Analysis and Techniques',
  BIT1018: 'Medical Optics',
  BIT1023: 'Health Technology Management',
  BIT1024: 'Database Management for Healthcare',
  BIT1025: 'Hospital Management',
  BIT1026: 'Food, Nutrition and Health',
  BIT1027: 'Introduction to Research Techniques',
  BIT1028: 'Bio-Inspired Design',
  BIT1030: 'Sustainability Science for Engineers',
  BIT1031: 'System Biology',
  BIT1702: 'Biostatistics',
  BIT1901: 'Technical Answers for Real World Problems (TARP)',
  BIT1902: 'Industrial Internship',
  BIT1903: 'Comprehensive Examination',
  BIT1904: 'Capstone Project',
  BIT2001: 'Analytical Bioinformatics',
  BIT2002: 'Biological Database',
  BIT2003: 'Genomics and Proteomics',
  BIT2004: 'Bioinformatics',
  BIT2005: 'Analytical Techniques in Biotechnology',
  BIT2006: 'Molecular Biology',
  BIT2007: 'Down Stream Processing',
  BIT2008: 'Immunology and Immunotechnology',
  BIT2009: 'Protein Engineering and Design',
  BIT2010: 'Pharmaceutical Biotechnology',
  BIT2011: 'Developmental Biology and Regenerative Medicine',
  BIT2012: 'Metabolic Engineering',
  BIT2013: 'Industrial Enzymology',
  BIT2014: 'Proteomics',
  BIT2015: 'Stem Cell Technology',
  BIT2016: 'Cancer Biology and Informatics',
  BIT2017: 'Industrial Biotechnology',
  BIT2018: 'Food Biotechnology',
  BIT2019: 'Environmental Biotechnology',
  BIT2020: 'Chemical Reaction Engineering and Unit Operations',
  BIT2021: 'Mass and Heat Transfer Operations',
  BIT2022: 'Biomaterials and Artificial Organs',
  BIT2024: 'Biomechanics',
  BIT2025: 'Clinical Engineering',
  BIT2030: 'Artificial Organs',
  BIT2031: 'BioMEMS',
  BIT3001: 'Computational Biology',
  BIT3002: 'Molecular Modelling and Drug Design',
  BIT3003: 'Molecular Evolution and Phylogeny',
  BIT3004: 'Nanobiotechnology',
  BIT3005: 'Biological Spectroscopy',
  BIT3006: 'Genetic Engineering',
  BIT3007: 'Animal Biotechnology',
  BIT3008: 'Plant Biotechnology',
  BIT3009: 'Forensic Science and Technology',
  BIT3010: 'Food Process Technology',
  BIT3011: 'Plant Cell and Tissue Culture',
  BIT3012: 'Bioprocess Engineering and Bioreactor Design',
  BIT3015: 'BioFluid Dynamics',
  BIT3017: 'Rehabilitation Engineering',
  BIT3018: 'Radiotherapy Techniques',
  BIT3099: 'Industrial Internship',
  BIT3999: 'Technical Answers for Real World Problems (TARP)',
  BIT4001: 'Bioprocess Plant Design, Economics and Optimization',
  BIT4002: 'Medical Diagnostics',
  BIT4003: 'Molecular Modelling and Drug Design',
  BIT4004: 'Tissue Engineering',
  BIT4005: 'Genomics',
  BIT4006: 'Neurobiology and Cognitive Science',
  BIT4009: 'Radiotherapy Techniques',
  BIT4098: 'Comprehensive Examination',
  BIT4099: 'Capstone Project',
  BIT5001: 'Advanced Biochemistry',
  BIT5002: 'Bioprocess Technology',
  BIT5003: 'Computational Biology',
  BIT5004: 'Analytical Techniques in Biotechnology',
  BIT5005: 'Genetic Engineering',
  BIT5010: 'Anatomy and Physiology',
  BIT5011: 'Rehabilitation Engineering',
  BIT5020: 'Biobusiness Management',
  BIT5021: 'Biodiversity and Conservation',
  BIT5022: 'Bioethics, Biosafety and Patents',
  BIT5705: 'Genetic Engineering',
  BIT6001: 'Industrial Biotechnology',
  BIT6002: 'Nanobiotechnology',
  BIT6003: 'Protein Engineering and Technology',
  BIT6004: 'Equipment Design, Optimization of Techniques and Bioprocess Economics',
  BIT6005: 'Programming for Biologists',
  BIT6006: 'Biomolecular Interactions and Informatics',
  BIT6007: 'Food Process Technology',
  BIT6008: 'Natural Product Technology',
  BIT6009: 'Metabolomics and Metabolic Engineering',
  BIT6010: 'Plant Biotechnology',
  BIT6011: 'Animal Biotechnology',
  BIT6012: 'Pharmaceutical Biotechnology',
  BIT6013: 'Environmental Biotechnology',
  BIT6014: 'Aquatic Biotechnology',
  BIT6015: 'Immunotechnology',
  BIT6016: 'Genomics',
  BIT6017: 'Proteomics',
  BIT6018: 'Cellular and Molecular Neuroscience',
  BIT6019: 'Cancer Biology',
  BIT6020: 'Medical Biotechnology',
  BIT6021: 'Microbial Technology',
  BIT6022: 'Biomaterials',
  BIT6023: 'Biomechanics',
  BIT6024: 'Health Care Management',
  BIT6099: 'Masters Thesis',
  BIT6705: 'Programming for Biologists',
  BIT6707: 'Food Process Technology',
  BMD0001: 'Life Sciences for Biomedical Engineers',
  BMD1001: 'Tissue Engineering',
  BMD1002: 'Bioinformatics',
  CBS1002: 'Object Oriented Programming',
  CBS1003: 'Data Structures and Algorithms',
  CBS1004: 'Computer Architecture and Organization',
  CBS1005: 'Software Engineering Methodologies',
  CBS1006: 'Principles of Operating Systems',
  CBS1007: 'Database Systems',
  CBS1008: 'Operations Research',
  CBS1009: 'Computational Statistics',
  CBS1901: 'Technical Answers for Real World Problems (TARP)',
  CBS1902: 'Industrial Project',
  CBS1903: 'Comprehensive Examination',
  CBS1904: 'Capstone Project',
  CBS2002: 'Formal Languages and Automata Theory',
  CBS2003: 'Design Thinking',
  CBS3001: 'Computer Networks',
  CBS3002: 'Information Security',
  CBS3003: 'Design and Analysis of Algorithms',
  CBS3004: 'Artificial Intelligence',
  CBS3005: 'Cloud, Microservices and Applications',
  CBS3006: 'Machine Learning',
  CBS3007: 'Data Mining and Analytics',
  CBS3008: 'Introduction to Internet of Things',
  CBS3009: 'Advanced Social, Text and Media Analytics',
  CBS3010: 'Mobile Computing',
  CBS3011: 'Usability Design of Software Applications',
  CBS3012: 'IT Project Management',
  CBS3013: 'Conversational Systems',
  CBS3014: 'Modern Web Applications',
  CBS3015: 'Information Systems Audit and Control',
  CBS3016: 'Cognitive Science and Analytics',
  CBS4001: 'Robotics and Embedded Systems',
  CBS4002: 'Cryptology and Analysis',
  CBS4003: 'Quantum Computation and Quantum Information',
  CBS4004: 'Image Processing and Pattern Recognition',
  CBS4005: 'Enterprise Systems',
  CHE1001: 'Materials Science and Strength of Materials',
  CHE1002: 'Process Calculations',
  CHE1003: 'Process Engineering Thermodynamics',
  CHE1004: 'Chemical Technology',
  CHE1005: 'Momentum Transfer',
  CHE1006: 'Heat Transfer',
  CHE1007: 'Safety and Hazard Analysis',
  CHE1008: 'Unit Processes in Organic Synthesis',
  CHE1009: 'Biochemical Engineering',
  CHE1010: 'Process Plant Utilities',
  CHE1011: 'Optimization of Chemical Processes',
  CHE1012: 'Petroleum Chemistry',
  CHE1013: 'Natural Gas Engineering',
  CHE1014: 'Petroleum Technology',
  CHE1015: 'Petrochemical Technology',
  CHE1016: 'Fermentation Technology',
  CHE1017: 'Food Process Engineering',
  CHE1018: 'Membrane Separations Technology',
  CHE1019: 'Polymer Technology',
  CHE1020: 'Fertilizer Technology',
  CHE1021: 'Surfactant Technology',
  CHE1022: 'Mechanical Operations',
  CHE1023: 'Production and Operations Management',
  CHE1901: 'Technical Answers for Real World Problems (TARP)',
  CHE1902: 'Industrial Internship',
  CHE1903: 'Comprehensive Examination',
  CHE1904: 'Capstone Project',
  CHE2001: 'Chemical Reaction Engineering',
  CHE2002: 'Process Equipment Design and Economics',
  CHE2003: 'Chemical Product Design',
  CHE2004: 'Complex Fluids Engineering',
  CHE2005: 'Chemical Modelling of the Atmosphere',
  CHE2006: 'Fuels and Combustion',
  CHE2007: 'Process Intensification',
  CHE2008: 'Chemical Engineering Computational Fluid Dynamics',
  CHE3001: 'Computational Methods in Process Engineering',
  CHE3002: 'Process Instrumentation and Control',
  CHE3003: 'Mass Transfer',
  CHE3004: 'Heterogeneous Reaction Engineering',
  CHE3005: 'Chemical Process Integration',
  CHE3006: 'Process Plant Simulation',
  CHE3007: 'Multiphase Flow',
  CHE3008: 'Industrial Pollution Engineering',
  CHE3009: 'Linear Systems theory with Applications',
  CHE3010: 'Colloids and Interfacial Science',
  CHE3099: 'Industrial Internship',
  CHE3999: 'Technical Answers for Real World Problems (TARP)',
  CHE4001: 'Equilibrium Staged Operations',
  CHE4002: 'Transport Phenomena',
  CHE4003: 'Modelling and Simulation in Process Engineering',
  CHE4005: 'Fluidization Engineering',
  CHE4006: 'Introduction to Molecular Dynamics and Simulation',
  CHE4007: 'Rheology of Complex Fluids',
  CHE4098: 'Comprehensive Examination',
  CHE4099: 'Capstone Project',
  CHI1001: 'Chinese for Engineers',
  CHI5001: 'Chinese for Engineers',
  CHY1001: 'Engineering Chemistry',
  CHY1004: 'Materials and Instrumental Techniques',
  CHY1703: 'Environmental Studies',
  CIS5001: 'Cryptosystems',
  CIS6001: 'Cyber Attacks Detection and Prevention Systems',
  CIS6002: 'Malware Analysis',
  CIS6003: 'Penetration Testing and Vulnerability Assessment',
  CIS6004: 'Wireless and Mobile Network Security',
  CIS6005: 'Multimedia Security',
  CIS6006: 'Cloud Security and Analytics',
  CIS6007: 'Secure Software Systems',
  CIS6008: 'Digital Forensics',
  CIS6009: 'Trusted Network Systems',
  CIS6010: 'Critical Infrastructure Protection',
  CIS6011: 'Risk Detection, Management and Mitigation',
  CIS6012: 'Computer Security Audit and Assurance',
  CIS6013: 'Web Application Security',
  CLE1003: 'Surveying',
  CLE1004: 'Soil Mechanics and Foundation Engineering',
  CLE1006: 'Environmental Engineering',
  CLE1007: 'Construction Materials and Techniques',
  CLE1008: 'Economics',
  CLE1009: 'Fundamentals of Energy, Environment and Climate Change',
  CLE1010: 'Natural Disaster Mitigation and Management',
  CLE1011: 'Engineering Geology',
  CLE1012: 'Air and Noise Pollution',
  CLE1013: 'Environmental Impact Assessment',
  CLE1014: 'Renewable Sources of Energy',
  CLE1016: 'Urban Planning',
  CLE1901: 'Technical Answers for Real World Problems (TARP)',
  CLE1902: 'Industrial Internship',
  CLE1903: 'Comprehensive Examination',
  CLE1904: 'Capstone Project',
  CLE2001: 'Building Drawing',
  CLE2002: 'Strength of Materials',
  CLE2003: 'Structural Analysis',
  CLE2004: 'Water Resource Engineering',
  CLE2005: 'Transportation Engineering',
  CLE2006: 'Earthquake Engineering',
  CLE2007: 'Advanced Concrete Technology',
  CLE2008: 'Construction Planning and Management',
  CLE2009: 'Advanced Soil Mechanics',
  CLE2010: 'Ground Improvement Techniques',
  CLE2011: 'Soil Dynamics and Machine Foundation',
  CLE2012: 'Unsaturated Soil Mechanics',
  CLE2013: 'Advanced Foundation Engineering',
  CLE2014: 'Geotechnical Earthquake Engineering',
  CLE2015: 'Hydraulic Structures and Machinery',
  CLE2016: 'Advanced Fluid Mechanics',
  CLE2017: 'Hydrology',
  CLE2018: 'Industrial Wastes Treatment and Disposal',
  CLE2019: 'Pollution Control and Monitoring',
  CLE2020: 'Solid Waste Management',
  CLE2021: 'Advanced Surveying',
  CLE2022: 'Economics and Business Finance for Civil Engineers',
  CLE2023: 'GIS and Remote Sensing',
  CLE2024: 'Global Position System',
  CLE3001: 'Quantity Surveying and Estimating',
  CLE3002: 'Basics of Structural Design',
  CLE3003: 'Applications of Matrix Methods in Structural Analysis',
  CLE3004: 'Advanced Structural Analysis',
  CLE3005: 'Ground Water Engineering',
  CLE3006: 'Highway Pavement Design',
  CLE3007: 'Traffic Engineering',
  CLE3008: 'Transport Planning and Management',
  CLE3009: 'Highway Engineering',
  CLE3010: 'Architecture and Town Planning',
  CLE3011: 'Finite Element Methods',
  CLE3099: 'Industrial Internship',
  CLE3999: 'Technical Answers for Real World Problems (TARP)',
  CLE4001: 'Design of Steel Structures',
  CLE4002: 'Design of Advanced Concrete Structures',
  CLE4003: 'Prestressed Concrete Design',
  CLE4004: 'Seismic Design of Structures',
  CLE4098: 'Comprehensive Examination',
  CLE4099: 'Capstone Project',
  CLE5001: 'Theory of Elasticity and Plasticity',
  CLE5002: 'Design of Concrete Structural Systems',
  CLE5003: 'Structural Dynamics',
  CLE5004: 'Physicochemical, Biological Principles and Processes',
  CLE5005: 'Design of Water and Wastewater Treatment Systems',
  CLE5007: 'Environmental Quality Monitoring',
  CLE5010: 'Matrix Methods of Structural Analysis',
  CLE5012: 'Design of Bridges',
  CLE5013: 'Experimental Stress Analysis',
  CLE5014: 'Machine Foundations',
  CLE5015: 'Prefabricated Structures',
  CLE5016: 'Stability of Structures',
  CLE5017: 'Construction Practices and Equipment',
  CLE5018: 'Modern Construction Materials',
  CLE5019: 'Construction Planning and Scheduling',
  CLE5020: 'Contract and Administration Planning',
  CLE5021: 'Construction Economics and Finance',
  CLE5022: 'Supply Chain Management',
  CLE5023: 'Computer Application in Infrastructure Management',
  CLE5705: 'Design of Water and Wastewater Treatment Systems',
  CLE5710: 'Matrix Methods of Structural Analysis',
  CLE6001: 'Advanced Concrete Materials and Technology',
  CLE6002: 'Advanced Foundation Design',
  CLE6004: 'Repair and Rehabilitation of Structures',
  CLE6005: 'Solid and Hazardous Waste Management',
  CLE6006: 'Environmental Geotechnology',
  CLE6007: 'Energy, Environment and Climate Change',
  CLE6008: 'Environmental Impact Assessment',
  CLE6009: 'Air and Noise Pollution Control',
  CLE6010: 'Advanced Wastewater Treatment',
  CLE6011: 'Mathematical Modeling in Environmental Engineering',
  CLE6012: 'Remote Sensing and GIS Applications',
  CLE6013: 'Occupational Health and Industrial Safety',
  CLE6014: 'Finite Element Analysis',
  CLE6015: 'Advanced Design of Steel Structures',
  CLE6016: 'Pre-stressed Concrete Structures',
  CLE6017: 'Earthquake Resistant Design',
  CLE6018: 'Application of Numerical Methods in Structural Engineering',
  CLE6019: 'Theory and Design of Plates and Shells',
  CLE6020: 'Analysis and Design of Tall Structures',
  CLE6021: 'Structural Optimization',
  CLE6022: 'Urban Planning and Sustainability',
  CLE6023: 'Offshore Structures',
  CLE6024: 'Energy Efficient Buildings',
  CLE6026: 'Construction Personnel Management',
  CLE6027: 'Quality Control and Safety',
  CLE6028: 'Project Formulation and Appraisal',
  CLE6029: 'Infrastructure development and BOT, BOOT Projects',
  CLE6030: 'Estimating, Tendering and Bidding',
  CLE6031: 'Formwork for Concrete Structures',
  CLE6032: 'Prefabricated Techniques and Management',
  CLE6033: 'Green Building and Energy Management',
  CLE6034: 'Automation in Construction Industry',
  CLE6035: 'Construction Techniques of Steel and Concrete Composite Structures',
  CLE6036: 'Construction Techniques of  Deep Foundations',
  CLE6037: 'Flexible and Rigid Pavements',
  CLE6099: 'Masters Thesis',
  CSE1005: 'Software Design and Development',
  CSE1008: 'Programming in C',
  CSE1011: 'Cryptography Fundamentals',
  CSE1014: 'Foundations of Artificial Intelligence',
  CSE1015: 'Machine Learning Essentials',
  CSE1016: 'Deep Learning: Principles and Practices',
  CSE1022: 'Foundations of Robotics: Kinematics, Dynamics and Motion Control',
  CSE1023: 'Robot Vision',
  CSE1028: 'Drone Applications, Components and Assembly',
  CSE2002: 'Theory of Computation and Compiler Design',
  CSE2003: 'Data Structures and Algorithms',
  CSE2007: 'Java / Web programming in Healthcare',
  CSE2008: 'Network Security',
  CSE2010: 'Advanced C Programming',
  CSE2015: 'Internet Programming and Web Technologies',
  CSE2016: 'Microprocessor and Microcontrollers',
  CSE2020: 'Introduction to Cyber Physical Systems',
  CSE2021: 'Distributed Real-Time Systems',
  CSE2022: 'Cyber Physical Systems',
  CSE2023: 'Robotics Process Automation',
  CSE2024: 'Advanced Robotic Process Automation Developer',
  CSE2025: 'Machine Diagnostics and Condition Monitoring',
  CSE2026: 'Cloud Computing',
  CSE2030: 'Signals and Systems',
  CSE2031: 'Principles of Database Management Systems',
  CSE2034: 'Cyber Physical System Design',
  CSE3003: 'Micro Kernel OS',
  CSE3004: 'Storage Technologies',
  CSE3005: 'Advanced Computer Architecture',
  CSE3007: 'Foundation Skills in Product  Development',
  CSE3008: 'Integrated Digital Design',
  CSE3010: 'Real Time Systems',
  CSE3012: 'Algorithms for Computational Biology',
  CSE3014: 'Bio Inspired  Computing',
  CSE3015: 'Business Intelligence',
  CSE3017: 'Computer Vision',
  CSE3019: 'Data Mining',
  CSE3022: 'Soft Computing',
  CSE3023: 'Speech Technology',
  CSE3026: 'E-Learning  Technologies',
  CSE3027: 'Electronic and Mobile Commerce',
  CSE3028: 'Functional  Programming',
  CSE3030: 'Open Source Software',
  CSE3031: 'Software Testing',
  CSE3032: 'Software  Project  Management',
  CSE3033: 'Web Security',
  CSE3034: 'Nature Inspired Computing',
  CSE3042: 'Machine Intelligence for Medical Image Analysis',
  CSE3043: 'Video Analytics',
  CSE3044: 'Cryptography and Network Security',
  CSE3045: 'Mathematical Modeling for Data Science',
  CSE3046: 'Programming for Data Science',
  CSE3047: 'Predictive Analytics',
  CSE3048: 'Computer Graphics',
  CSE3049: 'Distributed Computing Systems',
  CSE3050: 'Data Visualization and Presentation',
  CSE3051: 'Open Source Programming',
  CSE3052: 'Software Quality and Testing',
  CSE3053: 'Big Data Analytics',
  CSE3054: 'Data Mining: Concepts and Techniques',
  CSE3055: 'Deep Learning',
  CSE3056: 'Knowledge Representation and Reasoning',
  CSE3057: 'Reinforcement Learning',
  CSE3058: 'Cognitive Robotics',
  CSE3059: 'Drones and Autonomous Systems',
  CSE3060: 'Robotics Based Industrial Automation',
  CSE3061: 'Artificial Intelligence for Cyber Security',
  CSE3063: 'Software Engineering Principles',
  CSE3064: 'Smart Sensors for Healthcare',
  CSE3070: 'Machine Learning and its Applications',
  CSE3071: 'Next Generation Networks',
  CSE3072: 'Cyber Physical Systems Assurance',
  CSE3073: 'Control Discrete Event Systems',
  CSE3074: 'Computer Controlled Systems',
  CSE3075: 'Machine Vision',
  CSE3076: 'Context -Aware Computing',
  CSE3078: 'Smart Farming and Agriculture',
  CSE3079: 'Smart Infrastructure',
  CSE3081: 'Cyber Security for Automation Systems',
  CSE3082: 'Industrial Networking and Information Systems',
  CSE3083: 'Engineering Data Analytics',
  CSE3092: 'Advanced Java Programming',
  CSE3099: 'Industrial Internship',
  CSE3505: 'Foundations of Data Analytics',
  CSE3506: 'Essentials of Data Analytics',
  CSE3999: 'Technical Answers for Real World Problems (TARP)',
  CSE4002: 'Adhoc Wireless  Networks',
  CSE4005: 'Green and Energy  aware Computing',
  CSE4006: 'Haptic Technology',
  CSE4007: 'Mobile Computing',
  CSE4008: 'Mobile Pervasive Computing',
  CSE4009: 'Network Management System',
  CSE4010: 'Parallel  Algorithms',
  CSE4012: 'Digital Signal Processing',
  CSE4013: 'Embedded Programming',
  CSE4016: 'Multi-Core Architecture  and Operating System',
  CSE4017: 'Software  Hardware Co-Design',
  CSE4018: 'Advanced Analytics',
  CSE4021: 'Modelling and Simulation',
  CSE4023: 'Pattern Recognition',
  CSE4024: 'Advanced Java Programming',
  CSE4025: 'Design  Patterns',
  CSE4026: 'Intelligent Tutoring Systems',
  CSE4029: 'Quantum Computing',
  CSE4030: 'Abstraction and its Applications',
  CSE4031: 'Game Theory',
  CSE4032: 'Search Technologies',
  CSE4033: 'Cloud Computing and Information Security',
  CSE4034: 'IoT Edge Nodes and its Applications',
  CSE4035: 'Mobile App Development for IoT',
  CSE4038: 'Computer Vision in Healthcare Application',
  CSE4039: 'Intelligent Embedded Systems',
  CSE4040: 'Bio-Informatics',
  CSE4041: 'Perception and Algorithm',
  CSE4042: 'Evolutionary Computation for Video Processing',
  CSE4043: 'Audio and Video Forensics',
  CSE4044: 'Augmented Reality and Virtual Reality',
  CSE4045: 'Human Machine Interaction',
  CSE4046: '3D Graphics and Animation',
  CSE4048: 'Soft Computing in Medical Diagnostics',
  CSE4049: 'Speech and Language Processing using Deep Learning',
  CSE4051: 'Predictive Analytics and Internet of Things',
  CSE4052: 'Smart Product Development',
  CSE4054: 'Artificial Intelligence in Block Chain',
  CSE4055: 'Cyber Threat Intelligence',
  CSE4056: 'Intelligent Multi Agent and Experts Systems',
  CSE4057: 'Network Science and Modeling',
  CSE4058: 'Business Intelligence',
  CSE4059: 'Cognitive Systems',
  CSE4060: 'Intelligent Robots and Drone Technology',
  CSE4062: 'Knowledge Representation',
  CSE4063: 'Reinforcement Learning',
  CSE4064: 'Event Processing and Correlation Systems',
  CSE4065: 'Modeling and Simulation of Digital Systems',
  CSE4071: 'Wearable Health Monitoring Devices',
  CSE4072: 'Security and Privacy of Cyber Physical Systems',
  CSE4073: 'Cyber Physical Systems for Internal and External Security',
  CSE4098: 'Comprehensive Examination',
  CSE4099: 'Capstone Project',
  CSE5001: 'Algorithms: Design and Implementation',
  CSE5002: 'Operating Systems and Virtualization',
  CSE5003: 'Database Systems: Design and Implementation',
  CSE5004: 'Computer Networks',
  CSE5005: 'Software Engineering and Modelling',
  CSE5006: 'Multicore Architectures',
  CSE5007: 'Exploratory Data Analysis',
  CSE5009: 'Soft Computing',
  CSE5010: 'Data Structures and Algorithms Analysis',
  CSE5011: 'Database Systems and Design',
  CSE5012: 'Artificial Intelligence: Principles and Techniques',
  CSE5016: 'Data Engineering',
  CSE5017: 'Applied Machine Learning',
  CSE5019: 'CPS Essentials',
  CSE5020: 'Sensors and Actuators',
  CSE5021: 'Data Warehousing and Mining',
  CSE5022: 'Machine Learning for Cyber Physical Systems',
  CSE5023: 'Cyber Security',
  CSE5024: 'Cloud Computing',
  CSE5025: 'Heterogeneous Networks',
  CSE6001: 'Bigdata Frameworks',
  CSE6002: 'Information Security Foundations',
  CSE6003: 'Web Services',
  CSE6004: 'Cloud Computing Eco-Systems',
  CSE6005: 'Machine Learning',
  CSE6006: 'NoSQL Databases',
  CSE6008: 'Distributed Systems',
  CSE6009: 'IoT Technology and Applications',
  CSE6010: 'Cloud Application Development and Management',
  CSE6012: 'Image Processing and Analysis',
  CSE6013: 'Advanced Software Testing',
  CSE6014: 'Programming for Data Science',
  CSE6015: 'Mobile Application and Development',
  CSE6016: 'Information Visualization',
  CSE6017: 'Mining Massive Data',
  CSE6018: 'Streaming Data Analytics',
  CSE6019: 'Text, Web and Social Media Analytic',
  CSE6020: 'Big Data Technologies',
  CSE6021: 'Domain Specific Predictive Analytics',
  CSE6022: 'Soft Computing',
  CSE6023: 'Cloud Computing  Fundamentals',
  CSE6024: 'Machine Learning Techniques',
  CSE6025: 'Analytics of Things',
  CSE6026: 'IoT on Cloud',
  CSE6027: 'Mobile Cloud Computing',
  CSE6028: 'Cloud Security and Audit',
  CSE6029: 'Cloud Storage Technologies',
  CSE6030: 'Design Thinking',
  CSE6031: 'Cyberspace and Information Technology Laws',
  CSE6032: 'Cloud Computing Paradigm on Software Engineering',
  CSE6034: 'Big Data Analytics',
  CSE6037: 'Deep Learning and its Applications',
  CSE6038: 'Bio-Inspired Computing',
  CSE6041: 'Blockchain Technology',
  CSE6042: 'Deep Learning',
  CSE6043: 'Image and Video Analytics',
  CSE6046: 'Network Science and Applications',
  CSE6047: 'Data Mining in Healthcare',
  CSE6048: 'Big Data Analytics in Medical Applications',
  CSE6049: 'IoT Security',
  CSE6050: 'Data Analytics',
  CSE6051: 'Information and Network Security',
  CSE6052: 'Parallel Processing and Computing',
  CSE6053: 'Wireless Sensor Networks',
  CSE6054: 'Recommender Systems',
  CSE6055: 'Machine Learning in Computer Vision',
  CSE6056: 'Artificial Intelligence for Game Programming',
  CSE6057: 'Knowledge Engineering and Expert Systems',
  CSE6058: 'Text and Speech Analytics',
  CSE6059: 'Digital Imaging Techniques and Analysis',
  CSE6060: 'Statistical Natural Language Processing',
  CSE6061: 'Programming for CPS',
  CSE6062: 'Soft Computing Techniques',
  CSE6063: 'Knowledge Engineering and Intelligent Systems',
  CSE6064: 'Intelligent Information Retrieval',
  CSE6065: 'Pattern Recognition',
  CSE6066: 'Reinforcement Learning',
  CSE6067: 'Machine Learning for Signal Processing',
  CSE6068: 'Machine Learning with Large Data Sets',
  CSE6069: 'Advances in Cryptography and Network Security',
  CSE6070: 'Cloud Computing',
  CSE6071: 'Cognitive Science',
  CSE6072: 'Web Technologies',
  CSE6073: 'Smart Sensors and IoT Systems',
  CSE6076: 'Predictive Analytics',
  CSE6077: 'Network-on-Chip',
  CSE6078: 'Software Defined Networks',
  CSE6079: 'Real Time Systems',
  CSE6080: 'Fault-Tolerant Systems',
  CSE6081: 'High Performance Communication Networks',
  CSE6082: 'Smart Health Technology',
  CSE6083: 'Smart Transportation Systems',
  CSE6099: 'Masters Thesis',
  CSE6703: 'Web Services',
  CSE6704: 'Cloud Computing Eco-Systems',
  CSE6708: 'Distributed Systems',
  CSE6712: 'Image Processing and Analysis',
  CSE6713: 'Advanced Software Testing',
  CSE6717: 'Mining Massive Data',
  CSE6718: 'Streaming Data Analytics',
  CSE6722: 'Soft Computing',
  CSE6723: 'Cloud Computing Fundamentals',
  CSE6725: 'Analytics of Things',
  ECE1001: 'Fundamentals of Electrical Circuits',
  ECE1002: 'Semiconductor Devices and Circuits',
  ECE1003: 'Electromagnetic Field Theory',
  ECE1004: 'Signals and Systems',
  ECE1005: 'Sensors and Instrumentation',
  ECE1006: 'Introduction to Nanoscience and Nanotechnology',
  ECE1007: 'Opto Electronics',
  ECE1008: 'Electronics Hardware Trouble Shooting',
  ECE1009: 'Lidar and its Applications',
  ECE1010: 'Fundamentals of Electric and Magnetic Circuits',
  ECE1011: 'Medical Physics and Biomedical Instrumentation',
  ECE1012: 'Medical Physics',
  ECE1013: 'Electronic Circuits',
  ECE1014: 'Sensors and Measurements',
  ECE1015: 'Biometrics',
  ECE1016: 'Circuit Theory',
  ECE1017: 'Electromagnetic Field Theory and Transmission Lines',
  ECE1018: 'Signal Analysis and Processing',
  ECE1023: 'Biomedical Imaging',
  ECE1024: 'Wearable Technology',
  ECE1025: 'Lab on-chip',
  ECE1026: 'Materials for Organs and Devices',
  ECE1027: 'Biomechanics and Fluid Dynamics',
  ECE1028: 'Biometric Technology and Security Systems',
  ECE1029: 'Telemedicine and Virtual Instrumentation',
  ECE1030: 'Artificial Intelligence for Biomedical',
  ECE1031: 'Nano Medicine',
  ECE1032: 'Regenerative Medicine',
  ECE1033: 'Basics of Sensors and Wearable Technology',
  ECE1710: 'Fundamentals of Electric and Magnetic Circuits',
  ECE1901: 'Technical Answers for Real World Problems (TARP)',
  ECE1902: 'Industrial Internship',
  ECE1903: 'Comprehensive Examination',
  ECE1904: 'Capstone Project',
  ECE2001: 'Network Theory',
  ECE2002: 'Analog Electronic Circuits',
  ECE2003: 'Digital Logic Design',
  ECE2004: 'Transmission Lines and Waveguides',
  ECE2005: 'Probability Theory and Random Processes',
  ECE2006: 'Digital Signal Processing',
  ECE2007: 'Micro and Smart Systems and Technology',
  ECE2008: 'Robotics and Automation',
  ECE2009: 'Fiber Optic Sensors and Applications',
  ECE2010: 'Control Systems',
  ECE2012: 'Control Systems Engineering',
  ECE2013: 'Electromagnetic Interference and Compatibility in Electronic System Design',
  ECE2014: 'Basic Medical Instrumentation',
  ECE2015: 'Integrated Circuits',
  ECE2016: 'Control Systems in Medicine',
  ECE2017: 'Physiological System Modeling',
  ECE2018: 'Medical Informatics',
  ECE2019: 'Artificial Neural Networks',
  ECE2020: 'Digital Electronics',
  ECE2021: 'Medical Imaging Equipment',
  ECE2022: 'Graphical System Design for Biomedical Engineers',
  ECE2023: 'Principles of Sensors and Data Acquisition',
  ECE2024: 'Principles of Communication Engineering',
  ECE2025: 'Probability and Statistical Theory of Communication',
  ECE2026: 'Digital Circuit Design',
  ECE2027: 'EMC and EMI',
  ECE2028: 'Analog Circuits',
  ECE2029: 'Sensors and Transducers for Health Care',
  ECE2030: 'Physiological Signal Processing',
  ECE2031: 'Antenna and Microwave Engineering',
  ECE2032: 'Wearable Devices and its Applications',
  ECE2033: 'Introduction to Data Analytics',
  ECE2034: 'Flexible Electronics and Sensors',
  ECE2035: 'Sensors, Actuators and Signal Conditioning',
  ECE2036: 'Signal Processing in Robotics',
  ECE2037: 'Wearable Electronics',
  ECE2038: 'Digital Electronics and Microcontrollers',
  ECE3001: 'Analog Communication Systems',
  ECE3002: 'VLSI System Design',
  ECE3003: 'Microcontroller and its Applications',
  ECE3004: 'Computer Organization and Architectures',
  ECE3005: 'Digital Image Processing',
  ECE3006: 'Bio Medical Signal processing',
  ECE3007: 'Advanced Digital Signal Processing',
  ECE3008: 'Engineering Aspects of Remote Sensing',
  ECE3009: 'Neural Networks and Fuzzy Control',
  ECE3010: 'Antennas and Wave Propagation',
  ECE3011: 'Microwave Engineering',
  ECE3012: 'Detection and Estimation Theory',
  ECE3013: 'Linear Integrated Circuits',
  ECE3014: 'Analog IC Design',
  ECE3015: 'VLSI Digital Signal Processing',
  ECE3016: 'FPGA Based System Design',
  ECE3017: 'RFIC Design',
  ECE3018: 'BioMedical Instrumentation',
  ECE3019: 'Systems and Signal Processing',
  ECE3020: 'Diagnostic and Therapeutic Equipment',
  ECE3021: 'Microcontrollers in Medical Applications',
  ECE3022: 'Embedded Systems in Medicine',
  ECE3023: 'Microcontrollers and its Applications',
  ECE3024: 'Analog and Digital Communication',
  ECE3025: 'Image Processing',
  ECE3026: 'IoT System Architecture',
  ECE3027: 'Bio-Signal Processing',
  ECE3028: 'BioMEMS and Systems on-chip',
  ECE3029: 'Graphical System Design for Communication Engineers',
  ECE3030: 'Principles of Computer Communication',
  ECE3031: 'Microcontroller and Embedded Systems',
  ECE3032: 'Sensor Technology',
  ECE3033: 'IoT in Automotive Systems',
  ECE3034: 'IoT for Industrial Systems',
  ECE3035: 'RFID and Flexible Sensors',
  ECE3036: 'Sensors for Structural Health Monitoring',
  ECE3037: 'Wireless Sensor Networks and IoT',
  ECE3038: 'MEMS and Nano Sensors',
  ECE3039: 'Chemical and Bio-sensors',
  ECE3040: 'Wireless Technologies for IOT',
  ECE3041: 'Biomedical Instrumentation and Measurements',
  ECE3042: 'Data Acquisition Techniques',
  ECE3043: 'Digital Image Processing for Medical Applications',
  ECE3044: 'Wearable Technology and IoT',
  ECE3045: 'Communication  System Design',
  ECE3046: 'Computer Vision and Pattern Recognition',
  ECE3047: 'Machine Learning Fundamentals',
  ECE3048: 'Deep Learning',
  ECE3049: 'Embedded Systems for Mechatronics',
  ECE3050: 'Advanced Electronics Systems',
  ECE3051: 'Analog and Digital Signal Processing',
  ECE3099: 'Industrial Internship',
  ECE3501: 'IoT Fundamentals',
  ECE3502: 'IoT Domain Analyst',
  ECE3999: 'Technical Answers for Real World Problems (TARP)',
  ECE4001: 'Digital Communication Systems',
  ECE4002: 'Advanced Microcontrollers',
  ECE4003: 'Embedded System Design',
  ECE4004: 'Embedded C and Linux',
  ECE4005: 'Optical Communication and Networks',
  ECE4006: 'Radar and Navigational Aids',
  ECE4007: 'Information Theory and Coding',
  ECE4008: 'Computer Communication',
  ECE4009: 'Wireless and Mobile Communication',
  ECE4010: 'Satellite Communication',
  ECE4011: 'Wireless Sensor Networks',
  ECE4012: 'Spread Spectrum Communication',
  ECE4013: 'Cryptography and Network Security',
  ECE4014: 'Telecom Technologies',
  ECE4015: 'ASIC Design',
  ECE4016: 'Low Power IC Design',
  ECE4017: 'Biomedical Image Processing',
  ECE4018: 'Biomedical Signal Processing',
  ECE4019: 'Medical Imaging Techniques',
  ECE4020: 'Telemedicine',
  ECE4021: 'Pattern Recognition',
  ECE4022: 'Image Processing for Clinical Applications',
  ECE4023: 'Biometric Systems',
  ECE4024: 'Embedded Systems in Medical Applications',
  ECE4025: 'Embedded Programming',
  ECE4026: 'M2M Communication',
  ECE4027: 'Embedded Sensing Technologies',
  ECE4028: 'Smart IoT Applications',
  ECE4029: 'Medical Device Technology',
  ECE4030: 'Building Management Systems',
  ECE4031: 'Artificial Intelligence with Python',
  ECE4032: 'Neural Networks and Deep Learning',
  ECE4033: 'IoT System Design and Applications',
  ECE4034: 'Medical Robotics',
  ECE4098: 'Comprehensive Examination',
  ECE4099: 'Co-Op / Capstone Project',
  ECE5000: 'Basic Electronics and Measurements',
  ECE5001: 'Principles of Sensors',
  ECE5002: 'Data Acquisition and Hardware Interfaces',
  ECE5004: 'Software for Embedded Systems',
  ECE5005: 'Advances in Wireless Networks',
  ECE5006: 'Flexible and Wearable Sensors',
  ECE5007: 'Nanomaterials and Sensors',
  ECE5008: 'Micro and Nano Fluidics',
  ECE5009: 'Advanced VLSI System Design',
  ECE5010: 'Advanced Digital Communication',
  ECE5011: 'Advanced Digital Signal Processing',
  ECE5012: 'Advanced Antenna Engineering',
  ECE5013: 'Fiber Optic Communication and Networks',
  ECE5014: 'ASIC Design',
  ECE5015: 'Digital IC Design',
  ECE5016: 'Analog IC Design',
  ECE5017: 'Digital Design with FPGA',
  ECE5018: 'Physics of VLSI Devices',
  ECE5019: 'Computer Aided Design for VLSI',
  ECE5020: 'DSP Architectures',
  ECE5021: 'Scripting Languages and Verification',
  ECE5022: 'VLSI Digital Signal Processing',
  ECE5023: 'Memory Design and Testing',
  ECE5024: 'IC Technology',
  ECE5025: 'System-on-Chip Design',
  ECE5026: 'System Design with FPGA',
  ECE5027: 'Advanced Computer Architecture',
  ECE5028: 'Micro Sensors and Interface Electronics',
  ECE5029: 'VLSI Testing and Testability',
  ECE5030: 'Scripting Languages for VLSI Design Automation',
  ECE5031: 'Quantum Physics for Nanostructures',
  ECE5032: 'Physics and Chemistry of Solids',
  ECE5033: 'Synthesis of Nanomaterials and Thin Film Deposition',
  ECE5034: 'Nanomaterial Characterization Techniques',
  ECE5035: 'Semiconductor Device Physics and Technology',
  ECE5036: 'MEMS to NEMS',
  ECE5037: 'Nanosensors',
  ECE5038: 'Carbon Nanomaterials',
  ECE5039: 'Lithographic Techniques for Device Fabrication',
  ECE5040: 'Plasmonics',
  ECE5041: 'Embedded System Design',
  ECE5042: 'Microcontroller Architecture and Organization',
  ECE5043: 'Embedded Programming',
  ECE5044: 'Hardware Software Co-design',
  ECE5045: 'Advanced Digital Image Processing',
  ECE5046: 'Biomedical Sensors and Data Acquisition Techniques',
  ECE5047: 'Biosignal Processing and Analysis',
  ECE5048: 'Embedded Systems and IoT for Biomedical Applications',
  ECE5049: 'MEMS and NEMS for Biomedical Applications',
  ECE5050: 'Physiological Control Systems',
  ECE5051: 'Artificial Neural Networks',
  ECE5052: 'Medical Image Processing',
  ECE5053: 'Electronic Hardware System Design',
  ECE5054: 'Real Time Operating System',
  ECE5055: 'Embedded Sensor Systems',
  ECE5056: 'Wireless Protocols for IoT',
  ECE5057: 'IoT Architecture',
  ECE5060: 'Principles of Sensors and Signal Conditioning',
  ECE5061: 'IoT Fundamentals and Architecture',
  ECE5062: 'Data Acquisition',
  ECE5063: 'System Dynamics and Control',
  ECE5064: 'Programming and Scripting Languages',
  ECE5065: 'Microcontrollers for Internet of Things Prototyping',
  ECE5066: 'Chemical and Environmental Sensor',
  ECE5067: 'Cloud and Fog Computing',
  ECE5068: 'IoT Security and Trust',
  ECE5069: 'IoT Applications and Web Development',
  ECE5071: 'Sensors and Engine Management Systems',
  ECE5072: 'Microcontrollers for Vehicular systems',
  ECE5073: 'Vehicle Control Systems',
  ECE5074: 'Automotive Networking and Protocols',
  ECE5075: 'Electric and Electronic Power Systems for Vehicles',
  ECE5724: 'IC Technology',
  ECE5748: 'Embedded Systems and IoT for Biomedical Applications',
  ECE6001: 'Wireless Sensor Networks and IoT',
  ECE6002: 'Microcontrollers and Embedded Sensors',
  ECE6003: 'Micro Systems and Hybrid Technology',
  ECE6004: 'RF and Microwave Sensors',
  ECE6005: 'Chemical Sensors',
  ECE6006: 'Automotive Sensors',
  ECE6007: 'Biomedical Sensors',
  ECE6008: 'Biosensors',
  ECE6009: 'Environmental Sensors',
  ECE6010: 'High Performance Communication Networks',
  ECE6011: 'Mobile Adhoc Networks',
  ECE6012: 'Modern Wireless Communication Systems',
  ECE6013: 'Modeling of Wireless Communication Systems',
  ECE6014: 'Modern Satellite Communication',
  ECE6015: 'Coding for MIMO Communication',
  ECE6016: 'Advanced Wireless Sensor Networks',
  ECE6017: 'RF and Microwave Circuit Design',
  ECE6018: 'Microwave Integrated Circuits',
  ECE6019: 'Image Processing and Feature Extraction',
  ECE6020: 'Multirate Systems',
  ECE6021: 'Adaptive Signal Processing',
  ECE6022: 'Optical Broadband Access Networks',
  ECE6023: 'RF MEMS',
  ECE6024: 'VLSI Verification Methodologies',
  ECE6025: 'Low Power IC Design',
  ECE6026: 'Mixed Signal IC Design',
  ECE6027: 'RFIC Design',
  ECE6028: 'Nanoscale Devices and Circuit Design',
  ECE6029: 'Integrated Wave Optics',
  ECE6030: 'Signal Processing and Data Analytics',
  ECE6031: 'Nanomagnetism-Fundamentals and Applications',
  ECE6032: 'Nanoelectronics',
  ECE6033: 'Nanophotonics',
  ECE6034: 'Energy Technologies',
  ECE6035: 'Spintronics',
  ECE6036: 'In Vehicle Networking',
  ECE6037: 'Fault Tolerant Dependable Systems',
  ECE6038: 'Virtual Instrumentation Systems',
  ECE6039: 'Nanoelectronic Circuit Design',
  ECE6040: 'Biomedical Equipment',
  ECE6041: 'Automotive Electrical Systems',
  ECE6042: 'Wireless and Mobile Communication',
  ECE6043: 'Advanced Processors and its Applications',
  ECE6044: 'Electromagnetic Interference and Compatibility',
  ECE6045: 'Neural Networks and Fuzzy Systems',
  ECE6046: 'Advanced Embedded Programming',
  ECE6047: 'Design and Analysis of Algorithms',
  ECE6048: 'Embedded System Design using FPGA',
  ECE6049: 'Modern Automotive Electronics Systems',
  ECE6050: 'Soft Computing',
  ECE6052: 'Networking and Information System in Medicine',
  ECE6053: 'Medical Robotics',
  ECE6054: 'Medical Imaging Techniques',
  ECE6055: 'Digital Healthcare and Medical Standards',
  ECE6056: 'Wireless Sensor Networks',
  ECE6057: 'MEMS and Microsystems',
  ECE6058: 'Advances in Wireless Sensor Networks',
  ECE6059: 'Energy Management in Wireless Systems',
  ECE6060: 'Advanced Wireless Networks',
  ECE6061: 'Software Defined Networks',
  ECE6062: 'Cognitive Radio Networks',
  ECE6063: 'IoT Smart Systems',
  ECE6064: 'Machine to Machine Communication',
  ECE6065: 'Wireless Body Area Networks',
  ECE6066: 'Automotive Informatics and Communicative Systems',
  ECE6067: 'Industrial Internet of Things',
  ECE6069: 'Digital Signal Processing and its Applications',
  ECE6071: 'Data Acquisition and Signal Conditioning',
  ECE6072: 'Automotive Power Electronics and Motor Drives',
  ECE6073: 'AUTOSAR and ISO Standards for Automotive Systems',
  ECE6074: 'Alternative Drives, Traction and Controls',
  ECE6075: 'Soft Computing Techniques for Automotive Applications',
  ECE6076: 'Automotive EMI and EMC Standards',
  ECE6077: 'Vehicular Information and Communication Systems',
  ECE6078: 'Parallel Programming using Multicores and Graphical Programming Units',
  ECE6079: 'Open Source Hardware and Software System Design',
  ECE6080: 'Machine Vision System for Automotive',
  ECE6081: 'Automotive Fault Diagnostics',
  ECE6082: 'Emission Control and Diagnosis',
  ECE6083: 'Vehicle Safety Systems',
  ECE6084: 'Vehicle Bodies',
  ECE6085: 'Engine Peripherals',
  ECE6087: 'Multi-disciplinary Product Development',
  ECE6088: 'Deep Learning - An Approach to Artificial Intelligence',
  ECE6089: 'Automotive Sensors and In-Vehicle Networking',
  ECE6090: 'Fiber-optic Sensors and Photonics',
  ECE6091: 'Foundations of Machine Learning',
  ECE6092: 'Intelligent IoT System Design and Architecture',
  ECE6093: 'Advanced Machine Learning and Deep Learning',
  ECE6094: 'Scripting Languages for Design Automation',
  ECE6095: 'Quantum Computation and Communication Technologies',
  ECE6099: 'Masters Thesis',
  ECE6738: 'Virtual Instrumentation Systems',
  ECE6745: 'Neural Networks and Fuzzy Systems',
  ECM1001: 'Circuit Theory',
  ECM1002: 'Analysis of Data Structures and Algorithms',
  ECM1003: 'Cyber Physical Systems',
  ECM1004: 'Web of Things',
  ECM1005: 'Principles of Software Engineering',
  ECM1701: 'Circuit Theory',
  ECM2001: 'Data Communication Networks',
  ECM2002: 'Machine Learning Algorithms',
  ECM2003: 'Operating Systems',
  ECM3001: 'Data Analytics and Visualization',
  ECM3002: 'Cloud and Distributed Computing',
  ECM3003: 'Wireless Communication Networks',
  ECM3004: 'Electronic and Communication Systems',
  ECM3005: 'AI and Knowledge Representation',
  ECM4001: 'Multi-core Architecture and Programming',
  ECM4002: 'IoT System Design',
  EEE1002: 'Electric Circuits',
  EEE1003: 'Electrical Workshop',
  EEE1004: 'Engineering Electromagnetics',
  EEE1005: 'Signals and Systems',
  EEE1007: 'Neural Network and Fuzzy Control',
  EEE1008: 'Bio-Medical Instrumentation',
  EEE1009: 'Robotics and Automation',
  EEE1011: 'Automated Test Engineering',
  EEE1012: 'Optoelectronic Instrumentation',
  EEE1013: 'Analytical Instrumentation',
  EEE1014: 'Fiber Optic Sensors',
  EEE1015: 'Micro Electromechanical Systems',
  EEE1016: 'Non-Destructive Testing',
  EEE1018: 'Nanotechnology Fundamentals and its Applications',
  EEE1020: 'Engineering Optimization',
  EEE1021: 'Electrical Safety',
  EEE1022: 'Fundamentals of Reliability Engineering',
  EEE1023: 'Industrial Drives',
  EEE1025: 'Electrical and Electronics Systems',
  EEE1901: 'Technical Answers for Real World Problems (TARP)',
  EEE1902: 'Industrial Internship',
  EEE1903: 'Comprehensive Examination',
  EEE1904: 'Capstone Project',
  EEE2001: 'Network Theory',
  EEE2002: 'Semiconductor Devices and Circuits',
  EEE2003: 'Electromechanical Energy Conversion',
  EEE2004: 'Measurement and Instrumentation',
  EEE2005: 'Digital Signal Processing',
  EEE2006: 'Communication Engineering',
  EEE2007: 'Electronics and Microcontrollers',
  EEE2008: 'Electrical Technology',
  EEE2009: 'Electrical Actuators and Drives',
  EEE3001: 'Control Systems',
  EEE3002: 'Analog and Digital Circuits',
  EEE3003: 'Power System Engineering',
  EEE3004: 'Power Electronics and Drives',
  EEE3005: 'Design of Electrical Apparatus',
  EEE3006: 'Special Electrical Machines',
  EEE3007: 'Finite Element analysis for Electrical Machines',
  EEE3008: 'Data Communication Network',
  EEE3009: 'Digital Image Processing',
  EEE3010: 'E-Vehicles',
  EEE3099: 'Industrial Internship',
  EEE3999: 'Technical Answers for Real World Problems (TARP)',
  EEE4001: 'Microprocessor and Microcontroller',
  EEE4002: 'Power System Protection and Switchgear',
  EEE4003: 'Generation and Utilization of Electrical Energy',
  EEE4004: 'Distributed Generation and Microgrids',
  EEE4005: 'Power System Operation and Control',
  EEE4006: 'Restructured Power Systems',
  EEE4007: 'Energy Management and SCADA',
  EEE4008: 'High Voltage Engineering',
  EEE4009: 'FACTS and HVDC',
  EEE4010: 'Power Quality',
  EEE4011: 'Energy Audit and Conservation',
  EEE4012: 'Renewable Energy Sources',
  EEE4013: 'Smart Grid',
  EEE4014: 'Switched Mode Power Conversion',
  EEE4015: 'Power Converter Analysis and Design',
  EEE4016: 'Electric Vehicles',
  EEE4017: 'Industrial Drives and Automation',
  EEE4018: 'Advanced Control Theory',
  EEE4019: 'Advanced Digital System Design With FPGAs',
  EEE4020: 'Embedded System Design',
  EEE4021: 'Sensors and Signal Conditioning',
  EEE4022: 'Analog VLSI Design',
  EEE4023: 'Digital System Design',
  EEE4024: 'Computer Architecture and Organization',
  EEE4025: 'Industrial Power Electronics',
  EEE4026: 'Digital Control Systems',
  EEE4027: 'Robotics and Control',
  EEE4028: 'VLSI Design',
  EEE4029: 'Advanced Microcontrollers',
  EEE4030: 'System on Chip Design',
  EEE4031: 'Electrical and Electronic Instrumentation',
  EEE4032: 'Process Automation and Control',
  EEE4033: 'Industrial Instrumentation',
  EEE4034: 'Wireless Sensor Networks',
  EEE4035: 'Virtual Instrumentation',
  EEE4036: 'Applied Soft Computing',
  EEE4037: 'Rapid Prototyping with FPGAs',
  EEE4038: 'Testing and Calibration Systems',
  EEE4098: 'Comprehensive Examination',
  EEE4099: 'Capstone Project',
  EEE5001: 'Analysis of Power Converters',
  EEE5002: 'Generalized Machine Theory',
  EEE5003: 'Advanced Processors for Power Converters',
  EEE5004: 'Switched Mode Power Supplies',
  EEE5005: 'Advanced Semiconductor Devices',
  EEE5006: 'Integrated Circuits for Power Conversion',
  EEE5007: 'Intelligent Control',
  EEE5008: 'Modern Control Theory',
  EEE5009: 'Energy Storage Systems',
  EEE5010: 'Advanced Power System Protection',
  EEE5011: 'Protocols for Smart Grids',
  EEE5012: 'System Theory',
  EEE5013: 'Random Variables and State Estimation',
  EEE5014: 'Smart Sensor Systems',
  EEE5015: 'Process Dynamics and Control',
  EEE5016: 'Real Time Embedded Systems',
  EEE5017: 'Industrial Automation',
  EEE5018: 'Industrial Robotics',
  EEE5019: 'Control of Electric Drives',
  EEE5020: 'Machine Learning',
  EEE5021: 'Industrial Data Networks',
  EEE5022: 'Power Plant Control and Instrumentation',
  EEE5023: 'Advanced Sensors and Instrumentation',
  EEE5024: 'Industrial Controllers',
  EEE5025: 'Automotive Electrical and Electronics',
  EEE5028: 'Electric and Electronic Power Systems for Vehicles',
  EEE5029: 'Data Acquisition and Hardware Interfaces',
  EEE5030: 'Flight Control Systems',
  EEE5031: 'Advanced Reliability Engineering',
  EEE5032: 'Building Automation',
  EEE5040: 'Control Engineering',
  EEE5041: 'Industrial Robotics',
  EEE5042: 'Smart Grid',
  EEE5703: 'Advanced Processors for Power Converters',
  EEE5704: 'Switched Mode Power Supplies',
  EEE6001: 'Power Electronics Applications in Power Systems',
  EEE6002: 'Wind Energy Conversion Systems',
  EEE6003: 'Power Quality Analysis and Mitigation Techniques',
  EEE6004: 'Microgrid Technologies',
  EEE6005: 'Electric and Hybrid Electric Vehicles',
  EEE6006: 'High Voltage Direct Current Transmission',
  EEE6007: 'Pulse Width Modulation and Control',
  EEE6008: 'Solar Photo Voltaic Systems',
  EEE6009: 'Special Machines and Control',
  EEE6010: 'Industrial Electrical Drives',
  EEE6011: 'Optimal Control Systems',
  EEE6012: 'Adaptive and Robust Control',
  EEE6013: 'Discrete Control Systems',
  EEE6014: 'Fault Detection and Diagnosis',
  EEE6015: 'SCADA Systems and Applications',
  EEE6016: 'Modelling and Simulation of Electrical Systems',
  EEE6018: 'Data Acquisition and Digital Signal Processing',
  EEE6019: 'Advanced Control Systems',
  EEE6020: 'Embedded Systems',
  EEE6021: 'Multivariable Control Systems',
  EEE6099: 'Masters Thesis',
  ENG1002: 'Effective English',
  ENG1011: 'English for Engineers',
  ENG1013: 'Business Communication and Value Science - I',
  ENG1014: 'Business Communication and Value Science - II',
  ENG1017: 'Business Communication and Value Science - III',
  ENG1018: 'Business Communication and Value Science - IV',
  ENG5001: 'Fundamentals of Communication Skills',
  ENG5002: 'Professional and Communication Skills',
  ENG5702: 'Professional and Communication Skills',
  ESP1701: 'ESPANOL FUNDAMENTAL',
  ESP2002: 'Business Spanish',
  EXC1022: 'English Arts and Literature',
  EXC1029: 'Higher Education Transformation',
  EXC1031: 'Art of Animation',
  EXC1036: 'Aerospace Club',
  EXC1037: 'Android Club',
  EXC1039: 'AutomoVITe Club',
  EXC1041: 'Code Y-Gen',
  EXC1042: 'Designersâ€™ Club',
  EXC1047: 'Event Managers Club',
  EXC1050: 'Linux Club',
  EXC1053: 'Personality Development Club',
  EXC1055: 'Robotics Club',
  EXC1058: 'Woman Development Cell',
  EXC1059: 'National Entrepreneurship Network',
  EXC1060: 'VITeach',
  EXC1063: 'Civitek',
  EXC1064: 'Skills of Quizing',
  EXC1086: 'Procomm',
  EXC1089: 'Bio Science for Engineering',
  EXC1094: 'Blog Marketting',
  EXC1096: 'Computer Science Technology',
  EXC1098: 'Rob-O-Mation',
  EXC1099: 'Nuclear Sciences',
  EXC1103: 'Coding Skills for Engineers',
  EXC1104: 'Entrepreneurship for Bio Engineering',
  EXC1105: 'Electron Devices Skill Development',
  EXC1106: 'Sustainability in Economic and Management',
  EXC1108: 'Skills on Optics and Phonics',
  EXC1109: 'Signal Processing Skills',
  EXC1113: 'Technology for Social Development',
  EXC1115: 'Enriching Experience through Mathematics',
  EXC1116: 'Creating Professional through Engineering',
  EXC1117: 'Industrial Design Skills',
  EXC1118: 'Skills in Technology and Engineering Management',
  EXC1119: 'Nature Adaptation Ecology',
  EXC1122: 'Social Responsibility, Entrepreneurship and Executive Development',
  EXC1123: 'Community Development Skills',
  EXC1125: 'Education for Soceity Development',
  EXC1128: 'Network for Cleanliness',
  EXC1130: 'Malayalam Arts and Literature',
  EXC1131: 'Music and Culture for Youth',
  EXC1133: 'Marathi Arts and Literature',
  EXC1136: 'Skills in Editing and Publicity',
  EXC1137: 'Talks on Technology',
  EXC1138: 'Health Through Exercise',
  EXC3097: 'Co- Basket',
  FRE1701: 'Francais quotidien',
  FRE5001: 'Francais fonctionnel',
  FST1001: 'Fibre Technology',
  FST1002: 'Pattern Making',
  FST1003: 'Apparel Machineries and Equipments',
  FST1004: 'Fashion Illustration',
  FST1005: 'Surface Design',
  FST1006: 'Garment Components Manufacturing',
  FST1007: 'Fashion Evolution',
  FST1008: 'Trims and Decorations',
  FST1009: 'Principles and Elements of Designing',
  FST1010: 'Colour Science',
  FST1011: 'Textile Material and Manufacturing processes',
  FST1012: 'Accessories and Jewellery Designing',
  FST1013: 'Digital Fashion and Apparel Design',
  FST2001: 'Yarn and Fabric Manufacturing',
  FST2002: 'Advanced Pattern Making',
  FST2004: 'Textile Wet Processing',
  FST2005: 'Fabric Construction and Design Analysis',
  FST2006: 'Textile and Apparel Quality Evaluation',
  FST2008: 'Woven Fabric Manufacturing',
  FST3001: 'Computer Aided Garment Designing and Manufacturing',
  FST3002: 'Apparel Costing',
  FST3003: 'Industrial Engineering',
  FST3004: 'Clothing Comfort',
  FST3005: 'Apparel Merchandising',
  FST3006: 'Fashion Portfolio',
  FST3007: 'Garment Finishing and Care',
  FST3008: 'Product Analysis and Development',
  FST3009: 'Home Textile and Interior Designing',
  FST3011: 'Technical Textiles',
  FST3012: 'Denim Technology',
  FST3013: 'Intimate Apparels and Design',
  FST3014: 'Footwear Designing and Technology',
  FST3015: 'Leather Garment Technology',
  FST3017: 'Fashion Forecasting',
  FST3018: 'Fashion Communication Design Foundation',
  FST3019: 'Fashion Psychology',
  FST3021: 'Apparel Size and Fit',
  FST3099: 'Industrial Internship',
  FST4001: 'Recycling of Textile and Apparel Products',
  FST4002: 'International Business and Financial Management',
  FST4003: 'Speciality Textile',
  FST4004: 'Intelligent and Smart Clothing',
  FST4005: 'Fashion and Apparel Marketing',
  FST4006: 'Management of Apparel Units',
  FST4007: 'Apparel Logistics and Supply Chain',
  FST4008: 'Lean Enterprises and Manufacturing Technology',
  FST4009: 'Strategic Planning Management',
  FST4010: 'Retail Management',
  FST4011: 'Product Brand Promotion and Advertising',
  FST4012: 'Apparel Entrepreneurship',
  FST4013: 'Computer Integrated Manufacturing System',
  FST4014: 'Fashion Photography',
  FST4015: 'Business Analytics',
  FST4016: 'E-Commerce',
  FST4017: 'ERP and MIS in Apparel Industry',
  FST4018: 'Energy Management in Apparel Industry',
  FST4019: 'International Social Compliance',
  FT3017: 'Fashion Forecasting',
  FT3018: 'Fashion Communication Design Foundation',
  FT4005: 'Fashion and Apparel Marketing',
  GER1701: 'Grundstufe Deutsch',
  GER5001: 'Deutsch fuer Anfaenger',
  HIN1003: 'Prathamik Hindi',
  HIN1004: 'Functional Hindi',
  HUM1001: 'Fundamentals of Cyber Laws',
  HUM1002: 'Business Laws',
  HUM1003: 'Basic Taxation for Engineers',
  HUM1004: 'Corporate Law for Engineers',
  HUM1005: 'Cost Accounting for Engineers',
  HUM1006: 'Business Accounting for Engineers',
  HUM1007: 'Contemporary Legal Framework for Business',
  HUM1009: 'International Business',
  HUM1012: 'Introduction to Sociology',
  HUM1013: 'Population Studies',
  HUM1014: ',Industrial Psychology',
  HUM1022: 'Psychology in Everyday Life',
  HUM1023: 'Indian Heritage and Culture',
  HUM1024: 'India and Contemporary World',
  HUM1025: 'Indian Classical Music',
  HUM1033: 'Micro Economics',
  HUM1034: 'Macro Economics',
  HUM1035: 'Introductory Econometrics',
  HUM1036: 'Engineering Economics and Decision Analysis',
  HUM1037: 'Applied Game Theory',
  HUM1038: 'International Economics',
  HUM1039: 'Community Development in India',
  HUM1040: 'Indian Social Problems',
  HUM1041: 'Indian Society Structure and Change',
  HUM1042: 'Industrial Relations and Labour Welfare in India',
  HUM1043: 'Mass Media and Society',
  HUM1044: 'Network Society',
  HUM1045: 'Introduction to Psychology',
  HUM1046: 'Behavioral Economics',
  HUM1047: 'Engineering Economics',
  HUM1048: 'Industrial Psychology',
  HUM1702: 'Business Laws',
  HUM1706: 'Business Accounting for Engineers',
  ITE1001: 'Digital Logic and Microprocessor',
  ITE1002: 'Web Technologies',
  ITE1003: 'Database Management Systems',
  ITE1004: 'Data Structures and Algorithms',
  ITE1005: 'Software Engineering-Principles and Practices',
  ITE1006: 'Theory of Computation',
  ITE1007: 'Object Oriented Analysis and Design',
  ITE1008: 'Open Source programming',
  ITE1009: 'Natural Language Processing',
  ITE1010: 'Digital Image Processing',
  ITE1011: 'Computer Graphics',
  ITE1012: 'Discrete Event Simulation',
  ITE1013: 'Data Compression Techniques',
  ITE1014: 'Human Computer Interaction',
  ITE1015: 'Soft Computing',
  ITE1016: 'Mobile Application Development',
  ITE1017: 'Transformation Techniques',
  ITE1018: 'Professional Practices and Social Issues',
  ITE1019: 'Impact of Information System on Society',
  ITE1020: 'Geographical Information System',
  ITE1721: 'Programming Techniques Using C',
  ITE1901: 'Technical Answers for Real World Problems (TARP)',
  ITE1902: 'Industrial Internship',
  ITE1903: 'Comprehensive Examination',
  ITE1904: 'Capstone Project',
  ITE2001: 'Computer Architecture and Organization',
  ITE2002: 'Operating Systems',
  ITE2003: 'Principles and Practices of Communication System',
  ITE2004: 'Software Testing',
  ITE2005: 'Advanced Java Programming',
  ITE2006: 'Data Mining Techniques',
  ITE2008: 'Electronic and Mobile Commerce',
  ITE2009: 'Storage Technologies',
  ITE2010: 'Artificial Intelligence',
  ITE2011: 'Machine Learning',
  ITE2012: '.Net Programming',
  ITE2013: 'Big Data Analytics',
  ITE2014: 'Software Project Management',
  ITE2015: 'Information System Audit',
  ITE3001: 'Data Communication and Computer Networks',
  ITE3002: 'Embedded Systems',
  ITE3003: 'Parallel Processing',
  ITE3004: 'Distributed Systems',
  ITE3005: 'Information Coding Theory',
  ITE3006: 'Digital Signal Processing',
  ITE3007: 'Cloud Computing and Virtualization',
  ITE3008: 'Information Retrieval',
  ITE3009: 'Biometrics',
  ITE3010: 'Real Time Systems',
  ITE3011: 'Robotics and its Application',
  ITE3099: 'Industrial Internship',
  ITE3999: 'Technical Answers for Real World Problems (TARP)',
  ITE4001: 'Network and Information Security',
  ITE4002: 'Network Management Systems',
  ITE4003: 'Internet of Things',
  ITE4004: 'Wireless Mobile Networking',
  ITE4005: 'Performance Evaluation of Computer Systems',
  ITE4006: 'Green and Energy aware Computing',
  ITE4007: 'High Performance Computing',
  ITE4008: 'Social Computing',
  ITE4009: 'Cyber Security',
  ITE4010: 'Network Programming, Protocols and Standards',
  ITE4011: 'Haptic Technology',
  ITE4012: 'Cognitive Science',
  ITE4013: 'Digital Forensics',
  ITE4098: 'Comprehensive Examination',
  ITE4099: 'Capstone Project',
  ITE5001: 'Advanced Data Structures and Algorithms',
  ITE5002: 'Cloud Computing and Virtualization',
  ITE5003: 'Cryptography and Network Security',
  ITE5004: 'Computer Networks',
  ITE5005: 'Open Source Programming',
  ITE6001: 'Network Management',
  ITE6002: 'Advanced Embedded Systems',
  ITE6003: 'High Speed Networks',
  ITE6004: 'Internet of Things',
  ITE6005: 'Enterprise Operating Systems',
  ITE6006: 'Wireless Networks',
  ITE6007: 'Advanced Database Systems',
  ITE6008: 'Advanced Computer Architecture',
  ITE6009: 'Network Programming',
  ITE6010: 'Machine Learning',
  ITE6011: 'System Modeling and Simulation',
  ITE6012: 'Advanced Data Mining Techniques',
  ITE6013: 'Big Data Analytics',
  ITE6014: 'Image Processing and Computer Vision',
  ITE6015: 'Soft Computing',
  ITE6016: 'Web Technology and Mobile Applications',
  ITE6017: 'Software Defined Networking',
  ITE6099: 'Masters Thesis',
  ITL1002: 'Italiano Di Base',
  MAT1001: 'Fundamentals of Mathematics',
  MAT1003: 'Linear Algebra and Differential Equations',
  MAT1004: 'Discrete Mathematics',
  MAT1017: 'Probability and Statistics',
  MAT2003: 'Operations Research',
  MAT2004: 'Linear Algebra',
  MAT2005: 'Data Science and Statistical Modelling',
  MAT2009: 'Statistics for Fashion Technology',
  MAT2010: 'Mathematical Methods for Computer Vision, Robotics, and Graphics',
  MAT3001: 'Advanced Mathematics',
  MAT3002: 'Graph Theory and its Applications',
  MAT3003: 'Complex Variables and Partial Differential Equations',
  MAT3005: 'Applied Numerical Methods',
  MAT5002: 'Mathematics for Computer Engineering',
  MAT5003: 'Methods of Applied Mathematics',
  MAT5004: 'Advanced Discrete Mathematics',
  MAT5005: 'Advanced Mathematical Methods',
  MAT5006: 'Mathematics for Communication Engineering',
  MAT5007: 'Applied Statistical Methods',
  MAT5008: 'Advanced Statistical Modelling',
  MAT5009: 'Advanced Computer Arithmetic',
  MAT5014: 'Mathematics for Artificial Intelligence',
  MAT6001: 'Advanced Statistical Methods',
  MAT6006: 'Mathematics for Machine Learning',
  MDE5704: 'Nature of Materials and Processes',
  MDE5705: 'Basic Ergonomics',
  MDE6001: 'The Idea of Design',
  MDE6004: 'Digital Video Communication',
  MDE6009: 'Simulations Driven Design',
  MDE6010: 'Industrial Innovation Design',
  MDE6011: 'Animation Process and Visual Form',
  MDE6012: 'Animation Technology',
  MDE6016: 'Product Architecture Design',
  MDE6713: 'Design Management and Professional Practice',
  MEE1001: 'Engineering Drawing',
  MEE1002: 'Engineering Mechanics',
  MEE1003: 'Engineering Thermodynamics',
  MEE1004: 'Fluid Mechanics',
  MEE1005: 'Materials Engineering and Technology',
  MEE1006: 'Applied Mechanics and Thermal Engineering',
  MEE1007: 'Manufacturing Processes',
  MEE1008: 'MEMS',
  MEE1009: 'New Product Development',
  MEE1010: 'Urban Energy Systems',
  MEE1011: 'Renewable Energy Sources',
  MEE1012: 'Alternative Fuels',
  MEE1013: 'Fuel Cells',
  MEE1014: 'Industrial Engineering and Management',
  MEE1015: 'Total Quality Management and Reliability',
  MEE1016: 'Lean Enterprises and New Manufacturing Technology',
  MEE1017: 'New Venture Planning and Management',
  MEE1018: 'Facilities and Process Planning',
  MEE1019: 'Supply Chain Management',
  MEE1020: 'Enterprise Resource Planning',
  MEE1021: 'Value Engineering',
  MEE1022: 'Digital Factory',
  MEE1023: 'System Simulation',
  MEE1024: 'Operations Research',
  MEE1026: 'Machine Intelligence',
  MEE1027: 'Instrumentation and Control Engineering',
  MEE1028: 'Industrial Automation Controllers',
  MEE1030: 'Robotics',
  MEE1031: 'Theory of Metal Casting and Joining',
  MEE1032: 'Mechanics of Solids and Fluids',
  MEE1033: 'Thermodynamics and Heat Transfer',
  MEE1034: 'Statistical Quality Control',
  MEE1035: 'Automotive Electricals',
  MEE1036: 'Automotive Chassis',
  MEE1037: 'Automotive Electronics',
  MEE1038: 'Solar Photovoltaic System Design',
  MEE1039: 'Automotive Fuels and Energy',
  MEE1040: 'Auto Certification and Homologation',
  MEE1041: 'Automotive Safety Systems',
  MEE1042: 'Ergonomics and Styling',
  MEE1043: 'Design Failure Mode and Effects Analysis',
  MEE1044: 'Hydrogen-Production, Storage and Utilization',
  MEE1045: 'Mechatronics Systems Design',
  MEE1067: 'Wind Energy Engineering',
  MEE1068: 'Remote Sensing and GIS in Resource Management',
  MEE1070: 'Standards, Codes and Legal Issues',
  MEE1071: 'Bio-Energy Technology',
  MEE1074: 'Energy, Environment and Impact Assessment',
  MEE1075: 'Energy Climate Interactions',
  MEE1736: 'Automotive Chassis',
  MEE1901: 'Technical Answers for Real World Problems (TARP)',
  MEE1902: 'Industrial Internship',
  MEE1903: 'Comprehensive Examination',
  MEE1904: 'Capstone Project',
  MEE2001: 'Machine Drawing',
  MEE2002: 'Strength of Materials',
  MEE2003: 'Thermal Engineering Systems',
  MEE2004: 'Mechanics of Machines',
  MEE2005: 'Heat Transfer',
  MEE2006: 'Machining Processes and Metrology',
  MEE2007: 'CAD/CAM',
  MEE2008: 'Product Design for Manufacturing',
  MEE2009: 'Tribology',
  MEE2010: 'Design of Composite Materials',
  MEE2011: 'Welding Engineering',
  MEE2012: 'Manufacturing Automation',
  MEE2013: 'Modelling and Simulation of Manufacturing Systems',
  MEE2014: 'Metal Casting Technology',
  MEE2015: 'Non Destructive Testing',
  MEE2016: 'Rapid Manufacturing Technologies',
  MEE2017: 'Welding Metallurgy',
  MEE2018: 'Nano Technology',
  MEE2019: 'Materials Characterization Techniques',
  MEE2020: 'Metal Forming Theory and Practice',
  MEE2021: 'Industrial Corrosion',
  MEE2022: 'Power Plant Engineering',
  MEE2023: 'Gas Dynamics and Jet Propulsion',
  MEE2025: 'Fluid Power Systems',
  MEE2026: 'Turbo Machines',
  MEE2027: 'Nuclear Power Engineering',
  MEE2028: 'Automotive Aerodynamics',
  MEE2029: 'Energy Conservation, Audit and Management',
  MEE2030: 'Energy Systems Analysis and Design',
  MEE2031: 'Theory of Metal Cutting and Forming',
  MEE2032: 'Kinematics and Dynamics of Machinery',
  MEE2033: 'Production Planning and Control',
  MEE2034: 'Industrial Economics',
  MEE2035: 'Logistics and Supply Chain Management',
  MEE2036: 'Industrial Corrosion and Tribology',
  MEE2037: 'Agile Manufacturing',
  MEE2038: 'Thermal and Heat Transfer',
  MEE2039: 'Automotive Transmission Systems',
  MEE2040: 'Non-Destructive Testing',
  MEE2041: 'Vehicle Body Engineering',
  MEE2042: 'Two and Three Wheeler',
  MEE2043: 'Vehicle Inspection and Maintenance',
  MEE2044: 'Instrumentation and Vehicle Diagnostics',
  MEE2045: 'Automotive Control Systems',
  MEE2046: 'Automotive Braking Systems',
  MEE2047: 'Automotive Suspension and Steering Systems',
  MEE2048: 'Applied Hydraulics and Off Road Vehicles',
  MEE2049: 'Manufacturing of Automotive Components',
  MEE2050: 'Vehicle Dynamics',
  MEE2051: 'Design of Mechanical Components',
  MEE2052: 'Sustainable Energy',
  MEE2057: 'Design and Analysis of Energy Systems',
  MEE2058: 'Small Hydro Power Systems',
  MEE2059: 'Fluidized Bed Combustion Technology',
  MEE2060: 'Integrated Energy Systems',
  MEE2061: 'Exergy Analysis of Energy Systems',
  MEE2062: 'Thermal Power and Cooling Cycles',
  MEE2063: 'Design and Selection of Heat Transfer Equipment',
  MEE2064: 'Conventional and Solar Refrigeration and Air Conditioning',
  MEE2065: 'Energy in Built Environment',
  MEE2066: 'Energy Project Proposal Evaluation',
  MEE2067: 'Computational Multibody Dynamics',
  MEE2068: 'Intelligent Manufacturing Automation',
  MEE3001: 'Design of Machine Elements',
  MEE3002: 'Finite Element Analysis',
  MEE3003: 'Engineering Failure Analysis',
  MEE3004: 'Internal Combustion Engines',
  MEE3005: 'Refrigeration and Airconditioning',
  MEE3006: 'Automobile Engineering',
  MEE3007: 'Cryogenic Engineering',
  MEE3008: 'Mechanical Vibrations',
  MEE3009: 'Acoustics and Noise Control Engineering',
  MEE3010: 'Robot Dynamics and Applications',
  MEE3011: 'Solar Thermal Power Engineering',
  MEE3012: 'Computer Aided Manufacturing',
  MEE3013: 'Laser processing',
  MEE3014: 'Engineering Metrology',
  MEE3015: 'Automotive Engines',
  MEE3016: 'Design of Chassis Components',
  MEE3017: 'Automotive  HVAC',
  MEE3018: 'Noise, Vibration and Harshness',
  MEE3019: 'Advanced Manufacturing Management',
  MEE3022: 'Design of Thermal Systems',
  MEE3023: 'Robotics and Programming',
  MEE3099: 'Industrial Internship',
  MEE3501: 'Product Development and Management',
  MEE3502: 'Design Process Planning and Management',
  MEE3999: 'Technical Answers for Real World Problems (TARP)',
  MEE4001: 'Tool Design',
  MEE4002: 'Advanced Machining Processes',
  MEE4003: 'Micro and Nano Machining',
  MEE4004: 'Nano Manufacturing',
  MEE4005: 'Surface Engineering',
  MEE4006: 'Computational Fluid Dynamics',
  MEE4007: 'Design of Transmission Systems',
  MEE4008: 'Engine Testing and Certification',
  MEE4009: 'Engine Design and Development',
  MEE4010: 'Engine Emission and Control',
  MEE4011: 'Advanced Automotive Power Plants',
  MEE4098: 'Comprehensive Examination',
  MEE4099: 'Capstone Project',
  MEE5001: 'Finite Element Methods in Manufacturing',
  MEE5002: 'Computer Integrated Manufacturing',
  MEE5003: 'Advanced Materials and Characterization',
  MEE5004: 'Modern Machining Processes',
  MEE5005: 'Quality and Reliability Engineering',
  MEE5006: 'Solar Energy Technologies',
  MEE5007: 'Actuators and Drives',
  MEE5008: 'Robot Dynamics and Programming',
  MEE5009: 'Autotronics and Vehicle Intelligence',
  MEE5010: 'Automotive Body and Chasis Systems',
  MEE5011: 'Engine Combustion and Emission',
  MEE5012: 'Automotive Transmission System',
  MEE5013: 'Advanced Mechanics of Solids',
  MEE5014: 'Computer Graphics and Geometric Modelling',
  MEE5015: 'Finite Element Methods',
  MEE5016: 'Integrated Manufacturing Systems',
  MEE5017: 'Advanced Vibration Engineering',
  MEE5018: 'Renewable Energy Technologies',
  MEE5019: 'Energy Audit, Conservation and Management',
  MEE5020: 'Alternative Fuels',
  MEE5021: 'Manufacturing Automation',
  MEE5022: 'Applied Materials Engineering',
  MEE5023: 'Design for Manufacture and Assembly',
  MEE5024: 'Advanced Manufacturing Technology',
  MEE5025: 'Mechatronics and Automation',
  MEE5026: 'Vehicle Dynamics',
  MEE5027: 'System Design and Control',
  MEE5028: 'Mechatronics and Cyber Physical Systems',
  MEE5029: 'System Modelling and Simulation',
  MEE5030: 'Smart Mobility and Intelligent Vehicles',
  MEE5031: 'Digital Manufacturing and Factory Automation',
  MEE5032: 'Artificial Intelligence and Machine Learning',
  MEE5050: 'Product Design, Management Techniques and Entrepreneurship',
  MEE5701: 'Finite Element Methods in Manufacturing',
  MEE5722: 'Applied Materials Engineering',
  MEE5723: 'Design for Manufacture and Assembly',
  MEE5727: 'System Design and Control',
  MEE5750: 'Product Design, Management Techniques and Entrepreneurship',
  MEE6001: 'Metrology and Non-destructive Testing',
  MEE6002: 'Optimization Techniques',
  MEE6003: 'Micro and Nano Manufacturing',
  MEE6004: 'Casting and Welding Technology',
  MEE6005: 'Virtual Manufacturing',
  MEE6006: 'Theory of Metal Forming',
  MEE6007: 'Sustainable Manufacturing',
  MEE6008: 'Supply Chain and Logistics Management',
  MEE6009: 'Manufacturing System Simulation',
  MEE6010: 'Maintenance Engineering',
  MEE6011: 'Manufacturing Information Systems',
  MEE6012: 'Design and Analysis of Experiments',
  MEE6013: 'Advanced Tool Engineering',
  MEE6014: 'Laser Material Processing',
  MEE6015: 'Additive Manufacturing Technology',
  MEE6016: 'Alternate Fuels',
  MEE6017: 'Engine Design and Development',
  MEE6018: 'Powtrain Tribology',
  MEE6019: 'Automotive Emission Control',
  MEE6020: 'Battery and Fuel Cells',
  MEE6021: 'Vehicle and Engine Testing',
  MEE6022: 'Vehicle Safety and Lighting',
  MEE6023: 'Vehicle Maintenance and Diagnostics',
  MEE6024: 'Vehicle Aerodynamics',
  MEE6025: 'Vehicle Crashworthiness',
  MEE6026: 'Design of Vehicle Drivelines',
  MEE6027: 'Noise, Vibration and Harshness',
  MEE6028: 'Computational Fluid Flow and Heat Transfer',
  MEE6029: 'Hybrid Electric Vehicles',
  MEE6030: 'Advanced Finite Element Methods',
  MEE6031: 'Computational Fluid Dynamics',
  MEE6032: 'Advanced Automotive Fault Diagnosis',
  MEE6033: 'Product Design and Life Cycle Management',
  MEE6034: 'Fracture Mechanics',
  MEE6035: 'Manufacturing and Mechanics of Composites Materials',
  MEE6036: 'Computational and Experimental Vibration Analysis and Control',
  MEE6037: 'Optimisation Methods',
  MEE6038: 'Design Thinking and Innovation',
  MEE6039: 'Machine Fault Diagnostics',
  MEE6040: 'Computer Aided Process Planning',
  MEE6041: 'CNC Technology and Programming',
  MEE6042: 'Industrial/Research Internship',
  MEE6043: 'Machine Vision Systems',
  MEE6044: 'Mobile and Autonomous Robots',
  MEE6045: 'Fluid Power System Design',
  MEE6046: 'Intelligent Systems',
  MEE6047: 'Virtual Reality and Haptics',
  MEE6048: 'Condition Monitoring Techniques',
  MEE6049: 'Industry/Research Internship',
  MEE6050: 'Power Plant Engineering',
  MEE6051: 'Wind Energy Technology',
  MEE6052: 'Industrial Surface Engineering',
  MEE6053: 'Energy Systems Modeling and Analysis',
  MEE6054: 'Energy in Built Environment',
  MEE6055: 'Statistics and Quality Management',
  MEE6058: 'Industrial Process Automation',
  MEE6059: 'Internet of Things and Smart Manufacturing',
  MEE6060: 'Bio-Mechatronics',
  MEE6061: 'Industrial Internet of Things and Cloud Computing',
  MEE6062: 'Virtual Reality and Augmented Reality',
  MEE6063: 'MEMS in Cyber Physical Systems',
  MEE6064: 'Applied Robotics and Programming',
  MEE6065: 'Hybrid and Electric Automotive Vehicle Systems',
  MEE6066: 'Cyber Security in Design and Manufacturing',
  MEE6067: 'Transportation Cyber Physical Systems',
  MEE6068: 'Smart Health Technology',
  MEE6069: 'Digital Systems Design and Architecture',
  MEE6070: 'Data Science and Analytics',
  MEE6071: 'Wireless Networking of Embedded Systems',
  MEE6072: 'Multi Agent System',
  MEE6073: 'Control System Analysis and Design',
  MEE6099: 'Masters Thesis',
  MGT1002: 'Principles of Management',
  MGT1003: 'Economics for Engineers',
  MGT1004: 'Resource Management',
  MGT1005: 'Design, Systems and Society',
  MGT1006: 'Environmental and Sustainability Assessment',
  MGT1007: 'Gender, Culture and Technology',
  MGT1008: 'Impact of Information Systems on Society',
  MGT1009: 'Technological Change and Entrepreneurship',
  MGT1010: 'Total Quality Management',
  MGT1016: 'Intellectual Property Rights',
  MGT1017: 'Business Regulatory Framework For Start-ups',
  MGT1018: 'Consumer Behaviour',
  MGT1019: 'Services Marketing',
  MGT1020: 'Marketing Analytics',
  MGT1021: 'Digital and Social Media Marketing',
  MGT1023: 'Fundamentals of Human Resource Management',
  MGT1024: 'Organizational Behaviour',
  MGT1025: 'Foundations of Management And Organizational Behaviour',
  MGT1026: 'Information Assurance and Auditing',
  MGT1028: 'Accounting and Financial Management',
  MGT1029: 'Financial Management',
  MGT1030: 'Entrepreneurship Development',
  MGT1031: 'International Business',
  MGT1032: 'Managing Asian Business',
  MGT1033: 'Research Methods in Management',
  MGT1034: 'Project Management',
  MGT1035: 'Operations Management',
  MGT1036: 'Principles of Marketing',
  MGT1037: 'Financial Accounting and Analysis',
  MGT1038: 'Financial Econometrics',
  MGT1039: 'Financial Markets and Institutions',
  MGT1040: 'Personal Financial Planning',
  MGT1041: 'Financial Derivatives',
  MGT1042: 'Investment Analysis and Portfolio Management',
  MGT1043: 'Applications in Neuro Marketing',
  MGT1044: 'Global Brand Marketing Strategies',
  MGT1045: 'Industrial Marketing',
  MGT1046: 'Sales and Distribution Management',
  MGT1047: 'Social Marketing',
  MGT1048: 'Political Economy of Globalization',
  MGT1049: 'Sustainable Business Models',
  MGT1050: 'Software Engineering Management',
  MGT1051: 'Business Analytics for Engineers',
  MGT1052: 'Bottom of the Pyramid Operations',
  MGT1064: 'Financial and Cost Accounting',
  MGT1065: 'Fundamentals of Management',
  MGT2001: 'Introduction to Innovation, IP Management and Entrepreneurship',
  MGT2002: 'Marketing Research and Marketing Management',
  MGT2003: 'Financial Management',
  MGT3001: 'Business Strategy',
  MGT3002: 'Advanced Finance',
  MGT3016: 'Services Science and Service Operational Management',
  MGT4004: 'Human Resource Management',
  MGT4005: 'Computational Finance and Modelling',
  MGT4097: 'Management Course Basket',
  MGT6001: 'Organizational Behaviour',
  MHA2001: 'Industrial Automation and Programmable Controllers',
  MHA2002: 'Mechanisms and Design Concepts',
  MHA2003: 'Fluid Power Automation',
  MHA2004: 'Sensors and Instrumentation',
  MHA2005: 'Machining and Manufacturing Processes',
  MHA2006: 'Thermodynamics and its Applications',
  MHA2007: 'Additive Manufacturing Systems',
  MHA2008: 'Smart Materials',
  MHA2009: 'Geometrical Modelling and Simulation',
  MHA3001: 'Modelling and Control of Mechatronic Systems',
  MHA3002: 'System Integration and Design',
  MHA3003: 'Robotic Systems',
  MHA3004: 'Machine Vision and Image Processing',
  MHA3005: 'Augmented Reality and Haptics',
  MHA3006: 'Virtual Instrumentation',
  MHA3007: 'Machine Fault Diagnostics and Signal Processing',
  MHA3008: 'Digital Manufacturing Systems',
  MHA3009: 'Internet of Things and Cloud Based Manufacturing',
  MHA3010: 'Machine Learning for Automation',
  MHA3011: 'Intelligent Systems and Control',
  MHA3012: 'Modern Control Theory',
  MHA3013: 'Autonomous Mobile Robots',
  MHA3014: 'Vehicle Dynamics and Aerodynamics',
  MHA3015: 'Autotronics and Vehicle Automation',
  MHA3016: 'System Reliability, Security and Safety',
  MHA4001: 'Adaptive and Predictive Control of Mechatronics Systems',
  MHA4002: 'Advanced Robotic Systems',
  MHA4003: 'Driving Assistance Systems and Autonomous Vehicles',
  MHA4004: 'Electric and Hybrid Vehicles',
  MHA4005: 'Bionics and Medical Mechatronics',
  MHA4006: 'Micro and Nano Mechatronics Systems',
  MHA4007: 'Agriculture Automation and Smart Farming',
  MHA4008: 'Vehicle Ergonomics and Human Comfort',
  MOC1901: 'Advanced Green Manufacturing Systems',
  MOC1902: 'Introduction to Cognitive Psychology',
  MOC1903: 'Introduction to Political Theory',
  MOC1904: 'Six Sigma',
  MOC1905: 'Emotional Intelligence',
  MOC1906: 'Manufacturing Strategy',
  MOC1907: 'Supply Chain Analytics',
  MOC1908: 'Systems Engineering: Theory and Practice',
  MOC1909: 'Design Thinking - A Primer',
  MOC1910: 'MCDM Techniques Using R and MARLAB',
  MOC1911: 'Perspectives on Neurolinguistic',
  MOC1912: 'Sociology of Science',
  MOC1913: 'Contemporary Themes in Indiaâ€™s Economic Development and Economic Survey',
  MOC1919: 'Training of Trainers',
  MOC1920: 'Knowledge Management',
  MOC1921: 'Leadership',
  MOC1922: 'Educational Leadership',
  MOC1923: 'Cost Accounting',
  MOC1924: 'Practitioners Course In Descriptive, Predictive and Prescriptive Analytics',
  MOC1925: 'Decision-Making Under Uncertainty',
  MOC1926: 'Data Analysis and Decision Making - III',
  MOC1927: 'Business Analytics and Data Mining Modeling Using R Part II',
  MOC1928: 'Business Analytics and Text Mining Modeling Using Python',
  MOC1929: 'Economics of Health and Health Care',
  MOC1930: 'Human Resource Development',
  MOC1931: 'Performance and Reward Management',
  MOC1932: 'Corporate Social Responsibility',
  MOC1933: 'E-Business',
  MOC1934: 'Innovation, Business Models and Entrepreneurship',
  MOC1935: 'The Ethical Corporation',
  MOC1936: 'Toyota Production System',
  MOC1937: 'Intellectual Property Rights and Competition Law',
  MOC1938: 'Patent Search for Engineers and Lawyers',
  MOC1942: 'Mapping Signal Processing Algorithms to Architectures',
  MOC1943: 'Introduction to Computer Vision',
  MOC1944: 'Op-Amp Practical Applications: Design, Simulation and Implementation',
  MOC1945: 'Fabrication Techniques for MEMs - based sensors: clinical Perspective',
  MOC1946: 'Linear System Theory',
  MOC1947: 'Advanced Linear Continuous Control Systems: Applications with MATLAB Programming and Simulink',
  MOC1948: 'Introduction to Wireless and Cellular Communications',
  MOC1949: 'Digital Switching - I',
  MOC1950: 'Microelectronics: Devices To Circuits',
  MOC1951: 'Digital Image Processing',
  MOC1952: 'Pattern Recognition and Application',
  MOC1953: 'Microwave Theory and Techniques',
  MOC1954: 'Principles and Techniques of Modern Radar Systems',
  MOC1955: 'Computational Electromagnetics',
  MOC1956: 'Microwave Engineering',
  MOC1957: 'Introduction to parallel Programming in Open MP',
  MOC1958: 'Reinforcement Learning',
  MOC1959: 'Applied Natural Language Processing',
  MOC1960: 'Python for Data Science',
  MOC1961: 'Data Science for Engineers',
  MOC1962: 'Scalable Data Science',
  MOC1963: 'Advanced Computer Architecture',
  MOC1964: 'Software Project Management',
  MOC1965: 'Software testing',
  MOC1966: 'Hardware Modeling using Verilog',
  MOC1967: 'Synthesis of Digital Systems',
  MOC1968: 'Switching Circuits and Logic Design',
  MOC1969: 'Demystifying networking',
  MOC1970: 'Modern Algebra',
  MOC1971: 'Introduction to Haskell Programming',
  MOC1972: 'Flow through Porous Media',
  MOC1973: 'Bioenergy',
  MOC1974: 'Introduction to Biostatistics',
  MOC1975: 'Nanotechnology in Agriculture',
  MOC1976: 'Computer Aided Drug Design',
  MOC1977: 'Drug Delivery: Principles and Engineering',
  MOC1978: 'Functional Genomics',
  MOC1979: 'Introduction to Proteogenomics',
  MOC1980: 'Introduction to Mechanobiology',
  MOC1981: 'WildLife Conservation',
  MOC1982: 'Organic Chemistry in Biology and Drug Development',
  MOC1983: 'Bioinorganic Chemistry',
  MOC1984: 'Spectroscopic Techniques for Pharmaceutical and Biopharmaceutical Industries',
  MOC1985: 'Biophysical chemistry',
  MOC1986: 'Deep Learning',
  MOC1987: 'Blockchain Architecture Design and use Cases',
  MOC1988: 'Ethical Hacking',
  MOC1990: 'Positive Psychology',
  MOC1991: 'Forests and their Management',
  MOC1992: 'Forest Biometry',
  MOC1993: 'Bioengineering: An Interface with Biology and Medicine',
  MOC1994: 'Human Molecular Genetics',
  MOC1995: 'Bioenergetics of Life Processes',
  MOC1996: 'Computational Systems Biology',
  MOC1997: 'Bio-Informatics: Algorithms and Applications',
  MOC1998: 'Biostatistics and Design of Experiments',
  MOC1999: 'Medical Biomaterials',
  MOC2000: 'Demystifying the Brain',
  MOC2001: 'Principles and Applications of NMR Spectroscopy',
  MOC2002: 'Cell Culture Technologies',
  MOC2003: 'Natural Hazards',
  MOC2004: 'Modern Construction Materials',
  MOC2005: 'Energy Efficiency, Acoustics and Daylighting in Building',
  MOC2006: 'Fire Protection, Services and Maintenance Management of Building',
  MOC2007: 'Electronic Waste Management - Issues And Challenges',
  MOC2008: 'Higher Surveying',
  MOC2009: 'Environmental Remediation of Contaminated Sites',
  MOC2010: 'Soil Structure Interaction',
  MOC2011: 'Introduction to Accounting and Finance for Civil Engineers',
  MOC2012: 'Scheduling Techniques in Projects',
  MOC2013: 'GPS Surveying',
  MOC2014: 'Sustainable Materials and Green Buildings',
  MOC2015: 'Geomorphic Processes: Landforms and Landscapes',
  MOC2016: 'Introduction To Process Modeling in the Membrane Separation Process',
  MOC2017: 'Computational Geometry',
  MOC2018: 'Compiler Design',
  MOC2019: 'Embedded System Design with ARM',
  MOC2020: 'VLSI Physical Design',
  MOC2021: 'Cloud computing',
  MOC2022: 'Artificial Intelligence : Knowledge Representation And Reasoning',
  MOC2023: 'Privacy and Security in Online Social Media',
  MOC2024: 'Information Security - 5 - Secure Systems Engineering',
  MOC2025: 'Model Checking',
  MOC2026: 'Randomized Algorithms',
  MOC2027: 'GPU Architectures and Programming',
  MOC2028: 'Multi-Core Computer Architecture - Storage and Interconnects',
  MOC2029: 'Data Analytics with Python',
  MOC2030: 'Arithmetic Circuit Complexity',
  MOC2031: 'Google Cloud Computing Foundation Course',
  MOC2032: 'Consumer Behaviour',
  MOC2033: 'Enhancing Soft Skills and Personality&nbsp;',
  MOC2034: 'Introduction to Airplane Performance',
  MOC2035: 'Rocket Propulsion',
  MOC2036: 'Aircraft Maintenance',
  MOC2037: 'Sustainable Architecture',
  MOC2038: 'Introduction to History of Architecture in India',
  MOC2039: 'Structure, Form, and Architecture : The Synergy',
  MOC2040: 'Interactomics : Basics and Applications',
  MOC2041: 'Introduction to Professional Scientific Communication',
  MOC2042: 'Material and Energy Balances',
  MOC2043: 'Thermodynamics for Biological Systems: Classical and Statistical Aspect',
  MOC2044: 'Optical Spectroscopy and Microscopy : Fundamentals of Optical Measurements and Instrumentation',
  MOC2045: 'Fundamentals of Semiconductor Devices',
  MOC2046: 'Characterization of Construction Materials',
  MOC2047: 'Introduction to Civil Engineering Profession',
  MOC2048: 'Environmental Geomechanics',
  MOC2049: 'Mechanical Characterization of Bituminous Materials',
  MOC2050: 'Geosynthetics and Reinforced Soil Structures',
  MOC2051: 'Geotechnical Engineering II Foundation Engineering',
  MOC2052: 'Landscape Architecture and Site Planning - Basic Fundamentals',
  MOC2053: 'Plastic Waste Management',
  MOC2054: 'Advanced Topics in the Science and Technology of Concrete',
  MOC2055: 'Applied Environmental Microbiology',
  MOC2056: 'Digital Land Surveying And Mapping (DLS&amp;M)',
  MOC2057: 'Earthquake Geology: A tool for Seismic Hazard Assessment',
  MOC2058: 'Introduction to Geographic Information Systems',
  MOC2059: 'Structural Dynamics',
  MOC2060: 'Water Supply Engineering',
  MOC2061: 'Geo Spatial Analysis in Urban Planning',
  MOC2062: 'Geotechnical Engineering - 1',
  MOC2063: 'Maintenance and Repair of Concrete Structures',
  MOC2064: 'Thermodynamics',
  MOC2065: 'Geomorphology',
  MOC2066: 'Remote Sensing Essentials',
  MOC2067: 'Hydraulic Engineering',
  MOC2068: 'Environmental Quality Monitoring and Analysis',
  MOC2069: 'Electrochemical Technology in Pollution Control',
  MOC2070: 'Advanced Thermodynamics',
  MOC2071: 'Membrane Technology',
  MOC2072: 'Computational Fluid Dynamics',
  MOC2073: 'Transport phenomena',
  MOC2074: 'Optimization in Chemical Engineering',
  MOC2075: 'Soft Nano Technology',
  MOC2076: 'Transport processes I - Heat and Mass Transfer',
  MOC2077: 'Process Control - Design, Analysis and Assessment',
  MOC2078: 'Heat Transfer',
  MOC2079: 'Chemical Reaction Engineering II',
  MOC2080: 'Multiphase Flows',
  MOC2081: 'Mass Transfer Operations - I',
  MOC2082: 'Waste to Energy Conversion',
  MOC2083: 'Equipment Design : Mechanical Aspects',
  MOC2084: 'An Introduction to Cardiovascular Fluid Mechanics',
  MOC2085: 'Computer Aided Applied Single Objective Optimization',
  MOC2086: 'Basic Principles and Calculations in Chemical Engineering',
  MOC2087: 'Introduction to Blockchain Technology and Applications',
  MOC2088: 'Foundations of Cryptography',
  MOC2089: 'Introduction to Database Systems',
  MOC2090: 'Operating System',
  MOC2091: 'Programming in C++',
  MOC2092: 'Programming in Java',
  MOC2093: 'Data Base Management System',
  MOC2094: 'Introduction to Algorithms and Analysis',
  MOC2095: 'Data Mining',
  MOC2096: 'Embedded Systems Design',
  MOC2097: 'Real Time Operating System',
  MOC2098: 'Introduction to Soft Computing',
  MOC2099: 'Cryptography and Network Security',
  MOC2100: 'Introduction to Internet of Things',
  MOC2101: 'Computer Networks and Internet Protocol',
  MOC2102: 'Introduction to Industry 4.0 and Industrial Internet of Things',
  MOC2103: 'Computer Architecture',
  MOC2104: 'Programming, Data Structures And Algorithms Using Python',
  MOC2105: 'Introduction to Machine Learning',
  MOC2106: 'Social Networks',
  MOC2107: 'Foundations to Computer Systems Design',
  MOC2108: 'The Joy of Computing using Python',
  MOC2109: 'Discrete Mathematics',
  MOC2110: 'An Introduction to Artificial Intelligence',
  MOC2111: 'User-centric Computing for Human-Computer Interaction',
  MOC2112: 'Cloud Computing and Distributed Systems',
  MOC2113: 'Machine Learning',
  MOC2114: 'Modern Application Development',
  MOC2115: 'An Introduction To Programming Through C++',
  MOC2116: 'Design and Pedagogy of the Introductory Programming Course',
  MOC2117: 'Quantitative Methods in Chemistry',
  MOC2118: 'Basics in Inorganic Chemistry',
  MOC2119: 'Ultrafast Laser Spectroscopy',
  MOC2120: 'Transition Metal Organometallics in Catalysis and Biology',
  MOC2121: 'Essentials of Biomolecules : Nucleic Acids and Peptides',
  MOC2122: 'Fundamentals of Spectroscopy',
  MOC2123: 'Advanced Chemical Thermodynamics and Kinetics',
  MOC2124: 'Biochemistry',
  MOC2125: 'Organometallic Chemistry',
  MOC2126: 'Chemical Applications of Symmetry and Group Theory',
  MOC2127: 'Basic Thermodynamics : Classical and Statistical Approaches',
  MOC2128: 'Medicinal Chemistry',
  MOC2129: 'Design, Technology and Innovation',
  MOC2130: 'Geographic Information System',
  MOC2131: 'Product Design and Innovation',
  MOC2132: 'Fundamentals of Automotive Systems',
  MOC2133: 'Electronics Equipment Integration and Prototype Building',
  MOC2134: 'High Power Multilevel Converters-Analysis, Design and Operational Issues',
  MOC2135: 'Fuzzy Sets, Logic and Systems and Applications',
  MOC2136: 'Transmission Lines and Electromagnetic Waves',
  MOC2137: 'Digital IC Design',
  MOC2138: 'Signals and Systems',
  MOC2139: 'Power Management Integrated Circuits',
  MOC2140: 'DC Power Transmission Systems',
  MOC2141: 'Microprocessors and Interfacing',
  MOC2142: 'Design and Simulation of Power Conversion using Open Source Tools',
  MOC2143: 'Integrated Circuits, MOSFETs, OP-Amps and their Applications',
  MOC2144: 'Electronic Systems for Cancer Diagnosis',
  MOC2145: 'Principles of Signals and Systems',
  MOC2146: 'Principles of Communication Systems - I',
  MOC2147: 'Principles of Digital Communication',
  MOC2148: 'Electric Vehicles - Part 1',
  MOC2149: 'Nonlinear Adaptive Control',
  MOC2150: 'Antennas',
  MOC2151: 'Multirate DSP',
  MOC2152: 'Control Engineering',
  MOC2153: 'Introduction to Photonics',
  MOC2154: 'Microwave Integrated Circuits',
  MOC2155: 'Analog IC Design',
  MOC2156: 'Analog Circuits',
  MOC2157: 'Advance Power Electronics and Control',
  MOC2158: 'CMOS Digital VLSI Design',
  MOC2159: 'Analog Circuits and Systems through SPICE Simulation',
  MOC2160: 'Discrete Time Signal Processing',
  MOC2161: 'Digital Electronic Circuits',
  MOC2162: 'Fundamentals of MIMO Wireless Communication',
  MOC2163: 'Spread Spectrum Communications and Jamming',
  MOC2164: 'Basic Building Blocks of Microwave Engineering &amp; Design Principles of RF and Microwave Filters and Amplifiers',
  MOC2165: 'Evolution of Air Interface towards 5G',
  MOC2166: 'Architectural Design of Digital Integrated Circuits',
  MOC2167: 'Electrical Machines - II',
  MOC2168: 'Medical Image Analysis',
  MOC2169: 'Biomedical Signal Processing',
  MOC2170: 'Microprocessors And Microcontrollers',
  MOC2171: 'Recent Advances in Transmission Insulator',
  MOC2172: 'VLSI Signal Processing',
  MOC2173: 'Analog Electronic Circuits',
  MOC2174: 'Network Analysis',
  MOC2175: 'Optical Engineering',
  MOC2176: 'Mathematical Methods and Techniques in Signal Processing',
  MOC2177: 'A brief introduction of Micro â€“ Sensors',
  MOC2178: 'Statistical Signal Processing',
  MOC2179: 'Nonlinear System Analysis',
  MOC2180: 'Ethics in Engineering Practice',
  MOC2181: 'Introduction to Research',
  MOC2182: 'Matlab Programming for Numerical Computation',
  MOC2183: 'Roadmap for Patent Creation',
  MOC2184: 'Entrepreneurship Essentials',
  MOC2185: 'Fuzzy Logic and Neural Networks',
  MOC2186: 'Microeconomics : Theory &amp; Applications',
  MOC2187: 'Introduction to Environmental Economics',
  MOC2188: 'Energy Resources, Economics and Environment',
  MOC2189: 'Literary Criticism (From Plato to Leavis)',
  MOC2190: 'Twentieth Century Fiction',
  MOC2191: 'Effective Writing',
  MOC2192: 'Strategic Trade and Protectionism - Theories and Empirics',
  MOC2193: 'Introduction to Cultural Studies',
  MOC2194: 'Introduction to Basic Spoken Sanskrit',
  MOC2195: 'Speaking Effectively',
  MOC2196: 'Soft Skill Development',
  MOC2197: 'Intellectual Property',
  MOC2198: 'English Language for Competitive Exams',
  MOC2199: 'English Literature for competitive Exams',
  MOC2200: 'Language and Mind',
  MOC2201: 'The Nineteenth - Century English Novel',
  MOC2202: 'Introduction to World Literature',
  MOC2203: 'Patent Drafting for Beginners',
  MOC2204: 'Patent Law for Engineers and Scientists',
  MOC2205: 'Economic Growth &amp; Development',
  MOC2206: 'Human Behaviour',
  MOC2207: 'Introduction to Modern Indian Political Thought',
  MOC2208: 'English Literature of the Romantic Period, 1798 - 1832',
  MOC2209: 'Literature, Culture and Media',
  MOC2210: 'Introduction to Brain &amp; Behaviour',
  MOC2211: 'Modern Indian Writing in Translation',
  MOC2212: 'Introduction to Political Ideologies : Contexts, Ideas, and Practices',
  MOC2213: 'Indian Business History',
  MOC2214: 'German - II',
  MOC2215: 'German - I',
  MOC2216: 'Feminism : Concepts and Theories',
  MOC2217: 'An Introduction to Smooth Manifolds',
  MOC2218: 'Measure Theory',
  MOC2219: 'Basic Real Analysis',
  MOC2220: 'Probabilistic Methods in PDE',
  MOC2221: 'Graph Theory',
  MOC2222: 'Transform Calculus and its applications in Differential Equations',
  MOC2223: 'Integral and Vector Calculus',
  MOC2224: 'Basic Linear Algebra',
  MOC2225: 'Introduction to Rings And Fields',
  MOC2226: 'Numerical Methods : Finite Difference Approach',
  MOC2227: 'Numerical Linear Algebra',
  MOC2228: 'Ordinary and Partial Differential Equations and Applications',
  MOC2229: 'Advanced Engineering Mathematics',
  MOC2230: 'Mathematical Methods and its Applications',
  MOC2231: 'Multivariable Calculus',
  MOC2232: 'Chaotic Dynamical System',
  MOC2233: 'Engineering Mathematics II',
  MOC2234: 'Advanced Probability Theory',
  MOC2235: 'Statistical Inference',
  MOC2236: 'Introduction to Algebraic Geometry and Commutative Algebra',
  MOC2237: 'Linear Algebra',
  MOC2238: 'Introduction to Probability and Statistics',
  MOC2239: 'Descriptive Statistics with R Software',
  MOC2240: 'Engineering Mechanics - Statics and Dynamics',
  MOC2241: 'Experimental Stress Analysis',
  MOC2242: 'Robotics and Control : Theory and Practice',
  MOC2243: 'Computational Fluid Dynamics for Incompressible Flows',
  MOC2244: 'Experimental Methods in Fluid Mechanics',
  MOC2245: 'Foundations of Computational Materials Modelling',
  MOC2246: 'Acoustic Materials and Metamaterials',
  MOC2247: 'Power Plant Engineering',
  MOC2248: 'Applied Ergonomics',
  MOC2249: 'Product Design and Manufacturing',
  MOC2250: 'Manufacturing Process Technology I &amp; II',
  MOC2251: 'Introduction To Mechanical Micro Machining',
  MOC2252: 'Non Traditional Abrasive Machining ProcessesUltrasonic, Abrasive Jet and Abrasive Water Jet Machining',
  MOC2253: 'Gear And Gear Unit Design : Theory And Practice',
  MOC2254: 'Conduction and Convection Heat Transfer',
  MOC2255: 'Laws of Thermodynamics',
  MOC2256: 'Kinematics of Mechanisms and Machines',
  MOC2257: 'Introduction To Fluid Mechanics',
  MOC2258: 'Fundamental of Welding Science and Technology',
  MOC2259: 'Introduction to Abrasive Machining and Finishing Processes',
  MOC2260: 'Automatic Control',
  MOC2261: 'Inspection and Quality Control in Manufacturing',
  MOC2262: 'Diffusion in Multicomponent Solids',
  MOC2263: 'Processing of Polymers and Polymer Composites',
  MOC2264: 'Operations Management',
  MOC2265: 'Convective Heat Transfer',
  MOC2266: 'Two phase flow and heat transfer',
  MOC2267: 'Steam and Gas Power Systems',
  MOC2268: 'Principles of Casting Technology',
  MOC2269: 'Financial Mathematics',
  MOC2270: 'Modelling and Simulation of Dynamic Systems',
  MOC2271: 'Fundamentals of combustion for propulsion',
  MOC2272: 'Industrial Automation And Control',
  MOC2273: 'Fundamentals of Nuclear Power Generation',
  MOC2274: 'Mechanics of Machining',
  MOC2275: 'IC Engines and Gas Turbines',
  MOC2276: 'Principles of Industrial Engineering',
  MOC2277: 'Computer Integrated Manufacturing',
  MOC2278: 'Machining Science',
  MOC2279: 'Introduction to Stochastic Processes',
  MOC2280: 'Introduction to System Dynamics Modeling',
  MOC2281: 'Management of New Products and Services',
  MOC2282: 'Integrated Marketing Management',
  MOC2283: 'Simulation of Business Systems: An Applied Approach',
  MOC2284: 'Production and Operation Management',
  MOC2285: 'Services Marketing : Integrating People, Technology, Strategy',
  MOC2286: 'Managerial Skills for Interpersonal Dynamics',
  MOC2287: 'Financial Institutions and Markets',
  MOC2288: 'Business Analytics For Management Decision',
  MOC2289: 'Services Marketing : A Practical Approach',
  MOC2290: 'Sales and Distribution Management',
  MOC2291: 'Principles of Human Resource Management',
  MOC2292: 'Managing change in organizations',
  MOC2293: 'Management of Inventory Systems',
  MOC2294: 'Quality Design And Control',
  MOC2295: 'Foundation Course in Managerial Economics',
  MOC2296: 'Engineering Econometrics',
  MOC2297: 'Financial Statement Analysis and Reporting',
  MOC2298: 'Business Statistics',
  MOC2299: 'Global Marketing Management',
  MOC2300: 'Marketing Research and Analysis - II',
  MOC2301: 'Infrastructure Planning and Managements',
  MOC2302: 'Modelling and Analytics for Supply Chain Management',
  MOC2303: 'Marketing Analytics',
  MOC2304: 'Financial Management For Managers',
  MOC2305: 'Management of Commercial Banking',
  MOC2306: 'Behavioral and Personal Finance',
  MOC2307: 'Total Quality Management - 1',
  MOC2308: 'Entrepreneurship',
  MOC2309: 'Modeling of Tundish Steelmaking Process in Continuous Casting',
  MOC2310: 'Fundamentals of Electronic Materials and Devices',
  MOC2311: 'Introduction to Materials Science and Engineering',
  MOC2312: 'Corrosion - Part I',
  MOC2313: 'Solar Photovoltaics: Principles, Technologies and Materials',
  MOC2314: 'Welding Processes',
  MOC2315: 'Theory and Practice of Non Destructive Testing',
  MOC2316: 'Steel Quality: Role of Secondary Refining and Continuous Casting',
  MOC2317: 'Materials Science and Engineering',
  MOC2318: 'Surface Engineering of Nanomaterials',
  MOC2319: 'Dealing with Materials Data: Collection, Analysis and Interpretation',
  MOC2320: 'Friction and Wear of Materials: Principle and Case Studies',
  MOC2321: 'Material Characterization',
  MOC2322: 'Offshore Structures Under Special Environmental Loads Including Fire Resistance',
  MOC2323: 'Physics of Biological Systems',
  MOC2324: 'Group Theory methods in Physics',
  MOC2325: 'Experimental Physics - II',
  MOC2326: 'Quantum Mechanics I',
  MOC2327: 'A Brief Course on Superconductivity',
  MOC2328: 'Fiber Optics',
  MOC2329: 'Electromagnetism',
  MOC2330: 'Experimental Physics III',
  MOC2331: 'Electronic Theory of Solids',
  MOC2332: 'Introduction to Atmospheric and Space Sciences',
  MOC2333: 'Optical Sensors',
  MOC2334: 'Evaluation of Textiles Materials',
  MOC2335: 'Advanced Textile Printing Technology',
  MOC2336: 'Textured Yarn Technology',
  MOC2337: 'Theory of Yarn Structure',
  MOC2338: 'Testing of Functional and Technical Textiles',
  ONL1002: 'Introduction to Bio-Inspired Design',
  ONL1004: 'IoT Design and Applications',
  ONL1005: 'Elements of Network Simulation',
  ONL1006: 'Machine Learning Using Python',
  ONL1007: 'Artificial Intelligence for Beginners',
  ONL1008: 'English for Science and Technology',
  ONL1009: 'Functional French',
  ONL1010: 'Problem Solving with Data Structures and Algorithms',
  ONL1011: 'Computer Networks',
  ONL1012: 'Data Warehousing and Data Mining',
  ONL1013: 'Principles of Programming',
  ONL1022: 'Operating Systems',
  PHY1001: 'Engineering Physics',
  PHY1002: 'Materials Science',
  PHY1005: 'Modern Physics',
  PHY1999: 'Introduction to Innovative Projects',
  RUS1701: 'Russian for Beginners',
  SET5001: 'Science, Engineering and Technology Project - I',
  SET5002: 'Science, Engineering and Technology Project - II',
  SET5003: 'Science, Engineering and Technology Project - III',
  SET5702: 'Science, Engineering and Technology Project - II',
  STS3002: 'Soft Skills',
  STS3102: 'Preparation for Indian Services',
  STS5001: 'Essentials of Business Etiquette and Problem Solving',
  STS5102: 'Programming and Problem Solving Skills',
  SWE4098: 'Comprehensive Examination',
  URE003: 'Undergraduate Research Experience',
  CHY1002: 'Environmental Sciences',
  ENG1000: 'Foundation English - I',
  ENG2000: 'Foundation English - II',
  EXC1001: 'Service to the Society',
  EXC1002: 'Youth Red Cross',
  EXC1003: 'ABCD-AnyBody Can Dance',
  EXC1004: 'Entrepreneurs Cell',
  EXC1005: 'Energy and Environmental Protection Club',
  EXC1006: 'Music - The Art of Culture',
  EXC1007: 'Sports for Healthy Life',
  EXC1008: 'Instrumentation for Engineers',
  EXC1009: 'Debating Skills',
  EXC1010: 'Mobility Engineering - Land, Air and Sea',
  EXC1011: 'Skills in Competitive Coding',
  EXC1012: 'Basics of Space Sciences',
  EXC1013: 'Roadmap to a Connected World',
  EXC1014: 'Dramatics Club',
  EXC1016: 'ASCE - VIT Student Chapter',
  EXC1017: 'Health Club',
  EXC1018: 'IETE - Student Chapter',
  EXC1019: 'The Fine Arts Club',
  EXC1020: 'Skills on Creativity',
  EXC1021: 'Computer Society of India',
  EXC1023: 'Hindi Literary Association',
  EXC1025: 'Toastmasters International - VIT Chapter',
  EXC1027: 'Power and Energy for Societal Development',
  EXC1028: 'VIT Community Radio',
  EXC1030: 'Make a Difference',
  EXC1032: 'Fifth Pillar',
  EXC1033: 'Robotics for Engineers',
  EXC1034: 'Techloop',
  EXC1035: 'Association for Computing Machinery',
  EXC1049: 'Innovation for Engineering Applications',
  EXC1054: 'The Art and Skills of Photography',
  EXC1061: 'Skill Development in Manufacturing',
  EXC1068: 'Discussion through Media',
  EXC1069: 'Fep-Si',
  EXC1070: 'Working to Engineer a Better World',
  EXC1071: 'Culinary Crusade',
  EXC1072: 'VIT Film Society',
  EXC1073: 'Women Engineers and Society',
  EXC1075: 'The Institution of Engineers (India)',
  EXC1076: 'Tamil Arts and Literature',
  EXC1077: 'National Cadet Corps (NCC)',
  EXC1078: 'VIT Spartans',
  EXC1079: 'Anokha',
  EXC1080: 'American Society of Mechanical Engineers',
  EXC1081: 'Open Source Development for Google Applications',
  EXC1082: 'Telugu Literary Association',
  EXC1083: 'Mozilla Firefox',
  EXC1084: 'Apple Developers Group',
  EXC1085: 'Technology And Gaming Club (TAG)',
  EXC1087: 'Engineering in Medicine and Biology',
  EXC1088: 'Energy for Societal Development',
  EXC1090: 'Economic Development and Commercial Sciences',
  EXC1095: 'Skills in Financial Investment',
  EXC1097: 'Practical Fundamentals of Chemical Engineering',
  EXC1100: 'Experiential Learning of Energy Engineers',
  EXC1101: 'Mathsomania',
  EXC1102: 'Art of Research and Publication',
  EXC1107: 'Skills on Chemical Engineering',
  EXC1110: 'Engineering for Industrial Applications',
  EXC1111: 'TechEd',
  EXC1112: 'Research for Biotechnology',
  EXC1114: 'Communication in Technology and Networking',
  EXC1120: 'Creativity Club',
  EXC1121: 'Social Entrepreneurship',
  EXC1124: 'Humanitarian Service',
  EXC1126: 'Health and Literature for Society',
  EXC1127: 'Debating on Internal Issues',
  EXC1129: 'Uddeshya',
  EXC1132: 'The way of Living',
  EXC1134: 'Child Care and Education',
  EXC1135: 'Kannada Arts and Literature',
  EXC1157: 'Trekking Club',
  EXC4097: 'Co/Extra Curricular',
}

const mon1 = {
  A1: '08:00',
  L1: '08:00',
  F1: '09:00',
  // L2: '08:45',
  D1: '10:00',
  L3: '09:50',
  TB1: '11:00',
  // L4: '10:45',
  TG1: '12:00',
  L5: '11:40',
  // L6: '12:15',
  A2: '14:00',
  L31: '14:00',
  F2: '15:00',
  // L32: '14:45',
  D2: '16:00',
  L33: '15:50',
  TB2: '17:00',
  // L34: '16:45',
  TG2: '18:00',
  L35: '17:40',
  V3: '19:00'
  // L36: '18:15'
}

const tue1 = {
  B1: '08:00',
  L7: '08:00',
  G1: '09:00',
  // L8: '08:45',
  E1: '10:00',
  L9: '09:50',
  TC1: '11:00',
  // L10: '10:45',
  TAA1: '12:00',
  L11: '11:40',
  // L12: '12:15',
  B2: '14:00',
  L37: '14:00',
  G2: '15:00',
  // L38: '14:45',
  E2: '16:00',
  L39: '15:50',
  TC2: '17:00',
  // L40: '16:45',
  TAA2: '18:00',
  L41: '17:40',
  V4: '19:00'
  // L42: '18:15'
}

const wed1 = {
  C1: '08:00',
  L13: '08:00',
  A1: '09:00',
  // L14: '08:45',
  F1: '10:00',
  L15: '09:50',
  V1: '11:00',
  // L16: '10:45',
  V2: '12:00',
  L17: '11:40',
  // L18: '12:15',
  C2: '14:00',
  L43: '14:00',
  A2: '15:00',
  // L44: '14:45',
  F2: '16:00',
  L45: '15:50',
  TD2: '17:00',
  // L46: '16:45',
  TBB2: '18:00',
  L47: '17:40',
  V5: '19:00'
  // L48: '18:15'
}

const thu1 = {
  D1: '08:00',
  L19: '08:00',
  B1: '09:00',
  // L20: '08:45',
  G1: '10:00',
  L21: '09:50',
  TE1: '11:00',
  // L22: '10:45',
  TCC1: '12:00',
  L23: '11:40',
  // L24: '12:15',
  D2: '14:00',
  L49: '14:00',
  B2: '15:00',
  // L50: '14:45',
  G2: '16:00',
  L51: '15:50',
  TE2: '17:00',
  // L52: '16:45',
  TCC2: '18:00',
  L53: '17:40',
  V6: '19:00'
  // L54: '18:15'
}

const fri1 = {
  E1: '08:00',
  L25: '08:00',
  C1: '09:00',
  // L26: '08:45',
  TA1: '10:00',
  L27: '09:50',
  TF1: '11:00',
  // L28: '10:45',
  TD1: '12:00',
  L29: '11:40',
  // L30: '12:15',
  E2: '14:00',
  L55: '14:00',
  C2: '15:00',
  // L56: '14:45',
  TA2: '16:00',
  L57: '15:50',
  TF2: '17:00',
  // L58: '16:45',
  TDD2: '18:00',
  L59: '17:40',
  V7: '19:00'
  // L60: '18:15'
}

window.onload = function () {
  const monday = JSON.parse(window.localStorage.getItem('monday'))
  const tuesday = JSON.parse(window.localStorage.getItem('tuesday'))
  const wednesday = JSON.parse(window.localStorage.getItem('wednesday'))
  const thursday = JSON.parse(window.localStorage.getItem('thursday'))
  const friday = JSON.parse(window.localStorage.getItem('friday'))
  window.console.log(monday)
  window.console.log(tuesday)
  window.console.log(wednesday)
  window.console.log(thursday)
  window.console.log(friday)
  if (window.localStorage.getItem('found') !== null) {
    if (window.localStorage.getItem('found') === 'true') {
      document.querySelector('.upload').remove()
    }
  }
  const d = new Date()
  const dayno = d.getDay()
  if (dayno === 1) {
    mondata()
  }
  if (dayno === 2) {
    tuedata()
  }
  if (dayno === 3) {
    weddata()
  }
  if (dayno === 4) {
    thudata()
  }
  if (dayno === 5) {
    fridata()
  }
  if (dayno === 0) {
    sundata()
  }
  if (dayno === 6) {
    satdata()
  }
  //   let text = ''
  //   for (let i = 0; i < monday.length; i++) {
  //     const stime = mon1[monday[i].Slot]
  //     const time = new Date('April 1 2021 ' + mon1[monday[i].Slot] + ':00')
  //     const addMinutes = function (dt, minutes) {
  //       return new Date(dt.getTime() + minutes * 60000)
  //     }
  //     let time1
  //     if (monday[i].Course_type === 'Lab') {
  //       time1 = addMinutes(time, 90)
  //     } else {
  //       time1 = addMinutes(time, 45)
  //     }
  //     const eth = time1.getHours()
  //     const rep = time1.getMinutes().toString().length % 2
  //     let etm = ''
  //     if (rep === 1) {
  //       etm = '0' + time1.getMinutes().toString()
  //     } else {
  //       etm = time1.getMinutes().toString()
  //     }
  //     const etime = eth.toString() + ':' + etm
  //     const fintime = stime.toString() + ' - ' + etime
  //     let course
  //     if (courseName[monday[i].Course_Name] === undefined) {
  //       course = monday[i].Course_Name
  //     } else {
  //       course = courseName[monday[i].Course_Name]
  //     }
  //     text =
  //       text +
  //       `
  //   <div class="main1">
  //   <div class="details">
  //       <div class="name">${course}</div>
  //       <div class="time">${fintime}</div>
  //       <div class="det">
  //         <div class="detcont1">${monday[i].Slot}</div>
  //         <div class="detcont2">${monday[i].Venue}</div>
  //       </div>
  //   </div>
  //   <div class="edit">Edit</div>
  // </div>
  //   `
  //   }
  //   main.innerHTML = text

  //   for (let j = 0; j < monday.length; j++) {
  //     document.querySelectorAll('.edit')[j].addEventListener('click', () => {
  //       const det = window.prompt(
  //         'Enter details',
  //         'Eg. A1-CSE2011-ETH-SJT405-UGF'
  //       )
  //       console.log(det)
  //       if (det !== null) {
  //         const myHeaders = new Headers()
  //         myHeaders.append('Accept', 'application/json')
  //         myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

  //         const urlencoded = new URLSearchParams()
  //         urlencoded.append('request', det)

  //         const requestOptions = {
  //           method: 'POST',
  //           headers: myHeaders,
  //           body: urlencoded,
  //           redirect: 'follow'
  //         }

  //         fetch('https://vittyapi.dscvit.com/uploadtext/', requestOptions)
  //           .then((response) => response.json())
  //           .then((result) => {
  //             if (result.Slots.length !== 0) {
  //               if (result.Slots[0].Slot in mon1) {
  //                 monday[j] = result.Slots[0]
  //                 console.log(monday)
  //                 window.localStorage.setItem('monday', JSON.stringify(monday))
  //                 const stime = mon1[monday[j].Slot]
  //                 const time = new Date(
  //                   'April 1 2021 ' + mon1[monday[j].Slot] + ':00'
  //                 )
  //                 const addMinutes = function (dt, minutes) {
  //                   return new Date(dt.getTime() + minutes * 60000)
  //                 }
  //                 let time1
  //                 if (monday[j].Course_type === 'Lab') {
  //                   time1 = addMinutes(time, 90)
  //                 } else {
  //                   time1 = addMinutes(time, 45)
  //                 }
  //                 const eth = time1.getHours()
  //                 const rep = time1.getMinutes().toString().length % 2
  //                 let etm = ''
  //                 if (rep === 1) {
  //                   etm = '0' + time1.getMinutes().toString()
  //                 } else {
  //                   etm = time1.getMinutes().toString()
  //                 }
  //                 const etime = eth.toString() + ':' + etm
  //                 const fintime = stime.toString() + ' - ' + etime
  //                 let course
  //                 if (courseName[monday[j].Course_Name] === undefined) {
  //                   course = monday[j].Course_Name
  //                 } else {
  //                   course = courseName[monday[j].Course_Name]
  //                 }
  //                 document.querySelectorAll('.name')[j].innerHTML = course
  //                 document.querySelectorAll('.time')[j].innerHTML = fintime
  //                 document.querySelectorAll('.detcont1')[j].innerHTML =
  //                   result.Slots[0].Slot
  //                 document.querySelectorAll('.detcont2')[j].innerHTML =
  //                   result.Slots[0].Venue
  //               }
  //             }
  //           })
  //           .catch((error) => console.log('error', error))
  //       }
  //     })
  //   }
}

function remove () {
  mon.removeAttribute('id')
  tue.removeAttribute('id')
  wed.removeAttribute('id')
  thu.removeAttribute('id')
  fri.removeAttribute('id')
  sat.removeAttribute('id')
  sun.removeAttribute('id')
}

mon.addEventListener('click', mondata)
tue.addEventListener('click', tuedata)
wed.addEventListener('click', weddata)
thu.addEventListener('click', thudata)
fri.addEventListener('click', fridata)
sat.addEventListener('click', satdata)
sun.addEventListener('click', sundata)

function mondata () {
  remove()
  mon.id = 'special'
  const monday = JSON.parse(window.localStorage.getItem('monday'))
  let text = ''
  for (let i = 0; i < monday.length; i++) {
    const stime = mon1[monday[i].Slot]
    const time = new Date('April 1 2021 ' + mon1[monday[i].Slot] + ':00')
    const addMinutes = function (dt, minutes) {
      return new Date(dt.getTime() + minutes * 60000)
    }
    let time1
    if (monday[i].Course_type === 'Lab') {
      time1 = addMinutes(time, 100)
    } else {
      time1 = addMinutes(time, 50)
    }
    const eth = time1.getHours()
    const rep = time1.getMinutes().toString().length % 2
    let etm = ''
    if (rep === 1) {
      etm = '0' + time1.getMinutes().toString()
    } else {
      etm = time1.getMinutes().toString()
    }
    const etime = eth.toString() + ':' + etm
    const fintime = stime.toString() + ' - ' + etime
    let course
    if (courseName[monday[i].Course_Name] === undefined) {
      course = monday[i].Course_Name
    } else {
      course = courseName[monday[i].Course_Name]
    }

    text =
      text +
      `
  <div class="main1">
  <div class="details">
      <div class="name">${course}</div>
      <div class="time">${fintime}</div>
      <div class="det">
        <div class="detcont1">${monday[i].Slot}</div>
        <div class="detcont2">${monday[i].Venue}</div>
      </div>
  </div>
  <div class="edit">Edit</div>
</div>
  `
  }
  main.innerHTML = text

  for (let j = 0; j < monday.length; j++) {
    document.querySelectorAll('.edit')[j].addEventListener('click', () => {
      const det = window.prompt(
        'Enter details',
        'Eg. A1-CSE2011-ETH-SJT405-UGF'
      )
      console.log(det)
      if (det !== null) {
        const myHeaders = new Headers()
        myHeaders.append('Accept', 'application/json')
        myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

        const urlencoded = new URLSearchParams()
        urlencoded.append('request', det)

        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        }

        fetch('https://vittyapi.dscvit.com/uploadtext/', requestOptions)
          .then((response) => response.json())
          .then((result) => {
            if (result.Slots.length !== 0) {
              if (result.Slots[0].Slot in mon1) {
                console.log(result)
                monday[j] = result.Slots[0]
                console.log(monday)
                window.localStorage.setItem('monday', JSON.stringify(monday))
                const stime = mon1[monday[j].Slot]
                const time = new Date(
                  'April 1 2021 ' + mon1[monday[j].Slot] + ':00'
                )
                const addMinutes = function (dt, minutes) {
                  return new Date(dt.getTime() + minutes * 60000)
                }
                let time1
                if (monday[j].Course_type === 'Lab') {
                  time1 = addMinutes(time, 100)
                } else {
                  time1 = addMinutes(time, 50)
                }
                const eth = time1.getHours()
                const rep = time1.getMinutes().toString().length % 2
                let etm = ''
                if (rep === 1) {
                  etm = '0' + time1.getMinutes().toString()
                } else {
                  etm = time1.getMinutes().toString()
                }
                const etime = eth.toString() + ':' + etm
                const fintime = stime.toString() + ' - ' + etime
                let course
                if (courseName[monday[j].Course_Name] === undefined) {
                  course = monday[j].Course_Name
                } else {
                  course = courseName[monday[j].Course_Name]
                }
                document.querySelectorAll('.name')[j].innerHTML = course
                document.querySelectorAll('.time')[j].innerHTML = fintime
                document.querySelectorAll('.detcont1')[j].innerHTML =
                  result.Slots[0].Slot
                document.querySelectorAll('.detcont2')[j].innerHTML =
                  result.Slots[0].Venue
              }
            }
          })
          .catch((error) => console.log('error', error))
      }
    })
  }
  if (window.localStorage.getItem('found') !== null) {
    if (window.localStorage.getItem('found') === 'true') {
      console.log(document.querySelectorAll('.edit'))
      document.querySelectorAll('.edit').forEach(function (a) {
        a.remove()
      })
      document.querySelectorAll('.details').forEach(function (a) {
        a.style.width = '100%'
        a.style.marginRight = '20px'
      })
    }
  }
}

function tuedata () {
  remove()
  tue.id = 'special'
  const tuesday = JSON.parse(window.localStorage.getItem('tuesday'))
  let text = ''
  for (let i = 0; i < tuesday.length; i++) {
    const stime = tue1[tuesday[i].Slot]
    const time = new Date('April 1 2021 ' + tue1[tuesday[i].Slot] + ':00')
    const addMinutes = function (dt, minutes) {
      return new Date(dt.getTime() + minutes * 60000)
    }
    let time1
    if (tuesday[i].Course_type === 'Lab') {
      time1 = addMinutes(time, 100)
    } else {
      time1 = addMinutes(time, 50)
    }
    const eth = time1.getHours()
    const rep = time1.getMinutes().toString().length % 2
    let etm = ''
    if (rep === 1) {
      etm = '0' + time1.getMinutes().toString()
    } else {
      etm = time1.getMinutes().toString()
    }
    const etime = eth.toString() + ':' + etm
    const fintime = stime.toString() + ' - ' + etime
    let course
    if (courseName[tuesday[i].Course_Name] === undefined) {
      course = tuesday[i].Course_Name
    } else {
      course = courseName[tuesday[i].Course_Name]
    }

    text =
      text +
      `
  <div class="main1">
  <div class="details">
      <div class="name">${course}</div>
      <div class="time">${fintime}</div>
      <div class="det">
        <div class="detcont1">${tuesday[i].Slot}</div>
        <div class="detcont2">${tuesday[i].Venue}</div>
      </div>
  </div>
  <div class="edit">Edit</div>
</div>
  `
  }
  main.innerHTML = text

  for (let j = 0; j < tuesday.length; j++) {
    document.querySelectorAll('.edit')[j].addEventListener('click', () => {
      const det = window.prompt(
        'Enter details',
        'Eg. A1-CSE2011-ETH-SJT405-UGF'
      )
      console.log(det)
      if (det !== null) {
        const myHeaders = new Headers()
        myHeaders.append('Accept', 'application/json')
        myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

        const urlencoded = new URLSearchParams()
        urlencoded.append('request', det)

        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        }

        fetch('https://vittyapi.dscvit.com/uploadtext/', requestOptions)
          .then((response) => response.json())
          .then((result) => {
            if (result.Slots.length !== 0) {
              if (result.Slots[0].Slot in tue1) {
                tuesday[j] = result.Slots[0]
                console.log(tuesday)
                window.localStorage.setItem('tuesday', JSON.stringify(tuesday))
                const stime = tue1[tuesday[j].Slot]
                const time = new Date(
                  'April 1 2021 ' + tue1[tuesday[j].Slot] + ':00'
                )
                const addMinutes = function (dt, minutes) {
                  return new Date(dt.getTime() + minutes * 60000)
                }
                let time1
                if (tuesday[j].Course_type === 'Lab') {
                  time1 = addMinutes(time, 100)
                } else {
                  time1 = addMinutes(time, 50)
                }
                const eth = time1.getHours()
                const rep = time1.getMinutes().toString().length % 2
                let etm = ''
                if (rep === 1) {
                  etm = '0' + time1.getMinutes().toString()
                } else {
                  etm = time1.getMinutes().toString()
                }
                const etime = eth.toString() + ':' + etm
                const fintime = stime.toString() + ' - ' + etime
                let course
                if (courseName[tuesday[j].Course_Name] === undefined) {
                  course = tuesday[j].Course_Name
                } else {
                  course = courseName[tuesday[j].Course_Name]
                }
                document.querySelectorAll('.name')[j].innerHTML = course
                document.querySelectorAll('.time')[j].innerHTML = fintime
                document.querySelectorAll('.detcont1')[j].innerHTML =
                  result.Slots[0].Slot
                document.querySelectorAll('.detcont2')[j].innerHTML =
                  result.Slots[0].Venue
              }
            }
          })
          .catch((error) => console.log('error', error))
      }
    })
  }
  if (window.localStorage.getItem('found') !== null) {
    if (window.localStorage.getItem('found') === 'true') {
      console.log(document.querySelectorAll('.edit'))
      document.querySelectorAll('.edit').forEach(function (a) {
        a.remove()
      })
      document.querySelectorAll('.details').forEach(function (a) {
        a.style.width = '100%'
        a.style.marginRight = '20px'
      })
    }
  }
}

function weddata () {
  remove()
  wed.id = 'special'
  const wednesday = JSON.parse(window.localStorage.getItem('wednesday'))
  let text = ''
  for (let i = 0; i < wednesday.length; i++) {
    const stime = wed1[wednesday[i].Slot]
    const time = new Date('April 1 2021 ' + wed1[wednesday[i].Slot] + ':00')
    const addMinutes = function (dt, minutes) {
      return new Date(dt.getTime() + minutes * 60000)
    }
    let time1
    if (wednesday[i].Course_type === 'Lab') {
      time1 = addMinutes(time, 100)
    } else {
      time1 = addMinutes(time, 50)
    }
    const eth = time1.getHours()
    const rep = time1.getMinutes().toString().length % 2
    let etm = ''
    if (rep === 1) {
      etm = '0' + time1.getMinutes().toString()
    } else {
      etm = time1.getMinutes().toString()
    }
    const etime = eth.toString() + ':' + etm
    const fintime = stime.toString() + ' - ' + etime
    let course
    if (courseName[wednesday[i].Course_Name] === undefined) {
      course = wednesday[i].Course_Name
    } else {
      course = courseName[wednesday[i].Course_Name]
    }

    text =
      text +
      `
  <div class="main1">
  <div class="details">
      <div class="name">${course}</div>
      <div class="time">${fintime}</div>
      <div class="det">
        <div class="detcont1">${wednesday[i].Slot}</div>
        <div class="detcont2">${wednesday[i].Venue}</div>
      </div>
  </div>
  <div class="edit">Edit</div>
</div>
  `
  }
  main.innerHTML = text

  for (let j = 0; j < wednesday.length; j++) {
    document.querySelectorAll('.edit')[j].addEventListener('click', () => {
      const det = window.prompt(
        'Enter details',
        'Eg. A1-CSE2011-ETH-SJT405-UGF'
      )
      console.log(det)
      if (det !== null) {
        const myHeaders = new Headers()
        myHeaders.append('Accept', 'application/json')
        myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

        const urlencoded = new URLSearchParams()
        urlencoded.append('request', det)

        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        }

        fetch('https://vittyapi.dscvit.com/uploadtext/', requestOptions)
          .then((response) => response.json())
          .then((result) => {
            if (result.Slots.length !== 0) {
              if (result.Slots[0].Slot in wed1) {
                wednesday[j] = result.Slots[0]
                console.log(wednesday)
                window.localStorage.setItem(
                  'wednesday',
                  JSON.stringify(wednesday)
                )
                const stime = wed1[wednesday[j].Slot]
                const time = new Date(
                  'April 1 2021 ' + wed1[wednesday[j].Slot] + ':00'
                )
                const addMinutes = function (dt, minutes) {
                  return new Date(dt.getTime() + minutes * 60000)
                }
                let time1
                if (wednesday[j].Course_type === 'Lab') {
                  time1 = addMinutes(time, 100)
                } else {
                  time1 = addMinutes(time, 50)
                }
                const eth = time1.getHours()
                const rep = time1.getMinutes().toString().length % 2
                let etm = ''
                if (rep === 1) {
                  etm = '0' + time1.getMinutes().toString()
                } else {
                  etm = time1.getMinutes().toString()
                }
                const etime = eth.toString() + ':' + etm
                const fintime = stime.toString() + ' - ' + etime
                let course
                if (courseName[wednesday[j].Course_Name] === undefined) {
                  course = wednesday[j].Course_Name
                } else {
                  course = courseName[wednesday[j].Course_Name]
                }
                document.querySelectorAll('.name')[j].innerHTML = course
                document.querySelectorAll('.time')[j].innerHTML = fintime
                document.querySelectorAll('.detcont1')[j].innerHTML =
                  result.Slots[0].Slot
                document.querySelectorAll('.detcont2')[j].innerHTML =
                  result.Slots[0].Venue
              }
            }
          })
          .catch((error) => console.log('error', error))
      }
    })
  }
  if (window.localStorage.getItem('found') !== null) {
    if (window.localStorage.getItem('found') === 'true') {
      console.log(document.querySelectorAll('.edit'))
      document.querySelectorAll('.edit').forEach(function (a) {
        a.remove()
      })
      document.querySelectorAll('.details').forEach(function (a) {
        a.style.width = '100%'
        a.style.marginRight = '20px'
      })
    }
  }
}

function thudata () {
  remove()
  thu.id = 'special'
  const thursday = JSON.parse(window.localStorage.getItem('thursday'))
  let text = ''
  for (let i = 0; i < thursday.length; i++) {
    const stime = thu1[thursday[i].Slot]
    const time = new Date('April 1 2021 ' + thu1[thursday[i].Slot] + ':00')
    const addMinutes = function (dt, minutes) {
      return new Date(dt.getTime() + minutes * 60000)
    }
    let time1
    if (thursday[i].Course_type === 'Lab') {
      time1 = addMinutes(time, 100)
    } else {
      time1 = addMinutes(time, 50)
    }
    const eth = time1.getHours()
    const rep = time1.getMinutes().toString().length % 2
    let etm = ''
    if (rep === 1) {
      etm = '0' + time1.getMinutes().toString()
    } else {
      etm = time1.getMinutes().toString()
    }
    const etime = eth.toString() + ':' + etm
    const fintime = stime.toString() + ' - ' + etime
    let course
    if (courseName[thursday[i].Course_Name] === undefined) {
      course = thursday[i].Course_Name
    } else {
      course = courseName[thursday[i].Course_Name]
    }

    text =
      text +
      `
  <div class="main1">
  <div class="details">
      <div class="name">${course}</div>
      <div class="time">${fintime}</div>
      <div class="det">
        <div class="detcont1">${thursday[i].Slot}</div>
        <div class="detcont2">${thursday[i].Venue}</div>
      </div>
  </div>
  <div class="edit">Edit</div>
</div>
  `
  }
  main.innerHTML = text

  for (let j = 0; j < thursday.length; j++) {
    document.querySelectorAll('.edit')[j].addEventListener('click', () => {
      const det = window.prompt(
        'Enter details',
        'Eg. A1-CSE2011-ETH-SJT405-UGF'
      )
      console.log(det)
      if (det !== null) {
        const myHeaders = new Headers()
        myHeaders.append('Accept', 'application/json')
        myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

        const urlencoded = new URLSearchParams()
        urlencoded.append('request', det)

        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        }

        fetch('https://vittyapi.dscvit.com/uploadtext/', requestOptions)
          .then((response) => response.json())
          .then((result) => {
            if (result.Slots.length !== 0) {
              if (result.Slots[0].Slot in thu1) {
                thursday[j] = result.Slots[0]
                console.log(thursday)
                window.localStorage.setItem(
                  'thursday',
                  JSON.stringify(thursday)
                )
                const stime = thu1[thursday[j].Slot]
                const time = new Date(
                  'April 1 2021 ' + thu1[thursday[j].Slot] + ':00'
                )
                const addMinutes = function (dt, minutes) {
                  return new Date(dt.getTime() + minutes * 60000)
                }
                let time1
                if (thursday[j].Course_type === 'Lab') {
                  time1 = addMinutes(time, 100)
                } else {
                  time1 = addMinutes(time, 50)
                }
                const eth = time1.getHours()
                const rep = time1.getMinutes().toString().length % 2
                let etm = ''
                if (rep === 1) {
                  etm = '0' + time1.getMinutes().toString()
                } else {
                  etm = time1.getMinutes().toString()
                }
                const etime = eth.toString() + ':' + etm
                const fintime = stime.toString() + ' - ' + etime
                let course
                if (courseName[thursday[j].Course_Name] === undefined) {
                  course = thursday[j].Course_Name
                } else {
                  course = courseName[thursday[j].Course_Name]
                }
                document.querySelectorAll('.name')[j].innerHTML = course
                document.querySelectorAll('.time')[j].innerHTML = fintime
                document.querySelectorAll('.detcont1')[j].innerHTML =
                  result.Slots[0].Slot
                document.querySelectorAll('.detcont2')[j].innerHTML =
                  result.Slots[0].Venue
              }
            }
          })
          .catch((error) => console.log('error', error))
      }
    })
  }
  if (window.localStorage.getItem('found') !== null) {
    if (window.localStorage.getItem('found') === 'true') {
      console.log(document.querySelectorAll('.edit'))
      document.querySelectorAll('.edit').forEach(function (a) {
        a.remove()
      })
      document.querySelectorAll('.details').forEach(function (a) {
        a.style.width = '100%'
        a.style.marginRight = '20px'
      })
    }
  }
}

function fridata () {
  remove()
  fri.id = 'special'
  const friday = JSON.parse(window.localStorage.getItem('friday'))
  let text = ''
  for (let i = 0; i < friday.length; i++) {
    const stime = fri1[friday[i].Slot]
    const time = new Date('April 1 2021 ' + fri1[friday[i].Slot] + ':00')
    const addMinutes = function (dt, minutes) {
      return new Date(dt.getTime() + minutes * 60000)
    }
    let time1
    if (friday[i].Course_type === 'Lab') {
      time1 = addMinutes(time, 100)
    } else {
      time1 = addMinutes(time, 50)
    }
    const eth = time1.getHours()
    const rep = time1.getMinutes().toString().length % 2
    let etm = ''
    if (rep === 1) {
      etm = '0' + time1.getMinutes().toString()
    } else {
      etm = time1.getMinutes().toString()
    }
    const etime = eth.toString() + ':' + etm
    const fintime = stime.toString() + ' - ' + etime
    let course
    if (courseName[friday[i].Course_Name] === undefined) {
      course = friday[i].Course_Name
    } else {
      course = courseName[friday[i].Course_Name]
    }

    text =
      text +
      `
  <div class="main1">
  <div class="details">
      <div class="name">${course}</div>
      <div class="time">${fintime}</div>
      <div class="det">
        <div class="detcont1">${friday[i].Slot}</div>
        <div class="detcont2">${friday[i].Venue}</div>
      </div>
  </div>
  <div class="edit">Edit</div>
</div>
  `
  }
  main.innerHTML = text

  for (let j = 0; j < friday.length; j++) {
    document.querySelectorAll('.edit')[j].addEventListener('click', () => {
      const det = window.prompt(
        'Enter details',
        'Eg. A1-CSE2011-ETH-SJT405-UGF'
      )
      console.log(det)
      if (det !== null) {
        const myHeaders = new Headers()
        myHeaders.append('Accept', 'application/json')
        myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

        const urlencoded = new URLSearchParams()
        urlencoded.append('request', det)

        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        }

        fetch('https://vittyapi.dscvit.com/uploadtext/', requestOptions)
          .then((response) => response.json())
          .then((result) => {
            if (result.Slots.length !== 0) {
              if (result.Slots[0].Slot in fri1) {
                friday[j] = result.Slots[0]
                console.log(friday)
                window.localStorage.setItem('friday', JSON.stringify(friday))
                const stime = fri1[friday[j].Slot]
                const time = new Date(
                  'April 1 2021 ' + fri1[friday[j].Slot] + ':00'
                )
                const addMinutes = function (dt, minutes) {
                  return new Date(dt.getTime() + minutes * 60000)
                }
                let time1
                if (friday[j].Course_type === 'Lab') {
                  time1 = addMinutes(time, 100)
                } else {
                  time1 = addMinutes(time, 50)
                }
                const eth = time1.getHours()
                const rep = time1.getMinutes().toString().length % 2
                let etm = ''
                if (rep === 1) {
                  etm = '0' + time1.getMinutes().toString()
                } else {
                  etm = time1.getMinutes().toString()
                }
                const etime = eth.toString() + ':' + etm
                const fintime = stime.toString() + ' - ' + etime
                let course
                if (courseName[friday[j].Course_Name] === undefined) {
                  course = friday[j].Course_Name
                } else {
                  course = courseName[friday[j].Course_Name]
                }
                document.querySelectorAll('.name')[j].innerHTML = course
                document.querySelectorAll('.time')[j].innerHTML = fintime
                document.querySelectorAll('.detcont1')[j].innerHTML =
                  result.Slots[0].Slot
                document.querySelectorAll('.detcont2')[j].innerHTML =
                  result.Slots[0].Venue
              }
            }
          })
          .catch((error) => console.log('error', error))
      }
    })
  }
  if (window.localStorage.getItem('found') !== null) {
    if (window.localStorage.getItem('found') === 'true') {
      console.log(document.querySelectorAll('.edit'))
      document.querySelectorAll('.edit').forEach(function (a) {
        a.remove()
      })
      document.querySelectorAll('.details').forEach(function (a) {
        a.style.width = '100%'
        a.style.marginRight = '20px'
      })
    }
  }
}

function satdata () {
  remove()
  sat.id = 'special'
  main.innerHTML = `
  <div class="holiday">
  <div class="bold">
    No classes today!
  </div>
  Up for some Valorant grind?
  </div>
  `
}

function sundata () {
  remove()
  sun.id = 'special'
  main.innerHTML = `
  <div class="holiday">
  <div class="bold">
    No classes today!
  </div>
  Up for some Valorant grind?
  </div>
  `
}

upload.addEventListener('click', function () {
  window.chrome.runtime.sendMessage('upload-data', (response) => {
    console.log('uploaded data ', response)
    if (window.localStorage.getItem('found') !== null) {
      if (window.localStorage.getItem('found') === 'true') {
        console.log(document.querySelectorAll('.edit'))
        document.querySelectorAll('.edit').forEach(function (a) {
          a.remove()
        })
        document.querySelectorAll('.details').forEach(function (a) {
          a.style.width = '100%'
          a.style.marginRight = '20px'
        })
        document.querySelector('.upload').remove()
      }
    }
  })
})

change.addEventListener('click', function () {
  window.localStorage.setItem('found', 'false')
  window.localStorage.removeItem('monday')
  window.localStorage.removeItem('tuesday')
  window.localStorage.removeItem('wednesday')
  window.localStorage.removeItem('thursday')
  window.localStorage.removeItem('friday')
  window.chrome.runtime.sendMessage('delete-data', (response) => {
    console.log('deleted data ', response)
    window.location.assign('instructions.html')
  })
})

change1.addEventListener('click', function () {
  window.localStorage.setItem('found', 'false')
  window.localStorage.removeItem('monday')
  window.localStorage.removeItem('tuesday')
  window.localStorage.removeItem('wednesday')
  window.localStorage.removeItem('thursday')
  window.localStorage.removeItem('friday')
  window.chrome.runtime.sendMessage('delete-data', (response) => {
    console.log('deleted data ', response)
    window.location.assign('instructions.html')
  })
})

logout.addEventListener('click', function () {
  window.localStorage.removeItem('uid')
  window.chrome.runtime.sendMessage('logout', (response) => {
    console.log('Logged out ', response)
    if (response === 'successfully') {
      window.location.assign('popup.html')
    }
  })
})

const dot = document.querySelector('.toggle')
const menu = document.querySelector('.menu')
dot.addEventListener('click', () => {
  menu.classList.toggle('menu-active')
})
