import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  amountDisabled = false,
  seletCurrency = "USD",
  onCurrencyChange,
  currencyDisabled = false,
  currencyOptions = [],
}) => {
  const referenceId = useId();

  return (
    <div className="border border-gray-50 flex max-w-[460px] gap-4 p-4 rounded-lg bg-white">
      <div className="flex flex-col gap-2 w-1/2">
        <label 
          className="text-gray-500 text-lg" 
          htmlFor={referenceId}
        >
          {label} :
        </label>
        <input
          className="border border-gray-300 focus:outline-none rounded-md px-1"
          type="number"
          value={amount}
          placeholder="Amount"
          disabled={amountDisabled}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          id={referenceId}
        />
      </div>
      <div className="flex flex-col items-end gap-2 w-1/2">
        <label 
          className="text-gray-500 text-lg" 
        >
          Currency Type
        </label>
        <select
          className="border border-gray-300 focus:outline-none rounded-md px-1"
          value={seletCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
