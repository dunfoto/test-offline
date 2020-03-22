import React, { useState, useEffect } from 'react';
import Question5 from './containers/question5';
import { itemQ5 } from './common/type';

interface AppProps {
  question5: itemQ5[];
}

const App = React.memo((props: AppProps) => {
  const { question5 } = props;
  const [q5, setQ5] = useState<itemQ5[]>([]);

  useEffect(() => {
    setQ5(question5.sort((a, b) => {
      if (a._id < b._id) {
        return 1;
      }
      if (a._id > b._id) {
        return -1;
      }
      return 0;
    }))
  }, [question5])

  const updateQuestion5 = (_id: number, newData: string) => {
    const foundIndex = q5.findIndex(item => item._id === _id);
    let tempQ5 = [...q5];
    tempQ5[foundIndex].title = newData;
    setQ5(tempQ5);
  }

  const updateBooleanQ5 = (_id: number, boolean: boolean, type: 'edit' | 'active') => {
    const foundIndex = q5.findIndex(item => item._id === _id);
    let tempQ5 = [...q5];
    tempQ5[foundIndex][type] = boolean;
    setQ5(tempQ5);
  }

  const addItemQ5 = () => {
    const newItem = { _id: Number(q5.length + 1), title: '', active: false, edit: true } as itemQ5;
    let tempQ5 = [...q5]
    tempQ5.unshift(newItem)
    setQ5(tempQ5);
  }

  const deleteItemQ5 = (_id: number) => {
    const foundIndex = q5.findIndex(item => item._id === _id);
    let temp = [...q5];
    temp.splice(foundIndex, 1);
    setQ5(temp);
  }

  return (
    <React.Fragment>
      <h2>Question - 5:</h2>
      <button onClick={addItemQ5}>Add</button>
      <div>
        <Question5 data={q5} updateData={updateQuestion5} updateBoolean={updateBooleanQ5} deleteQ5={deleteItemQ5} />
      </div>
    </React.Fragment>
  );
})

export default App;
