
import type React from 'react';

export interface SectionData {
  id: string;
  page: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode[];
}
