import projectReact from "../assets/projects/project_react.jpg";
import ArcgisPro1 from "../assets/projects/argispro1.jpg";
import ArcgisPro2 from "../assets/projects/Model_Builder.jpg";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.jpeg";
import project6 from "../assets/projects/project-6.jpeg";
import project7 from "../assets/projects/project-7.jpeg";
import project8 from "../assets/projects/project-8.jpeg";
import project9 from "../assets/projects/project-9.png";
import project10 from "../assets/projects/project10.png";
import project11 from "../assets/projects/uiux_1.png";
import project12 from "../assets/projects/uiux_2.png";
import project13 from "../assets/projects/donnySri.jpg";
import project14 from "../assets/projects/AdzkaAndina.jpg";
import project15 from "../assets/projects/project-15.png";
import project16 from "../assets/projects/project-16.png";
import training1 from "../assets/projects/training1.jpg";
import training2 from "../assets/projects/training2.jpg";
import training3 from "../assets/projects/training3.jpg";
import training4 from "../assets/projects/Ririn.jpg";
import training5 from "../assets/projects/sertifikat-figma-dasar.png";
import training6 from "../assets/projects/sertifikat-kursus-wordpress.png";
import achievement1 from "../assets/projects/achievement1.png";
import achievement2 from "../assets/projects/achievement2.jpg";
import achievement3 from "../assets/projects/achievement3.jpeg";
import achievement4 from "../assets/projects/achievement4.png";
import achievement5 from "../assets/projects/achievement5.jpg";
import achievement6 from "../assets/projects/achievement6.jpg";
import achievement7 from "../assets/projects/achievement7.jpg";
import achievement8 from "../assets/projects/achievement8.jpg";
import achievement9 from "../assets/projects/achievement9.jpg";

export const HERO_CONTENT = `I am a Geography graduate with a passion for technology, particularly in the fields of GIS and programming. Throughout my academic journey, I developed a keen interest in spatial analysis and map-making, gaining expertise in creating both general and thematic maps using tools like ArcGIS and ArcGIS Pro. In addition to my GIS skills, I have a strong self-taught background in programming that is web development, specializing in PHP, JavaScript and Phyton. I have experience as a freelance map making service and intern as IT web developer. I am deeply committed to continuously learning and advancing in my field, with the goal of becoming a highly skilled professional in both GIS and web development.`;

export const ABOUT_TEXT = `My interest in technology started during college, where I learned mapping and became a GIS teaching assistant. GIS and programming are fields that I find particularly interesting, and I am someone who learns quickly. I was involved in various projects, such as assisting with GIS teaching and creating a map for MAN 1 Makassar, as well as working as a mapping freelancer. Towards the end of my studies, I expanded my skills by learning web development and now have experience in freelance projects and an internship as an IT Web Developer. In the future, I aspire to become a WebGIS Specialist.`;

