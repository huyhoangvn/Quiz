import React, { Component } from 'react'

interface Props {
  index: number;
  question: string;
  choices: choices
}

interface choices {
  A: string;
  B: string;
  C: string;
  D: string
}

const MyComponent: React.FC<Props> = ({ index, question, choices }) => {
  return (
    <div className='grid'>
        <div className='col-start-1 row-start-1 border border-1 rounded p-5 m-3 col-end-12'>
          <div className='text-black font-bold'>{question}</div>
          <div className='flex items-center gap-x-4'>
            <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            A. {choices.A}
          </div>
          <div className='flex items-center gap-x-4'>
            <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            B. {choices.B}
          </div>
          <div className='flex items-center gap-x-4'>
            <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            C. {choices.C}
          </div>
          <div className='flex items-center gap-x-4'>
            <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            D. {choices.D}
          </div>
        </div>
        <div className='col-start-1 row-start-1 col-end-1 mx-8'>
          <div className='flex'>
            <div className='flex border border-1 rounded px-2 bg-green-200 text-green-600 border-green-600'>Question {index}</div>
          </div>
        </div>
    </div>
  )
}

export default MyComponent;