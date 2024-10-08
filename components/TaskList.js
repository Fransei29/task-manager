import React from 'react';
import styles from '../app/page.module.css'; // Import CSS module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import Font Awesome component
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'; 

// TaskList component to display a list of tasks with edit and delete options
const TaskList = ({ tasks, handleEdit, handleDelete }) => {
  return (
    <>
    <h1 className={styles.titleList}>Tasks</h1>
    <ul className={styles.taskList}>                            {/* List of tasks */}
      {tasks.map((task) => (
        <li key={task.id} className={styles.task}>
          <div className={styles.taskContent}>
            <h2 className={styles.taskTitle}>{task.title}</h2> 
            <p>{task.description}</p>
          </div>
          <div className={styles.taskButtons}>                  {/* Buttons for editing and deleting tasks */}
            <button className={styles.editButton} onClick={() => handleEdit(task)}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className={styles.deleteButton} onClick={() => handleDelete(task.id)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  </>
  );
};

export default TaskList;
