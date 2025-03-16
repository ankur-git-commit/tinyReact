interface AddItemsProps {
    inputValue: string
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onAddChore: (e: React.FormEvent<HTMLFormElement>) => void
    onRemoveChore: () => void
}

export default function AddItems({
    inputValue,
    onInputChange,
    onAddChore,
    onRemoveChore

}: AddItemsProps) {
    return (
        <div className={className.addItemsContainer}>
            <form
                className={className.formContainer}
                onSubmit={(event) => {
                    event.preventDefault()
                    onAddChore(event)
                }}
            >
                <label htmlFor="input-chore"></label>
                <input
                    className={className.inputChore}
                    type="text"
                    name="input-chore"
                    id="input-chore"
                    placeholder="Enter your chore"
                    value={inputValue}
                    onChange={onInputChange}
                    autoComplete="off"
                    autoCapitalize="on"
                />
                <button type="submit" className={className.addButton}>
                    {"->"}
                </button>
                <button type="button" className={className.removeButton} onClick={onRemoveChore}>
                    ✕
                </button>
            </form>
        </div>
    )
}

const baseStyles = {
    common: "rounded-lg border-none p-3 text-center",
}

const className = {
    addItemsContainer: ``,
    formContainer: `flex flex-row justify-between gap-1`,
    inputChore: `${baseStyles.common} bg-zinc-200 font-inter flex-grow text-xl`,
    addButton: `${baseStyles.common} bg-orange-300 w-15 font-bold`,
    removeButton: `${baseStyles.common} bg-orange-400 w-15 font-bold`,
}
