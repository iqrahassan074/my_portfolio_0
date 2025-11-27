// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef, useState } from "react";
// import { Github, ExternalLink, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// const projects = [
//   {
//     id: 1,
//     title: "Heart Disease Prediction",
//     description: "Real-time analytics dashboard with machine learning predictions",
//     longDescription: "A comprehensive analytics platform that leverages machine learning algorithms to provide predictive insights. Features include real-time data visualization, automated reporting, and intelligent forecasting.",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
//     tags: ["React", "Python", "TensorFlow", "D3.js"],
//     github: "https://github.com/AsadHassan074/Heart-Disease-Prediction-Machine-Learning.git",
//     demo: "https://demo.example.com"
//   },
//   {
//     id: 2,
//     title: "Credit Card Fraud Detection",
//     description: "Full-stack e-commerce solution with payment integration",
//     longDescription: "Modern e-commerce platform built with Next.js and Stripe. Includes features like product management, shopping cart, secure checkout, order tracking, and admin dashboard.",
//     image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
//     tags: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
//     github: "https://github.com/AsadHassan074/Credit-Card-Fraud-Detection.git",
//     demo: "https://demo.example.com"
//   },
//   {
//     id: 3,
//     title: "Vehicle Speed Detector",
//     description: "Collaborative project management tool with real-time updates",
//     longDescription: "Feature-rich task management application with real-time collaboration, drag-and-drop interface, team chat, file sharing, and progress tracking. Built for remote teams.",
//     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
//     tags: ["React", "Socket.io", "Node.js", "PostgreSQL"],
//     github: "https://github.com/AsadHassan074/Vehicle-Speed-detector.git",
//     demo: "https://demo.example.com"
//   },
//   {
//     id: 4,
//     title: "Face Semmetry Analyzer",
//     description: "Intelligent conversational AI with natural language processing",
//     longDescription: "Advanced AI chatbot powered by GPT models. Supports context-aware conversations, multi-language support, sentiment analysis, and can be integrated into various platforms.",
//     image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
//     tags: ["Python", "OpenAI", "FastAPI", "React"],
//     github: "https://github.com/AsadHassan074/Face-Semmetry-Analyzer.git",
//     demo: "https://demo.example.com"
//   },
//   {
//     id: 5,
//     title: "Weather Sphere Web",
//     description: "Multi-platform social media management and analytics tool",
//     longDescription: "Unified dashboard for managing multiple social media accounts. Features include post scheduling, engagement analytics, audience insights, and performance reporting across platforms.",
//     image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
//     tags: ["React", "Node.js", "APIs", "Chart.js"],
//     github: "https://github.com/AsadHassan074/WeatherSphere-Web-App.git",
//     demo: "https://demo.example.com"
//   },
//   {
//     id: 6,
//     title: "Weather Forecast App",
//     description: "Beautiful weather app with interactive maps and forecasts",
//     longDescription: "Modern weather application with accurate forecasts, interactive weather maps, severe weather alerts, and location-based recommendations. Features smooth animations and intuitive UI.",
//     image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
//     tags: ["React", "Weather API", "Mapbox", "TypeScript"],
//     github: "https://github.com/yourusername/project6",
//     demo: "https://demo.example.com"
//   }
// ];

// const Portfolio = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });
//   const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

