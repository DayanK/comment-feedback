import React from 'react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div style={{ 
      padding: '1rem', 
      border: '1px solid red', 
      borderRadius: '5px', 
      backgroundColor: '#ffeeee', 
      color: '#d8000c', 
      marginTop: '1rem',
      textAlign: 'center',
    }}>
      <p>{message}</p>
      {onRetry && (
        <button 
          onClick={onRetry} 
          style={{
            marginTop: '0.5rem',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#d8000c',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
