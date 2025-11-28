import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Zap, Sparkles } from "lucide-react";

const skills = [

  { name: "Python", level: 95, icon: Code2, color: "from-yellow-500 to-orange-500" },
  { name: "NumPy", level: 90, icon: Code2, color: "from-blue-500 to-cyan-500" },
  { name: "Pandas", level: 92, icon: Code2, color: "from-indigo-500 to-blue-500" },
  { name: "Matplotlib", level: 88, icon: Code2, color: "from-green-500 to-lime-500" },
  { name: "Seaborn", level: 85, icon: Code2, color: "from-sky-500 to-indigo-500" },
  { name: "Scikit-Learn", level: 93, icon: Code2, color: "from-purple-500 to-pink-500" },
  { name: "TensorFlow", level: 80, icon: Code2, color: "from-orange-500 to-red-500" },
  { name: "PyTorch", level: 78, icon: Code2, color: "from-red-500 to-rose-500" },
  { name: "SQL", level: 87, icon: Code2, color: "from-blue-600 to-blue-400" },
  { name: "Data Visualization", level: 90, icon: Code2, color: "from-emerald-500 to-green-500" },
  { name: "Machine Learning", level: 92, icon: Code2, color: "from-pink-500 to-rose-500" },
  { name: "Deep Learning", level: 85, icon: Code2, color: "from-purple-600 to-fuchsia-500" },
  { name: "Data Cleaning", level: 94, icon: Code2, color: "from-teal-500 to-cyan-400" },
  { name: "Statistics", level: 88, icon: Code2, color: "from-amber-500 to-yellow-500" },
  { name: "React.js", level: 75, icon: Code2, color: "from-cyan-500 to-teal-500" },
  { name: "Next.js", level: 80, icon: Code2, color: "from-purple-500 to-pink-500" },
  { name: "TypeScript", level: 90, icon: Code2, color: "from-blue-600 to-purple-600" },
  { name: "HTML/CSS", level: 95, icon: Code2, color: "from-pink-500 to-rose-500" },
];


const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden px-4 sm:px-6 md:px-8"
    >
      {/* Animated background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-20 pointer-events-none"
      >
        <div className="absolute top-10 left-10 w-40 h-40 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-primary/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-secondary/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </motion.div>

      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4 sm:mb-6"
          >
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium gradient-text">About Me</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-4 sm:mb-6 leading-tight">
            Know <span className="gradient-text">Who I Am</span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            A passionate developer dedicated to creating exceptional digital
            experiences
          </p>
        </motion.div>

        {/* 2 Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-6 sm:p-8 md:p-10 rounded-3xl space-y-6 group hover:scale-[1.02] transition-all duration-500">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-block"
              >
                <h3 className="text-2xl sm:text-3xl font-bold font-display gradient-text-secondary">
                  Who I Am
                </h3>
              </motion.div>

              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                I'm a full-stack developer with a passion for building
                innovative web applications and AI-powered solutions. With
                expertise spanning modern JavaScript frameworks, Python, and
                machine learning, I bring ideas to life through clean, efficient
                code.
              </p>

              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                My journey in tech has been driven by curiosity and a desire to
                solve real-world problems. I specialize in creating scalable
                applications that combine cutting-edge technology with intuitive
                user experiences.
              </p>

              {/* Stats Section (Fully Fixed Mobile Responsive) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 sm:pt-6 w-full">
                {[
                  {
                    value: "5+",
                    label: "Years Experience",
                    gradient: "gradient-text",
                  },
                  {
                    value: "50+",
                    label: "Projects Done",
                    gradient: "gradient-text-secondary",
                  },
                  {
                    value: "20+",
                    label: "Happy Clients",
                    gradient: "gradient-text-accent",
                  },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + i * 0.1,
                    }}
                    whileHover={{ scale: 1.07, y: -3 }}
                    className="glass-card p-5 rounded-2xl text-center group cursor-pointer flex flex-col items-center justify-center"
                  >
                    <div
                      className={`text-3xl sm:text-4xl font-bold font-display ${stat.gradient} mb-1 sm:mb-2`}
                    >
                      {stat.value}
                    </div>

                    <div className="text-xs sm:text-sm text-muted-foreground text-center break-words">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass-card p-6 sm:p-8 md:p-10 rounded-3xl">
              <h3 className="text-2xl sm:text-3xl font-bold font-display gradient-text-accent mb-6 sm:mb-8">
                Technical Skills
              </h3>

              <div className="space-y-6">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.6 + index * 0.1,
                      }}
                      className="space-y-3 group"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                            className="p-2 glass-card rounded-lg"
                          >
                            <Icon className="h-5 w-5 text-primary" />
                          </motion.div>
                          <span className="font-semibold text-base sm:text-lg group-hover:text-primary transition-colors">
                            {skill.name}
                          </span>
                        </div>

                        <motion.span
                          className="text-xs sm:text-sm font-bold gradient-text"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{
                            delay: 0.8 + index * 0.1,
                          }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>

                      <div className="h-3 bg-card/50 rounded-full overflow-hidden backdrop-blur-sm">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            isInView ? { width: `${skill.level}%` } : {}
                          }
                          transition={{
                            duration: 1.5,
                            delay: 0.8 + index * 0.1,
                            ease: "easeOut",
                          }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        >
                          <motion.div
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                            style={{ width: "50%" }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;


// const About = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   });
  
//   const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

//   return (
//     <section id="about" className="section-padding relative overflow-hidden">
//       {/* Animated background */}
//       <motion.div 
//         style={{ y }}
//         className="absolute inset-0 opacity-20"
//       >
//         <div className="absolute top-20 left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-blob" />
//         <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
//       </motion.div>