//   return (
//     <>
//       <section id="portfolio" className="section-padding bg-background">
//         <div className="container mx-auto">
//           <motion.div
//             ref={ref}
//             initial={{ opacity: 0, y: 50 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-5xl md:text-7xl font-bold font-display mb-6">
//               Featured <span className="gradient-text">Projects</span>
//             </h2>
//             <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
//               Explore my recent work showcasing innovation and technical excellence
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ 
//                   scale: 1.05,
//                   rotateY: 5,
//                   rotateX: 5,
//                 }}
//                 className="group glass-card rounded-3xl overflow-hidden cursor-pointer relative"
//                 style={{ transformStyle: "preserve-3d" }}
//                 onClick={() => setSelectedProject(project)}
//               >
//                 <div className="relative overflow-hidden aspect-video">
//                   <motion.img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover"
//                     whileHover={{ scale: 1.15 }}
//                     transition={{ duration: 0.4 }}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   <motion.div 
//                     className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                     initial={{ y: 20 }}
//                     whileHover={{ y: 0 }}
//                   >
//                     <Button
//                       size="lg"
//                       className="glow-effect-cyan"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         window.open(project.github, "_blank");
//                       }}
//                     >
//                       <Github className="mr-2 h-5 w-5" />
//                       Code
//                     </Button>
//                     <Button
//                       size="lg"
//                       variant="secondary"
//                       className="glow-effect-pink"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         window.open(project.demo, "_blank");
//                       }}
//                     >
//                       <ExternalLink className="mr-2 h-5 w-5" />
//                       Demo
//                     </Button>
//                   </motion.div>
//                 </div>
//                 <div className="p-8 space-y-4">
//                   <h3 className="text-2xl font-bold font-display gradient-text-secondary group-hover:scale-105 transition-transform inline-block">
//                     {project.title}
//                   </h3>
//                   <p className="text-muted-foreground leading-relaxed">{project.description}</p>
//                   <div className="flex flex-wrap gap-2 pt-2">
//                     {project.tags.map((tag, i) => (
//                       <motion.span
//                         key={tag}
//                         initial={{ opacity: 0, scale: 0 }}
//                         animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
//                         transition={{ delay: index * 0.1 + i * 0.05 }}
//                         className="text-sm px-4 py-1.5 glass-card rounded-full font-medium hover:scale-110 transition-transform cursor-default"
//                       >
//                         {tag}
//                       </motion.span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
//         <DialogContent className="max-w-3xl">
//           {selectedProject && (
//             <>
//               <DialogHeader>
//                 <DialogTitle className="text-2xl gradient-text">
//                   {selectedProject.title}
//                 </DialogTitle>
//               </DialogHeader>
//               <div className="space-y-4">
//                 <img
//                   src={selectedProject.image}
//                   alt={selectedProject.title}
//                   className="w-full rounded-lg"
//                 />
//                 <p className="text-muted-foreground">{selectedProject.longDescription}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {selectedProject.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex gap-3 pt-4">
//                   <Button
//                     onClick={() => window.open(selectedProject.github, "_blank")}
//                     className="flex-1"
//                   >
//                     <Github className="mr-2 h-4 w-4" />
//                     View Code
//                   </Button>
//                   <Button
//                     onClick={() => window.open(selectedProject.demo, "_blank")}
//                     variant="secondary"
//                     className="flex-1"
//                   >
//                     <ExternalLink className="mr-2 h-4 w-4" />
//                     Live Demo
//                   </Button>
//                 </div>
//               </div>
//             </>
//           )}
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default Portfolio;






















import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "Heart Disease Prediction",
    description: "Machine learning model that predicts heart disease risk using medical data.",
    image: "/heart.png",
    tags: ["React", "Python", "TensorFlow", "D3.js"],
    github: "https://github.com/AsadHassan074/Heart-Disease-Prediction-Machine-Learning.git",
  },
  {
    id: 2,
    title: "Credit Card Fraud Detection",
    description: "ML system that detects fraudulent credit card transactions.",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    github: "https://github.com/AsadHassan074/Credit-Card-Fraud-Detection.git",
  },
  {
    id: 3,
    title: "Vehicle Speed Detector",
    description: "Computer vision based vehicle speed detection using video.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
    tags: ["React", "Socket.io", "Node.js", "PostgreSQL"],
    github: "https://github.com/AsadHassan074/Vehicle-Speed-detector.git",
  },
  {
    id: 4,
    title: "Face Symmetry Analyzer",
    description: "AI app that analyzes facial symmetry using ML and image processing.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=600&fit=crop",
    tags: ["Python", "OpenAI", "FastAPI", "React"],
    github: "https://github.com/AsadHassan074/Face-Semmetry-Analyzer.git",
  },
  {
    id: 5,
    title: "Weather Sphere Web",
    description: "Weather dashboard with real-time forecasts and API data.",
    image: "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "APIs", "Chart.js"],
    github: "https://github.com/AsadHassan074/WeatherSphere-Web-App.git",
  },
  {
    id: 6,
    title: "Mental Health State Classifier",
    description: "Interactive weather app with maps and alerts.",
    image: "/health.png",
    tags: ["React", "Weather API", "Mapbox", "TypeScript"],
    github: "https://github.com/AsadHassan074/-Mental-Health-State-Classifier-Web-App-Streamlit-.git",
  }
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="portfolio" className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold font-display mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Explore my recent work showcasing innovation and technical excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                className="group glass-card rounded-3xl overflow-hidden cursor-pointer relative"
                style={{ transformStyle: "preserve-3d" }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden aspect-video">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* CODE BUTTON ONLY — demo removed */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Button
                      size="lg"
                      className="glow-effect-cyan"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, "_blank");
                      }}
                    >
                      <Github className="mr-2 h-5 w-5" />
                      Code
                    </Button>
                  </motion.div>
                </div>

                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold font-display gradient-text-secondary group-hover:scale-105 transition-transform inline-block">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="text-sm px-4 py-1.5 glass-card rounded-full font-medium hover:scale-110 transition-transform cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLEANED MODAL — no demo & no long text */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl gradient-text">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full rounded-lg"
                />

                {/* No long description */}
                <p className="text-muted-foreground">{selectedProject.description}</p>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={() => window.open(selectedProject.github, "_blank")}
                    className="flex-1"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Portfolio;
