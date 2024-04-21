import logo from "../../assets/images/llinkedin_logo.png"
import { Icon } from '@iconify/react';

const Navbar = ()=>{
    return(
        <div className="navbar w-full h-1/10 px-72 py-1 flex items-center justify-between">
        <img src={logo} className="h-16" alt='logo'/>
        <div className="flex h-full w-1/2 items-center justify-between">
          <div className='cursor-pointer text-gray-600 hover:text-gray-800 flex flex-col items-center justify-center'>
          <Icon icon="ic:outline-article" className='text-2xl'/>
            <div className='text-sm'>Articles</div>
          </div>
          <div className='cursor-pointer text-gray-600 hover:text-gray-800 flex flex-col items-center justify-center'>
          <Icon icon="eva:people-fill" className='text-2xl'/>
            <div className='text-sm'>People</div>
          </div>
          <div className='cursor-pointer text-gray-600 hover:text-gray-800 flex flex-col items-center justify-center'>
          <Icon icon="arcticons:linkedin-learning" className='text-2xl'/>
            <div className='text-sm'>Learning</div>
          </div>
          <div className='cursor-pointer text-gray-600 hover:text-gray-800 flex flex-col items-center justify-center'>
          <Icon icon="tabler:briefcase-filled" className='text-2xl'/>
            <div className='text-sm'>Jobs</div>
          </div>
          <div className='border-r border-gray-600 h-10'></div>
          <div className='text-sm font-semibold text-gray-600 py-3 px-5 rounded-full hover:bg-gray-100 cursor-pointer'>
            Join now
          </div>
          <div className='text-sm font-semibold text-blue-600 border border-blue-600 py-3 px-5 rounded-full hover:bg-blue-100 cursor-pointer'>
            Sign in
          </div>
        </div>
      </div>
    )
}

export default Navbar