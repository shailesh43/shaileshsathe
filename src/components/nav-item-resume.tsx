"use client";

import { FileDownIcon } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

export function NavItemResume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/shaileshsathe_resume.pdf';
    link.download = 'shaileshsathe_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button variant="outline" size="icon" onClick={handleDownload}>
      <FileDownIcon className="h-4 w-4" />
      <span className="sr-only">Download Resume</span>
    </Button>
  );
}
