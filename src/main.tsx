import React from 'react';
import ReactDOM from 'react-dom/client';
import TableEditorCanvas from './TableEditorCanvas';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <TableEditorCanvas />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);