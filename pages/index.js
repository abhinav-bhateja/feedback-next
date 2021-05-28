import Head from 'next/head';
import {useAuth} from '@/lib/auth'
import {Flex, Spacer, Button, useColorMode} from '@chakra-ui/react';

import {CustomIcon} from '@/styles/theme'

export default function Index() {
    const {colorMode, toggleColorMode} = useColorMode()
    const auth = useAuth()

    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            h="100vh"
        >
            <Head>
                <title>Feedback Console</title>
            </Head>
            <CustomIcon boxSize={12} color={colorMode === "light" ? "black" : "white"} name="logo"/>
            {auth.user ? (
                <Flex mt={4}>
                    <Button as="a" href="/dashboard">
                        View Dashboard
                    </Button>
                    <Spacer p={4}/>
                    <Button onClick={toggleColorMode}>
                        Toggle {colorMode === "light" ? "Dark" : "Light"}
                    </Button>
                </Flex>
            ) : (
                <Flex mt={4}>
                    <Button leftIcon={<CustomIcon boxSize={4} name="google"/>}
                            onClick={(e) => auth.signInWithGoogle()}>
                        Sign In Using Google
                    </Button>
                    <Spacer p={4}/>
                    <Button onClick={toggleColorMode}>
                        Toggle {colorMode === "light" ? "Dark" : "Light"}
                    </Button>
                </Flex>
            )}
        </Flex>
    )
}

