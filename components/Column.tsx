import { Draggable, Droppable } from "react-beautiful-dnd";
import Card from "./Card";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

type Props = {
  id: string;
  todos: Todo[];
  index: number;
};

const idToColumnText: {
  [key in TypedColumn]: string;
} = {
  todo: "To Do",
  inprogress: "In Progress",
  done: "Done",
};

const Column = ({ id, todos, index }: Props) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          // className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={index.toString()} type="card">
            {(provided, snapshot) => (
              <div
                className={`pb-2 rounded-2xl shadow-sm ${
                  snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"
                }`}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h2 className="flex justify-between font-bold text-xl p-2">
                  {idToColumnText[id]}
                  <span className="text-gray-500 bg-gray-200 px-2 py-1 rounded-full text-sm font-normal">
                    {todos.length}
                  </span>
                </h2>

                <div className="space-x-2">
                  {todos.map((todo, index) => (
                    <Draggable
                      key={todo.id}
                      draggableId={todo.id}
                      index={index}
                    >
                      {(provided) => (
                        <Card
                          key={todo.id}
                          todo={todo}
                          index={index}
                          innerRef={provided.innerRef}
                          draggableProps={provided.draggableProps}
                          dragHandleProps={provided.dragHandleProps}
                        />
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}

                  <div className="flex justify-end p-2">
                    <button className="text-green-500 hover:text-green-600">
                      <PlusCircleIcon className="h-10 w-10" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
