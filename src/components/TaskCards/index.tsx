import { useContext } from "react";

import { calculateDueDateApproaching, mock } from "helpers";
import { Task } from "redux/Task/TaskReducer";

import Card from "components/card";
import {
  ModalDetailsContext,
  ModalDetailsContextProps,
} from "context/ModalTaskDetailsContext";

type TaskCardsProps = {
  tasks: Task[];
  onRemoveTask: (index: string) => void;
  onDueDateChange: (id: string, newDate: string) => void;
  setFavoriteTask: (id: string) => void;
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
              onDetails={() => openModalDetails(card.id)}
            />
          </div>
        ))}
    </div>
  );
};

export default TaskCards;