//       <div className="container mx-auto relative z-10">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={isInView ? { scale: 1 } : { scale: 0 }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
//           >
//             <Sparkles className="h-4 w-4 text-primary animate-pulse" />
//             <span className="text-sm font-medium gradient-text">About Me</span>
//           </motion.div>
//           <h2 className="text-5xl md:text-7xl font-bold font-display mb-6">
//             Know <span className="gradient-text">Who I Am</span>
//           </h2>
//           <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
//             A passionate developer dedicated to creating exceptional digital experiences
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-16 items-start">
//           {/* Bio Section */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="space-y-8"
//           >
//             <div className="glass-card p-10 rounded-3xl space-y-6 group hover:scale-[1.02] transition-all duration-500">
//               <motion.div
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 className="inline-block"
//               >
//                 <h3 className="text-3xl font-bold font-display gradient-text-secondary">Who I Am</h3>
//               </motion.div>
//               <p className="text-muted-foreground leading-relaxed text-lg">
//                 I'm a full-stack developer with a passion for building innovative web applications
//                 and AI-powered solutions. With expertise spanning modern JavaScript frameworks,
//                 Python, and machine learning, I bring ideas to life through clean, efficient code.
//               </p>
//               <p className="text-muted-foreground leading-relaxed text-lg">
//                 My journey in tech has been driven by curiosity and a desire to solve real-world
//                 problems. I specialize in creating scalable applications that combine cutting-edge
//                 technology with intuitive user experiences.
//               </p>
              
//               <div className="grid grid-cols-3 gap-4 pt-6">
//                 {[
//                   { value: "5+", label: "Years Experience", gradient: "gradient-text" },
//                   { value: "50+", label: "Projects Done", gradient: "gradient-text-secondary" },
//                   { value: "20+", label: "Happy Clients", gradient: "gradient-text-accent" }
//                 ].map((stat, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ scale: 0 }}
//                     animate={isInView ? { scale: 1 } : { scale: 0 }}
//                     transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
//                     whileHover={{ scale: 1.1, y: -5 }}
//                     className="glass-card p-6 rounded-2xl text-center group cursor-pointer"
//                   >
//                     <div className={`text-4xl font-bold font-display ${stat.gradient} mb-2 group-hover:scale-110 transition-transform`}>
//                       {stat.value}
//                     </div>
//                     <div className="text-sm text-muted-foreground">{stat.label}</div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Skills Section */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="space-y-8"
//           >
//             <div className="glass-card p-10 rounded-3xl">
//               <h3 className="text-3xl font-bold font-display gradient-text-accent mb-8">Technical Skills</h3>
//               <div className="space-y-6">
//                 {skills.map((skill, index) => {
//                   const Icon = skill.icon;
//                   return (
//                     <motion.div
//                       key={skill.name}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//                       transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
//                       className="space-y-3 group"
//                     >
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-3">
//                           <motion.div
//                             whileHover={{ rotate: 360, scale: 1.2 }}
//                             transition={{ duration: 0.5 }}
//                             className="p-2 glass-card rounded-lg"
//                           >
//                             <Icon className="h-5 w-5 text-primary" />
//                           </motion.div>
//                           <span className="font-semibold text-lg group-hover:text-primary transition-colors">
//                             {skill.name}
//                           </span>
//                         </div>
//                         <motion.span 
//                           className="text-sm font-bold gradient-text"
//                           initial={{ opacity: 0 }}
//                           animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//                           transition={{ delay: 0.8 + index * 0.1 }}
//                         >
//                           {skill.level}%
//                         </motion.span>
//                       </div>
//                       <div className="h-3 bg-card/50 rounded-full overflow-hidden backdrop-blur-sm">
//                         <motion.div
//                           initial={{ width: 0 }}
//                           animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
//                           transition={{ duration: 1.5, delay: 0.8 + index * 0.1, ease: "easeOut" }}
//                           className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
//                         >
//                           <motion.div
//                             animate={{
//                               x: ["-100%", "100%"],
//                             }}
//                             transition={{
//                               duration: 2,
//                               repeat: Infinity,
//                               ease: "linear",
//                             }}
//                             className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
//                             style={{ width: "50%" }}
//                           />
//                         </motion.div>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;










