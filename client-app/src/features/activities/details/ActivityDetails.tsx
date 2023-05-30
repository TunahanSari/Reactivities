import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";

const ActivityDetail = () => {
    const {activityStore} = useStore();
    const {selectedActivity, openForm, cancelSelectActivity: cancelSelectedActivity} = activityStore;

    if(!selectedActivity) return <LoadingComponent/>; //This should not happen since we're not displaying this comp. without a selected activity

    return <Card fluid>
        <Image src={`/assets/categoryImages/${selectedActivity.category}.jpg`}/>
        <Card.Content>
            <Card.Header>{selectedActivity.title}</Card.Header>
            <Card.Meta>
                <span>{selectedActivity.date}</span>
            </Card.Meta>
            <Card.Description>{selectedActivity.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button.Group widths={2}>
                <Button basic color="blue" content="edit" onClick={() => openForm(selectedActivity.id)}/>
                <Button basic color="grey" content="cancel" onClick={cancelSelectedActivity}/>
            </Button.Group>
        </Card.Content>
    </Card>
}

export default ActivityDetail;