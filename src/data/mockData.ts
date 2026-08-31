import { Project, Task } from '../types';

export const mockProjects: Project[] = [
  { id: 'proj-1', name: 'Website Redesign', icon: '🔥', color: '#ff6b6b' },
  { id: 'proj-2', name: 'Design System', icon: '🎨', color: '#4facfe' },
  { id: 'proj-3', name: 'Development', icon: '💻', color: '#00f2fe' },
  { id: 'proj-4', name: 'Mobile App', icon: '📱', color: '#a18cd1' },
];

export const mockPersonalProjects: Project[] = [
  { id: 'pers-1', name: 'Personal', icon: '👤', color: '#fbc2eb' },
  { id: 'pers-2', name: 'Shopping', icon: '🛒', color: '#a1c4fd' },
  { id: 'pers-3', name: 'Ideas', icon: '💡', color: '#ffecd2' },
];

export const mockTasks: Task[] = [
  {
    id: 't-1',
    title: 'Create design system',
    completed: false,
    priority: 'high',
    projectId: 'proj-2',
    createdAt: new Date().toISOString(),
  },
  {
    id: 't-2',
    title: 'Create 3 alternative hero sections',
    completed: false,
    priority: 'medium',
    projectId: 'proj-1',
    createdAt: new Date().toISOString(),
  },
  {
    id: 't-3',
    title: 'Upload design presentation',
    completed: false,
    priority: 'low',
    projectId: 'proj-1',
    createdAt: new Date().toISOString(),
  },
  {
    id: 't-4',
    title: 'Review homepage',
    completed: false,
    priority: 'medium',
    projectId: 'proj-1',
    createdAt: new Date().toISOString(),
  },
  {
    id: 't-5',
    title: 'Prepare API documentation',
    completed: false,
    priority: 'high',
    projectId: 'proj-3',
    createdAt: new Date().toISOString(),
  },
];
