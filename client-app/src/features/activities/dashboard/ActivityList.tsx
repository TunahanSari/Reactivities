import React from 'react';
import { Activity } from '../../../app/Models/activity';
import { Button, Item, Label, Segment } from 'semantic-ui-react';

interface ActivityListProps {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}

const ActivityList = ({ activities, selectActivity, deleteActivity }: ActivityListProps) => {

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
                                    <Button floated='right' content='Delete' color='red' onClick={() => deleteActivity(activity.id)}/>
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