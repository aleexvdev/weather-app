import { motion } from 'framer-motion'
import { socialNetworks } from '../../data/socialNetworks';
import { ComponentSocialNetwork } from '../Footer/ComponentSocialNetwork';
import  Imgprofile  from '../../img/profile.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, filter: "blur(1px)", y: 20 },
  visible: { opacity: 1, filter: "blur(0)", y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

export const CardProfile = () => {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className='w-full md:w-[180px] md:h-[135px] h-[100px] rounded-lg bg-gradient-to-br from-green-200 via-green-400 to-teal-400 shadow-md shadow-black py-2 md:py-3 px-3 md:px-4 relative'
    >
      <div className='grid md:grid-cols-1 md:grid-rows-4 grid-cols-3 grid-rows-3 gap-0 w-full h-full'>
        <h2 className='col-span-3 row-span-1 md:col-span-1 md:row-span-1 text-[14px] font-bold text-gray-500/60'>Dev</h2>
        <p className='col-span-3 row-span-1 md:col-span-1 md:row-span-1 text-[18px] md:text-[16px] font-bold'>Alexander Valverde</p>
        <p className='col-span-1 row-span-1 md:col-span-1 md:row-span-1 text-[14px] md:text-[12px] font-semibold text-gray-800/80 flex items-center justify-start md:pb-2'>@alexvdev</p>
        <div className='absolute z-30 right-2 top-2.5 md:-right-16 md:top-7 bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-300 rounded-lg'>
          <img src={Imgprofile} alt="" className='rounded-lg w-20 h-20' />
        </div>
        <div className='col-span-1 row-span-1'>
          <div className='flex items-center justify-center w-full h-full gap-1'>
            {
              socialNetworks.map((social) => (
                <ComponentSocialNetwork key={social.id} props={social} />
              ))
            }
          </div>
        </div>
      </div>
    </motion.div>
  )
}
