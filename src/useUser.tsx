import axios from "axios";
import { useState } from "react";
import { User } from "./interfaces";
import React from "react";
import { sort } from "./sort";

export const useUsers = (sortColumn: keyof User, sortOrder: 'asc' | 'desc') => {
  const [users, setUsers] = useState<User[]>([]);

  React.useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users').then(response => {
      let sortedUsers = sort(response.data, sortColumn, sortOrder);
      setUsers(sortedUsers);
    });
  }, [sortColumn, sortOrder]);

  return users;
};