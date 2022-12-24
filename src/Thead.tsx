import React, { Dispatch, SetStateAction } from 'react';
import { User } from './interfaces';

type Props = {
    sortColumn: keyof User;
    sortOrder: 'asc' | 'desc';
    setSortColumn: Dispatch<SetStateAction<keyof User>>;
    setSortOrder: Dispatch<SetStateAction<'asc' | 'desc'>>;
};

const Thead: React.FC<Props> = ({ sortColumn, sortOrder, setSortColumn, setSortOrder }) => {
    return (
        <thead>
            <tr>
                <th onClick={() => {
                    if (sortColumn === 'id') {
                        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                    } else {
                        setSortColumn('id');
                        setSortOrder('asc');
                    }
                }}>
                    ID {sortColumn === 'id' && sortOrder === 'asc' ? '▲' : ''}
                    {sortColumn === 'id' && sortOrder === 'desc' ? '▼' : ''}
                </th>
                <th onClick={() => {
                    if (sortColumn === 'name') {
                        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                    } else {
                        setSortColumn('name');
                        setSortOrder('asc');
                    }
                }}>
                    Name {sortColumn === 'name' && sortOrder === 'asc' ? '▲' : ''}
                    {sortColumn === 'name' && sortOrder === 'desc' ? '▼' : ''}
                </th>
                <th onClick={() => {
                    if (sortColumn === 'username') {
                        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                    } else {
                        setSortColumn('username');
                        setSortOrder('asc');
                    }
                }}>
                    Username {sortColumn === 'username' && sortOrder === 'asc' ? '▲' : ''}
                    {sortColumn === 'username' && sortOrder === 'desc' ? '▼' : ''}
                </th>
                <th onClick={() => {
                    if (sortColumn === 'email') {
                        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                    } else {
                        setSortColumn('email');
                        setSortOrder('asc');
                    }
                }}>
                    Email {sortColumn === 'email' && sortOrder === 'asc' ? '▲' : ''}
                    {sortColumn === 'email' && sortOrder === 'desc' ? '▼' : ''}
                </th>
            </tr>
        </thead>
    );
};

export default Thead;