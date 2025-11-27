// import { motion } from "framer-motion";
// import { Github, Linkedin, Mail, ChevronDown, Sparkles } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import heroImage from "@/assets/hero-image.jpg";

// const Hero = () => {
//   const scrollToSection = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Animated mesh gradient background */}
//       <div className="absolute inset-0 mesh-gradient opacity-60" />
//       <div className="absolute inset-0 animated-gradient opacity-30" />
      
//       {/* Floating orbs */}
//       <motion.div
//         className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl"
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.3, 0.5, 0.3],
//         }}
//         transition={{ duration: 8, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"
//         animate={{
//           scale: [1, 1.3, 1],
//           opacity: [0.3, 0.5, 0.3],
//         }}
//         transition={{ duration: 10, repeat: Infinity, delay: 1 }}
//       />
//       <motion.div
//         className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
//         animate={{
//           scale: [1, 1.1, 1],
//           opacity: [0.2, 0.4, 0.2],
//         }}
//         transition={{ duration: 12, repeat: Infinity, delay: 2 }}
//       />
      
//       {/* Floating particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(30)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full"
//             style={{
//               width: Math.random() * 6 + 2,
//               height: Math.random() * 6 + 2,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               background: `hsl(${Math.random() * 360} 70% 60%)`,
//             }}
//             animate={{
//               y: [0, -40, 0],
//               x: [0, Math.random() * 20 - 10, 0],
//               opacity: [0.2, 0.8, 0.2],
//               scale: [1, 1.5, 1],
//             }}
//             transition={{
//               duration: 4 + Math.random() * 4,
//               repeat: Infinity,
//               delay: Math.random() * 3,
//             }}
//           />
//         ))}
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left side - Text content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-8"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card"
//             >
//               <Sparkles className="h-4 w-4 text-primary animate-pulse" />
//               <span className="text-sm font-medium gradient-text">Available for Work</span>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-6xl md:text-8xl font-bold font-display leading-tight"
//             >
//               <motion.span
//                 className="gradient-text inline-block"
//                 animate={{ 
//                   backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//                 }}
//                 transition={{ duration: 5, repeat: Infinity }}
//               >
//                 Your Name
//               </motion.span>
//             </motion.h1>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="space-y-3"
//             >
//               <p className="text-3xl md:text-4xl font-display font-semibold">
//                 <span className="gradient-text-secondary">Full Stack Developer</span>
//               </p>
//               <p className="text-2xl md:text-3xl font-display">
//                 <span className="gradient-text-accent">AI Engineer</span>
//               </p>
//             </motion.div>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
//             >
//               Crafting innovative solutions with modern web technologies and artificial intelligence.
//               Passionate about building scalable applications that make a difference.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="flex flex-wrap gap-4"
//             >
//               <Button
//                 size="lg"
//                 className="glow-effect group relative overflow-hidden hover:scale-105 transition-all text-lg px-8"
//                 onClick={() => scrollToSection("portfolio")}
//               >
//                 <span className="relative z-10">View My Work</span>
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-r from-secondary to-accent"
//                   initial={{ x: "-100%" }}
//                   whileHover={{ x: 0 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="hover:scale-105 transition-all border-2 text-lg px-8 hover:border-primary hover:text-primary"
//                 onClick={() => scrollToSection("contact")}
//               >
//                 <Mail className="mr-2 h-5 w-5" />
//                 Get in Touch
//               </Button>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.7 }}
//               className="flex gap-4 pt-4"
//             >
//               {[
//                 { icon: Github, link: "https://github.com", color: "hover:text-primary" },
//                 { icon: Linkedin, link: "https://linkedin.com", color: "hover:text-secondary" },
//               ].map((social, i) => (
//                 <motion.a
//                   key={i}
//                   href={social.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`p-3 glass-card rounded-xl text-muted-foreground ${social.color} transition-all`}
//                   whileHover={{ scale: 1.1, y: -5 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <social.icon className="h-6 w-6" />
//                 </motion.a>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Right side - Image */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <div className="relative w-full max-w-lg mx-auto">
//               {/* Animated rings */}
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//                 className="absolute inset-0 rounded-full"
//                 style={{
//                   background: "conic-gradient(from 0deg, hsl(262 83% 58%), hsl(189 94% 43%), hsl(330 81% 60%), hsl(262 83% 58%))",
//                   filter: "blur(40px)",
//                   opacity: 0.4,
//                 }}
//               />
              