export const EXPERIENCES = [
  {
    year: "2020 - 2022",
    role: "GIS Teaching Assistant and Geography Lab Assistant.",
    institution: "Geography Department, Universitas Negeri Makassar",
    description: `Assisting the lecturer in the Mapping and GIS course in various tasks such as teaching through instructional videos, helping with map project creation, participating in mapping training, assisting in research, and other related activities.`,
    technologies: [
      "ArcGIS Desktop",
      "ArcGIS Pro",
      "Google Earth Pro",
      "ER Mapper",
      "Sas Planet",
      "Seadas",
      "Landsat",
      "Agisoft MetaShape",
      "Fastone Photo Reziser",
    ],
  },
  {
    year: "2021 - Now",
    role: "Freelance Mapping Services.",
    description: `The service provides the creation of general and thematic mapping services as desired by the user. Map creation is carried out using various types of data as the basis, such as satellite imagery, RBI maps, field data, and other relevant data. The price of the map is adjusted according to the level of complexity and analysis required.`,
    technologies: [
      "ArcGIS Desktop",
      "ArcGIS Pro",
      "Google Earth Pro",
      "ER Mapper",
      "Sas Planet",
      "Seadas",
      "Landsat",
      "Agisoft MetaShape",
      "Fastone Photo Reziser",
    ],
  },
  {
    year: "2023 - 2024 (Until March)",
    role: "Coordinator of the Entrepreneurship Division, FMIPA International Class Students Program",
    company: "Universitas Negeri Makassar",
    description: `Carry out various activities to improve the English language skills of students in the International Class Program, FMIPA, Makassar State University. The activities are directly supervised by the faculty and receive full support from the faculty. Various programs are implemented, such as English Day, mentoring, IELTS Prediction Test, international seminars, and other programs. In addition, there is an entrepreneurship program that provides various services and products, helping students develop skills to become entrepreneurs.`,
    technologies: [
      "English Language, Leadership, Entrepreneurship, Team Working, Communication Skills",
    ],
  },
  {
    year: "2024 - (April - Mei)",
    role: "Freelance Web Developer",
    company: "Jababeka Tbk (By the relation of an intern)",
    description: `Helping develop the psychological test website together with an intern at Jababeka Tbk. Website development is carried out by inserting questions on sheets of paper into the website display and then providing logic according to the form of multiple choice questions. There is one correct answer and then the user's answer results will be calculated when all questions have been answered. Apart from that, this website also provides CSS to make it more attractive. In this project, I only worked on the CFIT question section.`,
    technologies: ["PHP Native", "CSS", "MySQL", "Javascript"],
  },
  {
    year: "2024 - (Juni - November)",
    role: "IT Web Developer Intern",
    company: "Invaite.id",
    description: `Helping slicing website designs into lines of code so that it can become an interactive online invitation website that customers want. The online invitation website is equipped with features for sending messages and impressions as well as confirming attendance which is connected to a database in real time. This website has been hosted and received by customers.`,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "CI",
      "Firebase",
      "MySQL",
      "Filezilla",
    ],
  },
  {
    year: "2024 - (Agustus)",
    role: "Freelance Web Developer",
    company: "UPT SPF SMP NEGERI 3 MAKASSAR ",
    description: `Helping create a bullying complaint website at school. On this website, there is a complaint feature by embedding links in the form of social media and also Google forms. There is also various information regarding bullying complaints. This website has also been hosted so it can be used immediately.`,
    technologies: ["HTML", "CSS", "JavaScript", "Github"],
  },
];

