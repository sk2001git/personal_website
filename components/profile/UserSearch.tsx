import { useState, useEffect, useMemo } from 'react';
import { User } from '@/types/user';

interface UserSearchProps {
  onUserSelect: (user: User) => void;
  onUserRemove: (userId: string) => void;
  selectedUsers: User[];
  allUsers: User[];
}

const UserSearch: React.FC<UserSearchProps> = ({ onUserSelect, onUserRemove, selectedUsers, allUsers }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [hasOneUser, setHasOneUser] = useState(false);

  const memoizedSelectedUsers = useMemo(() => {return selectedUsers;}, [selectedUsers]);

  const searchResults = useMemo(() => {
    if (searchTerm.trim() === '') {
      setDropdownVisible(false);
      return [];
    }

    const filteredUsers = allUsers.filter((user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredUsers.filter((user) => !memoizedSelectedUsers.some((selectedUser) => selectedUser._id === user._id));
  }, [searchTerm, memoizedSelectedUsers, allUsers]);

  useEffect(() => {
    setDropdownVisible(searchResults.length > 0);
  }, [searchResults]);

  const handleUserSelect = (user: User) => {
    if (memoizedSelectedUsers.length > 1) {
      setHasOneUser(false);
    }
    onUserSelect(user);
    setSearchTerm('');
    setDropdownVisible(false);
  };

  const handleUserRemove = (userId: string) => {
    if (memoizedSelectedUsers.length === 1) {
      setHasOneUser(true);
    } else {
      onUserRemove(userId);

    }
  };

  return (
    <div className="relative space-y-5">
      <div className="flex flex-wrap">
        {memoizedSelectedUsers.map((user) => (
          <span key={user._id} className="py-1 px-2 m-2 text-sm font-medium rounded-md border border-teal-400 bg-teal-100 text-teal-600 hover:bg-teal-200">
            {user.username}
            {memoizedSelectedUsers.length > 1 && (
              <div onClick={() => handleUserRemove(user._id)} className="ml-2 cursor-pointer text-red-500">
                &times; Remove
              </div>
            )}
          </span>
        ))}
      </div>
      <div className="">
        <input
          className="border w-full rounded-xl p-2"
          type="search"
          placeholder="Search for users"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {isDropdownVisible && (
          <ul className=" bg-white border border-gray-300 p-2 rounded-b-xl w-full">
            {searchResults.map((user) => (
              <li className="cursor-pointer" key={user._id} onClick={() => handleUserSelect(user)}>
                {user.username}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
