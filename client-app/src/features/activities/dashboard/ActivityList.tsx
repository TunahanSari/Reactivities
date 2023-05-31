import React, { SyntheticEvent, useState } from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';


const ActivityList = () => {
    const [target, setTarget] = useState('');    
    const {activityStore} = useStore();
    const {deleteActivity, activitiesByDate: activities, loading} = activityStore;

    const handleActivityDelete = (e: SyntheticEvent<HTMLButtonElement>, id:string) => {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    return (
        <Segment>
            <Item.Group>
                {activities.map(activity => {
                    return (
                        <Item key={activity.id}>
                            <Item.Content>
                                <Item.Header as='a'>{activity.title}</Item.Header>
                                <Item.Meta>{activity.date}</Item.Meta>
                                <Item.Description>
                                    <div>{activity.description}</div>
                                    <div>{activity.city}, {activity.venue}</div>
                                </Item.Description>
                                <Item.Extra>
                                    <Button as={Link} to={`/activities/${activity.id}`} floated='right' content='View' color='blue'/>
                                    <Button 
                                        name={activity.id}
                                        loading={loading && activity.id === target}
                                        floated='right' 
                                        content='Delete' 
                                        color='red' 
                                        onClick={(e) => handleActivityDelete(e,activity.id)}/>
                                    <Label basic content={activity.category} />
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    )
                })}
            </Item.Group>
        </Segment>
    )
}

export default observer(ActivityList);