export const PROJECTS = [
  {
    title: "General and Thematic Maps (Click here to see the project)",
    image: projectReact,
    description:
      "Creating and conducting analysis of general and thematic maps using various data sources and mapping software to produce maps in accordance with the objectives. This map was created based on my experience during my studies and working as a freelance map service provider.",
    technologies: [
      "ArcGIS Desktop",
      "ArcGIS Pro",
      "Google Earth Pro",
      "ER Mapper",
      "Sas Planet",
      "Seadas",
      "Landsat",
      "Agisoft MetaShape",
      "Fastone Photo Reziser",
    ],
    link: "/peta.html",
  },
  {
    title: "Processing Water Service data with ArcPy in VSCode into ArcGIS Pro",
    image: ArcgisPro1,
    description:
      "Performed the process of inputting Water Service data in CSV format using VSCode and ArcPy (Python) into ArcMap, resulting in a pointer containing service request information related to 'Water Service' at the address '5303 Palmetto, Houston, TX 77081,' reported via voice call on August 23, 2017.",
    technologies: ["Microsoft Excel", "Vs Code", "ArcPy", "ArcGIS Pro"],
    link: "",
  },
  {
    title: "Modifying ArcGIS Pro Model Builder Exported Python Scripts",
    image: ArcgisPro2,
    description:
      "Working with Arcgis Pro to process to datasets that is mc_major_roads and monroe_county_wetlands. In Model Builder, I apply a buffer to the roads and use clip to cut the wetlands dataset based on the buffer zone. After exporting the model to Python code, I modify the script to suit my needs. Finally, I run the modified Python script in the Command Prompt to execute the analysis and generate the desire output.",
    technologies: ["Vs Code", "ArcPy", "ArcGIS Pro", "Model Builder"],
    link: "",
  },
  {
    title: "TodoList React",
    image: project16,
    description:
      "Create Todolist using React with fake API using Axios and Json Server. This project is not hosted because the limitation to find free hostinger that support json server",
    technologies: ["Tailwind", "React", "Axios", "Json Server"],
    link: "https://github.com/Rinsaf14/todolist-react.git",
  },
  {
    title: "Rumah Impian",
    image: project1,
    description:
      "Development with HTML, CSS, and JavaScript resulting from slicing using Figma. A real estate trading website. However, there is no complex interactivity or database in its development, only on the front-end side.",
    technologies: ["HTML", "CSS", "JavaScript", "Github"],
    link: "/peta.html",
  },
  {
    title: "Store Management",
    image: project2,
    description:
      "Development with the Laravel PHP Framework and native CSS. Equipped with authentication for admin and user. There is a crud feature for goods in and out of the shop for admins and a feature for purchasing goods for users (users)",
    technologies: ["HTML", "CSS", "Laravel", "MySQL"],
    link: "/process.html",
  },
  {
    title: "Website for Reports about Bullying in SMP Negeri 3 Makassar",
    image: project3,
    description:
      "This website was created with the aim that all acts of bullying that occur can be immediately reported. There is some information regarding bullying complaints on the website which is accompanied by bullying education and the parties to contact to make reports",
    technologies: ["HTML", "CSS", "JavaScript", "Github"],
    link: "https://spentig3.github.io/pengaduanspentig/",
  },
  {
    title: "Psikotest Website",
    image: project4,
    description:
      "Website that displays questions for test takers which is equipped with a timer feature. Development with HTML, CSS and PHP. The CFIT questions have 4 question divisions where there is a feature to move questions accompanied by calculations of the user's answer results.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    link: "/jababeka.html",
  },
  {
    title: "Wedding Invitation Rizky and Putut by Invaite.id",
    image: project5,
    description:
      "Change the invitation design from designer into a responsive website. This website is equipped with motion, making it look more attractive. Apart from that, it is also equipped with real-time message sending and presence confirmation features so that other users can also see the messages entered.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Codeigniter 3",
      "Filezilla",
      "MySQL",
    ],
    link: "https://invaite.id/RPWedding/?to=Fira",
  },
  {
    title: "Wedding Invitation Donny and Sri by Invaite.id",
    image: project13,
    description:
      "Change the invitation design from designer into a responsive website. This website is equipped with motion, making it look more attractive. Apart from that, it is also equipped with real-time message sending and presence confirmation features so that other users can also see the messages entered.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Codeigniter 3",
      "Filezilla",
      "MySQL",
    ],
    link: "https://invaite.id/DonnywithSri",
  },
  {
    title: "Wedding Invitation Adzka and Andina by Invaite.id",
    image: project14,
    description:
      "Change the invitation design from designer into a responsive website. This website is equipped with motion, making it look more attractive. Apart from that, it is also equipped with real-time message sending and presence confirmation features so that other users can also see the messages entered.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Codeigniter 3",
      "Filezilla",
      "MySQL",
    ],
    link: "https://invaite.id/AdzkaAndina",
  },
  {
    title: "Website Portfolio",
    image: project6,
    description:
      "Website portfolio using the React framework containing about myself, especially my skills and experience in website programming",
    technologies: ["HTML", "Tailwind", "JavaScript", "React"],
  },
  {
    title: "Website Portfolio",
    image: project7,
    description:
      "Website portfolio containing about myself, especially my skills and experience in website programming. With this portfolio, I can be accapted as an intern in Invaite.id",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://rinsaf14.github.io/MyPortoRirinSafitri/",
  },
  {
    title: "CRUD APP",
    image: project8,
    description:
      "Developing a CRUD system using PHP. The user can create, read, update and delete data.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    link: "/process.html",
  },
  {
    title: "HELLO CODERS",
    image: project9,
    description:
      "Developing a participant/student data website equipped with an authentication system using HTML, CSS, JavaScript and PHP. After the user registers or logs in, the user is directed to a page that displays a list of participants/students using the CRUD system.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    link: "/process.html",
  },
  {
    title: "Image Gallery",
    image: project10,
    description:
      "Website with simple HTML and CSS and use of Java script language for image search system using API. Each search will display several images as desired.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    link: "https://rinsaf14.github.io/imagegallery/",
  },
  {
    title: "Simple Todo List",
    image: project15,
    description: "Create a todolist to strengthen understanding of Javascript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://rinsaf14.github.io/To-do-list/",
  },
  {
    title: "Rumah Impian UI UX",
    image: project11,
    description:
      "Create a website design using Figma which will serve as a guide in programming the website.",
    technologies: ["FIGMA"],
    link: "https://www.figma.com/design/i4T260lrh3X6ZVOXfcKwfe/Rumah-Impian?m=dev&node-id=0-1&t=PGPz5I0LgjcxInRQ-1",
  },
  {
    title: "Being Developer UI UX",
    image: project12,
    description: "Creation of Wireframes, Mockups and UI UX Design with figma",
    technologies: ["FIGMA"],
    link: "https://www.figma.com/design/embajn6ZUa17hmcReTgxjT/Project-2-(Copy)?m=dev&node-id=0-1&t=bLd9YlBMT6yKrxxP-1",
  },
];

