import { useState } from 'react';
import Dropdown from '../components/Dropdown';

function App() {
  const [selection, setSelection] = useState(null);
  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
    { label: 'Yellow', value: 'yellow' },
  ];

  return (
    <div className="my-16 top-1/4 flex justify-center">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}

export default App;
