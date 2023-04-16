// import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHTTP from '../../hooks/use-http';

const NewTask = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const applyData = (taskText,data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  }

  const { isLoading, error, sendRequest: sendTaskHandler } = useHTTP(applyData);

  const enterTaskHandler = async (taskText) => {
    sendTaskHandler({
      url: 'https://red-positive-internship-task-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { text: taskText }
    }, applyData.bind(null,taskText));


    //   try {
    //     const response = await fetch(
    //       ,
    //       {
    //         method: 'POST',
    //         body: JSON.stringify({ text: taskText }),

    //       }
    //     );

    //     if (!response.ok) {
    //       throw new Error('Request failed!');
    //     }

    //     const data = await response.json();


    //   } catch (err) {
    //     setError(err.message || 'Something went wrong!');
    //   }
    //   setIsLoading(false);
    };

    return (
      <Section>
        <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
        {error && <p>{error}</p>}
      </Section>
    );
  };

  export default NewTask;
