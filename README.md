# Base de Dados - TABELAS Component

Advanced table editor component for the Base de Dados workspace in plataforma.app.

## 🎯 Overview

TABELAS is a sophisticated spreadsheet-like table editor that provides:
- Direct database table editing
- Excel-like formulas and functions
- Multiple data views and filters
- File attachments support
- Real-time data synchronization
- Multi-instance support (open multiple tables simultaneously)

## 🏗️ Architecture

This component follows the plataforma.app component isolation architecture:
- **Independent Repository**: Separately developed and versioned
- **Dynamic Loading**: Loaded on-demand by the Base de Dados workspace
- **Multi-Instance**: Can run multiple windows simultaneously
- **State Persistence**: Each instance maintains its own state

## 📦 Installation

### For Development

```bash
# Clone the repository
git clone https://github.com/betofilippi/plataforma.basededados.tabelas.git
cd plataforma.basededados.tabelas

# Install dependencies
npm install

# Start development server
npm run dev
```

The component will be available at `http://localhost:5001`

### For Production

The component is automatically built and deployed to CDN. The Base de Dados workspace loads it from:
```
https://cdn.jsdelivr.net/gh/betofilippi/plataforma.basededados.tabelas@latest/dist/index.js
```

## 🔧 Development

### Project Structure

```
src/
├── index.tsx           # Main export
├── TableEditorCanvas.tsx   # Main component
├── table-editor/       # Core table editor modules
│   └── modules/
│       ├── config/     # Formulas and styles
│       ├── constants/  # Types and constants
│       ├── handlers/   # Event handlers
│       └── utils/      # Helper functions
├── components/         # Sub-components
├── hooks/             # React hooks
├── lib/               # Libraries and utilities
└── types/             # TypeScript definitions
```

### Building

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔗 Integration with Base de Dados Workspace

The component is loaded dynamically by the DatabaseModule:

```typescript
const handleOpenTabelas = async () => {
  const { default: TabelasComponent } = await import('@plataforma/basededados-tabelas');
  
  createWindow(
    'Tabelas - Instance',
    <TabelasComponent />,
    {
      size: { width: 1400, height: 900 },
      position: { x: 50, y: 30 }
    }
  );
};
```

## 🚀 Features

### Core Functionality
- **Direct Database Editing**: Edit PostgreSQL tables directly
- **Schema Explorer**: Browse and select tables from any schema
- **Data Types**: Full support for all PostgreSQL data types
- **Constraints**: Respect and validate database constraints

### Advanced Features
- **Excel-like Formulas**: SUM, AVG, COUNT, and more
- **Filtering & Sorting**: Advanced data filtering options
- **File Attachments**: Attach files to cells
- **Undo/Redo**: Full history management
- **Multi-Selection**: Select and edit multiple cells
- **Copy/Paste**: Clipboard operations support

### UI Features
- **Resizable Columns**: Adjust column widths
- **Virtualized Rendering**: Handle large datasets efficiently
- **Zoom Controls**: Zoom in/out for better visibility
- **Dark Mode**: Integrated with platform theme

## 📊 Database Schema

The component works with the `Base_de_Dados` schema in Supabase:

```sql
-- Base_de_Dados schema
CREATE SCHEMA IF NOT EXISTS "Base_de_Dados";

-- Metadata table
CREATE TABLE "Base_de_Dados".metadata (
  id SERIAL PRIMARY KEY,
  key VARCHAR(255) UNIQUE NOT NULL,
  value JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🔐 Security

- All database operations go through authenticated APIs
- Row-level security (RLS) enforced
- User permissions respected
- SQL injection prevention

## 📝 License

MIT License - See LICENSE file for details

## 🤝 Contributing

Contributions are welcome! Please read CONTRIBUTING.md for guidelines.

## 🐛 Issues

Report issues at: https://github.com/betofilippi/plataforma.basededados.tabelas/issues

## 👥 Authors

- NXT Platform Team

---

Part of the plataforma.app ecosystem