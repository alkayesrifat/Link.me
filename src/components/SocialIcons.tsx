
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

interface SocialIconsProps {
  socials: {
    platform: string;
    url: string;
  }[];
}

export const SocialIcons = ({ socials }: SocialIconsProps) => {
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return Github;
      case "twitter":
        return Twitter;
      case "instagram":
        return Instagram;
      case "linkedin":
        return Linkedin;
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center space-x-4 mt-6 fade-in">
      {socials.map((social) => {
        const Icon = getIcon(social.platform);
        if (!Icon) return null;

        return (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 glass rounded-full smooth-transition hover:scale-110"
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
};
