import React from 'react';
import { ProjectCard } from './ProjectCard';
import { AnalyticsWidget } from './AnalyticsWidget';

export const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">03 // Featured Work</div>
          <h2 className="section-title">Engineered Pipelines &amp; Systems</h2>
          <p className="section-subtitle">
            Real-world projects highlighting end-to-end data analytics, machine learning pipelines, and agentic software architecture.
          </p>
        </div>

        <div className="projects-grid">
          {/* Project 1: Olist E-commerce Analytics Pipeline (Features interactive CSS/SVG dashboard widget) */}
          <ProjectCard
            category="Data Analytics & Pipeline Architecture"
            title="Olist E-Commerce Analytics Pipeline"
            description="Designed and deployed an end-to-end data pipeline processing 110K+ transactional records. Diagnosed and resolved critical merge bugs that silently inflated metrics by 400%, built K-Means RFM customer segmentation models, and launched a live interactive SQLite-powered Streamlit analytical query application paired with an executive Power BI dashboard."
            tags={['Python', 'SQL', 'Streamlit', 'Power BI', 'Scikit-learn', 'SQLite', 'K-Means Clustering', 'EDA']}
            demoUrl="https://olist-query-app.streamlit.app/"
            repoUrl="https://github.com/hayth31/olist-ecommerce-analytics-"
          >
            <AnalyticsWidget />
          </ProjectCard>

          {/* Sub-grid for Projects 2 and 3 */}
          <div className="sub-projects-grid">
            {/* Project 2: WearGAN: AI-Powered Fashion Synthesis */}
            <ProjectCard
              category="Deep Learning & Generative AI"
              title="WearGAN: AI-Powered Fashion Synthesis"
              description="Developed a high-performance Conditional Generative Adversarial Network (cGAN) using PyTorch with CLIP-based text conditioning. Engineered end-to-end image training and evaluation pipelines to generate realistic fashion designs directly from complex natural language descriptive prompts."
              tags={['PyTorch', 'Conditional GANs', 'CLIP', 'Python', 'Generative AI', 'Computer Vision']}
              repoUrl="https://github.com/hayth31/WearGAN-AI-Powered-Text-to-Image-Fashion-Synthesis"
              isCodeOnly={true}
              codeOnlyNote="Codebase & Model Pipeline"
            />

            {/* Project 3: Tessera: Multi-Agent Recovery System */}
            <ProjectCard
              category="Agentic AI & Backend Engineering"
              title="Tessera: Multi-Agent Recovery System"
              description="Engineered an autonomous multi-agent AI architecture with resilient Python backend systems. Designed collaborative agents to trace distributed execution failures, automate fault-isolation routines, and conduct intelligent self-healing protocols across complex workflow pipelines."
              tags={['Agentic AI', 'Multi-Agent Systems', 'Python', 'Process Automation', 'Next.js', 'Vercel']}
              demoUrl="https://cube-round3-pod-gvfq.vercel.app"
              repoUrl="https://github.com/hayth31/Tessera-multiagent-recovery"
            />
          </div>

          {/* Bonus Capstone Project Card */}
          <ProjectCard
            category="Financial Time-Series & Deep Learning"
            title="Stock Market Prediction & Model Comparison (Capstone)"
            description="Engineered multi-feature time-series forecasting models using LSTM networks on historical NIFTY50 market data (incorporating OHLC, trading volume, and technical indicators). Implemented and benchmarked Transformer-based sequence architectures against recurrent baselines across MSE, RMSE, MAE, and R² evaluation metrics."
            tags={['Python', 'TensorFlow', 'LSTM', 'Transformers', 'Pandas', 'NumPy', 'Time-Series Modeling']}
            repoUrl="https://github.com/hayth31"
            isCodeOnly={true}
            codeOnlyNote="Academic Capstone"
          />
        </div>
      </div>
    </section>
  );
};
