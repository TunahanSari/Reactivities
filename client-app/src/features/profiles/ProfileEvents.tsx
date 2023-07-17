import { observer } from "mobx-react-lite";
import { Card, Grid, GridColumn, Header, Image, Segment, Tab, TabProps } from "semantic-ui-react";
import { Profile, UserActivity } from "../../app/models/profile";
import { useEffect, useState } from "react";
import { useStore } from "../../app/stores/store";
import { Link } from "react-router-dom";
import { format } from "date-fns";


const ProfileEvents = () => {

    const { profileStore } = useStore();
    const { loadUserActivities, userActivities, profile, loadingActivities } = profileStore


    const panes = [
        { menuItem: 'Future', pane: { key: "future" } },
        { menuItem: 'Past', pane: { key: "past" } },
        { menuItem: 'Hosting', pane: { key: "hosting" } },
    ]

    useEffect(() => {
        loadUserActivities(profile!.username);
    }, [profile, loadUserActivities])

    const handleTabChange = (e: any, { activeIndex }: TabProps) => {
        loadUserActivities(profile!.username, panes[activeIndex as number].pane.key);
    }
    return <Tab.Pane loading={loadingActivities}>

        <Grid>
            <Grid.Column width={16}>
                <Header floated="left" content="Activities" icon="calendar" />
            </Grid.Column>
            <Grid.Column width={16}>
                <Tab
                    onTabChange={handleTabChange}
                    panes={panes}
                />
                <br/>
                <Card.Group itemsPerRow={4}>
                {userActivities.map(userActivity => (
                
                    <Card
                        key={userActivity.id}
                        as={Link}
                        to={`/activities/${userActivity.id}`}
                    >
                        <Card.Header>
                            <Image 
                                src={`/assets/categoryImages/${userActivity.category}.jpg`} 
                                style={{minHeight: 100, objectFit: "cover"}}
                            />
                        </Card.Header>
                        <Card.Content>
                            <Card.Header textAlign="center">{userActivity.title}</Card.Header>
                            <Card.Meta textAlign="center">
                                <div>{format(userActivity.date, "do LLL")}</div>
                                <div>{format(userActivity.date, "HH:mm")}</div>
                            </Card.Meta>
                            
                        </Card.Content>
                    </Card>
                ))}
                </Card.Group>
            </Grid.Column>
        </Grid>


    </Tab.Pane>
}

export default observer(ProfileEvents);