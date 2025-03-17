import React, { useState } from "react"

import Header from "./Header"
import TaskInput from "./TaskInput"
import TaskOutput from "./TaskOutput"

export type Price = 0 | 10 | 40 | 80 | 150

export interface Task {
    id: string
    name: string
    cost: Price | null
}

export default function BackgroundMain() {
    const [taskInput, setTaskInput] = useState<Task[]>([])
    const [costAmount, setCostAmount] = useState<number>(0)
    const [inputValue, setInputValue] = useState<string>("")
    const [selectedCost, setSelectedCost] = useState<Price>(0)

    function handleInputValue(e: React.ChangeEvent<HTMLInputElement>): void {
        setInputValue(e.target.value)
    }

    function handleCostSelection(
        e: React.ChangeEvent<HTMLSelectElement>
    ): void {
        const cost = Number(e.target.value) as Price
        setSelectedCost(cost)
    }

    function addTask(): void {
        if (inputValue) {
            const value = inputValue.trim()
            setTaskInput([
                ...taskInput,
                { id: crypto.randomUUID(), name: value, cost: selectedCost },
            ])

            if (taskInput) {
                setCostAmount((c) => c + selectedCost)
            }
        }
    }

    const removeTask = (id: string, cost: Price): void => {
        if(id && cost !== null){
            setTaskInput(taskInput.filter((item) => item.id !== id))
            setCostAmount((total) => total - cost)
        } else throw console.error(`can't remove item`);
        
    }

    console.log(costAmount)
    return (
        <>
            <Header />
            <TaskInput
                selectedCost={selectedCost}
                inputValue={inputValue}
                handleInputValue={handleInputValue}
                handleCostSelection={handleCostSelection}
                onAddTask={addTask}
            />
            <TaskOutput
                tasks={taskInput}
                total={costAmount}
                removeTask={removeTask}
            />
        </>
    )
}
