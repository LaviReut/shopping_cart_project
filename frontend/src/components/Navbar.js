import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Input, Icon, Label, Dropdown, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import logo from '../images/Logo.jpg'   
import './Navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            className: '',
            initialProducts: []
        }

        this.handleOnScroll = this.handleOnScroll.bind(this)
        this.handleSearchItems = this.handleSearchItems.bind(this)
        this.handleCategoryItems = this.handleCategoryItems.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleOnScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleOnScroll)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.products.length > this.state.initialProducts) {
            this.setState({ initialProducts: newProps.products })
        }
    }

    handleOnScroll(e) {
        let className = ''
        if (e.pageY > 0) {
            className = 'small'
        }

        this.setState({ className })
    }

    handleSearchItems(e) {
        let filteredProducts = _.filter(this.state.initialProducts, (obj) => {
            return _.includes(obj.name.toLowerCase(), e.target.value.toLowerCase())
        })

        this.props.filterProducts(filteredProducts)
    }

    handleCategoryItems(e, data) {
        if (data.value != 'All'){
            let filteredProducts = _.filter(this.state.initialProducts, (obj) => {
                return _.includes(obj.category.toLowerCase(), data.value.toLowerCase())
            })
            this.props.filterProducts(filteredProducts)
        }
        else{
            let filteredProducts = _.filter(this.state.initialProducts, (obj) => {
                return _.includes(obj.category.toLowerCase(), '')
            })
            this.props.filterProducts(filteredProducts)      
        }
    }

    render() {
        const categoryOptions = [
            {
              key: 'Cookies',
              text: 'Cookies',
              value: 'Cookies',
            },
            {
              key: 'Cakes',
              text: 'Cakes',
              value: 'Cakes',
            },
            {
              key: 'Breads',
              text: 'Breads',
              value: 'Breads',
            },
            {
                key: 'All',
                text: 'All',
                value: 'All',
              }
        ]
        return (
            <Menu id='navbar' className={this.state.className} size='massive' fixed='top' secondary>
                <Menu.Item id='logo' as={Link} to='/' header>
                    <img src={logo} as={Link} to='/' header/>
                </Menu.Item>
                <Menu.Item id='category'>
                    <Dropdown
                        placeholder='Select Category'
                        fluid
                        selection
                        label='Category'
                        name='Category'
                        onChange={this.handleCategoryItems}
                        options={categoryOptions}
                    />
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input transparent icon={{ name: 'search', link: true }} placeholder='Search...' style={this.props.showSearch ? null : {display: 'none'}} onChange={this.handleSearchItems} />
                    </Menu.Item>

                    <Menu.Item as={Link} to='/cart'>
                        <Icon name='shop' />
                        <Label color='red' floating>{this.props.itemsInCartCount}</Label>
                    </Menu.Item>

                    <Menu.Item as={Link} to='/account'>
                        <Icon name='user' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

Navbar.propTypes = {
    showSearch: PropTypes.bool.isRequired,
    itemsInCartCount: PropTypes.number.isRequired,
    products: PropTypes.array,
    filterProducts: PropTypes.func.isRequired
}


export default Navbar
