import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../common/rootaState.type";
import { TodoPresenter } from "./TodoPresenter";
import { add, remove, updateComplete } from "./todoSlice";
import { Todo } from "../../common/todo.type";

export const TodoContainer = () => {
    const todos = useSelector((state: RootState) => state.todos)

    const maxID = todos.length ? todos.slice(-1)[0].id : 0;
    const dispatch = useDispatch();
        
    const addTodo = (title: string, content: string) => {
        const newTodo : Todo = {
            id: maxID+1,
            title: title,
            content: content,
            isCompleted: false,
        }
        dispatch(add(newTodo))
    }

    const removeTodo = (id: number) => {
        dispatch(remove(id))
    }

    const toggleComplete = (id: number) => {
        dispatch(updateComplete(id))
    }

    const args = {
        todos,
        addTodo,
        removeTodo,
        toggleComplete
    }

    return <TodoPresenter {...args}
                addTodo={addTodo}
                removeTodo={removeTodo}
                toggleComplete={toggleComplete}
            />
}