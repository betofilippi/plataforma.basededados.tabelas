/**
 * TABELAS Component
 * Advanced table editor for Base de Dados workspace
 * 
 * This component is designed to be dynamically loaded by the Base de Dados workspace
 * and can run multiple instances simultaneously as floating windows.
 */

import TableEditorCanvas from './TableEditorCanvas';

// Export the component as default for dynamic imports
export default TableEditorCanvas;

// Also export as named export for flexibility
export { TableEditorCanvas };

// Export component metadata for the workspace
export const componentMetadata = {
  id: 'tabelas',
  name: 'TABELAS',
  version: '1.0.0',
  description: 'Advanced table editor with spreadsheet-like features',
  icon: 'Table',
  repository: 'https://github.com/betofilippi/plataforma.tabelas',
  author: 'NXT Platform',
  license: 'MIT',
  requirements: {
    minWindowSize: { width: 800, height: 600 },
    defaultWindowSize: { width: 1400, height: 900 },
    multiInstance: true,
    persistState: true
  }
};