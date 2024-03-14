import { useContext } from "react";

import { calculateDueDateApproaching, mock } from "../../Helpers";
import { Task } from "../../redux/Task/TaskReducer";

import Card from "../Card";
import {
  ModalDetailsContext,
  ModalDetailsContextProps,
} from "../../context/ModalTaskDetailsContext";

type TaskCardsProps = {
  tasks: Task[];
  onRemoveTask: (index: number) => void;
  onDueDateChange: (id: number, newDate: string) => void;
  setFavoriteTask: (id: number) => void;
};

const TaskCards = ({
  tasks = [],
  onRemoveTask = mock,
  onDueDateChange = mock,
  setFavoriteTask = mock,
}: TaskCardsProps) => {
  const { openModalDetails } = useContext(
    ModalDetailsContext
  ) as ModalDetailsContextProps;

  return (
    <div className="grid grid-cols-5 gap-4 p-4 h-full">
      {tasks &&
        tasks.map((card: Task) => (
          <div key={card.id}>
            <Card
              {...card}
              onDelete={() => onRemoveTask(card.id)}
              isOutdated={calculateDueDateApproaching(card.dueDate)}
              onChangeDueDate={onDueDateChange}
              onSetFavorite={() => setFavoriteTask(card.id)}
              onDetails={() => openModalDetails(card)}
            />
          </div>
        ))}
    </div>
  );
};

export default TaskCards;
