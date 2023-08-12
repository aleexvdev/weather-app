import { TabsData } from '../../types/Type_Weather';
import { motion } from "framer-motion";

interface TypePropsTab {
  tabs: TabsData[];
  activeTabIndex: number;
  onTabChange: (index: number) => void;
}

export const TabWeather = ({ tabs, activeTabIndex, onTabChange }: TypePropsTab) => {

  return (
    <div className='w-full'>
      <div className='flex flex-row items-center justify-start h-10 gap-5'>
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              backgroundColor: activeTabIndex === index ? '#0338A1' : '#0044ff46',
              y: 0,
              transition: { duration: 0.4 },
            }}
            exit={{ opacity: 0, y: 20, transition: { duration: 0.5 } }}
            className={`w-50 cursor-pointer px-5 py-2 rounded-xl`}
            onClick={() => onTabChange(index)}
          >
            <span className='text-white'>{tab.title}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
