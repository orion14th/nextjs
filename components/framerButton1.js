import { motion } from "framer-motion"

function AnimatedLink({ href, children }) {
 

    return (
        <motion.a
            href={href}
            whileHover={{ scale: 1.05 }}
       
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
        >
            {children}
        </motion.a>
    );
}




 