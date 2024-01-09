import React from 'react';

function ErrorBoundary({ children }) {
  return (
    <div>
      {children}
      <h2>Something went wrong.</h2>
    </div>
  );
}

export default ErrorBoundary;
