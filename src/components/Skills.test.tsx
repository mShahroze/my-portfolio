import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from './Skills';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2 {...props}>{children}</h2>
    ),
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
}));

describe('Skills', () => {
  describe('skill categories', () => {
    it('groups and renders skills correctly by category', () => {
      render(<Skills />);

      expect(screen.getByText('Core Technologies')).toBeInTheDocument();
      expect(screen.getByText('Currently Learning')).toBeInTheDocument();
      expect(screen.getByText('Tools & Platforms')).toBeInTheDocument();
    });

    it('renders all expected skills within each category', () => {
      render(<Skills />);

      // Core Technologies
      const coreSkills = [
        'React',
        'TypeScript',
        'Next.js',
        'Tailwind CSS',
        'Node.js',
        'PostgreSQL',
        'Jest',
      ];
      coreSkills.forEach((skill) => {
        expect(screen.getByText(skill)).toBeInTheDocument();
      });

      // Currently Learning
      const learningSkills = ['OpenAI API', 'TensorFlow.js', 'Python'];
      learningSkills.forEach((skill) => {
        expect(screen.getByText(skill)).toBeInTheDocument();
      });

      // Tools & Platforms
      const toolsSkills = ['Git', 'Docker', 'AWS'];
      toolsSkills.forEach((skill) => {
        expect(screen.getByText(skill)).toBeInTheDocument();
      });
    });
  });

  describe('also familiar with section', () => {
    it('displays the "Also familiar with" section', () => {
      render(<Skills />);

      expect(screen.getByText('Also familiar with:')).toBeInTheDocument();
      expect(
        screen.getByText(
          /React Testing Library, Chromatic, Contentful CMS, CI\/CD \(GitHub Actions\), Vercel, PHP, jQuery, and more/
        )
      ).toBeInTheDocument();
    });
  });
});
