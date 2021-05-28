import {ColorModeScript} from "@chakra-ui/react"
import Document, {Html, Head, Main, NextScript} from 'next/document'
import theme from "@/styles/theme"

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument