import React from 'react';
import * as S from './directory-styles';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory-selectors';

import MenuItem from '../menu-item/menu-item';


const Directory = ({sections}) => {
    return (
        <S.DirectoryMenu>
            {sections.map(({id, ...rest}) =>
                <MenuItem key={id} {...rest} />
            )}
        </S.DirectoryMenu>
    )
};

const mapStateToProps = createStructuredSelector({ 
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);