//               <motion.div
//                 animate={{ 
//                   y: [0, -30, 0],
//                   rotateZ: [0, 5, 0, -5, 0],
//                 }}
//                 transition={{ duration: 8, repeat: Infinity }}
//                 className="relative"
//               >
//                 <div className="relative rounded-3xl overflow-hidden glass-card p-2">
//                   <motion.div
//                     className="relative overflow-hidden rounded-2xl"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <img
//                       src={heroImage}
//                       alt="Professional portrait"
//                       className="w-full h-auto"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 mix-blend-overlay" />
//                   </motion.div>
//                 </div>
//               </motion.div>

//               {/* Floating badges */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 1, duration: 0.5 }}
//                 className="absolute -top-4 -right-4 glass-card p-4 rounded-2xl animate-float"
//               >
//                 <div className="text-2xl font-bold gradient-text">5+</div>
//                 <div className="text-xs text-muted-foreground">Years Exp</div>
//               </motion.div>
              
//               <motion.div
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 1.2, duration: 0.5 }}
//                 className="absolute -bottom-4 -left-4 glass-card p-4 rounded-2xl animate-bounce-slow"
//               >
//                 <div className="text-2xl font-bold gradient-text-accent">50+</div>
//                 <div className="text-xs text-muted-foreground">Projects</div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5, duration: 0.5 }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
//         onClick={() => scrollToSection("about")}
//       >
//         <motion.div
//           animate={{ y: [0, 12, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="flex flex-col items-center gap-2"
//         >
//           <span className="text-sm text-muted-foreground font-medium">Scroll to explore</span>
//           <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
//             <motion.div
//               animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="w-1.5 h-1.5 bg-primary rounded-full"
//             />
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;




















import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
// Assuming heroImage is a professional, high-quality image.



const Hero = () => {
  const scrollToSection = (id: string) => {
    // Simple, reliable scroll behavior without Framer Motion
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // Clean, high-contrast background (supports light/dark mode)
    <section className="relative min-h-screen flex items-center bg-background text-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Introductory Tag */}
            <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-foreground text-primary border border-primary/20">
              👋 Hello, I'm
            </div>

            {/* Name - Prominent and Clear */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
              Asad Hassan
            </h1>
            
            {/* Roles - Clear Hierarchy */}
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Full Stack Developer
              </h2>
              <h3 className="text-xl md:text-2xl font-medium text-muted-foreground">
                AI Engineer & Data Scientist

              </h3>
            </div>

            {/* Professional Summary */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed border-l-4 border-primary pl-4">
             I specialize in designing scalable AI systems and data pipelines that extract insights from complex datasets. My work combines AI engineering and Data Science to solve real-world problems and drive measurable results
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="text-lg px-8 bg-primary hover:bg-primary/90 transition-colors"
                onClick={() => scrollToSection("portfolio")}
              >
                View Portfolio
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-2 border-input hover:bg-accent hover:text-accent-foreground"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>

            {/* Social Links - Decent and Accessible */}
            <div className="flex gap-4 pt-6">
              {[
                { icon: Github, link: "https://github.com/Asadhassan07", label: "GitHub" },
                { icon: Linkedin, link: "linkedin.com/in/asad-hassan-592a39308", label: "LinkedIn" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 text-muted-foreground hover:text-primary transition-colors rounded-lg border border-border hover:border-primary/50"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Image Container: Clean border/shadow for a professional look */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-2xl border-4 border-primary/10">
               <img
                src="/asad.jpg"
                alt="Professional portrait of Your Name"
                className="w-full h-full object-cover"
                />

              </div>

              {/* Minimalist Stat Badges (Optional but professional) */}
              <div className="absolute -top-4 -right-4 bg-card p-3 rounded-lg shadow-lg border border-border text-center">
                <div className="text-xl font-bold text-primary">5+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card p-3 rounded-lg shadow-lg border border-border text-center">
                <div className="text-xl font-bold text-secondary">50+</div>
                <div className="text-xs text-muted-foreground">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple, Non-Animated Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer text-muted-foreground hover:text-primary transition-colors"
        onClick={() => scrollToSection("about")}
        aria-label="Scroll down to the About section"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Explore More</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;







