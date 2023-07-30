import React, { useState } from 'react'
import { TabsData } from '../../types/Type_Weather';
import { motion } from "framer-motion";

interface TypePropsTab {
  tabs: TabsData[];
  activeTabIndex: number;
  onTabChange: (index: number) => void;
}

export const TabWeather = ({ tabs, activeTabIndex, onTabChange }: TypePropsTab) => {
  // const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='w-full'>
      <div className='flex flex-row items-center justify-start h-10 gap-5'>
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              backgroundColor: activeTabIndex === index ? 'rgb(107 114 128 / 0.5)' : '',
              y: 0,
              transition: { duration: 0.4 },
            }}
            exit={{ opacity: 0, y: 20, transition: { duration: 0.5 } }}
            className={`w-50 cursor-pointer px-5 py-2 rounded-xl`}
            onClick={() => onTabChange(index)}
          >
            {tab.title}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
