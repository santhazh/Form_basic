import Header from '../src/Common/Header';
import Footer from '../src/Common/Footer';
import React, {Component} from 'react'


class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Layout;