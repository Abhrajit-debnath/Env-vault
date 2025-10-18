"use client";
import { House } from 'lucide-react';
interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="fixed top-0 left-0 w-screen h-screen bg-gray-900 text-white flex flex-col justify-center items-center z-50">
        <ul className="flex flex-col space-y-5 text-lg font-nunito text-center">
          <li className="cursor-pointer font-inter flex gap-4">
            <House/>
            Dashboard
            
            </li>
          <li className="cursor-pointer font-inter">Projects</li>
          <li className="cursor-pointer font-inter">API Keys</li>
          <li className="cursor-pointer font-inter">Settings</li>
          <button
            className="mt-5 text-gray-400 text-sm transition cursor-pointer font-inter hover:text-red-600"
            onClick={onClose}
          >
            Close
          </button>
        </ul>
      </div>
    )
  );
};

export default HamburgerMenu;
