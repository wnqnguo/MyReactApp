import React, { Component } from'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
export default class DatePicker extends Component{

    render() {
        return <input type="text" className="datepicker" {...this.props}/>
    }
}