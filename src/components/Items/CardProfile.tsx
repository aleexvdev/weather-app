import { motion } from 'framer-motion'
import { socialNetworks } from '../../data/socialNetworks';
import { ComponentSocialNetwork } from '../Footer/ComponentSocialNetwork';

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
      className='w-[180px] h-[135px] rounded-lg bg-gradient-to-br from-green-200 via-green-400 to-teal-400 shadow-md shadow-black py-3 px-4 relative'
    >
      <div className='grid grid-cols-1 grid-rows-4 gap-0 w-full'>
        <h2 className='col-span-1 row-span-1 text-[14px] font-bold text-gray-500/60'>Dev</h2>
        <p className='col-span-1 row-span-1 text-[16px] font-bold'>Alexander Valverde</p>
        <p className='col-span-1 row-span-1 text-[12px] font-semibold text-gray-800/80'>@alexvdev</p>
        <div className='absolute z-30 -right-16 top-7'>
          <img src="" alt="" className='rounded-lg w-20 h-20' />
        </div>
        <div className='col-span-1 row-span-1'>
          <div className='flex items-center justify-center w-full gap-1'>
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
