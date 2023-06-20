import { observer } from "mobx-react-lite"
import { Profile } from "../../app/models/profile"
import { Button, Grid, Header, Tab } from "semantic-ui-react"
import { useState } from "react";
import { useStore } from "../../app/stores/store";
import ProfileEditForm from "./ProfileEditForm";

interface Props {
    profile: Profile
}


const ProfileAbout = ({ profile }: Props) => {
    const [editMode, setEditMode] = useState(false);
    const { profileStore: { isCurrentUser } } = useStore();

    return (
        <Tab.Pane>
            <Grid>
                <Grid.Column width={16}>
                    <Header
                        floated='left'
                        icon={"user"}
                        content={`About ${profile.displayName}`}
                    />
                    {isCurrentUser &&
                        <Button
                            basic
                            onClick={() => setEditMode(!editMode)}
                            content={editMode ? "Cancel" : "Edit"}
                            floated="right"
                        />
                    }
                </Grid.Column>
                <Grid.Column width={16}>
                    {editMode ?
                        <ProfileEditForm setEditMode={setEditMode} /> :
                        <p style={{ whiteSpace: "pre-wrap" }}>{profile.bio}</p>
                    }
                </Grid.Column>
            </Grid>
        </Tab.Pane>
    );
}

export default observer(ProfileAbout);