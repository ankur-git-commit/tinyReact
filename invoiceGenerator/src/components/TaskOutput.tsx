import { Task } from "./BackgroundMain"

import { Price } from "./BackgroundMain"

interface OutputDisplayProps {
    total: number
    tasks: Task[]
    removeTask: (id: string, cost: Price) => void
}

export default function TaskOutput({
    total,
    tasks,
    removeTask,
}: OutputDisplayProps) {
    return (
        <div>
            <p>Task : Total</p>
            {tasks.map((task) => {
                return (
                    <p key={task.id}>
                        {task.name}{" "}
                        {
                            <span className={className.removeButton}>
                                <button
                                    onClick={() =>
                                        task.cost &&
                                        removeTask(task.id, task.cost)
                                    }
                                >
                                    {" "}
                                    Remove
                                </button>
                            </span>
                        }{" "}
                        : <span>{`$${task.cost}`}</span>
                    </p>
                )
            })}
            <p>Notes</p>
            <p>We accept cash, credit card, or PayPal</p>
            <p>Total Amount: {`$${total}`}</p>
        </div>
    )
}

const className = {
    removeButton: `border-2`,
}
