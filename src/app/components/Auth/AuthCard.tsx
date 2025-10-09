interface AuthCardProps {
  title: string;
  children: React.ReactNode;
}

const AuthCard: React.FC<AuthCardProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="font-nunito text-md font-medium capitalize pb-5 absolute left-5 top-5">Env Vault</h2>
      <div className="w-full max-w-md rounded-xl p-8 transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-3xl text-white mb-6 text-center font-nunito font-bold">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default AuthCard;
