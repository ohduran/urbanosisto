import React from "react"

const ProductContext = React.createContext()

class ProductProvider extends React.Component {

  state = {
    cart: [],
    total: 0
  }

  isInCart = (slug) =>{
    return this.state.cart.filter(item => item.slug === slug).length > 0
  }

  findProduct = (slug) =>{
    return this.state.cart.find(item => item.slug === slug)
  }

  addToCart = (product) =>{
    if (!this.isInCart(product.slug)){
      this.setState({
        cart: [...this.state.cart, {slug: product.slug, quantity: 1, price:product.price, total: product.price}],
        total: (parseFloat(this.state.total) + parseFloat(product.price)).toFixed(2)
      })
    }
  }

  oneMore = (slug) =>{
    let tempProducts = [...this.state.cart];
    const index = tempProducts.indexOf(this.findProduct(slug))
    let product = tempProducts[index]
    product.quantity++
    this.setState({
      cart: tempProducts,
      total: (parseFloat(this.state.total) + parseFloat(product.price)).toFixed(2)
    })
  }

  oneLess = (slug) =>{
    let tempProducts = [...this.state.cart];
    const index = tempProducts.indexOf(this.findProduct(slug))
    let product = tempProducts[index]
    let price = product.price
    product.quantity--
    if (product.quantity === 0){
      tempProducts.splice(index, 1);
    }
    this.setState({
      cart: tempProducts,
      total: (parseFloat(this.state.total) - parseFloat(product.price)).toFixed(2)
    })
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        oneMore: this.oneMore,
        oneLess: this.oneLess
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}
