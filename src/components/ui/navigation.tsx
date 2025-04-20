
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              TEAM ZEST
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-primary">소개</a>
            <a href="#schedule" className="text-gray-700 hover:text-primary">시간표</a>
            <a href="#instructor" className="text-gray-700 hover:text-primary">강사</a>
            <a href="#gallery" className="text-gray-700 hover:text-primary">시설</a>
            <a href="#programs" className="text-gray-700 hover:text-primary">프로그램</a>
            <a href="#location" className="text-gray-700 hover:text-primary">위치</a>
            <Button variant="default">
              <a href="#contact">문의하기</a>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-primary">소개</a>
            <a href="#schedule" className="block px-3 py-2 text-gray-700 hover:text-primary">시간표</a>
            <a href="#instructor" className="block px-3 py-2 text-gray-700 hover:text-primary">강사</a>
            <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:text-primary">시설</a>
            <a href="#programs" className="block px-3 py-2 text-gray-700 hover:text-primary">프로그램</a>
            <a href="#location" className="block px-3 py-2 text-gray-700 hover:text-primary">위치</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary">문의하기</a>
          </div>
        </div>
      )}
    </nav>
  );
}
