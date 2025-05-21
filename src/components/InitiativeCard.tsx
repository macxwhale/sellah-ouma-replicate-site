
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'

interface InitiativeCardProps {
  title: string
  description: string
  image: string
  progress?: number
  goal?: string
  raised?: string
  slug: string
  className?: string
}

const InitiativeCard = ({ 
  title, 
  description, 
  image, 
  progress = 0, 
  goal = "", 
  raised = "", 
  slug,
  className = ""
}: InitiativeCardProps) => {
  return (
    <Card className={`overflow-hidden h-full flex flex-col ${className}`}>
      <div className="relative overflow-hidden aspect-[16/9]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription className="line-clamp-2 text-sm text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {(goal || raised) && (
          <div className="space-y-3 mb-4">
            <Progress value={progress} />
            <div className="flex justify-between text-sm">
              <span className="font-medium text-primary">{raised}</span>
              <span className="text-muted-foreground">Goal: {goal}</span>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-2 border-t border-border/30">
        <Button variant="ghost" asChild className="ml-auto hover:bg-transparent hover:text-primary p-0">
          <Link to={`/initiatives/${slug}`} className="flex items-center space-x-1 text-sm">
            <span>Learn More</span>
            <ArrowRight size={16} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default InitiativeCard
