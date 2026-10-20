import { useState } from "react";
import BoardColumn from "../components/BoardColumn";
import { initialBoards } from "../data/initialBoards";
import "../style/Board.css";

export default function Board() {
  const [columns, setColumns] = useState(initialBoards);

  function addCard(columnId) {
    const title = prompt("Nhập tên công việc:");
    if (!title || !title.trim()) return;

    const newCard = {
      id: Date.now(),
      title: title.trim()
    };

    setColumns(
      columns.map((column) =>
        column.id === columnId
          ? { ...column, cards: [...column.cards, newCard] }
          : column
      )
    );
  }

  return (
    <main className="container">
      <h1>Bảng công việc</h1>
      <p>Quản lý công việc của bạn theo từng giai đoạn.</p>

      <div className="board">
        {columns.map((column) => (
          <BoardColumn
            key={column.id}
            column={column}
            onAddCard={addCard}
          />
        ))}
      </div>
    </main>
  );
}