import { useState } from "react"
import AddItems from "./components/AddItems"
import DisplayItems from "./components/DisplayItems"

interface Chore {
    id: string
    text: string
}

function App() {
    const [chore, setChore] = useState<Chore[]>([])
    const [inputValue, setInputValue] = useState<string>("")
    const [selectedChoreId, setSelectedChoreId] = useState<string | null>(null)

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setInputValue(e.target.value)
    }

    function handleAddChore(e: React.FormEvent<HTMLFormElement>): void {
        console.log(e)
        const addedChore = inputValue.trim()

        if (addedChore) {
            setChore([
                ...chore,
                { id: crypto.randomUUID(), text: addedChore.charAt(0).toUpperCase() + addedChore.slice(1).toLowerCase()},
            ])

            setInputValue("")
        }
    }

    function handleRemoveChore(): void {
        if (selectedChoreId){
            setChore(chore.filter(item => item.id !== selectedChoreId))
        }
        setSelectedChoreId(null)
    }

    function handleSelectChore(id: string): void {
        setSelectedChoreId(id === selectedChoreId ? null : id)
    }

    return (
        <>
            <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
                <div className={className.mainWrapper}>
                    <div className={className.mainContainer}>
                        <h1 className={className.heading}>Choreslist</h1>
                        <AddItems
                            onInputChange={handleInputChange}
                            onAddChore={handleAddChore}
                            inputValue={inputValue}
                            onRemoveChore={handleRemoveChore}
                
                        />
                        <DisplayItems chore={chore} onSelectChore={handleSelectChore} selectedChoreId={selectedChoreId}/>
                    </div>
                </div>
            </div>
        </>
    )
}

const className = {
    mainWrapper: `flex flex-col justify-center items-center p-5 border-none rounded-2xl w-[50vh] shadow-2xl`,
    mainContainer: `flex flex-col gap-4`,
    heading: `font-concert text-5xl text-center pb-5`,

}

export default App
