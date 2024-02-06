import Image from 'next/image';
import React from 'react';
import emptyVehicle from '../../../public/images/emptyVehicle.png';
// import emptySeatEmptyState from '../../../public/images/no-product-found.png';


const EmptyStateContainer = ({
  subHeading,
  goto,
  showAddButton = false,
  onButtonClick,
  type,
  dynamicText,
}) => {

  return (
    <div className='flex justify-center rounded-md border shadow-md'>
      <div
        className={`bg-white text-center ${
          type === 'Recent Tasks' && 'py-6'
        } pb-6`}
      >
        <Image src={emptyVehicle} alt='No address' layout='responsive' />

        <div className=' -mt-8 text-base font-bold text-gray-700'>No Data</div>
        <div className='text-sm font-normal text-gray-500'>
          There are no {dynamicText}(s) to show here
        </div>
        {/* <CheckValidation show={subHeading}> */}
        <div className='text-base font-semibold'>{subHeading}</div>
        {/* </CheckValidation> */}
        {/* {renderButton()} */}
      </div>
    </div>
  );
};
export default EmptyStateContainer;
