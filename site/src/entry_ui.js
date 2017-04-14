import React , { Component } from 'react';
import { render } from "react-dom";
import { simpleRestClient, Admin, Resource } from 'admin-on-rest';
import { ProjectList , ProjectCreate , ProjectEdit , ProjectShow } from './ui/projects'
import { TaskList , TaskCreate , TaskEdit , TaskShow } from './ui/tasks'

render(
    <Admin restClient={simpleRestClient('.')}>
        <Resource name="projects" show = { ProjectShow } edit = { ProjectEdit } create= { ProjectCreate } list={ProjectList} />
        <Resource name="tasks" edit = { TaskEdit } show = { TaskShow }  create= { TaskCreate } list={ TaskList } />
    </Admin>,
    document.getElementById('app')
);