import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./context/ThemeContext/ThemeContext";
import { WeatherApp } from "./components/WeatherApp";
import { MainFooter } from "./components/Footer/MainFooter";

export const App = () => {

  const { backgroundMain } = useTheme();

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`${backgroundMain} absolute inset-0`}
      >
        <main className='mx-auto md:max-w-7xl max-w-[95%]'>
          <WeatherApp />
          <MainFooter />
        </main>
      </motion.div>
    </AnimatePresence>
  );
}