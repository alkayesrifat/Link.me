
import { Profile } from "@/components/Profile";
import { LinkCard } from "@/components/LinkCard";
import { SocialIcons } from "@/components/SocialIcons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ExternalLink, Github, Youtube, Mail } from "lucide-react";

const links = [
  {
    title: "My Portfolio",
    url: "https://example.com",
    icon: ExternalLink,
  },
  {
    title: "GitHub",
    url: "https://github.com",
    icon: Github,
  },
  {
    title: "YouTube Channel",
    url: "https://youtube.com",
    icon: Youtube,
  },
  {
    title: "Contact Me",
    url: "mailto:example@email.com",
    icon: Mail,
  },
];

const socials = [
  {
    platform: "github",
    url: "https://github.com",
  },
  {
    platform: "twitter",
    url: "https://twitter.com",
  },
  {
    platform: "instagram",
    url: "https://instagram.com",
  },
  {
    platform: "linkedin",
    url: "https://linkedin.com",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen w-full max-w-2xl mx-auto px-4 py-16">
      <ThemeToggle />
      <div className="space-y-8">
        <Profile
          image="/placeholder.svg"
          name="John Doe"
          bio="Frontend Developer & UI Designer | Creating beautiful user experiences"
        />
        
        <div className="space-y-4 fade-in">
          {links.map((link) => (
            <LinkCard
              key={link.title}
              icon={link.icon}
              title={link.title}
              url={link.url}
            />
          ))}
        </div>

        <SocialIcons socials={socials} />
      </div>
    </div>
  );
};

export default Index;
