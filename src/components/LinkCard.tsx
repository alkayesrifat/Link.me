
import { LucideIcon } from "lucide-react";

interface LinkCardProps {
  icon: LucideIcon;
  title: string;
  url: string;
  className?: string;
}

export const LinkCard = ({ icon: Icon, title, url, className = "" }: LinkCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block w-full p-4 glass rounded-lg link-card ${className}`}
    >
      <div className="flex items-center space-x-3">
        <Icon className="w-5 h-5" />
        <span className="font-medium">{title}</span>
      </div>
    </a>
  );
};
