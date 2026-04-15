import React from 'react'
import { logError } from '../utils/logger'

class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError () {
    return { hasError: true }
  }
  handleReset = () => {
    this.setState({ hasError: false })
  }

  componentDidCatch (error, info) {
    logError(error, 'ErrorBoundary')
  }

  render () {
    if (this.state.hasError) {
      return (
        <div className='error-boundary'>
          <h2>App crashed 😢</h2>
          <p>Something went wrong. Please try again.</p>
          <button onClick={() => this.handleReset()}>Try Again</button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
