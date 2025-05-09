import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserAvatar = ({ user = {} }) => {
  return (
    <Avatar>
      <AvatarImage src={user?.image || ""} alt={user?.name} />
      <AvatarFallback>
        {user?.name?.charAt(0)?.toUpperCase() || "U"}
      </AvatarFallback>
    </Avatar>
  );
};
