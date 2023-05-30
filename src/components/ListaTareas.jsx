import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ tareas, borrarTarea }) => {
  return (
    <ListGroup>
      {tareas.map((tarea, indiceTarea) => <ItemTarea tarea={tarea} key={indiceTarea} borrarTarea={borrarTarea}></ItemTarea>)
      }
    </ListGroup>
  );
};

export default ListaTareas;
