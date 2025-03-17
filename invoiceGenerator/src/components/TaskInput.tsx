import { Price } from './BackgroundMain';

interface InputProps {
  inputValue: string;
  selectedCost: Price;
  handleInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddTask: () => void;
  handleCostSelection: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function TaskInput({
  inputValue,
  selectedCost,
  handleInputValue,
  onAddTask,
  handleCostSelection,
}: InputProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddTask();
  };

  return (
    <div className={className.textInputWrapper}>
      <section>
        <form className={className.textInputContainer} onSubmit={handleSubmit}>
          <input
            className={className.inputField}
            type="text"
            name="task-input"
            id="task-input"
            required
            autoCapitalize="on"
            autoComplete="off"
            placeholder="Enter Task"
            value={inputValue}
            onChange={handleInputValue}
          />
          <select
            className={className.selectBox}
            name="payment-amount"
            id="payment-amount"
            required
            value={selectedCost.toString()}
            onChange={handleCostSelection}
          >
            <option value="">Select Price</option>
            <option value="10" className={className.optionFont}>
              $10
            </option>
            <option value="40" className={className.optionFont}>
              $40
            </option>
            <option value="80" className={className.optionFont}>
              $80
            </option>
            <option value="150" className={className.optionFont}>
              $150
            </option>
          </select>
          <button className={className.submitButton} type="submit">
            {' '}
            +{' '}
          </button>
        </form>
      </section>
    </div>
  );
}

const className = {
  textInputWrapper: `w-full max-w-2xl mx-auto px-6 mt-10`,
  textInputContainer: `flex items-center w-full rounded-lg overflow-hidden h-16`,
  inputField: `w-full px-5 h-full text-2xl text-black outline-none border-none flex-grow bg-white placeholder-gray-400 cursor-text`,
  selectBox: `h-full text-lg text-black bg-[#F0F0F0] outline-none text-center font-bold border-1 border-black`,
  optionFont: ``,
  submitButton: `h-full px-6 bg-[#3A69D2] text-white text-5xl border-none outline-none flex items-center justify-center cursor-pointer`,
};
