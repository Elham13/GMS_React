import React from 'react'

const AdminCard = ({count, name, icon}) => {
    return (
        <div className="adminCard-single">
            <div>
                <h1>{count}</h1>
                <span>{name}</span>
            </div>
            <div>
                {icon}
            </div>
        </div>
    )
}

export default AdminCard
