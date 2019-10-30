import Filter from '../components/Filter';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as filterActions from '../actions/filterAction';

const mapStateToProps = ({ books }) => ({
    filterBy: books.filterBy,
  });
  
const mapDispatchYoProps = dispatch => ({
  ...bindActionCreators(filterActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchYoProps)(Filter);


