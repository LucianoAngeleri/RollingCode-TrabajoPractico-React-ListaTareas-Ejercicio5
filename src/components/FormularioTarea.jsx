import { Form, Button } from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import { useState } from 'react';

const FormularioTarea = () => {
    const [tarea, setTarea] = useState("")
    const [tareas, setTareas] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault();
        setTareas([...tareas, tarea])
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex" controlId="tarea">
                    <Form.Control 
                        type="text" 
                        placeholder="Escribe la tarea..." 
                        onChange={(e) => setTarea(e.target.value)} 
                        value={tarea} />
                    <Button variant="primary" type="submit">Añadir</Button>
                </Form.Group>
            </Form>
            <ListaTareas></ListaTareas>
        </>
    );
};

export default FormularioTarea;