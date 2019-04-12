import { yellow } from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'

export default {
    ...yellow,
    colors: {
        text: '#333',
        background: '#eee'
    },
    prism: {
        style: okaidia
    },
    h1: {
        textTransform: 'none'
    },
    h2: {
        textTransform: 'none'
    }
  }
