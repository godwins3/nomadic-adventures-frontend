import { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

interface Destination {
  id: number;
  name: string;
}

const ItineraryBuilder: React.FC<{ destinations: Destination[] }> = ({ destinations }) => {
  const [itinerary, setItinerary] = useState<Destination[]>([]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(itinerary);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setItinerary(items);
  };

  const addToItinerary = (destination: Destination) => {
    setItinerary([...itinerary, destination]);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Build Your Itinerary</h2>
      <div className="flex">
        <div className="w-1/2 pr-4">
          <h3 className="text-xl font-semibold mb-2">Available Destinations</h3>
          {destinations.map((dest) => (
            <div key={dest.id} className="mb-2 p-2 bg-gray-100 rounded flex justify-between items-center">
              <span>{dest.name}</span>
              <button
                onClick={() => addToItinerary(dest)}
                className="bg-blue-600 text-white px-2 py-1 rounded text-sm"
              >
                Add
              </button>
            </div>
          ))}
        </div>
        <div className="w-1/2 pl-4">
          <h3 className="text-xl font-semibold mb-2">Your Itinerary</h3>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="itinerary">
              {(provided) => (
                <ul {...provided.droppableProps} ref={provided.innerRef}>
                  {itinerary.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="mb-2 p-2 bg-blue-100 rounded"
                        >
                          {item.name}
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default ItineraryBuilder;

