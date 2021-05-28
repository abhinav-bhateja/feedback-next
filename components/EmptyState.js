import React from 'react';
import {Heading, Flex, Text, useColorModeValue} from '@chakra-ui/react';

import DashboardShell from './DashboardShell';
import AddSiteModal from './AddSiteModal';

const EmptyState = () => {
    const innerBackground = useColorModeValue("white", "#0D1117")

    return (
        <DashboardShell>
            <Flex
                width="100%"
                backgroundColor={innerBackground}
                borderRadius="8px"
                p={16}
                justify="center"
                align="center"
                direction="column"
            >
                <Heading size="lg" mb={2}>
                    You haven’t added any sites.
                </Heading>
                <Text mb={4}>Let’s get started.</Text>
                <AddSiteModal text="Add Your First Site"/>
            </Flex>
        </DashboardShell>
    );
}

export default EmptyState;