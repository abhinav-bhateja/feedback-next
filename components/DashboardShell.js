import React from 'react';
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
    Button,
    Flex,
    Link,
    Avatar,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react';

import {CustomIcon} from '@/styles/theme'

import {useAuth} from '@/lib/auth';
import AddSiteModal from "@/components/AddSiteModal";

const DashboardShell = ({children}) => {

    const {colorMode, toggleColorMode} = useColorMode()
    const {user, signOut} = useAuth();

    const background = useColorModeValue("gray.100", "#06090F")
    const navBackground = useColorModeValue("white", "#161B22")

    return (
        <Box backgroundColor={background} h="100vh">
            <Flex backgroundColor={navBackground} mb={16} w="full">
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    py={4}
                    maxW="1250px"
                    margin="0 auto"
                    w="full"
                    px={8}
                >
                    <Flex alignItems="center" justifyContent="space-between">
                        <CustomIcon mr={4} boxSize={8} color={colorMode === "light" ? "black" : "white"} name="logo"/>
                        <Link mr={4}>Sites</Link>
                        <Link>Feedback</Link>
                    </Flex>
                    <Flex justifyContent="center" alignItems="center">
                        <Button variant="ghost" mr={2} onClick={() => signOut()}>
                            Log Out
                        </Button>
                        <Button variant="ghost" mr={2} onClick={toggleColorMode}>
                            Toggle {colorMode === "light" ? "Dark" : "Light"}
                        </Button>
                        <Avatar size="sm" src={user.photoUrl}/>
                    </Flex>
                </Flex>
            </Flex>
            <Flex margin="0 auto" direction="column" maxW="1250px" px={8}>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink>Sites</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Flex justifyContent="space-between">
                    <Heading mb={8}>My Sites</Heading>
                   <AddSiteModal text="+ Add Site" />
                </Flex>
                {children}
            </Flex>
        </Box>
    );
};

export default DashboardShell;