
import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem = ({ value, label }: StatItemProps) => (
  <div className="text-center p-6 bg-background rounded-xl shadow-card border border-border/40">
    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

interface StatsSectionProps {
  title: string;
  description?: string;
  stats: StatItemProps[];
  className?: string;
}

const StatsSection = ({ title, description, stats, className = "" }: StatsSectionProps) => {
  return (
    <section className={`bg-muted/50 py-16 md:py-20 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
