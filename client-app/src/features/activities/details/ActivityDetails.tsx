import { Button, Card, Image } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

const ActivityDetails = () => {
    const {activityStore} = useStore();
    const {selectedActivity, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams();

    useEffect(() => {
        if(id) {
            loadActivity(id);
        }
    }, [id, loadActivity]);

    if(loadingInitial || !selectedActivity) return <LoadingComponent/>; //This should not happen since we're not displaying this comp. without a selected activity
    
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
                <Button as={Link} to={`/manage/${id}`} basic color="blue" content="edit" />
                <Button as={Link} to='/activities' basic color="grey" content="cancel"/>
            </Button.Group>
        </Card.Content>
    </Card>
}

export default observer(ActivityDetails);