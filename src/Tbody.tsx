import React from 'react';
import { User } from './interfaces';

interface Props {
    users: User[];
}

const Tbody: React.FC<Props> = ({ users }) => {
    return (
        <tbody>
            {users.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                </tr>
            ))}
        </tbody>
    );
};

export default Tbody;