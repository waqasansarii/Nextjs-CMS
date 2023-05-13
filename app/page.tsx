import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import Header from './Component/Header'
import banner from '@/app/assets/metaverse2.webp'
import left from '@/app/assets/the-metaverse.webp'
import Link from 'next/link'
// import banner from '@/app/assets/meta.jpg'


const inter = Inter({ subsets: ['latin'] })

async function getData() {
  const respone = await fetch('https://api.quotable.io/random?tags=technology')
  const contentApi = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.ContentFull_Space_id}/entries?access_token=${process.env.ContentFull_Access_Token}&content_type=post`,
    // { cache: 'no-store' },
  )
  // const resJson =await respone.json()
  return contentApi.json()
}



export default async function Home() {
  const data = await getData()
  console.log(data)

  return (
    <main className=" min-h-screen ">
      {/* <Header /> */}
      <div className="relative">
        <Image
          src={banner}
          className="opacity-[.9]  w-full object-cover h-auto"
          height={'0'}
          width="0"
          alt="banner"
        />
        {data.items.map((val: any) => (
          <>
            <div className="absolute top-[50%] translate-y-[-50%] w-full text-center">
              <h1 className="font-bold text-8xl text-white">
                {val.fields.title}
              </h1>
              <p className="text-gray-200 font-bold sm:w-[500px] text-xl mx-auto mt-5">
                {val.fields.testing}
              </p>
            </div>
          </>
        ))}
      </div>
      {/* Intro  */}
      <div className=" max-w-[1300px] mx-auto p-8 my-[4rem] bg-slate-50 rounded-lg">
        <div className="flex gap-x-4 items-center">
          <div className="w-1/2 px-4">
            <h4 className="text-gray-500 font-bold">Introduce</h4>
            <h2 className="text-5xl text-gray-700 font-bold mt-2">
              Panaverse DAO
            </h2>
            <p className="mt-5 text-md text-gray-600">
              The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
              Panaverse DAO is a movement to spread these technolgies globally.
              It is community of Web 3 and Metaverse developers, designers,
              trainers, startup founders and service providers.
            </p>
            <p className="mt-2 text-md text-gray-600 ">
              The internet is without a doubt the most important technological
              development in human history. Web3 and metaverse technologies
              expand the internet as we know it by introducing novel features
              and advancements. Metaverse will make use of all aspects of modern
              technology, including 3D, VR, AR, AI, blockchain, cloud computing,
              voice computing, ambient computing, and more.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src={left}
              className="rounded-lg w-full"
              draggable={false}
              width={500}
              height={200}
              alt="meta"
            />
          </div>
        </div>
      </div>
      {/* course  */}
      <div className="max-w-[750px] w-full mx-auto bg-slate-900 p-8 rounded-xl text-center">
        <h4 className="text-gray-500 font-bold text-xl">Course</h4>
        <h2 className="text-4xl text-gray-300 font-bold mt-2">
          Web 3.0 (Blockchain) and Metaverse Specialization{' '}
        </h2>
        <p className="mt-4 text-md text-gray-500 w-[85%] mx-auto">
          This Web 3.0 and Metaverse specialization focuses on developing
          full-stack Web 3.0 and Metaverse experiences for the next generation
          of the internet by specializing in building worlds that merge the best
          of cutting-edge decentralized distributed blockchains with 3D
          metaverse client experiences.
        </p>
        <Link
          href="/course"
          className="flex justify-center w-[250px] rounded-xl py-3 bg-slate-200 mx-auto mt-4 text-gray-900 text-center hover:bg-black hover:text-white"
        >
          Read detailed course
        </Link>
      </div>
    </main>
  )
}
