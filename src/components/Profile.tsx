
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pencil } from "lucide-react";

interface ProfileProps {
  image: string;
  name: string;
  bio: string;
  onEdit?: () => void;
}

export const Profile = ({ image, name, bio, onEdit }: ProfileProps) => {
  return (
    <div className="flex flex-col items-center space-y-4 fade-in relative group">
      {onEdit && (
        <button
          onClick={onEdit}
          className="absolute right-0 top-0 p-2 glass rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Edit profile"
        >
          <Pencil className="w-4 h-4" />
        </button>
      )}
      <Avatar className="w-24 h-24 border-2 border-white shadow-lg">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div className="text-center">
        <h1 className="text-2xl font-semibold tracking-tight">{name}</h1>
        <p className="text-muted-foreground mt-2">{bio}</p>
      </div>
    </div>
  );
};
