import Document, { Html, Head, Main, NextScript } from "next/document";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

class MainDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <ThemeProvider theme={theme}>
                        <Main />
                    </ThemeProvider>
                    <NextScript />
                    <div id="modal-root"></div>
                </body>
            </Html>
        );
    }
}

export default MainDocument;