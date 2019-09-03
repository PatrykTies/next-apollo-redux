import React from 'react'

import { connect } from 'react-redux'

import { startClock } from '../lib/clock/actions'
import { countIncrease } from '../lib/count/actions'
import { loadData } from '../lib/placeholder/actions'
import withReduxWrapper from '../lib/withReduxWrapper'
import App from '../components/App'
import Header from '../components/Header'
import Page from '../components/Page'
import PostList from '../components/PostList'
import withApollo from '../lib/withApollo'



class PageIndex extends React.Component {
  static async getInitialProps ({ ctx: { store } }) { // store is saved in next.js context
    // store.dispatch(countIncrease())
    // if (!store.getState().placeholder.data) {
    //   await store.dispatch(loadData())
    // }
    const postId = 1;
    await store.dispatch(loadData(postId))
    // thunk example
    // await store.dispatch(serverRenderClock(isServer)) // github next.js examples with-thunk

    const state = store.getState(); //my stuff to access store
    return {state}
  }

  constructor(props){
    super(props)
    this.user = props.state.placeholder.title
  }

  // componentDidMount () {
  //   this.props.dispatch(startClock())
  // }

  render () {
    return (
      <App>
        <Header />
        <Page title={this.user} />
      </App>
    )
  }
}

export default connect()(PageIndex); // this will break if changed
