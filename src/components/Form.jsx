import Button from "./Button.jsx";
import React, { useState, useEffect } from 'react';

export default function Form() {
  const [state, setState] = useState({
    tasks: '',
    taskStatus: {},
    isCopied: false,
    taskPlusCounts: {},
    totalPoints: 0,
  });

  const handleTaskChange = (event) => {
    const newTasks = event.target.value;
    setState((prevState) => ({ ...prevState, tasks: newTasks }));
    updateTaskStatusAndPoints(newTasks);
  };

  const handleStatusChange = (task, status) => {
    const { taskStatus } = state;
    taskStatus[task] = status;
    setState((prevState) => ({ ...prevState, taskStatus }));
    updateTaskStatusAndPoints(state.tasks);
  };

  const updateTaskStatusAndPoints = (tasks) => {
    // Split tasks and calculate points based on statuses
    const taskArray = tasks.split('\n').filter((task) => task.trim() !== '');
    const updatedTaskStatus = { ...taskStatus };
    let totalPoints = 0;
    let taskPlusCounts = {}; // Store the '+' counts for each task

    taskArray.forEach((task) => {
      const taskName = task.trim();
      const status = updatedTaskStatus[taskName] || 'done'; // Set default state to 'done'
      updatedTaskStatus[taskName] = status;

      const plusCount = (taskName.match(/\+/g) || []).length; // Count '+' symbols
      taskPlusCounts[taskName] = plusCount; // Store the count for this task

      if (status === 'done') {
        totalPoints += plusCount + 1; // 'done' points: count of '+' symbols + 1
      } else if (status === 'partiallyDone') {
        totalPoints += (plusCount + 1) / 2; // 'partiallyDone' points: (count of '+' symbols + 1) / 2
      }
    });

    // Update the totalPoints state
    setState((prevState) => ({
      ...prevState,
    }));
  };


  const setAllTasksStatus = (status) => {
    const { taskStatus } = state;
    const updatedStatus = {};

    // Set all tasks to the specified status
    for (const task in taskStatus) {
      updatedStatus[task] = status;
    }

    // Update the taskStatus and recalculate points
    setState((prevState) => ({ ...prevState, taskStatus: updatedStatus }));
    updateTaskStatusAndPoints(state.tasks);
  };


  const copyTaskList = () => {
    const taskListText = document.querySelector('.task-list-text');
    if (taskListText) {
      const textToCopy = taskListText.textContent;
      navigator.clipboard.writeText(textToCopy);

      setState((prevState) => ({ ...prevState, isCopied: true }));
      setTimeout(() => {
        setState((prevState) => ({ ...prevState, isCopied: false }));
      }, 500);
    }
  };

  useEffect(() => {
    // Code that should run on component mount
  }, []);

  const { tasks, taskStatus, totalPoints, isCopied } = state;
  const taskArray = tasks.split('\n').filter((task) => task.trim() !== '');
  let totalPlusCount = 0;

  taskArray.forEach((task) => {
    const plusCount = (task.match(/\+/g) || []).length;
    totalPlusCount += plusCount;
  });

  return (
    <div>
      <h1>Kriteriální hodnocení</h1>
      <textarea
        placeholder="Napište kritéria, oddělujte prázdným řádkem. Pokud ke kritériu přidáte „+“, započítá se za něj více bodů."
        value={tasks}
        onChange={handleTaskChange}
        rows="10"
        className="border-2 border-slate-400 focus:border-blue-400 focus:outline-none rounded p-1 w-full lg:w-1/2"
      ></textarea>

      {tasks && tasks.trim() !== '' && (
        <>
      <table>
        <thead>
          <tr>
            <th>kritérium</th>
            <th>míra splnění</th>
          </tr>
        </thead>
        <tbody>
          {taskArray.map((task, index) => {
            const taskName = task.trim();
            const status = taskStatus[taskName] || 'done'; // Set default state to 'done'
            return (
              <tr key={index}>
                <td>{taskName.replace(/\+/g, '')}</td>
                <td className="flex gap-2">
                  <label className="flex gap-1 items-center">
                    <input
                      type="radio"
                      name={`task-${index}`}
                      value="done"
                      checked={status === 'done'}
                      onChange={() => handleStatusChange(taskName, 'done')}
                    />
                    splněno
                  </label>
                  <label className="flex gap-1 items-center">
                    <input
                      type="radio"
                      name={`task-${index}`}
                      value="partiallyDone"
                      checked={status === 'partiallyDone'}
                      onChange={() => handleStatusChange(taskName, 'partiallyDone')}
                    />
                    částečně splněno
                  </label>
                  <label className="flex gap-1 items-center">
                    <input
                      type="radio"
                      name={`task-${index}`}
                      value="notDone"
                      checked={status === 'notDone'}
                      onChange={() => handleStatusChange(taskName, 'notDone')}
                    />
                    nesplněno
                  </label>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="mt-3">
        celkem bodů: {totalPoints !== undefined ? totalPoints.toString().replace('.', ',') : ''}/{taskArray.length + totalPlusCount}
      </p>

      <div>
        <p className="task-list-text mt-3">
          {taskArray.map((task, index) => {
            const taskName = task.trim();
            const status = taskStatus[taskName] || 'done'; // Set default state to 'done'
            const plusCount = (taskName.match(/\+/g) || []).length;
            const points = status === 'done' ? 'splněno' : (status === 'partiallyDone' ? 'částečně splněno' : 'nesplněno');

            // Use conditional rendering to add a comma after each task except the last one
            return (
              <span key={index}>
                {index === 0 ? '' : ', '}
                {taskName.replace(/\+/g, '')} – {points} (
                {status === 'done'
                  ? plusCount >= 1
                    ? `${(plusCount + 1).toString().replace('.', ',')} b.` // Add 1 to the totalPlusCount when 'done'
                    : '1 b.' // Default 'done' points
                  : status === 'partiallyDone'
                    ? plusCount >= 1
                      ? `${((plusCount + 1) / 2).toString().replace('.', ',')} b.` // Add 1 to the totalPlusCount and divide by 2 when 'partiallyDone'
                      : '0,5 b.' // Default 'partiallyDone' points
                    : '0 b.' // Default 'notDone' points
                })
              </span>
            );
          })}
        </p>
      </div>
      <div className="mt-3 flex gap-1 flex-wrap">
        <Button buttonText='vše splněno' onClick={() => setAllTasksStatus('done')}/>
        <Button buttonText='vše částečně splněno' onClick={() => setAllTasksStatus('partiallyDone')}/>
        <Button buttonText='vše nesplněno' onClick={() => setAllTasksStatus('notDone')}/>
        <Button onClick={copyTaskList} buttonText={isCopied ? 'zkopírováno!' : 'zkopíruj výpis'} disabled={isCopied} />
        </div>
        </>
      )}
    </div>)
}
