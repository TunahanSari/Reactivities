import { Link } from "react-router-dom";
import { Button, Header, Icon, Segment } from "semantic-ui-react";


const NotFound = () => {

    return (
        <Segment placeholder>
            <Header icon>
                <Icon name="search"/>
                Requested information couldn't be found
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/activities'>
                    Return to Activities page.
                </Button>
            </Segment.Inline>
        </Segment>
    )
}

export default NotFound;