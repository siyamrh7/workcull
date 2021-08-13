import React from 'react';
import Page404 from './views/pages/page404/Page404';
const Postjob=React.lazy(()=> import('./views/PostJob/Postjob') )
const Findjob = React.lazy(() => import('./views/Findjobs/Findjob'));
const Notification = React.lazy(() => import('./views/Notification/Notification'));
const routes = [
    { path: '/workcull',exact:true, name: 'Find Job', component: Findjob },
    { path: '/workcull/findjobs', name: 'Find Job', component: Findjob },
    { path: '/workcull/notification', name: 'Notifcation', component: Notification },
    { path: '/workcull/postjob', name: 'Post Job', component: Postjob },
    
    { name: 'Find Job', component: Page404 },
];

export default routes;
