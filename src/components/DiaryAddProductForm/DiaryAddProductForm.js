import DiaryStyled from './DiaryAddProductForm.styled';
import { Container } from 'components/Container.styled';

// Need to add and import PlusIcon from '../icons/.....';
import {
  searchProductOperation,
  addNewProductOperation,
} from '../../redux/dairyAddProductForm/operation';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const initialState = {
  product: '',
  weight: '',
  productId: '',
  date: moment(Date.now()).format('YYYY-MM-DD'),
  render: false,
  inputValue: '',
  localEerror: '',
};

class DiaryAddProduct extends Component {
  state = {
    ...initialState,
  };

  submitDiaryAddProduct = event => {
    event.preventDefault();
    if (this.state.productId && this.state.weight) {
      this.props.addNewProductOperation({
        date: this.state.date,
        productId: this.state.productId,
        weight: Number(this.state.weight),
      });
      this.setState(prev => ({ ...initialState, date: prev.date }));
      return;
    }

    this.handleClick();
  };

  inputHandlerDiaryAddProduct = e => {
    this.setState({ inputValue: e.target.value });
    if (this.state.inputValue.length <= 2) {
      this.props.resetList();
    } else if (this.state.inputValue.length > 2) {
      this.props.searchProductOperation(this.state.inputValue);
    }
  };

  inputHandlerDiaryAddGramm = e => {
    this.setState({ weight: e.target.value });
  };

  handleClick = () => {
    this.setState(prevState => {
      return { render: !prevState.render };
    });
  };

  render() {
    return (
      <Container>
        <DiaryStyled>
          <form className="form_add" onSubmit={this.submitDiaryAddProduct}>
            <input
              className="input_add-product"
              placeholder="Enter product name"
              name="inputValue"
              value={this.state.inputValue}
              onChange={this.inputHandlerDiaryAddProduct}
              required
            />

            <input
              className="input_add-gramm"
              placeholder="Grams"
              value={this.state.weight}
              onChange={this.inputHandlerDiaryAddGramm}
              required
            />
            {window.innerWidth < 768 ? (
              <button className="button svg-add" type="submit">
                Добавить
              </button>
            ) : (
              <button className="button svg-add" type="submit">
                {/* <Need to add PlusIcon width="14" height="14" fill="white" /> */}
              </button>
            )}
          </form>
        </DiaryStyled>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  searchProductOperation: query => dispatch(searchProductOperation(query)),
  addNewProductOperation: product => dispatch(addNewProductOperation(product)),
});

export default connect(mapDispatchToProps)(DiaryAddProduct);
