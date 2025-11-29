import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";


const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactMethods = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://linkedin.com/in/asad-hassan-592a39308",
      color: "hover:text-[#0A66C2]",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "Message on WhatsApp",
      link: "https://wa.me/03113824552",
      color: "hover:text-[#25D366]",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@shedu_asad",
      link: "https://www.instagram.com/shedu_asad/",
      color: "hover:text-[#E4405F]",
    },
    {
      icon: Mail,
      label: "Email",
      value: "asadhassan1900s@gmail.com",
      link: "mailto:asadhassan1900s@gmail.com",
      color: "hover:text-primary",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-card/30 to-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-72 md:w-96 h-72 md:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-72 md:w-96 h-72 md:h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl md:text-7xl font-bold font-display mb-4 md:mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto">
            Ready to bring your vision to life? Reach out through any channel
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 sm:p-8 md:p-16 rounded-3xl"
          >
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.label}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -3 }}
                    className={`group flex items-start gap-4 p-5 sm:p-8 rounded-2xl glass-card border border-border/30 hover:border-primary/50 transition-all cursor-pointer ${method.color} relative overflow-hidden`}
                  >
                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />

                    <motion.div
                      className="p-3 sm:p-4 glass-card rounded-2xl relative z-10"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                    </motion.div>

                    <div className="flex-1 relative z-10">
                      <div className="font-bold text-lg sm:text-xl mb-1 group-hover:gradient-text transition-all">
                        {method.label}
                      </div>
                      <div className="text-muted-foreground text-sm sm:text-base">
                        {method.value}
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 text-center"
            >
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                Available for freelance projects and full-time opportunities
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  className="glow-effect hover:scale-105 transition-all w-full sm:w-auto"
                  onClick={() =>
                    window.open("https://wa.me/03113824552", "_blank")
                  }
                >
                  <FaWhatsapp className="mr-2 h-5 w-5" />
                  Quick Chat
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:scale-105 transition-all w-full sm:w-auto"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/asad-hassan-592a39308/",
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Footer Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 text-center"
          >
            <p className="text-xs sm:text-sm text-muted-foreground">
              Response time: Usually within 24 hours
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


// const Contact = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });

//   const contactMethods = [
//     {
//       icon: Linkedin,
//       label: "LinkedIn",
//       value: "Connect on LinkedIn",
//       link: "linkedin.com/in/asad-hassan-592a39308",
//       color: "hover:text-[#0A66C2]",
//     },
//     {
//       icon: FaWhatsapp,
//       label: "WhatsApp",
//       value: "Message on WhatsApp",
//       link: "https://wa.me/03113824552",
//       color: "hover:text-[#25D366]",
//     },
//     {
//       icon: Instagram,
//       label: "Instagram",
//       value: "@shedu_asad",
//       link: "https://www.instagram.com/shedu_asad/",
//       color: "hover:text-[#E4405F]",
//     },
//     {
//       icon: Mail,
//       label: "Email",
//       value: "asadhassan1900s@gmail.com",
//       link: "asadhassan1234x@gmail.com",
//       color: "hover:text-primary",
//     },
//   ];

//   return (
//     <section id="contact" className="section-padding bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
//         <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto relative z-10">
//           <motion.div
//             ref={ref}
//             initial={{ opacity: 0, y: 50 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-5xl md:text-7xl font-bold font-display mb-6">
//               Let's <span className="gradient-text">Connect</span>
//             </h2>
//             <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
//               Ready to bring your vision to life? Reach out through any channel
//             </p>
//           </motion.div>

//         <div className="max-w-4xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="glass-card p-10 md:p-16 rounded-3xl"
//             >
//               <div className="grid md:grid-cols-2 gap-8">
//                 {contactMethods.map((method, index) => {
//                   const Icon = method.icon;
//                   return (
//                     <motion.a
//                       key={method.label}
//                       href={method.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                       transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
//                       whileHover={{ scale: 1.05, y: -5 }}
//                       className={`group flex items-start gap-5 p-8 rounded-3xl glass-card border-2 border-border/30 hover:border-primary/50 transition-all cursor-pointer ${method.color} relative overflow-hidden`}
//                     >
//                       <motion.div 
//                         className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"
//                         initial={{ x: "-100%" }}
//                         whileHover={{ x: "100%" }}
//                         transition={{ duration: 0.6 }}
//                       />
//                       <motion.div 
//                         className="p-4 glass-card rounded-2xl relative z-10"
//                         whileHover={{ rotate: 360 }}
//                         transition={{ duration: 0.6 }}
//                       >
//                         <Icon className="h-7 w-7 text-primary" />
//                       </motion.div>
//                       <div className="flex-1 relative z-10">
//                         <div className="font-bold text-xl mb-2 group-hover:gradient-text transition-all">
//                           {method.label}
//                         </div>
//                         <div className="text-muted-foreground">
//                           {method.value}
//                         </div>
//                       </div>
//                     </motion.a>
//                   );
//                 })}
//             </div>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//               transition={{ duration: 0.6, delay: 0.7 }}
//               className="mt-12 text-center"
//             >
//               <p className="text-muted-foreground mb-6">
//                 Available for freelance projects and full-time opportunities
//               </p>
//               <div className="flex flex-wrap justify-center gap-4">
//                 <Button
//                   size="lg"
//                   className="glow-effect hover:scale-105 transition-all"
//                   onClick={() => window.open("https://wa.me/03113824552", "_blank")}
//                 >
//                   <FaWhatsapp className="mr-2 h-5 w-5" />
//                   Quick Chat
//                 </Button>
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="hover:scale-105 transition-all"
//                   onClick={() => window.open("https://www.linkedin.com/in/asad-hassan-592a39308/", "_blank")}
//                 >
//                   <Linkedin className="mr-2 h-5 w-5" />
//                   Connect on LinkedIn
//                 </Button>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Optional: Additional contact info */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6, delay: 0.8 }}
//             className="mt-8 text-center"
//           >
//             <p className="text-sm text-muted-foreground">
//               Response time: Usually within 24 hours
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
