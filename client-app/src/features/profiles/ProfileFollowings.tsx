import { observer } from "mobx-react-lite"
import { Card, Grid, Header, Tab } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import ProfileCard from "./ProfileCard";
import { useEffect } from "react";


const ProfileFollowings = () => {  
    const {profileStore} = useStore();
    const {loadingFollowings, profile, followings,loadFollowings, activeTab} = profileStore
    
    useEffect(() => {
        loadFollowings('following')
    }, [loadFollowings])
    
    return <Tab.Pane loading={loadingFollowings}>
        <Grid>
            <Grid.Column width={16}>
                <Header 
                    floated="left"
                    icon="user"
                    content={activeTab === 3 ? 
                        `People following ${profile?.displayName}`: 
                        `People ${profile?.displayName} is following`}/>
            </Grid.Column>
            <Grid.Column width={16}>
                <Card.Group>
                    {followings.map(following => (
                        <ProfileCard
                            key={following.username}
                            profile={following}
                        />                    
                    ))}
                </Card.Group>
            </Grid.Column>
        </Grid>
    </Tab.Pane>

}

export default observer(ProfileFollowings);