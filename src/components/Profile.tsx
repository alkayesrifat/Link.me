
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfileProps {
  image: string;
  name: string;
  bio: string;
}

export const Profile = ({ image, name, bio }: ProfileProps) => {
  return (
    <div className="flex flex-col items-center space-y-4 fade-in">
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
