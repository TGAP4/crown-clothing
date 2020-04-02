import React from 'react';
import * as S from './header-styles';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase-utils';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart-selectors';
import {selectCurrentUser} from '../../redux/user/user-selectors';

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';


const Header = ({currentUser, hidden}) => {
    return (
        <S.Header>
            <S.LogoContainer to='/'>
                <Logo className='logo' />
            </S.LogoContainer>
            <S.Options>
                <S.Option as={Link} to='/shop'>
                    SHOP
                </S.Option>
                <S.Option as={Link} to='/contact'>
                    CONTACT
                </S.Option>
                {
                    currentUser ?
                    <S.Option as={Link} onClick={() => auth.signOut()}>
                        SIGN OUT
                    </S.Option>
                    
                    : <S.Option as={Link} to='/signin'>SIGN IN</S.Option>
                }
                <CartIcon />
            </S.Options>
            {hidden ? null : <CartDropdown />}
        </S.Header>
    )
}

const mapStatetoProps = createStructuredSelector({
    currentUser: selectCurrentUser, 
    hidden: selectCartHidden
});

export default connect(mapStatetoProps)(Header);