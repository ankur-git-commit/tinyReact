import { Task } from './BackgroundMain';

import { Price } from './BackgroundMain';

interface OutputDisplayProps {
  total: number;
  tasks: Task[];
  removeTask: (id: string, cost: Price) => void;
}

export default function TaskOutput({
  total,
  tasks,
  removeTask,
}: OutputDisplayProps) {
  return (
    <div className={className.taskOutputWrapper}>
      <section className={className.taskOutputContainer}>
        <p>TASK</p>
        <p>TOTAL</p>
      </section>

      <section className={className.taskListContainer}>
        {tasks.map((task) => {
          return (
            <p key={task.id} className={className.taskList}>
              <span className={className.taskName}>{task.name}</span>
              {
                <span className={className.removeButton}>
                  <button onClick={() => removeTask(task.id, task.cost)}>
                    Remove
                  </button>
                </span>
              }
              <span className={className.priceTag}>{`$${task.cost}`}</span>
            </p>
          );
        })}
      </section>

      <section className={className.bottomContainer}>
        <section className={className.bottomSection}>
          <p>NOTES</p>
          <p>We accept cash, credit card, or PayPal</p>
        </section>
        <section className={className.Total}>
          <p>TOTAL AMOUNT</p>
          <p className={className.Price}>{`$${total}`}</p>
        </section>
      </section>
    </div>
  );
}

const className = {
  taskOutputWrapper: `flex flex-col w-full max-w-2xl mx-auto px-6 mt-10`,
  taskOutputContainer: `flex flex-row justify-between text-[#D5D4D8] text-base pr-[20px]`,
  // taskListContainer: `flex flex-col gap-6 py-8 border-b-1 b-[#C3C6DB]`,
  taskListContainer: `flex flex-col gap-6 py-8 max-h-[350px] overflow-y-auto border-b border-[#C3C6DB]`,

  taskList: `flex flex-row gap-5 items-center text-[#F5F5F5]`,
  taskName: `text-4xl mr-2`,
  removeButton: `text-[#D5D4D8] text-xs cursor-pointer`,
  priceTag: `ml-auto text-right min-w-[60px] text-4xl text-[#F5F5F5] pr-[10px]`,
  bottomContainer: `flex flex-row justify-between pt-8 `,
  bottomSection: `flex flex-col gap-5 [#D5D4D8]`,
  Total: `flex flex-col gap-5 items-end [#D5D4D8]`,
  Price: `text-5xl font-bold`
};
