import {ThemeProvider, createGlobalStyle} from 'styled-components';

const Theme = {
    colors: {
        lightRed: "#D30026",
        darkRed: "#9D152C",
        lightGray: "#C5CFD1",
        gray: "#868A93",
        darkGray: "#5E6674",
        white: "#FFFFFF"
    }
}

const GlobalStyle = createGlobalStyle`
    margin: 0;
    padding: 0;
`

interface Props {
    Component: any,
}

const myBooksStyle: React.FC<Props> =({Component, ...props}) => {
    return (
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
            <Component {...props}></Component>
    </ThemeProvider>
    )
}

export default myBooksStyle