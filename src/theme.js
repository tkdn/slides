import { yellow } from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'

export default {
    ...yellow,
    colors: {
        text: '#222',
        background: '#E2E1DC'
    },
    prism: {
        style: okaidia
    },
    Slides: {
        padding: "0"
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
    blockquote: {
        fontSize: "0.7em",
        fontWeight: "normal",
        fontStyle: "italic",
        backgroundColor: "#ccc",
        borderLeft: "8px solid #aaa",
        lineHeight: 2
    }
}
