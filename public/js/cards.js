/* eslint-disable no-param-reassign, operator-assignment */


/* Parent Component ProductList */
class ProductList extends React.Component {
    
    /* State */
    state = {
        products: [],
      };
    
      componentDidMount() {
        this.setState({ products: Seed.products });
      }
    
    
    
    /* Upvote Functionality*/
    handleProductUpVote = (productId) => {
        const nextProducts = this.state.products.map((product) => {
          if (product.id === productId) {
            return Object.assign({}, product, {
              votes: product.votes + 1,
            });
          } else {
            return product;
          }
        });
        this.setState({
          products: nextProducts,
        });
      }
    
      /* Render function for child component*/
    render() {
        const products = this.state.products.sort((a, b) => (
            b.votes - a.votes
          ));
          const productComponents = products.map((product) => (
            <Product
          key={'product-' + product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          productImageUrl={product.productImageUrl}
          onVote={this.handleProductUpVote}
        />
      ));
      return (
        <div className='container-fluid'>
          {productComponents}
        </div>
      );
    }
  }

/* Child Component Product */
class Product extends React.Component {
    
    /* This binds the handUpVote Method 
    constructor(props){
        super(props);
        this.handleUpVote = this.handleUpVote.bind(this);
    }
    */

    /* Inside Product*/
    handleUpVote = () => (
        this.props.onVote(this.props.id)
      );

      render() {
        return (
          <div className='card'>
              <img className='card-img-top' src={this.props.productImageUrl} />

            <div className='card-body'>

                <a className="btn btn-primary" onClick={this.handleUpVote}>
                </a>
                {this.props.votes}
              <div className='description'>
                <a href={this.props.url}>
                  {this.props.title}
                </a>
                <p> 
                  {this.props.description}
                </p>
              </div>
            </div>
          </div>
        );
      }
    }

/* Another way to write React UI Component */
/*
const HelloWorld = React.createClass({
    render() { return(<p>Hello, World.</p>)}
})
*/

ReactDOM.render(
    <ProductList />,
    document.getElementById('cards')
  );
  