import { Price } from "./BackgroundMain"

interface InputProps {
    inputValue: string
    selectedCost: Price
    handleInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void
    onAddTask: () => void
    handleCostSelection: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function TaskInput({
    inputValue,
    selectedCost,
    handleInputValue,
    onAddTask,
    handleCostSelection,
}: InputProps) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onAddTask()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                />{" "}
                <select
                    className={className.selectBox}
                    name="payment-amount"
                    id="payment-amount"
                    required
                    value={selectedCost.toString()}
                    onChange={handleCostSelection}
                >
                    <option value="">--Chose price--</option>
                    <option value="10">$10</option>
                    <option value="40">$40</option>
                    <option value="80">$80</option>
                    <option value="150">$150</option>
                </select>{" "}
                <button className={className.submitButton} type="submit">
                    {" "}
                    +{" "}
                </button>
            </form>
        </div>
    )
}

const commonStyle = `border-2`

const className = {
    inputField: `${commonStyle}`,
    selectBox: `${commonStyle}`,
    submitButton: `${commonStyle} px-2 py-auto`,
}
