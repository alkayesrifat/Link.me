import { Profile } from "@/components/Profile";
import { LinkCard } from "@/components/LinkCard";
import { SocialIcons } from "@/components/SocialIcons";
import { ExternalLink, Github, Youtube, Mail, Pencil, Plus, Save } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useToast } from "@/components/ui/use-toast";

interface Link {
  title: string;
  url: string;
  icon: any;
}

const defaultLinks = [
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

interface ProfileData {
  name: string;
  bio: string;
  image: string;
}

const defaultProfile: ProfileData = {
  name: "Al Kayes Rifat",
  bio: "You can Try it out , you can also change everything",
  image: "https://ugc.production.linktr.ee/d7e5124a-138f-4210-8b42-d9c6760c0ceb_20240901-152552.jpeg"
};

const Index = () => {
  const { toast } = useToast();
  const [links, setLinks] = useState(() => {
    const savedLinks = localStorage.getItem("links");
    return savedLinks ? JSON.parse(savedLinks) : defaultLinks;
  });
  const [editingLink, setEditingLink] = useState<Link | null>(null);
  const [profile, setProfile] = useState<ProfileData>(() => {
    const savedProfile = localStorage.getItem("profile");
    return savedProfile ? JSON.parse(savedProfile) : defaultProfile;
  });
  const [editingProfile, setEditingProfile] = useState<ProfileData | null>(null);

  const handleSaveProfile = () => {
    if (editingProfile) {
      setProfile(editingProfile);
      localStorage.setItem("profile", JSON.stringify(editingProfile));
      setEditingProfile(null);
      toast({
        title: "Profile updated",
        description: "Your profile has been saved successfully.",
      });
    }
  };

  const handleSaveLink = (link: Link, index: number) => {
    const newLinks = [...links];
    newLinks[index] = { ...link };
    setLinks(newLinks);
    localStorage.setItem("links", JSON.stringify(newLinks));
    setEditingLink(null);
    toast({
      title: "Link updated",
      description: "Your changes have been saved successfully.",
    });
  };

  const handleAddLink = (link: Link) => {
    const newLinks = [...links, link];
    setLinks(newLinks);
    localStorage.setItem("links", JSON.stringify(newLinks));
    setEditingLink(null);
    toast({
      title: "Link added",
      description: "New link has been added successfully.",
    });
  };

  const handleDeleteLink = (index: number) => {
    const newLinks = links.filter((_, i) => i !== index);
    setLinks(newLinks);
    localStorage.setItem("links", JSON.stringify(newLinks));
    toast({
      title: "Link deleted",
      description: "The link has been removed.",
    });
  };

  return (
    <div className="min-h-screen w-full max-w-2xl mx-auto px-4 py-16">
      <div className="space-y-8">
        <Sheet>
          <SheetTrigger asChild>
            <div>
              <Profile
                image={profile.image}
                name={profile.name}
                bio={profile.bio}
                onEdit={() => setEditingProfile(profile)}
              />
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit Profile</SheetTitle>
            </SheetHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Profile Image URL</label>
                <input
                  type="url"
                  value={editingProfile?.image || profile.image}
                  onChange={(e) =>
                    setEditingProfile({ ...editingProfile!, image: e.target.value })
                  }
                  className="w-full p-2 rounded-md border glass"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  value={editingProfile?.name || profile.name}
                  onChange={(e) =>
                    setEditingProfile({ ...editingProfile!, name: e.target.value })
                  }
                  className="w-full p-2 rounded-md border glass"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Bio</label>
                <textarea
                  value={editingProfile?.bio || profile.bio}
                  onChange={(e) =>
                    setEditingProfile({ ...editingProfile!, bio: e.target.value })
                  }
                  className="w-full p-2 rounded-md border glass resize-none h-24"
                />
              </div>
              <button
                onClick={handleSaveProfile}
                className="w-full px-4 py-2 glass rounded-md flex items-center justify-center space-x-2 mt-4"
              >
                <Save className="w-4 h-4" />
                <span>Save Profile</span>
              </button>
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="space-y-4 fade-in">
          {links.map((link: Link, index: number) => (
            <div key={index} className="relative group">
              <LinkCard
                icon={link.icon}
                title={link.title}
                url={link.url}
              />
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    onClick={() => setEditingLink(link)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 glass rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Edit link"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit Link</SheetTitle>
                  </SheetHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Title</label>
                      <input
                        type="text"
                        value={editingLink?.title || link.title}
                        onChange={(e) =>
                          setEditingLink({ ...link, title: e.target.value })
                        }
                        className="w-full p-2 rounded-md border glass"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">URL</label>
                      <input
                        type="url"
                        value={editingLink?.url || link.url}
                        onChange={(e) =>
                          setEditingLink({ ...link, url: e.target.value })
                        }
                        className="w-full p-2 rounded-md border glass"
                      />
                    </div>
                    <div className="flex justify-between pt-4">
                      <button
                        onClick={() => handleDeleteLink(index)}
                        className="px-4 py-2 glass rounded-md text-red-500 hover:text-red-600 transition-colors"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleSaveLink(editingLink || link, index)}
                        className="px-4 py-2 glass rounded-md flex items-center space-x-2"
                      >
                        <Save className="w-4 h-4" />
                        <span>Save</span>
                      </button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          ))}

          <Sheet>
            <SheetTrigger asChild>
              <button
                className="w-full p-4 glass rounded-lg link-card flex items-center justify-center space-x-2"
                onClick={() => setEditingLink({
                  title: "",
                  url: "",
                  icon: ExternalLink
                })}
              >
                <Plus className="w-5 h-5" />
                <span>Add New Link</span>
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Add New Link</SheetTitle>
              </SheetHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Title</label>
                  <input
                    type="text"
                    value={editingLink?.title || ""}
                    onChange={(e) =>
                      setEditingLink({ ...editingLink!, title: e.target.value })
                    }
                    className="w-full p-2 rounded-md border glass"
                    placeholder="Enter link title"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">URL</label>
                  <input
                    type="url"
                    value={editingLink?.url || ""}
                    onChange={(e) =>
                      setEditingLink({ ...editingLink!, url: e.target.value })
                    }
                    className="w-full p-2 rounded-md border glass"
                    placeholder="https://example.com"
                  />
                </div>
                <button
                  onClick={() => handleAddLink(editingLink!)}
                  className="w-full px-4 py-2 glass rounded-md flex items-center justify-center space-x-2 mt-4"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Link</span>
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <SocialIcons socials={socials} />
      </div>
    </div>
  );
};

export default Index;
