import React from 'react';
import Axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

// Create the context object
const UserContext = React.createContext<User[]>([]);

// Create the provider component
const UserProvider: React.FC = ({ children }) => {
  // Define the state for the context data
  const [users, setUsers] = React.useState<User[]>([]);

  // Fetch the data from the API when the component mounts
  React.useEffect(() => {
    Axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  // Return the provider component with the context value
  return (
    <UserContext.Provider value={users}>
      {children}
    </UserContext.Provider>
  );
};

// Export the context and provider components
export { UserContext, UserProvider };