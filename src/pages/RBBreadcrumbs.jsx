import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import {  ChevronRight, Database, Folder2Open, HouseDoor } from 'react-bootstrap-icons'

const RBBreadcrumbs = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/" bsPrefix=" " className="me-2">
            <HouseDoor /> Home <ChevronRight /> 
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#" bsPrefix=" " className="me-2">
            <Folder2Open /> Library <ChevronRight />
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
             <Database />   Data
            </Breadcrumb.Item>
        </Breadcrumb>
    );
};

export default RBBreadcrumbs;


// import React from 'react'
// import { Breadcrumb } from 'react-bootstrap'
// import { NavLink } from 'react-router-dom'
// import {  ChevronRight } from 'react-bootstrap-icons'

// const RBBreadcrumbs = () => {
//     return (
//         <Breadcrumb as="ul" className='rb-breadcrumb'>

//             <Breadcrumb.Item linkAs="span" bsPrefix=" " className="me-2 rb-link" as="li">
//             <NavLink to="/">Home <span className='ms-2'><ChevronRight size={10} /></span></NavLink>
//             </Breadcrumb.Item>

//             <Breadcrumb.Item linkAs="span" bsPrefix=" " className="me-2 rb-link" as="li">
//             <NavLink to="rb-badges">Library <span className='ms-2'><ChevronRight size={10} /></span></NavLink>
//             </Breadcrumb.Item>

//             <Breadcrumb.Item active>
//                 Data
//             </Breadcrumb.Item>
//         </Breadcrumb>
//     );
// };

// export default RBBreadcrumbs;

