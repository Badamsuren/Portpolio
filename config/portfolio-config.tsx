import { Mail, Phone, MapPin, Clock, Coffee } from "lucide-react";

// =============================================================================
// PERSONAL INFORMATION CONFIGURATION
// =============================================================================
// Энд өөрийн хувийн мэдээллээ оруулна уу / Enter your personal information here
export const personalInfo = {
  // Үндсэн мэдээлэл / Basic Information
  name: "Ganbaatar Badmaa",
  nickname: "Badmaa", // Товч нэр / Short name
  nameJapanese: "ガンバータル バダム", // Япон хэл дээрх нэр / Japanese name
  title: " Full-Stack Developer", // Албан тушаал / Job title
  
  // Холбоо барих мэдээлэл / Contact Information
  email: "bb0292134@gmail.com",
  phone: "090-9294-5794",
  location: "Tokyo, Japan",
  address: "Tokyo, Japan",
  
  // Хувийн мэдээлэл / Personal Details
  nationality: "Mongolia",
  dateOfBirth: "1995年04月12日",
  age: 30,
  gender: "Female",
  
  // Танилцуулга / Bio descriptions
  bio: "web development. Fluent in Japanese (N2 level). Currently working as 運用管理 at Sony Japanese company.",
  
  longBio: "web development 2years at Chinese company. Fluent in Japanese (N2 level). Currently working as 運用管理 at Sony Japanese company.",
  
  description: "web development 2years at Chinese company. Fluent in Japanese (N2 level). Currently working as 運用管理 at Sony Japanese company.",
  
  // Зураг / Images
  avatar: "/portfolio.jpg", // public фолдер дотор байрлуулна / Place in public folder
  resumeUrl: "/rireksho-blank.pdf", // CV файлын зам / CV file path
  
  // Статистик / Statistics
  yearsOfExperience: 2,
  projectsCompleted: 3,
  technologiesMastered: 2,
  githubContributions: 80,
  
  // Ажлын статус / Work Status
  availability: "Available for freelance projects",
  
  // Хэлний мэдлэг / Language Skills
  languages: [
    { name: "Japanese", level: "N2", proficiency: 85 },
    { name: "Mongolian", level: "Native", proficiency: 100 },
  ],
  
  // Сонирхол / Interests
  interests: [
    "Mountain Hiking - climbed Mount Fuji",
  ],
  
  // Боловсрол / Education
  education: [
    {
      id: 1,
      degree: "National University of Mongolia",
      institution: "モンゴル国立大学",
      institutionEn: "National University of Mongolia",
      period: "2012年9月 - 2016年4月",
      type: "Bachelor's Degree",
      description: "Finance and Economics major with coursework in business administration, accounting, and economic theory."
    },
    {
      id: 2,
      degree: "日本語学校",
      institution: "幕張本郷日本語学校",
      institutionEn: "Japanese Language School",
      period: "2018年4月 - 2020年3月",
      type: "Exchange Program",
      description: "two-year studied Japanese language for 2 years"
    },
    {
      id: 3,
      degree: "IT専門学校",
      institution: "HAL東京",
      institutionEn: "HAL Tokyo",
      period: "2020年 - 2022年",
      type: "College's Degree",
      description: "Studied web development, programming languages, and software engineering principles."
    }
  ],
  
  // Миний тухай / About Me sections
  aboutSections: {
    mainDescription: "I'm a passionate full-stack developer with expertise in modern web technologies. I love creating innovative solutions and bringing ideas to life through code.",
    detailedDescription: "A passionate  Full-Stack Developer based in Tokyo, Japan. With 6+ years of experience spanning web development, industrial automation, and mining technology, I bring a unique perspective to software development. My background in automation engineering combined with modern web technologies allows me to create efficient, scalable solutions.",
    professionalSummary: " full-stack developer with extensive experience in React, Next.js, PHP, and modern web technologies. Specialized in creating user-centric applications with clean, maintainable code.",
    personalMotto: "Bridging traditional engineering with modern software development to create innovative solutions."
  }
};

// =============================================================================
// SOCIAL MEDIA & EXTERNAL LINKS CONFIGURATION
// =============================================================================
// Нийгмийн сүлжээ болон гадаад холбоосууд / Social media and external links
export const socialLinks = {
  github: "https://github.com/Badamsuren",
  facebook: "https://www.facebook.com/badansuren.ganba/",
  email: "bb0292134@gmail.com",
  // Дэмжлэгийн холбоосууд / Support links
  buyMeCoffee: "https://buymeacoffee.com/badmaa", // "Buy me a coffee" холбоос / "Buy me a coffee" link
  paypal: "", // PayPal холбоос (хэрэгтэй бол) / PayPal link (if needed)
  patreon: "", // Patreon холбоос (хэрэгтэй бол) / Patreon link (if needed)
};

