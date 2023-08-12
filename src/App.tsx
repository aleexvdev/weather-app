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
        className={` ${backgroundMain} absolute inset-0 `}
      >
        <main className='mx-auto max-w-7xl'>
          <WeatherApp />
        </main>
      </motion.div>
    </AnimatePresence>
  );
}