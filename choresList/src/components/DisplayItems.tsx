interface Chore {
    id: string
    text: string
}

interface DisplayItemsProps {
    chore: Chore[],
    selectedChoreId: null | string,
    onSelectChore: (id: string) => void
}

export default function DisplayItems({ chore, selectedChoreId, onSelectChore }: DisplayItemsProps) {
    return (
        <div className={className.choreContainer}>
            {chore.map((item: Chore) => {
                return (
                    <p
                        className={item.id === selectedChoreId ? className.choreElementSelect : className.choreElementUnselect}
                        key={item.id}
                        onClick={() => onSelectChore(item.id)}
                    >
                        {item.text}
                    </p>
                )
            })}
        </div>
    )
}

const className = {
    choreContainer : `flex flex-col gap-2 justify-center items-center`,
    choreElementUnselect : `rounded-sm border-none text-center w-full bg-amber-200 cursor-pointer p-4 text-xl`,
    choreElementSelect: `rounded-sm border-none text-center w-full bg-orange-500 cursor-pointer p-4 font-bold text-xl` 
}
