import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img {...props} />
  ),
}));

describe('Hero', () => {
  describe('social media links', () => {
    it('renders social media links with correct href attributes', () => {
      render(<Hero />);

      const githubLink = screen.getByRole('link', { name: /github/i });
      const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
      const twitterLink = screen.getByRole('link', { name: /twitter/i });

      expect(githubLink).toHaveAttribute('href', 'https://github.com/mShahroze');
      expect(linkedinLink).toHaveAttribute(
        'href',
        'https://www.linkedin.com/in/msbilal'
      );
      expect(twitterLink).toHaveAttribute(
        'href',
        'https://twitter.com/mShahroze'
      );
    });

    it('renders social media links with correct aria-label attributes', () => {
      render(<Hero />);

      const githubLink = screen.getByRole('link', { name: /github/i });
      const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
      const twitterLink = screen.getByRole('link', { name: /twitter/i });

      expect(githubLink).toHaveAttribute('aria-label', 'GitHub Profile');
      expect(linkedinLink).toHaveAttribute('aria-label', 'LinkedIn Profile');
      expect(twitterLink).toHaveAttribute('aria-label', 'Twitter Profile');
    });
  });
});