// =============================================================================
// SKILLS CONFIGURATION
// =============================================================================
// Ур чадварын тохиргоо / Skills configuration
export const skills = [
  {
    category: "Frontend Development",
    icon: "Layout",
    items: [
      { name: "React", level: 90, color: "#61DAFB" },
      { name: "Next.js", level: 85, color: "#000000" },
      { name: "TypeScript", level: 82, color: "#3178C6" },
      { name: "JavaScript", level: 95, color: "#F7DF1E" },
      { name: "HTML/CSS", level: 92, color: "#E34F26" },
      { name: "Vue.js", level: 80, color: "#4FC08D" }
    ]
  },
  {
    category: "Backend Development",
    icon: "Server",
    items: [
      { name: "PHP", level: 95, color: "#777BB4" },
      { name: "MySQL", level: 90, color: "#4479A1" },
      { name: "Node.js", level: 85, color: "#339933" },
      { name: "Python", level: 80, color: "#3776AB" },
      { name: "PostgreSQL", level: 78, color: "#336791" },
      { name: "MongoDB", level: 75, color: "#47A248" }
    ]
  },
  {
    category: "Engineering & Automation",
    icon: "Settings",
    items: [
      { name: "AutoCAD", level: 90, color: "#E51937" },
      { name: "NC Machine Operation", level: 88, color: "#4CAF50" },
      { name: "Industrial Automation", level: 85, color: "#FF9800" },
      { name: "Mining Technology", level: 90, color: "#795548" },
      { name: "5S & Kaizen", level: 82, color: "#009688" }
    ]
  },
  {
    category: "Languages",
    icon: "Globe",
    items: [
      { name: "Japanese (N2)", level: 85, color: "#FF6B6B" },
      { name: "English (TOEIC 760)", level: 80, color: "#4ECDC4" },
      { name: "Mongolian (Native)", level: 100, color: "#45B7D1" }
    ]
  }
];

// =============================================================================
// STATISTICS CONFIGURATION
// =============================================================================
// About хэсэгт харуулах статистик / Statistics for About section
export const stats = [
  {
    label: "Years Experience",
    value: "6+",
    icon: "Calendar"
  },
  {
    label: "Projects Completed",
    value: "30+",
    icon: "CheckCircle"
  },
  {
    label: "Technologies",
    value: "20+",
    icon: "Code"
  },
  {
    label: "Languages",
    value: "3",
    icon: "Globe"
  }
];

