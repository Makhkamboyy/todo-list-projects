import { useLocalStorage } from './useLocalStorage';
import { Project } from '../types';
import { mockProjects, mockPersonalProjects } from '../data/mockData';

export function useProjects() {
  const [projects, setProjects] = useLocalStorage<Project[]>('taskflow-projects', mockProjects);
  const [personalProjects, setPersonalProjects] = useLocalStorage<Project[]>('taskflow-personal', mockPersonalProjects);

  const addProject = (project: Omit<Project, 'id'>, isPersonal = false) => {
    const newProject: Project = {
      ...project,
      id: `p-${Date.now()}`,
    };
    if (isPersonal) {
      setPersonalProjects((prev) => [...prev, newProject]);
    } else {
      setProjects((prev) => [...prev, newProject]);
    }
  };

  return {
    projects,
    personalProjects,
    addProject,
  };
}
