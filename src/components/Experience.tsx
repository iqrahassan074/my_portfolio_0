// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import { Briefcase, GraduationCap, Award } from "lucide-react";

// const experiences = [
//   {
//     type: "work",
//     title: "Senior Full Stack Developer",
//     company: "Tech Solutions Inc.",
//     period: "2021 - Present",
//     description: "Leading development of enterprise applications using React, Node.js, and cloud technologies. Mentoring junior developers and establishing best practices.",
//     achievements: [
//       "Architected and deployed 5+ production applications",
//       "Reduced application load time by 60%",
//       "Led team of 8 developers"
//     ]
//   },
//   {
//     type: "work",
//     title: "Full Stack Developer",
//     company: "Digital Innovations Co.",
//     period: "2019 - 2021",
//     description: "Developed and maintained multiple client projects using modern web technologies. Specialized in creating responsive, user-friendly interfaces.",
//     achievements: [
//       "Delivered 15+ successful projects",
//       "Improved client satisfaction by 40%",
//       "Implemented CI/CD pipelines"
//     ]
//   },
//   {
//     type: "education",
//     title: "Master of Computer Science",
//     company: "University of Technology",
//     period: "2017 - 2019",
//     description: "Specialized in Artificial Intelligence and Machine Learning. Research focused on natural language processing and computer vision.",
//     achievements: [
//       "GPA: 3.9/4.0",
//       "Published 3 research papers",
//       "Teaching Assistant for AI courses"
//     ]
//   },
//   {
//     type: "education",
//     title: "Bachelor of Computer Science",
//     company: "State University",
//     period: "2013 - 2017",
//     description: "Comprehensive study of computer science fundamentals, software engineering, and data structures.",
//     achievements: [
//       "Graduated with Honors",
//       "President of Computer Science Club",
//       "Winner of 2 hackathons"
//     ]
//   }
// ];

// const Experience = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   const getIcon = (type: string) => {
//     if (type === "work") return Briefcase;
//     if (type === "education") return GraduationCap;
//     return Award;
//   };

//   return (
//     <section id="experience" className="section-padding bg-gradient-to-b from-card/30 to-background">
//       <div className="container mx-auto">
//           <motion.div
//             ref={ref}
//             initial={{ opacity: 0, y: 50 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-5xl md:text-7xl font-bold font-display mb-6">
//               My <span className="gradient-text">Journey</span>
//             </h2>
//             <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
//               Professional experience and academic excellence
//             </p>
//           </motion.div>

//         <div className="max-w-4xl mx-auto relative">
//           {/* Animated Timeline line */}
//           <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 rounded-full overflow-hidden">
//             <motion.div 
//               className="w-full h-full animated-gradient"
//               initial={{ scaleY: 0, originY: 0 }}
//               animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//             />
//           </div>

//           <div className="space-y-12">
//             {experiences.map((exp, index) => {
//               const Icon = getIcon(exp.type);
//               const isLeft = index % 2 === 0;

//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
//                   transition={{ duration: 0.5, delay: index * 0.2 }}
//                   className={`relative flex items-center ${
//                     isLeft ? "md:flex-row" : "md:flex-row-reverse"
//                   } flex-row`}
//                 >
//                   {/* Animated Timeline dot */}
//                   <motion.div 
//                     className="absolute left-8 md:left-1/2 w-6 h-6 -ml-3 rounded-full bg-gradient-to-r from-primary via-secondary to-accent animate-spin-slow z-10"
//                     initial={{ scale: 0 }}
//                     animate={isInView ? { scale: 1 } : { scale: 0 }}
//                     transition={{ delay: index * 0.2 }}
//                   >
//                     <div className="absolute inset-1 rounded-full bg-background" />
//                   </motion.div>

//                   {/* Content */}
//                   <div className={`flex-1 ${isLeft ? "md:pr-12 pl-16" : "md:pl-12 pl-16"} md:w-1/2`}>
//                     <motion.div 
//                       className="glass-card p-8 rounded-3xl group"
//                       whileHover={{ scale: 1.05, rotateY: 5 }}
//                       style={{ transformStyle: "preserve-3d" }}
//                     >
//                       <div className="flex items-start gap-5">
//                         <motion.div 
//                           className="p-4 glass-card rounded-2xl"
//                           whileHover={{ rotate: 360, scale: 1.2 }}
//                           transition={{ duration: 0.6 }}
//                         >
//                           <Icon className="h-7 w-7 text-primary" />
//                         </motion.div>
//                         <div className="flex-1">
//                           <div className="text-sm gradient-text font-bold mb-2">{exp.period}</div>
//                           <h3 className="text-2xl font-bold font-display mb-2 group-hover:gradient-text-secondary transition-all">{exp.title}</h3>
//                           <div className="text-muted-foreground font-semibold mb-4">{exp.company}</div>
//                           <p className="text-muted-foreground mb-5 leading-relaxed">{exp.description}</p>
//                           <ul className="space-y-3">
//                             {exp.achievements.map((achievement, i) => (
//                               <motion.li 
//                                 key={i} 
//                                 className="flex items-start gap-3 group/item"
//                                 initial={{ opacity: 0, x: -10 }}
//                                 animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
//                                 transition={{ delay: index * 0.2 + i * 0.1 }}
//                               >
//                                 <span className="text-primary mt-1 text-lg group-hover/item:scale-150 transition-transform">▹</span>
//                                 <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">{achievement}</span>
//                               </motion.li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </motion.div>
//                   </div>

