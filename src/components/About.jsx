import React, { useEffect, useState } from 'react'
import github from '../img/github.png'
import linkdin from '../img/linkedin.webp'
import x from '../img/x.png'
import insta from '../img/insta.png'
import bg1 from '../img/bg-1.jpg'
import madhav from '../img/madhav.jpg'
import html from '../img/html.png'
import css from '../img/css.png'
import js from '../img/js.png'
import java from '../img/java.webp'
import git from '../img/git.png'
import react from '../img/react.png'
import appwrite from '../img/appwrite.png'


function About() {

  const [data, setData] = useState({})
  const [profilePhoto, setProfilePhoto] = useState(null)

  useEffect(() => {
    profile()
  }, [])

  const profile = async () => {
    const data = await fetch('https://api.github.com/users/madhavpatel236');
    const json = await data.json();
    setProfilePhoto(json?.avatar_url)
    setData(json)
  }
  return (
    <div className="flex flex-col justify-center  items-center bg-about-bg bg-cover h-auto w-full bg-gray-200  ">
      <div className=' flex w-9/12 pt-56 pb-20 justify-between items-center  bg-opacity-100 rounded-xl  '>
        <img src={madhav} className='rounded-2xl w-80 h-96 mr-4 p-4 border-transparent  border-4 bg-transparent  shadow-lg shadow-black transform duration-300 hover:scale-105  ' />  {/* shadow-2xl  shadow-red-400  cursor-pointer transform hover:scale-105 duration-300 hover:shadow-current  */}
        <div className='font-RobotoSlab text-justify  text-red-700 '>
          <div className='flex p-5 justify-center text-center text-red-700 glow text-5xl font-extrabold'>{data?.name}</div>
          <div className=' ml-8 mr-8 text-lg font-medium '>{data?.bio}...</div>
        </div>
      </div>

      <div className='flex gap-3 mb-5 justify-center items-center border-2 border-black rounded-xl bg-transparent transform duration-300 hover:scale-105 hover:shadow-black shadow-2xl'>
        <img src={html} className='w-16 h-16' />
        <img src={css} className='w-20 h-20' />
        <img src={js} className='w-16 h-16' />
        <img src={react} className='w-20 h-16' />
        <img src={java} className='w-20 h-16' />
        <img src={appwrite} className='w-20 h-16' />
        <img src={git} className='w-20 h-16' />
      </div>
    </div>
  )
}

export default About


{/* <div>{data?.location}</div> */}
{/* <div className='flex w-2/12 justify-between ' >
<img src={github} alt='github' className='w-7 h-7  border border-white' />
<img src={linkdin} alt='linkdin' className='w-7 h-7  border border-white' />
<img src={x} alt='x' className='h-8  border border-white' />
<img src={insta} alt='insta' className='w-7 h-7  border border-white' />
</div> */}