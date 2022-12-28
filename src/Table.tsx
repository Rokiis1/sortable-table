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
  const [data, setData] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
    const [sortDirection, setSortDirection] = useState<{ [key: string]: 'asc' | 'desc' }>({});

  const fetchData = async () => {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []); // Only call fetchData once

  const handleSearch = () => {
    const filteredData = data.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setData(filteredData);
  };

  const handleSort = (column: string) => {
    const sortedData = [...data].sort((a, b) => {
      if (a[column as keyof User] < b[column as keyof User]) {
        return -1;
      }
      if (a[column as keyof User] > b[column as keyof User]) {
        return 1;
      }
      return 0;
    });
    setData(sortedData);
  };

  return (
    <div>
      <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>
              ID {sortDirection.id === 'asc' ? <FaSortUp /> : <FaSortDown />}
            </th>
            <th onClick={() => handleSort('name')}>
              Name {sortDirection.name === 'asc' ? <FaSortUp /> : <FaSortDown />}
            </th>
            <th onClick={() => handleSort('email')}>
              Email {sortDirection.email === 'asc' ? <FaSortUp /> : <FaSortDown />}
            </th>
            <th onClick={() => handleSort('username')}>
              Username {sortDirection.username === 'asc' ? <FaSortUp /> : <FaSortDown />}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.id}>
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