//                   {/* Spacer for desktop */}
//                   <div className="hidden md:block w-1/2" />
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;























// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import { Briefcase, GraduationCap, Award } from "lucide-react";

// const experiences = [
//   // SAME DATA (unchanged)
//  [
//   {
//     type: "education",
//     title: "BS Software Engineering",
//     company: "Mehran University of Engineering & Technology",
//     period: "Completed",
//     description:
//       "Completed a Bachelor's degree in Software Engineering with strong foundations in programming, databases, system design, software development, and modern engineering practices.",
//     achievements: [
//       "Developed multiple academic and personal software projects",
//       "Built strong programming, problem-solving, and analytical skills",
//       "Focused on Python, AI, and full-stack development"
//     ]
//   },
//   {
//     type: "education",
//     title: "Data Science Certification (3 Months)",
//     company: "PITP – NED University",
//     period: "Completed",
//     description:
//       "Completed a professional 3-month data science course covering Python, machine learning, data preprocessing, and analytics.",
//     achievements: [
//       "Awarded a laptop under the program",
//       "Hands-on experience with ML models and Python data workflows",
//       "Completed multiple DS mini-projects"
//     ]
//   },
//   {
//     type: "education",
//     title: "Agentic AI Program",
//     company: "Governor Sindh Initiative for Gen-AI, Web3 & Metaverse",
//     period: "Ongoing",
//     description:
//       "Currently learning Agentic AI, advanced automation, LLM usage, prompt engineering, and real-world AI integrations.",
//     achievements: [
//       "Practical experience with AI tools and workflows",
//       "Building agent-based automation projects",
//       "Deep focus on AI-powered application development"
//     ]
//   }
// ]
// const Experience = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.25 });

//   const getIcon = (type: string) => {
//     if (type === "work") return Briefcase;
//     if (type === "education") return GraduationCap;
//     return Award;
//   };

//   return (
//     <section
//       id="experience"
//       className="section-padding bg-gradient-to-b from-card/30 to-background"
//     >
//       <div className="container mx-auto">
//         {/* Heading */}
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-5xl md:text-7xl font-bold font-display mb-5">
//             My <span className="gradient-text">Journey</span>
//           </h2>
//           <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
//             Professional experience and academic excellence
//           </p>
//         </motion.div>

//         <div className="relative max-w-5xl mx-auto">
//           {/* Center Line */}
//           <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 rounded-full overflow-hidden">
//             <motion.div
//               className="w-full h-full animated-gradient"
//               initial={{ scaleY: 0, originY: 0 }}
//               animate={isInView ? { scaleY: 1 } : {}}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//             />
//           </div>

//           {/* Timeline Items */}
//           <div className="space-y-16">
//             {experiences.map((exp, index) => {
//               const Icon = getIcon(exp.type);
//               const isLeft = index % 2 === 0;

//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 0.5, delay: index * 0.2 }}
//                   className={`relative flex flex-col md:flex-row ${
//                     isLeft ? "md:flex-row" : "md:flex-row-reverse"
//                   } items-start md:items-center`}
//                 >
                  

//                   {/* Content */}
//                   <div
//                     className={`flex-1 pt-10 md:pt-0 ${
//                       isLeft ? "md:pr-16 pl-16" : "md:pl-16 pl-16"
//                     }`}
//                   >
//                     <motion.div
//                       className="glass-card p-8 rounded-3xl group"
//                       whileHover={{ scale: 1.04 }}
//                     >
//                       {/* Icon + Main Info */}
//                       <div className="flex items-start gap-5">
//                         <motion.div
//                           className="p-4 glass-card rounded-2xl"
//                           whileHover={{ rotate: 360, scale: 1.1 }}
//                           transition={{ duration: 0.6 }}
//                         >
//                           <Icon className="h-7 w-7 text-primary" />
//                         </motion.div>

