import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ tareas }) => {
  return (
    <ListGroup>
      {tareas.map((tarea, indiceTarea) => <ItemTarea tarea={tarea} key={indiceTarea}></ItemTarea>)
      }
    </ListGroup>
  );
};

export default ListaTareas;
