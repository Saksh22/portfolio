import { User } from "lucide-react";

const ChatAvatar = () => {
  return (
    <div className="relative">
      {/* Decorative gradient circles */}
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-linear-to-br from-primary/20 to-accent/10 blur-xl" />
      <div className="absolute -bottom-4 -left-8 w-24 h-24 rounded-full bg-linear-to-br from-cyan-500/15 to-blue-500/10 blur-xl" />
      
      {/* Avatar container */}
      <div className="relative w-40 h-40 rounded-full bg-linear-to-br from-primary/30 to-accent/20 flex items-center justify-center shadow-card glow overflow-hidden">
        <div className="w-32 h-32 rounded-full bg-card border border-border flex items-center justify-center">
          <User className="w-16 h-16 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default ChatAvatar;