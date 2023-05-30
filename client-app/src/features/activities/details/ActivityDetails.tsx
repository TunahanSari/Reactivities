import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../app/Models/activity";

interface ActivityDetailProps {
    activity: Activity;
    cancelSelectActivity: () => void;
    openForm: (id:string) => void;
}

const ActivityDetail = ({activity, cancelSelectActivity, openForm}: ActivityDetailProps) => {
    return <Card fluid>
        <Image src={`/assets/categoryImages/${activity.category}.jpg`}/>
        <Card.Content>
            <Card.Header>{activity.title}</Card.Header>
            <Card.Meta>
                <span>{activity.date}</span>
            </Card.Meta>
            <Card.Description>{activity.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button.Group widths={2}>
                <Button basic color="blue" content="edit" onClick={() => openForm(activity.id)}/>
                <Button basic color="grey" content="cancel" onClick={cancelSelectActivity}/>
            </Button.Group>
        </Card.Content>
    </Card>
}

export default ActivityDetail;