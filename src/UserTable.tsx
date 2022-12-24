import React, { useState } from 'react';
import Thead from './Thead';
import Tbody from './Tbody';
import { useUsers } from './useUser';
import { User } from './interfaces';


const UserTable: React.FC = () => {
    const [sortColumn, setSortColumn] = useState<keyof User>('id');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const users = useUsers(sortColumn, sortOrder);

    return (
        <div>
            <table>
                <Thead
                    sortColumn={sortColumn}
                    sortOrder={sortOrder}
                    setSortColumn={setSortColumn}
                    setSortOrder={setSortOrder}
                />
                <Tbody users={users} />
            </table>
        </div>
    );
};

export default UserTable;