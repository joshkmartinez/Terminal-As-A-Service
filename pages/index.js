import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import {
  Grommet,
  Box,
  Heading,
  Button,
  Text,
  Markdown,
  Paragraph
} from 'grommet'
const theme = {
  global: {
    colors: {
      brand: '#123456'
    },
    font: {
      family: 'Roboto'
    }
  }
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { quote: '' }
  }

  async componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>TAAS</title>
        </Head>
        <Grommet theme={theme}>
          <Box
            animation="fadeIn"
            align="center"
            margin="large"
            alignContent="center"
            background="whitesmoke"
          >
            <Heading margin="small" textAlign="center">
              Terminal as a Service
            </Heading>
            <Heading level={2} textAlign="center" margin="medium">
              TAAS
            </Heading>
          </Box>
        </Grommet>
      </React.Fragment>
    )
  }
}
export default App
