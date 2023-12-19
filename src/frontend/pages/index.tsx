import React from 'react'
import Todo from '../components/todo'

const HomePage: React.FC = function welcome () {
  return (
    <div data-test-id="welcome-message">
      <Todo />
    </div>
  )
}

export default HomePage
