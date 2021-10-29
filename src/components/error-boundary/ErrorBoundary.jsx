import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.error("in errorboundary", error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // log our error info to analytics, our own api
    console.log(error, errorInfo);
  }

  render() {
    console.log(this.state.hasError);
    if (this.state.hasError) {
      return <div className="error-boundary">Fallback UI</div>;
    } else {
      return this.props.children;
    }
  }
}
