import React from 'react';
import { HashLoader } from 'react-spinners';

const YourComponent = ({ loading }) => {
  const getLoadingScreenClass = () => {
    if (loading === 1) {
      return 'loadingScreen animate__animated animate__fadeOut fixed inset-0 z-9999 bg-black bg-opacity-100';
    } else if (loading === 2) {
      return 'loadingScreen fixed inset-0 z-1 loadingScreenEnd bg-black bg-opacity-100';
    } else if (loading === 0) {
      return 'loadingScreen fixed inset-0 z-9999 bg-opacity-100';
    }
  };

  return (
    <div className={`loadingScreen fixed inset-0 z-9999 bg-opacity-100`+getLoadingScreenClass()}>
      <div className="items-center justify-center h-screen">
        <div className="loadingScreenLoader text-white text-2xl font-semibold">
          <HashLoader color={'#000000'} loading={true} size={150} />
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
