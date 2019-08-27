import { dark } from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'

export default {
    ...dark,
    colors: {
        text: '#fefefe',
        background: '#222'
    },
    prism: {
        style: okaidia
    },
    Slides: {
        padding: "0",
    },
    heading: {
        textTransform: 'none'
    },
    h1: {
        fontSize: '2.5em'
    },
    h2: {
        fontSize: '2em'
    },
    img: {
        maxWidth: '80%'
    },
    a: {
        color: "#5749f7"
    },
    li: {
        lineHeight: 1.6
    },
    blockquote: {
        fontSize: "0.7em",
        fontWeight: "normal",
        fontStyle: "italic",
        backgroundColor: "#ccc",
        borderLeft: "8px solid #aaa",
        lineHeight: 2
    }
}
