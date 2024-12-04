"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

interface LinkComponentProps {
  path: string; // The dynamic path for navigation
  classes?: string; // Optional CSS classes for the anchor tag
  text?: string; // Optional text for the anchor tag
}

const LinkComponent: React.FC<LinkComponentProps> = ({ path, classes = '', text = 'Get Started' }) => {
  const currentPath = usePathname(); // Gets the current path
  const basePath = currentPath.startsWith('/startup-app') ? '/startup-app' : '/startup-app'; // Handle basePath

  return (
    <a href={`${basePath}${path}`} className={classes}>
      {text}
    </a>
  );
};

export default LinkComponent;