// =============================================================================
// PROJECTS CONFIGURATION
// =============================================================================
// Анхдагч төслүүдийн жагсаалт / Default projects list
export const projects = [
  {
    id: 1,
    title: "HelloBrainCode",
    description: "Comprehensive programming learning platform with interactive coding tutorials",
    longDescription: "A modern web-based programming education platform designed to help beginners and intermediate developers learn coding through interactive tutorials, hands-on exercises, and real-world projects. Features include multiple programming languages, progress tracking, and community support.",
    image: "/hellobraincode.png",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
  githubUrl: "https://github.com/badmaa0901/hellobraincode",
    demoUrl: "https://www.hellobraincode.com",
    category: "fullstack",
    features: [
      "Interactive coding tutorials",
      "Multiple programming languages support",
      "Progress tracking and analytics",
      "Community-driven learning",
      "Real-world project examples",
      "Mobile-responsive design"
    ],
    createdAt: "2024-01-15"
  },
  {
    id: 2,
    title: "HelloBrain Pro",
    description: "Advanced brain training and cognitive enhancement platform",
    longDescription: "A sophisticated web application focused on cognitive enhancement and brain training exercises. Provides scientifically-backed brain training games, memory improvement techniques, and personalized learning paths to enhance mental performance.",
    image: "/hellobrain.png",
    technologies: ["Vue.js", "PHP", "MySQL", "Chart.js", "Bootstrap", "PWA"],
  githubUrl: "https://github.com/badmaa0901/hellobrain-pro",
    demoUrl: "https://www.hellobrain.pro",
    category: "fullstack",
    features: [
      "Cognitive assessment tools",
      "Personalized training programs",
      "Progress analytics and insights",
      "Scientific brain training games",
      "Memory enhancement exercises",
      "Multi-language support"
    ],
    createdAt: "2024-02-20"
  },
  {
    id: 3,
    title: "10xTyping",
    description: "Professional typing speed and accuracy training platform",
    longDescription: "A comprehensive typing training application designed to improve typing speed, accuracy, and overall keyboard proficiency. Features various typing tests, lessons, and games to make learning touch typing engaging and effective.",
    image: "/10xtyping.png",
    technologies: ["JavaScript", "HTML5", "CSS3", "Chart.js", "Local Storage", "PWA"],
  githubUrl: "https://github.com/badmaa0901/10xtyping",
    demoUrl: "https://www.10xtyping.com",
    category: "frontend",
    features: [
      "Real-time typing speed measurement",
      "Accuracy tracking and analysis",
      "Multiple typing test modes",
      "Interactive typing lessons",
      "Progress history and statistics",
      "Customizable difficulty levels"
    ],
    createdAt: "2024-03-10"
  },
  {
    id: 4,
    title: "Bodol Space",
    description: "Creative thinking and idea management platform",
    longDescription: "An innovative web platform designed for creative professionals, entrepreneurs, and thinkers to organize, develop, and share their ideas. Provides tools for brainstorming, idea visualization, collaboration, and project planning.",
    image: "/bodol.png",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Socket.io", "Material-UI"],
  githubUrl: "https://github.com/badmaa0901/bodol-space",
    demoUrl: "https://www.bodol.space",
    category: "fullstack",
    features: [
      "Idea organization and categorization",
      "Visual brainstorming tools",
      "Real-time collaboration",
      "Project timeline management",
      "Team workspace creation",
      "Export and sharing capabilities"
    ],
    createdAt: "2024-04-05"
  },
  {
    id: 5,
    title: "PDFTatah",
    description: "Advanced PDF processing and manipulation tool",
    longDescription: "A powerful web-based PDF utility platform that provides comprehensive PDF processing capabilities including merging, splitting, converting, editing, and optimizing PDF documents. Designed for both personal and professional use with focus on security and ease of use.",
    image: "/pdftatah.png",
    technologies: ["PHP", "JavaScript", "PDF.js", "Bootstrap", "MySQL", "File API"],
  githubUrl: "https://github.com/badmaa0901/pdftatah",
    demoUrl: "https://www.pdftatah.online",
    category: "fullstack",
    features: [
      "PDF merge and split functionality",
      "Document format conversion",
      "PDF compression and optimization",
      "Secure file processing",
      "Batch processing capabilities",
      "No registration required"
    ],
    createdAt: "2024-05-20"
  },
  {
    id: 6,
    title: "Kittokatsu",
    description: "Japanese language learning and practice platform",
    longDescription: "A dedicated platform for learning and practicing Japanese language skills. Offers interactive lessons, vocabulary building exercises, grammar tutorials, and speaking practice sessions to help learners of all levels improve their Japanese proficiency.",
    image: "/kitto2.png",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Supabase", "Tailwind CSS"],
  githubUrl: "https://github.com/badmaa0901",
    demoUrl: "https://www.kittokatsu.pro",
    category: "fullstack",
    features: [
      "Interactive language lessons",
      "Vocabulary and kanji practice",
      "Grammar tutorials and quizzes",
    ],
    createdAt: "2024-12-20"
  }
];

