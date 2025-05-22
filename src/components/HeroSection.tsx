
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeroSectionProps {
  title: string
  subtitle: string
  description?: string
  image: string
  primaryCta?: {
    text: string
    link: string
  }
  secondaryCta?: {
    text: string
    link: string
  }
}

const HeroSection = ({
  title,
  subtitle,
  description,
  image,
  primaryCta,
  secondaryCta
}: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="space-y-6 max-w-xl">
            <div>
              <h4 className="text-sm uppercase tracking-wider text-primary font-medium mb-2">
                {subtitle}
              </h4>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {title}
              </h1>
            </div>
            
            {description && (
              <p className="text-lg text-muted-foreground">
                {description}
              </p>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {primaryCta && (
                <Button asChild size="lg">
                  <Link to={primaryCta.link}>
                    {primaryCta.text}
                  </Link>
                </Button>
              )}
              
              {secondaryCta && (
                <Button asChild variant="white-outline" size="lg">
                  <Link to={secondaryCta.link} className="group">
                    <span>{secondaryCta.text}</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl transform rotate-3 scale-[0.97] blur-lg opacity-30"></div>
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-soft">
              <img
                src={image}
                alt="Hero"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
