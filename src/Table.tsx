import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSortUp, FaSortDown } from 'react-icons/fa';

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  [key: string]: any; // Index signature
}

const Table: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<keyof User | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users').then(response => {
      setUsers(response.data);
      setFilteredUsers(response.data);
    });
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setFilteredUsers(users.filter(user => user.name.toLowerCase().includes(event.target.value.toLowerCase())));
  };

  const handleSort = (column: string) => {
    if (sort === null) {
      setSort(column);
      setSortDirection('asc');
    } else if (sort === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSort(column);
      setSortDirection('asc');
    }
  };

  const sortedData = filteredUsers.sort((a, b) => {
    if (sortDirection === 'asc') {
      return a[sort as keyof User] > b[sort as keyof User] ? 1 : -1;
    } else {
      return a[sort as keyof User] < b[sort as keyof User] ? 1 : -1;
    }
  });

  return (
    <div>
      <form>
        <input type="text" placeholder="Search by name" value={search} onChange={handleSearch} />
        <button type="submit">Search</button>
      </form>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>
              ID
              {sortDirection === 'asc' ? <FaSortUp /> : <FaSortDown />}
            </th>
            <th onClick={() => handleSort('name')}>
              Name
              {sortDirection === 'asc' ? <FaSortUp /> : <FaSortDown />}
            </th>
            <th onClick={() => handleSort('email')}>
              Email
              {sortDirection === 'asc' ? <FaSortUp /> : <FaSortDown />}
            </th>
            <th onClick={() => handleSort('username')}>
              Username
              {sortDirection === 'asc' ? <FaSortUp /> : <FaSortDown />}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map(user => (
            <tr key={user.id} className="visible">
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;