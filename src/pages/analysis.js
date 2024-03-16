import * as React from "react"
import Board from "./board"

const styles = {
  container: {
    display: "flex",
    "flexDirection": "column"
  },

  sidebar: {
    "flexDirection": "row",
    flex: 1
  },
  wrapper: {
    display: "flex",
    "flexDirection": "row"
  },
  main: {
    flex: 1,
    "marginRight": "60px"
  }
}

// TODO: eventually this weill be the analysis page
const AnalysisPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <aside style={styles.sidebar}>
          <h3>The Sidebar</h3>
        </aside>
        <section style={styles.main}>
          <h3>This is where the analysis will go</h3>
          <Board/>
        </section>
        <aside style={styles.sidebar}>
          <h3>The Rightbar. Where the moves will go</h3>
        </aside>
      </div>

    </div>
  )
}

export default AnalysisPage;
