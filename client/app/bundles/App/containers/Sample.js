import {bindActionCreators} from 'redux'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class Sample extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        Sample {this.props.name} !!
        <p><Link to="/hello_world">Helloへ</Link></p>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    name: state.sample.name
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Sample);