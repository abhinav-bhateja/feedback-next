import {ChakraProvider} from "@chakra-ui/react"
import {AuthProvider} from '@/lib/auth';
import theme from "@/styles/theme"
import "@/styles/style.css"

const App = ({Component, pageProps}) => {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </ChakraProvider>
    )
}

export default App;