//                         <div>
//                           <div className="text-sm gradient-text font-bold mb-1">
//                             {exp.period}
//                           </div>
//                           <h3 className="text-2xl font-bold font-display mb-1">
//                             {exp.title}
//                           </h3>
//                           <p className="text-muted-foreground font-semibold mb-3">
//                             {exp.company}
//                           </p>
//                           <p className="text-muted-foreground mb-5">
//                             {exp.description}
//                           </p>

//                           {/* Achievements */}
//                           <ul className="space-y-3">
//                             {exp.achievements.map((achievement, i) => (
//                               <motion.li
//                                 key={i}
//                                 initial={{ opacity: 0, x: -10 }}
//                                 animate={
//                                   isInView ? { opacity: 1, x: 0 } : {}
//                                 }
//                                 transition={{
//                                   delay: index * 0.2 + i * 0.1,
//                                 }}
//                                 className="flex gap-3"
//                               >
//                                 <span className="text-primary text-lg">▹</span>
//                                 <span className="text-muted-foreground">
//                                   {achievement}
//                                 </span>
//                               </motion.li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;





















import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

// 1. TypeScript Interface (Recommended for type safety)
interface ExperienceItem {
  type: "work" | "education" | "award" | string;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

// 2. Corrected Data Structure (Removed the extra array nesting)
const experiences: ExperienceItem[] = [
  {
    type: "education",
    title: "BS Software Engineering",
    company: "Mehran University of Engineering & Technology",
    period: "Completed",
    description:
      "Completed a Bachelor's degree in Software Engineering with strong foundations in programming, databases, system design, software development, and modern engineering practices.",
    achievements: [
      "Developed multiple academic and personal software projects",
      "Built strong programming, problem-solving, and analytical skills",
      "Focused on Python, AI, and full-stack development"
    ]
  },
  {
    type: "education",
    title: "Data Science Certification (3 Months)",
    company: "PITP – NED University",
    period: "Completed",
    description:
      "Completed a professional 3-month data science course covering Python, machine learning, data preprocessing, and analytics.",
    achievements: [
      "Awarded a laptop under the program",
      "Hands-on experience with ML models and Python data workflows",
      "Completed multiple DS mini-projects"
    ]
  },
  {
    type: "education",
    title: "Agentic AI Program",
    company: "Governor Sindh Initiative for Gen-AI, Web3 & Metaverse",
    period: "Ongoing",
    description:
      "Currently learning Agentic AI, advanced automation, LLM usage, prompt engineering, and real-world AI integrations.",
    achievements: [
      "Practical experience with AI tools and workflows",
      "Building agent-based automation projects",
      "Deep focus on AI-powered application development"
    ]
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  // 3. Explicit Icon Logic
  const getIcon = (type: string) => {
    if (type === "work") return Briefcase;
    if (type === "education") return GraduationCap;
    if (type === "award") return Award;
    return Award; // Fallback
  };

  return (
    <section
      id="experience"
      className="section-padding bg-gradient-to-b from-card/30 to-background"
    >
      <div className="container mx-auto">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-display mb-5">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Professional experience and academic excellence
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 rounded-full overflow-hidden">
            <motion.div
              className="w-full h-full animated-gradient"
              initial={{ scaleY: 0, originY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const Icon = getIcon(exp.type);
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } items-start md:items-center`}
                >
                  
                  {/* Timeline Dot/Icon */}
                  <div className="absolute left-8 md:left-1/2 top-0 md:top-auto -translate-x-1/2 transform">
                    <div className="p-1 rounded-full bg-background border-4 border-primary/50 shadow-lg">
                        <Icon className="h-6 w-6 text-primary"/>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 pt-10 md:pt-0 ${
                      isLeft ? "md:pr-16 pl-16" : "md:pl-16 pl-16"
                    }`}
                  >
                    <motion.div
                      className="glass-card p-8 rounded-3xl group"
                      whileHover={{ scale: 1.04 }}
                    >
                      {/* Icon + Main Info */}
                      <div className="flex items-start gap-5">
                        {/* Removed duplicate icon rendering here to clean up the design */}

                        <div>
                          <div className="text-sm gradient-text font-bold mb-1">
                            {exp.period}
                          </div>
                          <h3 className="text-2xl font-bold font-display mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-muted-foreground font-semibold mb-3">
                            {exp.company}
                          </p>
                          <p className="text-muted-foreground mb-5">
                            {exp.description}
                          </p>

                          {/* Achievements */}
                          <ul className="space-y-3">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={
                                  isInView ? { opacity: 1, x: 0 } : {}
                                }
                                transition={{
                                  delay: index * 0.2 + i * 0.1,
                                }}
                                className="flex gap-3"
                              >
                                <span className="text-primary text-lg">▹</span>
                                <span className="text-muted-foreground">
                                  {achievement}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;