import Link from "next/link";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-200 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-zinc-600">
          <Link
            href="/privacy"
            className="duration-200 hover:text-zinc-900"
          >
            Privacy Policy
          </Link>
          <span className="hidden sm:inline">•</span>
          <span>© IncaseYouMissedit – All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

