import { Lock } from "lucide-react";

interface AuthCardProps {
  title: string;
  children: React.ReactNode;
  subtitle: string;
}

const AuthCard: React.FC<AuthCardProps> = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-900 w-screen">
      <div className="absolute left-5 top-5 flex items-center gap-2">
        <Lock className="text-primary w-5 h-5 md:w-7 md:h-7" />
        <h2 className="font-nunito text-lg font-medium capitalize md:text-xl">
          Env Vault
        </h2>
      </div>

      <div className="w-full flex flex-col items-center rounded-xl text-center p-5 space-y-2">
        <Lock className="text-primary w-8 h-8" />
        <h1 className="text-3xl text-white text-center font-nunito font-bold">
          {title}
        </h1>
        <p className="font-inter pb-1">{subtitle}</p>
      </div>
      <div className="w-full max-w-sm md:max-w-md bg-gray-800 p-8 rounded-lg">{children}</div>
    </div>
  );
};

export default AuthCard;
