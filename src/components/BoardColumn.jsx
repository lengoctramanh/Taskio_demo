import TaskCard from "./TaskCard";

export default function BoardColumn({ column, onAddCard }) {
  return (
    <section className="board-column">
      <h2>
        {column.title} <span>({column.cards.length})</span>
      </h2>

      {column.cards.map((card) => (
        <TaskCard key={card.id} card={card} />
      ))}

      <button onClick={() => onAddCard(column.id)}>
        + Thêm công việc
      </button>
    </section>
  );
}