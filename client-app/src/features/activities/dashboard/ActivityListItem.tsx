import { Link } from 'react-router-dom';
import { Button, Icon, Item, Label, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import { format } from 'date-fns';
import ActivityListItemAttendee from './ActivityListItemAttendee';
import { observer } from 'mobx-react-lite';

interface Props {
    activity: Activity
}

const ActivityListItem = ({ activity }: Props) => {
    return (
        <Segment.Group>
            <Segment>
                {activity.isCancelled && 
                    <Label attached='top' color='red' content='Cancelled' style={{textAlign: "center"}} />
                }
                <Item.Group>
                    <Item>
                        <Item.Image style={{marginBottom: 5}}size='tiny' circular 
                            src={activity.host?.image || '/assets/user.png'} />
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activity.id}`}>
                                {activity.title}
                            </Item.Header>
                            <Item.Description>Hosted By <Link to={`/profiles/${activity.hostUsername}`}>{activity.host?.displayName}</Link></Item.Description>
                            {activity.isHost && (
                                <Item.Description>
                                    <Label basic color='orange'>You are hosting this activity</Label>
                                </Item.Description>
                            )}
                            {!activity.isHost && activity.isGoing && (
                                <Item.Description>
                                    <Label basic color='green'>You are going to this activity</Label>
                                </Item.Description>
                            )}
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock'/>{format({...activity}.date!, 'd MMM yyyy H:mm')}
                    <Icon name='marker'/>{activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                <ActivityListItemAttendee attendees={activity.attendees!} />
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button 
                    as={Link}
                    to={`/activities/${activity.id}`}
                    color='teal'
                    floated='right'
                    content='View'
                />
            </Segment>
        </Segment.Group>
    )
}

export default observer(ActivityListItem);