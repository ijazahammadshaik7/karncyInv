import React from "react";

const Transactions = () => {
  return (
    <>
      <div className="p-3 px-12 flex flex-col gap-3">
        <div className="flex md:w-[20%] justify-between flex-col sm:flex-row">
          <p>03 Jul ‘21</p>
          <p>Rs. 1,16,500</p>
        </div>
        <div className=" flex flex-col gap-3 border-l border-l-grayccc pl-3">
          <p>Wallet Withdraw</p>
          <p className="md:max-w-xs">
            Withdraw for amount 1,16,500 For user FNX7239
          </p>
        </div>
      </div>
      <div className="p-3 px-12 flex flex-col gap-3">
        <div className="flex md:w-[20%] justify-between flex-col sm:flex-row">
          <p>03 Jul ‘21</p>
          <p>Rs. 1,16,500</p>
        </div>
        <div className=" flex flex-col gap-3 border-l border-l-grayccc pl-3">
          <p>Wallet Withdraw</p>
          <p className="md:max-w-xs">
            Withdraw for amount 1,16,500 For user FNX7239
          </p>
        </div>
      </div>
    </>
  );
};

export default Transactions;
