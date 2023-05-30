import React, { SyntheticEvent, useState } from 'react';
import { Activity } from '../../../app/Models/activity';
import { Button, Item, Label, Segment } from 'semantic-ui-react';

interface ActivityListProps {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

const ActivityList = ({ activities, selectActivity, deleteActivity, submitting }: ActivityListProps) => {
    const [target, setTarget] = useState('');
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
                                    <Button floated='right' content='View' color='blue' onClick={() => selectActivity(activity.id)}/>
                                    <Button 
                                        name={activity.id}
                                        loading={submitting && activity.id === target}
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

export default ActivityList;