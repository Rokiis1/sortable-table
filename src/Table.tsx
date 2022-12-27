import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';


interface TableProps {
  sortUsers: (key: string, direction: 'asc' | 'desc') => void;
  sortKey: string;
  sortDirection: 'asc' | 'desc';
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

const Table: React.FC<TableProps> = ({ sortUsers, sortKey, sortDirection, searchTerm, setSearchTerm }) => (
  <>
<form
  onSubmit={event => {
    event.preventDefault();
    const searchInput = event.currentTarget.getElementById('search') as HTMLInputElement;
    setSearchTerm(searchInput.value); // access input element by ID
  }}
>
      <input name="search" />
      <button type="submit">Search</button>
    </form>
    <table>
      <TableHead sortUsers={sortUsers} sortKey={sortKey} sortDirection={sortDirection} />
      <TableBody searchTerm={searchTerm} />
    </table>
  </>
);

export default Table;