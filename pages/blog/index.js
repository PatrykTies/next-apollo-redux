import React from 'react'
import withApollo from '../../lib/withApollo'
import { loadData } from '../../lib/placeholder/actions'
import { startClock } from '../../lib/clock/actions'
import App from '../../components/App'
import Header from '../../components/Header'
import Submit from '../../components/Submit'
import PostList from '../../components/PostList'

class BlogIndex extends React.Component {
  static async getInitialProps ({ Component, pageProps, ctx:{store} }) {
    // THIS NOW GIVES undefined on SSR
    // WHEN USED INITIAL STATE IT WAS WORKING SSR
    // THAT MEANS EACH /page MUST RELOAD DATA AGAIN
    const postId = 1;
    await store.dispatch(loadData(postId)) // YES IT WORKED
    // NOW BOTH GRAPHQL AND REST STUFF IS SSR ====> CHECK console.log() and page source

    const state = store.getState();
    const title = state.placeholder.title;
    console.log('REDUX', title)
    return { pageProps, title, store }
  }

  // constructor(props){
  //   super(props)
  //   this.user = props.state.placeholder.title
  // }

  // componentDidMount () {
  //   this.props.store.dispatch(startClock())
  // }

  render () {
    return (
      <App>
        {this.props.title}
        <Header />
        <Submit />
        <PostList />
      </App>
    )
  }
}

export default withApollo(BlogIndex);