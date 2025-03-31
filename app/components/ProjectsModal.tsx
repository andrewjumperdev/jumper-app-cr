'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/app/types/';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
}

const ProjectsModal: React.FC<ProjectsModalProps> = ({ isOpen, onClose, projects }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-xl max-w-3xl w-full p-6 relative mx-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            {/* Botón para cerrar */}
            <button 
              onClick={onClose} 
              className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-lg"
            >
              ✕
            </button>

            {/* Título */}
            <h2 className="text-2xl font-bold mb-4">Mes projets importants</h2>

            {/* Grid de proyectos */}
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  {/* Imagen del proyecto */}
                  <img 
                    src={project.thumbnail || project.img || "/img/default-project.jpg"} 
                    alt={project.title} 
                    className="w-full h-40 object-cover rounded-md mb-3" 
                  />

                  {/* Título */}
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                  {/* Descripción */}
                  <p className="text-sm text-gray-700">
                    {project.description.length > 100
                      ? project.description.substring(0, 100) + "..."
                      : project.description}
                  </p>

                  {/* Herramientas principales */}
                  {project.mainTools && (
                    <p className="text-xs text-gray-500 mt-2">
                      <strong>Outils:</strong> {project.mainTools.join(", ")}
                    </p>
                  )}

                  {/* Detalles técnicos */}
                  {project.technicalDetails && (
                    <ul className="text-xs text-gray-600 mt-2">
                      {project.technicalDetails.slice(0, 2).map((detail, index) => (
                        <li key={index}>🔹 {detail.title}</li>
                      ))}
                    </ul>
                  )}

                  {/* Enlaces */}
                  <div className="mt-3 flex justify-between text-sm">
                    {project.urlProject && (
                      <a 
                        href={project.urlProject} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:underline"
                      >
                        Voir projet
                      </a>
                    )}
                    {project.repository && (
                      <a 
                        href={project.repository} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-600 hover:underline"
                      >
                        Code source
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectsModal;
