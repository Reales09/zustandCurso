import { JiraTasks } from '../../components';
import { useTaskStore } from '../../stores';

export const JiraPage = () => {

  const task = useTaskStore( state => state.tasks );

  console.log(task);

  const pendingTask = useTaskStore(state => state.getTaskByStatus('open'))

  console.log(pendingTask);

  const inProgressTask = useTaskStore(state => state.getTaskByStatus('in-progress'))
  console.log(inProgressTask);

  const doneTask = useTaskStore(state => state.getTaskByStatus('done'))
  console.log(doneTask);

  
  

  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <JiraTasks title='Pendientes' value='open' tasks={pendingTask} />
          
          <JiraTasks title='Avanzando' value='in-progress' tasks={inProgressTask} />
          
          <JiraTasks title='Terminadas' value='done' tasks={doneTask} />

      </div>

      



    </>
  );
};