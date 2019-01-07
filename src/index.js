import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import Shows from './components/Shows/Shows'
import styles from './styles.css'
import configureStore from './store/configureStore';
import initialState from './store/initialState';


const store = configureStore(initialState)


export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <Provider store={store}>
        <Shows id="2"/>
      </Provider>

    )
  }
}
