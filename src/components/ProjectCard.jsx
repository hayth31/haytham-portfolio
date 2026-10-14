import React from 'react';
import { ExternalLinkIcon, GitHubIcon } from './Icons';

export const ProjectCard = ({
  category = "Featured Project",
  title,
  description,
  tags = [],
  demoUrl,
  repoUrl,
  isCodeOnly = false,
  codeOnlyNote = "Model Architecture & Pipeline",
  children
}) => {
  return (
    <article className="project-card">
      <div className={children ? "project-card-layout" : "project-card-single-col"}>
        {/* Content Column */}
        <div>
          <div className="project-category-tag">// {category}</div>
          <h3 className="project-title">{title}</h3>
          
          <p className="project-description">{description}</p>

          <div className="project-tags">
            {tags.map((tag, idx) => (
              <span className="project-tag" key={idx}>
                {tag}
              </span>
            ))}
          </div>

          <div className="project-actions">
            {demoUrl && !isCodeOnly ? (
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link-btn project-link-primary"
              >
                <span>Live Demo</span>
                <ExternalLinkIcon size={14} />
              </a>
            ) : isCodeOnly ? (
              <span 
                className="project-link-btn" 
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.03)', 
                  borderColor: 'var(--border-subtle)', 
                  color: 'var(--text-muted)',
                  cursor: 'default'
                }}
                title="Model codebase & weights repository"
              >
                <span>{codeOnlyNote}</span>
              </span>
            ) : null}

            {repoUrl && (
              <a 
                href={repoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link-btn"
              >
                <GitHubIcon size={15} />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* Optional Right Interactive Widget or Visual Layout */}
        {children && (
          <div className="project-widget-column">
            {children}
          </div>
        )}
      </div>
    </article>
  );
};
