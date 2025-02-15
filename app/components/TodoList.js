"use client";
export default function TodoList({ todos, removeTodo }) {
    return (
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>
            <div>
              <strong>{todo.activity}</strong> ({todo.type}) - RM{todo.price} 
              <br />
              Booking: {todo.bookingRequired ? "Yes" : "No"} | Accessibility: {todo.accessibility}
            </div>
            <button onClick={() => removeTodo(index)} style={{ background: "red", color: "white", border: "none", cursor: "pointer" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
  