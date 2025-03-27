import React from 'react'
import BranchCard from '../components/menu/BranchCard'


function BranchPage() {
  return (
    <div>
        <h1 className='text-[28px]  mt-6 mb-10 text-gray-700 text-center'><span className='bg-s px-2 py-1 rounded-lg ml-6'>Branches </span></h1>
        <div className="flex justify-center mt-7 flex-wrap gap-x-6 gap-y-6 pb-5">
        <BranchCard abbrev='rt' fullname='Réseaux et Telecommunication' theme='bg-sky-500' />
        <BranchCard abbrev='gl' fullname='Genie     Logiciel' theme='bg-sky-500'/>
        <BranchCard abbrev='imi' fullname='Instrumentation et Maintenance Industrielle' theme='bg-sky-500'/>
        <BranchCard abbrev='iia' fullname='Informatique Industrielle et Automatisme' theme='bg-sky-500'/>
        <BranchCard abbrev='mpi' fullname='Maths - Physique - Informatique' theme='bg-sky-500' prepa/>
        <BranchCard abbrev='cba' fullname='Chimie et Biologie appliqué' theme='bg-sky-500' prepa/>
        <BranchCard abbrev='ch' fullname='Chimie Industrielle' theme='bg-sky-500'/>
        <BranchCard abbrev='bio' fullname='Biologie Industrielle' theme='bg-sky-500'/>
          </div>
    </div>
  )
}

export default BranchPage