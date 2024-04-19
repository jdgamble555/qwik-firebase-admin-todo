import { component$ } from "@builder.io/qwik";
import { useTodos, addTodo } from "~/lib/todos";
import { Todo } from "./todo-item";

// todo component
export default component$(() => {

    const { todos } = useTodos();

    return (
        <div>
            <div class="grid grid-cols-[auto,auto,auto,auto] gap-3 justify-items-start">
                {todos.length
                    ? todos.map((todo) => <Todo key={todo.id} {...{ todo }} />)
                    : <p><b>Add your first todo item!</b></p>
                }
            </div>
            <TodoForm />
        </div>
    );
});

// todo form
export const TodoForm = () => {
    return (
        <form class="flex gap-3 items-center justify-center mt-5" preventdefault:submit onSubmit$={(e) => addTodo(e)}>
            <input class="border p-2" name="task" />
            <button class="border p-2 rounded-md text-white bg-sky-700" type="submit">
                Add Task
            </button>
        </form>
    );
};