import {useForm} from 'react-hook-form';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Button,
    Input,
    useDisclosure, useColorModeValue
} from '@chakra-ui/react';

import {createSite} from '@/lib/db';

const AddSiteModal = ({text}) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {handleSubmit, register} = useForm();

    const innerBackground = useColorModeValue("white", "#0D1117")

    const onCreateSite = (values) => {
        createSite(values);
        onClose();
    };

    return (
        <>
            <Button backgroundColor="gray.900"
                    color="white"
                    fontWeight="medium"
                    maxW="200px"
                    onClick={onOpen}
                    _hover={{bg: 'gray.700'}}
                    _active={{
                        bg: 'gray.800',
                        transform: 'scale(0.95)'
                    }}
            >
                {text}
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
                    <ModalHeader backgroundColor={innerBackground} fontWeight="bold">Add Site</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody backgroundColor={innerBackground} pb={6}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input
                                {...register('site', {required: true})}
                                placeholder="My site"
                                name="site"
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Link</FormLabel>
                            <Input
                                placeholder="https://website.com"
                                name="url"
                                {...register('url', {required: true})}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter backgroundColor={innerBackground}>
                        <Button onClick={onClose} mr={3} fontWeight="medium">
                            Cancel
                        </Button>
                        <Button
                            backgroundColor="#99FFFE"
                            color="#194D4C"
                            fontWeight="medium"
                            type="submit"
                        >
                            Create
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddSiteModal;