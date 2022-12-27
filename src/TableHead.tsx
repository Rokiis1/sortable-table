import React from 'react';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

interface TableHeadProps {
    sortUsers: (key: string, direction: 'asc' | 'desc') => void;
    sortKey: string;
    sortDirection: 'asc' | 'desc';
}

const TableHead: React.FC<TableHeadProps> = ({ sortUsers, sortKey, sortDirection }) => (
    <thead>
        <tr>
            <th>
                <button onClick={() => sortUsers('id', sortDirection === 'asc' ? 'desc' : 'asc')}>
                    ID
                    {sortKey === 'id' && sortDirection === 'asc' && <FiArrowUp />}
                    {sortKey === 'id' && sortDirection === 'desc' && <FiArrowDown />}
                </button>
            </th>
            <th>
                <button onClick={() => sortUsers('name', sortDirection === 'asc' ? 'desc' : 'asc')}>
                    Name
                    {sortKey === 'name' && sortDirection === 'asc' && <FiArrowUp />}
                    {sortKey === 'name' && sortDirection === 'desc' && <FiArrowDown />}
                </button>
            </th>
            <th>
                <button onClick={() => sortUsers('email', sortDirection === 'asc' ? 'desc' : 'asc')}>
                    Email
                    {sortKey === 'email' && sortDirection === 'asc' && <FiArrowUp />}
                    {sortKey === 'email' && sortDirection === 'desc' && <FiArrowDown />}
                </button>
            </th>
        </tr>
    </thead>
);

export default TableHead;