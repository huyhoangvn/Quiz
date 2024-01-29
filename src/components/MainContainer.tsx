import React, { Component } from 'react'
import Quiz from './navbar/quiz/index';

type Props = {}

type State = {}

// const questionProps = {
//   index: 1,
//   question: 'What is the capital of France?',
//   choices: {
//     A: 'Berlin',
//     B: 'Paris',
//     C: 'London',
//     D: 'Madrid',
//   },
// };

export default class MainContainer extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className='mx-auto w-screen flex justify-center flex-col'>
        <Quiz index={1} question='What is the capital of France?' choices={{A: 'Berlin',B: 'Paris',C: 'London',D: 'Madrid',}}></Quiz>
        <Quiz index={1} question='What is the capital of France?' choices={{A: 'Berlin',B: 'Paris',C: 'London',D: 'Madrid',}}></Quiz>
        <Quiz index={1} question='What is the capital of France?' choices={{A: 'Berlin',B: 'Paris',C: 'London',D: 'Madrid',}}></Quiz>
        <Quiz index={1} question='What is the capital of France?' choices={{A: 'Berlin',B: 'Paris',C: 'London',D: 'Madrid',}}></Quiz>
      </div>
    )
  }
}