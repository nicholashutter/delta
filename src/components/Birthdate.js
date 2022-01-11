import React, { Component } from 'react';

class Birthdate extends Component {

    constructor() {
        
        super();

        this.state = {
            birthmonth: "1",
            birthday: "1",
            birthyear: "2021",
            maxdays: "",
            fulldate:"1/1/2021"
        }

        this.handleOnChangeMonth = this.handleOnChangeMonth.bind(this);
        this.handleOnChangeDay = this.handleOnChangeDay.bind(this);
        this.handleOnChangeYear = this.handleOnChangeYear.bind(this);

    }
    


    componentDidMount() {

        //set a default date of today
        const d = new Date;
        let month = d.getMonth()+1;
        let day = d.getDate();
        let year = d.getFullYear();
        let maxd = 0;

        if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8
            || month === 10 || month === 12)
            maxd = 31;
        
        if(month === 4 || month === 6 || month === 9 || month === 11)
            maxd = 30;

        if(month === 2)
            maxd = 28;

        this.setState({
            birthmonth: month,
            birthday: day,
            birthyear: year,
            maxdays: maxd
        })

    }

    handleOnChangeMonth(event) {

        this.setState({
            birthmonth: event.currentTarget.value
        }, this.updateMaxDays)

            
    }

    handleOnChangeDay(event) {

        this.setState({
            birthday: event.currentTarget.value
        }, this.updatefulldate)
            
    }

    handleOnChangeYear(event) {

        this.setState({
            birthyear: event.currentTarget.value
        }, this.updatefulldate)
            
    }


    updatefulldate() {

        this.setState({
            fulldate: this.state.birthmonth+"/"+this.state.birthday+"/"+this.state.birthyear
        })
    }

    updateMaxDays() {

        let month = this.state.birthmonth;
        let maxd = 0;

        if(month === "1" || month === "3" || month === "5" || month === "7" || month === "8"
            || month === "10" || month === "12")
            maxd = 31;

        if(month === "4" || month === "6" || month === "9" || month === "11")
            maxd = 30;

        if(month === "2")
            maxd = 28;

        this.updatefulldate();
        
        this.setState({
            maxdays: maxd
        }, this.createDayItems)

    }

    createDayItems() {
        let items = [];         
        for (let i = 1; i <= this.state.maxdays; i++) {             
             items.push(<option key={i} value={i}>{i}</option>);   
        }

        return items;
    }

    

    render() {
        return (
            <div>            
                <label>
                Birthdate:  </label>
                <select name="month" value={this.state.birthmonth} onChange={this.handleOnChangeMonth}>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                <select name="day" value={this.state.birthday} onChange={this.handleOnChangeDay}>
                    {this.createDayItems()}
                </select>
                <select name="year" value={this.state.birthyear} onChange={this.handleOnChangeYear}>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                </select>
                <br></br>
            </div>
        );
    }
}

export default Birthdate;