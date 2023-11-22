import { FaTrash } from "react-icons/fa";
import { useThunk } from "../hooks/use-thunk";
import { removeUser } from "../store";
import AlbumsList from "./AlbumsList";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleClick}>
        <FaTrash />
      </Button>
      {error && <div>Error deleting user.</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}

export default UsersListItem;
