import { useEffect, useState } from 'react'

function App() {
  const [msg, setMsg] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:8000/api/test', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => setMsg('Error: ' + err.message));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>{msg}</h1>
    </div>
  );
}

export default App;