// =============================================================================
// WORK EXPERIENCE CONFIGURATION
// =============================================================================
// Ажлын туршлагын мэдээлэл / Work experience data
export const experiences = [
  {
    id: 1,
    title: "NC Machine engineering",
    company: "Seiko Co., Ltd.",
    period: "2022年10月 - Present",
    date: "2022年10月 - Present",
    location: "Japan",
    type: "Full-time",
    description: "Operating NC machining centers and contributing to precision manufacturing processes engineering while developing web applications in spare time.",
    responsibilities: [
      "Operating and maintaining NC machining centers",
      "Quality control and precision manufacturing",
      "Equipment maintenance and troubleshooting",
      "Implementing 5S and Kaizen methodologies",
      "Developing internal automation tools"
    ],
    achievements: [
      "Improved production efficiency by 15% through process optimization",
      "Developed internal web-based inventory tracking system",
      "Achieved zero defect rate for 6 consecutive months"
    ],
    technologies: ["NC Machine engineer", "5S", "Kaizen", "Quality Control", "Manufacturing"]
  },
  {
    id: 2,
    title: "Automation Engineer",
    company: "ENERGY RESOURCE LLC",
    period: "2019年6月 - 2022年9月",
    date: "2019年6月 - 2022年9月",
    location: "Mongolia",
    type: "Full-time",
    description: "Led automation projects in coal mining operations, developing software solutions for industrial processes and mining equipment optimization.",
    responsibilities: [
      "Designed and implemented mining automation systems",
      "Developed custom software for coal mining operations",
      "AutoCAD technical drawings and system design",
      "Equipment programming and maintenance",
      "Project management and technical documentation"
    ],
    achievements: [
      "Reduced manual monitoring time by 60% through automation",
      "Developed PHP-based mining operation management system",
      "Successfully automated 5+ critical mining processes"
    ],
    technologies: ["AutoCAD", "Industrial Automation", "Mining Software", "PHP", "MySQL", "Python"]
  },
  {
    id: 3,
    title: "Technical Engineer",
    company: "Heavy automotive industry in Mongolia",
    period: "2018年9月 - 2019年5月",
    date: "2018年9月 - 2019年5月",
    location: "Mongolia",
    type: "Full-time",
    description: "Worked in maintenance workshop division providing technical support for mining equipment and developing maintenance management systems.",
    responsibilities: [
      "Mining equipment maintenance and repair",
      "Technical documentation and reporting",
      "Workshop management system development",
      "Equipment diagnostics and troubleshooting",
      "Client technical support"
    ],
    achievements: [
      "Increased equipment uptime by 25% through preventive maintenance",
      "Created digital maintenance tracking system",
      "Trained 10+ junior technicians on equipment operation"
    ],
    technologies: ["Equipment Maintenance", "Technical Documentation", "Workshop Management", "AutoCAD"]
  }
];

// =============================================================================
// TESTIMONIALS CONFIGURATION
// =============================================================================
// Харилцагчийн сэтгэгдэл / Client testimonials
export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    initials: "SJ",
    role: "CTO at TechStart",
    company: "TechStart Inc.",
  content: "Badmaa's expertise in full-stack development is exceptional. Her automation engineering background brings unique value to web development projects.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    initials: "MC",
    role: "Product Manager",
    company: "Innovation Labs",
  content: "Working with Badmaa was a game-changer. Her technical skills combined with excellent Japanese language abilities made our project seamless.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Emma Davis",
    initials: "ED",
    role: "Engineering Manager",
    company: "NextGen Solutions",
  content: "Badmaa's industrial automation experience combined with modern web development skills delivered exceptional results for our manufacturing system.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

// =============================================================================
// CONTACT INFORMATION CONFIGURATION
// =============================================================================
// Холбоо барих мэдээллийн жагсаалт / Contact information list
export const contactInfo = [
  {
    label: "Email",
    title: "Email",
    value: personalInfo.email,
    icon: Mail,
    href: `mailto:${personalInfo.email}`,
    link: `mailto:${personalInfo.email}`
  },
  {
    label: "Phone",
    title: "Phone",
    value: personalInfo.phone,
    icon: Phone,
    href: `tel:${personalInfo.phone}`,
    link: `tel:${personalInfo.phone}`
  },
  {
    label: "Location",
    title: "Location",
    value: personalInfo.location,
    icon: MapPin,
    href: "#",
    link: "#"
  },
  {
    label: "Address",
    title: "Address",
    value: personalInfo.address,
    icon: MapPin,
    href: "#",
    link: "#"
  },
  {
    label: "Availability",
    title: "Availability",
    value: personalInfo.availability,
    icon: Clock,
    href: "#",
    link: "#"
  },
  {
    label: "Response Time",
    title: "Response Time",
    value: "Within 24 hours",
    icon: Clock,
    href: "#",
    link: "#"
  }
];

// =============================================================================
// SUPPORT LINKS CONFIGURATION
// =============================================================================
// Дэмжлэгийн холбоосууд / Support links configuration
export const supportLinks = {
  buyMeCoffee: {
    url: socialLinks.buyMeCoffee,
    text: "Buy me a coffee",
    icon: Coffee,
    enabled: true // false болговол харагдахгүй / Set to false to hide
  },
  paypal: {
    url: socialLinks.paypal,
    text: "Support via PayPal",
    icon: Mail,
    enabled: false // PayPal ашиглахгүй бол false / Set to false if not using PayPal
  }
};

// =============================================================================
// SEO AND META INFORMATION CONFIGURATION
// =============================================================================
// SEO болон мета мэдээллийн тохиргоо / SEO and meta information configuration
export const seoData = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: personalInfo.description,
  keywords: [
    " Full-Stack Developer",
    "PHP Developer",
    "React Developer",
    "JavaScript Developer",
    "Automation Engineer",
    "Japan Developer",
    "N2 Japanese",
    "Mining Technology",
    "Web Development",
    personalInfo.name
  ],
  author: personalInfo.name,
  ogImage: personalInfo.avatar
};

