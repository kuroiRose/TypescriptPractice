import React, {useRef} from 'react';

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
    const todoInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent) =>{
        event.preventDefault();
        const enteredText = todoInputRef.current!.value;

        if(enteredText.trim().length === 0){
            return;
        }

        props.onAddTodo(enteredText);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='text'>Todo Text</label>
            <input type='text' id='text' ref={todoInputRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;