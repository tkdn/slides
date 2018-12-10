import { yellow } from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'

export default {
    ...yellow,
    colors: {
        text: '#fff',
        background: '#E1690D'
    },
    prism: {
        style: okaidia
    }
  }