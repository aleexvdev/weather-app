import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./context/ThemeContext/ThemeContext";
import { WeatherApp } from "./components/WeatherApp";

export const App = () => {

  const { backgroundMain } = useTheme();

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`${backgroundMain} absolute md:inset-0 min-h-auto flex items-center justify-center`}
      >
        <main className='mx-[2%] max-w-[95%] md:max-w-7xl md:mx-auto md:my-auto lg:max-w-[1200px]'>
          <WeatherApp />
        </main>
      </motion.div>
    </AnimatePresence>
  );
}