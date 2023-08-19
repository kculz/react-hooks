import { useEffect, useState } from 'react';

const UseEffectHook = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // This code will run after the component has rendered

    // Perform any side-effect or asynchronous tasks here
    // For example, fetch data from an API

    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // If your effect has any cleanup, return a function to handle it
    // For example, unsubscribe from an event or cancel a request
    return () => {
      // Cleanup code here
      // This will be called when the component is unmounted or the effect is re-run
      // (e.g., if dependencies change)
    };
  }, []); // Empty dependency array indicates the effect should only run once, on component mount

  // Render the component
  return (
    <div>
      <h1>Data:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectHook;