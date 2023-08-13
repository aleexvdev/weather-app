import { useTheme } from '../../context/ThemeContext/ThemeContext';
import { TabsData } from '../../types/Type_Weather';
import { motion, AnimatePresence } from "framer-motion";

interface TypePropsTab {
  tabs: TabsData[];
  activeTabIndex: number;
  onTabChange: (index: number) => void;
}

export const TabWeather = ({ tabs, activeTabIndex, onTabChange }: TypePropsTab) => {

  const { isDarkMode } = useTheme();//80C6FF

  return (
    <div className='w-full'>
      <div className='flex flex-row items-center justify-start h-10 gap-5'>
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              backgroundColor: activeTabIndex === index 
              ? '#EF4444'
              : '',
              y: 0,
              transition: { duration: 0.4 },
              color: activeTabIndex === index 
              ? 'white'
              : `${isDarkMode ? '#9b9b9b' : 'black'}`
            }}
            exit={{ opacity: 0, y: 20, transition: { duration: 0.5 } }}
            whileHover={{ backgroundColor: '#EF4444' , transition: { duration: 0.2 }, color: 'white' }}
            whileTap={{ backgroundColor: '#EF4444', transition: { duration: 0.2 } }}
            className={`w-50 cursor-pointer px-5 py-2 rounded-xl`}
            onClick={() => onTabChange(index)}
          >
            <span className={`font-medium`}>{tab.title}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
