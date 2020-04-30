import React from "react"
import { Link } from "gatsby"
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const useStyles = makeStyles(theme => ({
  imageContainer: {
    width: "100%",
    padding: theme.spacing(10),
    position: "relative"
  },
  controlsContainer: {
    position: "absolute",
    top: theme.spacing(6),
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },
  interestButton: {
    textAlign: "center"
  }
}))

const theme = createMuiTheme({
  spacing: 9
});

const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="itme" />
      <div className={classes.imageContainer}>
        <Image />
        <div className={classes.controlsContainer}>
          <Button className={classes.interestButton} href="https://tinyletter.com/itme">
            get updates
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
