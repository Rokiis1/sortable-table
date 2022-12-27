import React, { useState } from 'react';
import { createUsers } from './context';
import Table from './Table';

const App: React.FC = () => {
  const [sortKey, setSortKey] = useState('id');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const sortUsers = (key: string, direction: 'asc' | 'desc') => {
    setSortKey(key);
    setSortDirection(direction);
  };

  return (
    <createUsers>
      <Table
        sortUsers={sortUsers}
        sortKey={sortKey}
        sortDirection={sortDirection}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </createUsers>
  );
};

export default App;