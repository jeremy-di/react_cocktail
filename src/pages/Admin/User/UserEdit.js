import React from 'react';
import { useParams } from 'react-router-dom';

const UserEdit = () => {

    let { id } = useParams()
    console.log(id)

    return (
        <div className='UserEdit'>
            Editer un user
        </div>
    );
};

export default UserEdit;