// =============================================================================
// THEME AND STYLING CONFIGURATION
// =============================================================================
// Загварын тохиргоо / Theme configuration
export const themeConfig = {
  // Үндсэн өнгө / Primary colors
  primaryColor: "#06B6D4", // Cyan
  secondaryColor: "#8B5CF6", // Purple
  accentColor: "#EC4899", // Pink
  
  // Градиент / Gradients
  primaryGradient: "from-cyan-400 via-purple-400 to-cyan-400",
  secondaryGradient: "from-purple-500 to-pink-500",
  
  // Анимацийн хугацаа / Animation durations
  animationDuration: {
    fast: "0.2s",
    normal: "0.3s",
    slow: "0.5s"
  }
};

// =============================================================================
// NAVIGATION CONFIGURATION
// =============================================================================
// Навигацийн цэсний тохиргоо / Navigation menu configuration
export const navigationConfig = {
  // Цэсний элементүүд / Menu items
  menuItems: [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "contact", label: "Contact", href: "#contact" }
  ],
  
  // Лого тохиргоо / Logo configuration
  logo: {
    text: personalInfo.nickname,
    domain: ".online33"
  }
};

// =============================================================================
// ADMIN CONFIGURATION
// =============================================================================
// Админ панелын тохиргоо / Admin panel configuration
export const adminConfig = {
  // Админ нууц үг (production дээр илүү аюулгүй байх ёстой) / Admin password (should be more secure in production)
  password: "admin123",
  
  // Админ панелын тохиргоо / Admin panel settings
  settings: {
    maxImageSize: 5 * 1024 * 1024, // 5MB
    allowedImageTypes: ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"],
    maxProjectsPerPage: 12
  }
};

// =============================================================================
// INSTRUCTIONS FOR OTHER DEVELOPERS
// =============================================================================
/*
БУСАД ХӨГЖҮҮЛЭГЧДЭД ЗОРИУЛСАН ЗААВАР / INSTRUCTIONS FOR OTHER DEVELOPERS:

1. ХУВИЙН МЭДЭЭЛЭЛ ӨӨРЧЛӨХ / CHANGING PERSONAL INFORMATION:
   - personalInfo объект дотор өөрийн мэдээллээ оруулна уу
   - Нэр, имэйл, утас, байршил зэргийг өөрчилнө үү
   - Bio болон longBio-г өөрийн тухай бичнэ үү

2. НИЙГМИЙН СҮЛЖЭЭНИЙ ХОЛБООС / SOCIAL MEDIA LINKS:
   - socialLinks объект дотор өөрийн нийгмийн сүлжээний холбоосуудыг оруулна уу
   - GitHub, Instagram, Facebook зэрэг холбоосуудыг өөрчилнө үү
   - buyMeCoffee холбоосыг өөрийн дэмжлэгийн хуудсаар солино уу

3. UR ЧАДВАР ӨӨРЧЛӨХ / CHANGING SKILLS:
   - skills массив дотор өөрийн ур чадваруудыг оруулна уу
   - Ангилал (category), нэр (name), түвшин (level), өнгө (color) өөрчилнө үү

4. ТӨСӨЛ НЭМЭХ / ADDING PROJECTS:
   - projects массив дотор өөрийн төслүүдийг оруулна уу
   - Эсвэл /admin хуудас ашиглан шинэ төсөл нэмнэ үү

5. ЗУРАГ СОЛИХ / CHANGING IMAGES:
   - public фолдер дотор portfolio.jpg файлыг өөрийн зургаар солино уу
   - personalInfo.avatar зам нь зөв байгаа эсэхийг шалгана уу

6. ӨНГӨ ЗАГВАР / THEME COLORS:
   - themeConfig объект дотор өнгөнүүдийг өөрчилж болно
   - CSS файл дотор custom өнгөнүүд нэмж болно

7. ХОЛБОО БАРИХ МЭДЭЭЛЭЛ / CONTACT INFORMATION:
   - contactInfo массив дотор холбоо барих мэдээллээ оруулна уу
   - Шинэ холбоо барих арга нэмж болно

АНХААРАХ ЗҮЙЛ / IMPORTANT NOTES:
- Энэ файлыг өөрчилсний дараа аппликейшнийг дахин эхлүүлэх хэрэггүй
- Бүх өөрчлөлт шууд харагдана
- Зураг файлуудыг public фолдерт хийнэ үү
- Production дээр deploy хийхээсээ өмнө бүх холбоосууд ажиллаж байгаа эсэхийг шалгана уу
*/