import React from 'react';
import { useUsers } from './context';

interface TableBodyProps {
    searchTerm: string;
}

const TableBody: React.FC<TableBodyProps> = ({ searchTerm }) => {
    const { users } = useUsers();
    const filteredUsers = users.filter(user => user.name.includes(searchTerm));

    return (
        <tbody>
            {filteredUsers.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;