'use client'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="max-w-[1300px] mx-auto mt-[4rem]">
      <div className="w-[70%] mx-auto text-center">
        <h1 className="font-bold text-4xl text-gray-700">Program Studies</h1>
        <p className="font-medium text-md mt-3 text-gray-600">
          This curriculum is intended for beginners who want to learn software
          development from the ground up. The first two quarters are shared by
          all specialities and are dedicated to studying Object-Oriented
          Programming and cutting-edge Full-Stack Web 2.0 development. It is
          going to be a year-long hybrid programme that includes both onsite and
          online classes and is divided into four quarters of 13 weeks each. The
          emphasis will be on hands-on learning by educating students to produce
          projects. To accommodate everyone, courses will be held primarily on
          weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a
          hybrid teaching format, with core onsite classes complemented by
          online Zoom laboratories and recorded videos.
        </p>
      </div>

      <div className="flex gap-x-4 my-[4rem] justify-center flex-wrap gap-y-4">
        <div className="w-[45%] border-2 border-slate-950 bg-slate-900 rounded-xl p-4 flex flex-col min-h-[300px]">
          <h2 className="text-lg font-bold text-gray-500">Quarter 1</h2>
          <p className="text-gray-300 text-xl mt-1 truncate">
            CS-101: Object-Oriented Programming using TypeScript
          </p>
          <p className="text-md text-gray-500 mt-2">Duration: 13 Weeks</p>
          {/* <p >Description</p> */}
          <p className=" text-md text-gray-500 my-2 line-clamp-4">
            We will start the program by learning the fundamentals of
            Object-Oriented programming using JavaScript and TypeScript. We will
            also understand the latest Web trends i.e. Web 3.0 and Metaverse
            concepts and try to understand their working from the perspective of
            the users.
          </p>
          <Link
            href={'/'}
            className="underline flex justify-end mt-3 text-gray-400 font-bold mt-auto"
          >
            Read more
          </Link>
        </div>
        <div className="w-[45%] border-2 border-slate-950 bg-slate-900 rounded-xl p-4 flex flex-col min-h-[300px]">
          <h2 className="text-lg font-bold text-gray-500">Quarter 2</h2>
          <p className="text-gray-300 text-xl mt-1 truncate">
            W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and
            APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
          </p>
          <p className="mt-2 text-md text-gray-500">Duration: 13 Weeks</p>
          <p className="my-2 text-md text-gray-500 line-clamp-4">
            The objective of this course is to teach participants to develop
            customer-facing planet-scale Websites, Full-Stack Apps and
            templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of
            the quarter, the participants will be able to develop and deploy web
            platforms like Facebook, Shopify, etc. The technologies covered in
            this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI,
            tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL
            Compatible), AWS Serverless Technologies, and Cloud Development Kit
            for Terraform (CDKTF).
          </p>
          <Link
            href={'/'}
            className="underline flex justify-end mt-3 text-gray-400 font-bold mt-auto"
          >
            Read more
          </Link>
        </div>
        <div className="w-[45%] border-2 border-slate-950 bg-slate-900 rounded-xl p-4 flex flex-col min-h-[300px]">
          <h2 className="text-lg font-bold text-gray-500">Quarter 3</h2>
          <p className="text-gray-300 text-xl mt-1 truncate">
            W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
          </p>
          <p className="my-2 text-md text-gray-500">Duration: 13 Weeks</p>
          <p className="my-1 text-md text-gray-500 line-clamp-4">
            In this course you will learn how to develop Web 3.0 DApps, create a
            project, deploy it in production, write smart contracts, unit test
            them, and create user interfaces for them. We will also learn to
            develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that
            in order to develop Web 3 applications you also need to build on top
            of Web 2.0 technologies which we have already covered in the
            previous quarters.
          </p>
          <Link
            href={'/'}
            className="underline flex justify-end mt-3 text-gray-400 font-bold mt-auto"
          >
            Read more
          </Link>
        </div>
        <div className="w-[45%] border-2 border-slate-950 bg-slate-900 rounded-xl p-4 flex flex-col min-h-[300px]">
          <h2 className="text-lg font-bold text-gray-500">Quarter 4</h2>
          <p className="text-gray-300 text-xl mt-1 truncate">
            MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse
            Experiences
          </p>
          <p className="my-2 text-md text-gray-500">Duration: 13 Weeks</p>
          <p className="my-1 text-md text-gray-500 line-clamp-4">
            The Web is the Metaverse. The metaverse requires an infrastructure
            that connects all of the metaverses so that we can travel between
            them. This is only achievable with open web-based metaverses. The
            internet and its browsers are magical. Federated but linked
            experiences connect pages, people, technology, businesses,
            standards, and nations. It’s unlike anything else. The metaverse
            should replicate the best qualities of the web - it should just be
            the web. We just have to extend online responsive design from mobile
            to desktop to 3D, Augmented Reality, and Virtual Reality. This
            course will teach you how to build the Open Social Spatial Web with
            WebXR and WebGPU technologies.
          </p>
          <Link
            href={'/'}
            className="underline flex justify-end mt-3 text-gray-400 font-bold mt-auto"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page
