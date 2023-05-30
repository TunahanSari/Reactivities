import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react';

interface NavbarProps {
    openForm: () => void;
}

const Navbar = ({openForm}:NavbarProps) => {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item>
                    <img src='/assets/logo.png' alt='logo' style={{marginRight: "10px"}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities' />
                <Menu.Item >
                    <Button positive content='Create Activity' onClick={() => openForm()}/>
                </Menu.Item>
                    
            </Container>
        </Menu>
    )

}

export default Navbar;