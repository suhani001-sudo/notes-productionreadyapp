import React from "react";
import { logError } from "../utils/logger";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    logError(error, "ErrorBoundary");
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>App crashed 😢</h2>
          <button onClick={() => window.location.reload()}>
            Reload
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;