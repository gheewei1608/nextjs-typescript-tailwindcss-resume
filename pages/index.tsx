import Head from 'next/head'
import Image from 'next/image'
import {
  EnvelopeIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full justify-center">
      <Head>
        <title>Chee Ghee Wei</title>
        <link rel="icon" href="/images/staricon.jpg" />
      </Head>

      {/* Profile */}
      <div className='bg-profilebg h-full w-full'>
      <div className='flex flex-col h-full w-full items-center border-b py-12'>
        <Image
          priority
          src="/images/profilepic.jpg"
          className='my-4 rounded-full ring-4 ring-black'
          height={300}
          width={300}
          alt='Profile Picture'
        />
        <p className='my-2 text-4xl text-center font-bold'>
          Chee Ghee Wei
        </p>
        <p className='my-1 text-gray-600 text-lg font-semibold text-center'>Data science postgraduate who is willing to take challenges 
        <br/> in the fields of data science and software development</p>
        <div className='my-1 flex flex-row items-center'>
          <div className="my-2 mx-2 flex items-center text-lg text-gray-600 font-semibold">
              <EnvelopeIcon className="mr-2 h-5 w-5 flex-shrink-0 text-gray-600" aria-hidden="true" />
              gheewei1608@gmail.com
          </div>
          <div className="my-2 mx-2 flex items-center text-lg text-gray-600 font-semibold">
              <DevicePhoneMobileIcon className="mr-2 h-5 w-5 flex-shrink-0 text-gray-600" aria-hidden="true" />
              016-4245701
          </div>
        </div>
      </div>
      </div>

      {/* Education */}
      <div className='grid grid-rows-2 justify-center border-b py-12'>
        <div className='font-bold text-2xl row-span-1 text-center h-100'>Education</div>
        <div className='grid grid-cols-2 items-center row-span-1'>
          <div className='col-span-1 flex justify-end'>
            <Image
              priority
              src="/images/usmlogo.jpg"
              className='mx-10'
              height={250}
              width={250}
              alt='Universiti Sains Malaysia'
            />
          </div>
          <div className='col-span-1'>
            <ul className='list-disc mx-2'>
              <li className='text-lg'>Master's Degree in Data Science & Analytics</li>
              <p className='text-sm text-gray-600'>2021 - 2022 CGPA 3.73</p>
              <li className='text-lg mt-2'>Bachelor's Degree in Computer Sciences</li>
              <p className='text-sm text-gray-600'>2016 - 2020 CGPA 3.69</p>
            </ul>
          </div>
        </div>
      </div>

      {/* Working Experiences */}
      <div className='grid grid-rows-4 justify-center border-b py-12'>
        <div className='font-bold text-2xl row-span-1 text-center'>Working Experiences</div>
        <div className='grid md:grid-cols-2 items-center row-span-3 sm:grid-cols-1'>
          <div className='col-span-1 flex md:justify-end sm:justify-center'>
            <Image
              priority
              src="/images/keysightlogo.jpg"
              className='md:mx-10'
              height={250}
              width={250}
              alt='Keysight Technologies'   
            />
          </div>
          <div className='col-span-1'>
            <ul className='list-disc mx-2'>
              <li className='text-lg'>Service Support Engineer</li>
              <p className='text-sm text-gray-600'>Sep 2020 - Feb 2021</p>
              <p className='mt-1 text-sm text-gray-600'>Development of Visual Basic Application to automate task in Excel (VBA macro)</p>
              <p className='mt-1 text-sm text-gray-600'>Schedule and arrange preventive maintenance and calibration of test equipment</p>
              <p className='mt-1 text-sm text-gray-600'>Communication with suppliers to identify root cause of machine failure and provide solutions</p>
              <li className='text-lg mt-2'>Intern Tech 1</li>
              <p className='text-sm text-gray-600'>Mar 2019 - Aug 2019</p>
              <p className='mt-1 text-sm text-gray-600'>Develop ASP.NET web forms to support operation of calibration team (C#, SSMS, Oracle)</p>
              <p className='mt-1 text-sm text-gray-600'>Develop progressive web application to track equipment's calibration process</p>
              <p className='mt-1 text-sm text-gray-600'>Bug fixing based on system defects and user requipments</p>
              <p className='mt-1 text-sm text-gray-600'>Made presentation on working flow of new modules</p>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Programming Skills & Languages */}
      <div className='flex md:flex-row border-b py-12'>
        <div className='basic-1/2 w-full border-r'>
          <div className='font-bold text-2xl text-right mr-4'>Programming Skills</div>
          <div className='grid grid-cols-2 grid-rows-4 mt-5 px-1'>
            <div className='row-span-1 col-span-1 text-right mr-1 text-lg'>Python</div>
            <div className="flex overflow-x-hidden bg-lime-500 m-1 rounded-xl">
              <div
                className="h-full items-center overflow-hidden bg-slate-300 w-1/4"/>
            </div>
            <div className='row-span-1 col-span-1 text-right mr-1 text-lg'>C#</div>
            <div className="flex overflow-x-hidden bg-lime-500 m-1 rounded-xl">
              <div
                className="h-full items-center overflow-hidden bg-slate-300 w-1/3"/>
            </div>
            <div className='row-span-1 col-span-1 text-right mr-1 text-lg'>C++</div>
            <div className="flex overflow-x-hidden bg-lime-500 m-1 rounded-xl">
              <div
                className="h-full items-center overflow-hidden bg-slate-300 w-1/2"/>
            </div>
            <div className='row-span-1 col-span-1 text-right mr-1 text-lg'>Java</div>
            <div className="flex overflow-x-hidden bg-lime-500 m-1 rounded-xl">
              <div
                className="h-full items-center overflow-hidden bg-slate-300 w-1/2"/>
            </div>
          </div>
          
        </div>
        <div className='basic-1/2 w-full'>
          <div className='font-bold text-2xl text-left ml-4'>Languages</div>
          <div className='grid grid-cols-2 grid-rows-4 mt-5 px-1'>
          <div className="flex overflow-x-hidden bg-slate-300 m-1 rounded-xl">
              <div
                className="h-full items-center overflow-hidden bg-cyan-600 w-3/4"/>
            </div>
            <div className='row-span-1 col-span-1 text-left text-lg ml-1'>English</div>
            <div className="flex overflow-x-hidden bg-slate-300 m-1 rounded-xl">
              <div
                className="h-full items-center overflow-hidden bg-cyan-600 w-3/4"/>
            </div>
            <div className='row-span-1 col-span-1 text-left text-lg ml-1'>Chinese</div>
            <div className="flex overflow-x-hidden bg-slate-300 m-1 rounded-xl">
              <div
                className="h-full items-center overflow-hidden bg-cyan-600 w-2/3"/>
            </div>
            <div className='row-span-1 col-span-1 text-left text-lg ml-1'>Bahasa Malaysia</div>
            <div className="flex overflow-x-hidden bg-slate-300 m-1 rounded-xl">
              <div
                className="h-full items-center overflow-hidden bg-cyan-600 w-1/2"/>
            </div>
            <div className='row-span-1 col-span-1 text-left text-lg ml-1'>Others</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='flex items-center justify-center h-20 bg-gray-200'>
        <div className='text-md font-semibold'>Created by Chee Ghee Wei</div>
        <div>
          <Link href='https://github.com/gheewei1608/nextjs-typescript-tailwindcss-resume'>
            <Image
              priority
              src="/images/githublogo.jpg"
              className='ml-4 rounded-full ring-2 ring-white'
              height={50}
              width={50}
              alt='Profile Picture'
            />
          </Link>
          </div>
      </div>
    </div>
  )
}