export const TRAINING = [
  {
    title:
      "Participants of the Basic Level Drone Mapping Training held on June 24-25, 2020, organized by Papua Mapping Center and Indonesia Mapping Community.",
    image: training1,
  },
  {
    title:
      "Participants of the Advance Level Drone Mapping Training held on July 02-07, 2020, organized by Papua Mapping Center and Indonesia Mapping Community.",
    image: training2,
  },
  {
    title:
      "Participants of the Advance Level II Drone Mapping Training held on July 22 until August 01, 2020, organized by Papua Mapping Center and Indonesia Mapping Community.",
    image: training3,
  },
  {
    title:
      "Participants of LANDFORM (Online Training Drone for Mapping) Strategies for Utilizing UAVs (Drones) as a Tool for Cartographic Mapping,  organized by the Student Executive Board of the Faculty of Geography, Muhammadiyah University of Surakarta, in Surakarta on August 20-25, 2020.",
    image: training4,
  },
  {
    title:
      "Participants of the online learning class, namely the Basic Figma Class on the Digital Course platform.",
    image: training5,
  },
  {
    title:
      "Participants of the online learning class, namely the Basic Wordpress Class on the Digital Course platform.",
    image: training6,
  },
];

export const ACHIEVEMENT = [
  {
    title:
      "The 1st Winner of the National Video Speech Competition in International Relations Competition which held on 7 January 2023 at the University of Darussalam Gontor Female Campus, Ngawi, East Java, Indonesia.",
    image: achievement1,
  },
  {
    title:
      "3rd place winner of the Ruang Bercerita video competition with the theme of inspiring stories, organized by the Department of Mental Health and Environment, Student Executive Board of the Faculty of Education, Yogyakarta State University, on October 23, 2021.",
    image: achievement2,
  },
  {
    title:
      "Presenter in International Conference on Geoscience Environment and Education (ICGEE 2022) Paper entiteled: Analysis of Land Use Change in Makassar City South Sulawesi in 2017– 2022 (Case Study in the Manggala District).",
    image: achievement3,
  },
  {
    title:
      "The 1st best graduate from Mathematics and Science Faculty of Universitas Negeri Makassar, August period in 2023",
    image: achievement4,
  },
  {
    title:
      "Participant in Asean Geospatial Challenge 2023 represent Makassar State University Held by Singapore Land Authority, Badan Informasi Geogspasial and National Mapping and Resource Information Authority of Philipphine.",
    image: achievement5,
  },
  {
    title:
      "The 2nd place in the Vlog Competition category National English Fair 2021 Held by English Student Association STKIP PGRI Trenggalek.",
    image: achievement6,
  },
  {
    title:
      "Participant in the 2021 Student Exchange Program in Brawijaya University Malang Held by Ministry of Education and Culture Indonesia.",
    image: achievement7,
  },
  {
    title:
      "Presenter in The Fourth International Conference on Mathematics, Science, Technology, Education and Their Applications (Tha 4th ICMSTEA) Faculty of Mathematics and Natural Sciences, Universitas Negeri Makassar in October 5th 2020.",
    image: achievement8,
  },
  {
    title:
      "Favourite work of the Ministry of Youth and Sports Youth Creative Challenge 2021 in the Animated Video Category Held by the Ministry of Youth and Sports of the Republic of Indonesia.",
    image: achievement9,
  },
];

export const CONTACT = {
  address:
    "Banrongnge Number 34 Bojo Baru, Mallusetasi District, Barru Regency, South Sulawesi, Indonesia",
  phoneNo: "+62 878-5333-9921",
  email: "ririnsaf14@gmail.com",
};
