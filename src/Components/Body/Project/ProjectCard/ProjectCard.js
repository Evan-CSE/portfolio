import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

export default function ProjectCard({details})
{
    return(
        <>
        <Card className="project-card col-md-6 col-sm-12">
      <Card.Img variant="top" src="" className="project-card__image" />
      <Card.Body>
        <Card.Title className="project-card__title">{details.ProjectName}</Card.Title>
        <Card.Text className="project-card__description">
          {details.Details}
          
            {details?.Technology && Object.entries(details.Technology).map(([key, value])=>(
              <li>
              {key?key:''}: {value?value:""}
              </li>
            ))
            }
          
        </Card.Text>
        <Button variant="primary" href={details.LiveLink} className="project-card__link">
          Visit Project
        </Button>
      </Card.Body>
    </Card>
        </>
    )
}