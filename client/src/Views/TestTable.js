import React, { Component } from 'react';  
import ReactTable from 'react-table-6';
import axios from 'axios';
import ProfileTableRow from './ProfileTableRow';




export default class TestTable extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          profiles: [],
          loading: true
        };
      }
      componentDidMount() {
        axios.get('http://localhost:5000/api/user/')
          .then(res => {
            console.log(res.data)
            this.setState({
              profiles: res.data,
              loading: false

            });

          })
          .catch((error) => {
            console.log(error);
          })
      }
       DataTable() {
         return this.state.profiles.map((res, i) => {

           return <ProfileTableRow obj={res} key={i} />;
         });
      }
    
    appCheckListColumns = [{
        Header: <h4> ID </h4>,
        accessor: '_id',
        Cell: row => <div style={{ fontSize:"13px"}}>{row.value}</div>,
        sortable: false
      },{  
      Header: <h4> NAME </h4>,  
      accessor: 'name', 
      Cell: row => <div style={{ textAlign: "left",fontSize:"13px"}}>{row.value}</div>,
      sortable: false,
      filterable: true,
      filterMethod: (filter, row) => { 
        console.log('filter: ', filter.value.toLowerCase())
        console.log('row: ', row.name.toLowerCase())
        const rowItem = row.name.toLowerCase()
        if(rowItem.includes(filter.value.toLowerCase())){
          return true
        }
          return false
        
      },
      Filter: ({filter, onChange}) => {
        return (
          <input style={{width:"400px"}} placeholder="Search Checklist Item" onChange={event => onChange(event.target.value)} value={filter? filter.value: ''}/>
        )
      }
      },
      {  
      Header: () => <h4> email </h4>,  
      accessor: 'email',
      Cell: row => <div style={{ textAlign: "left",fontSize:"13px"}}>{row.value}</div>,
      width: 120,
      sortable: false,
      filterable: true,
      filterMethod: (filter, row) => { 
        console.log('filter: ', filter.value.toLowerCase())
        console.log('row: ', row.email.toLowerCase())
        const rowItem = row.email.toLowerCase()
        if(rowItem.includes(filter.value.toLowerCase())){
          return true
        }
            return false
           
        },
         
     // Filter: ({filter, onChange}) => this.customFilter({fieldName: 'email', filter, onChange})
    },
    
     {
      Header: <h4> Role </h4>,  
      accessor: 'role',
      Cell: ((row) => <div>{row.value}</div>),
      width: 200,
      sortable: false,
      filterable: true,
      filterMethod: (filter, row) => { 
        console.log('filter: ', filter)
        console.log('row: ', row)
        if(filter.value === 'all') { 
            return true 
        } 
          return row[filter.id] === filter.value
        
      },
     // Filter: ({filter, onChange}) => this.customFilter({fieldName: 'status', filter, onChange})
    },{  
      Header:  <h4> Additional Info </h4>,  
      accessor: 'comments',
      Cell: ((row) => <div> {row.value}</div>),
      sortable: false
    }]  

  onRowClick = (state, rowInfo, column, instance) => {
    return {
        onClick: e => {
          console.log('Row Info', rowInfo)
            this.props.setAction(rowInfo.row);
        }
    }
  }
  
    // customFilter = ({ fieldName, filter, onChange }) => {
    
    //     return (
    //     <select
    //         onChange={event => onChange(event.target.value)}
    //         style={{ width: "100%" }}
    //         value={filter ? filter.value : "all"}
    //     > 
    //         <option value="all">Show All</option>
    //         {this.props.appCheckList
    //         .map(item => item[fieldName])
    
    //         .filter((item, i, s) => s.lastIndexOf(item) == i)
    //         .map(function (value) {
    //             console.log('Value is ', value)
    //             return (
    //             <option key={value} value={value}>
    //                 {value}
    //             </option>
    //             );
    //         })}
    //     </select>
    //     );
    //};


  render() {  
    return (  
        <div>  
            {/* <h1>Test</h1> */}
            <ReactTable  
                data={this.state.profiles}  
                columns={this.appCheckListColumns}  
                defaultPageSize = {20}  
                pageSizeOptions = {[20,50,100]}  
                getTrProps={this.onRowClick}
                sorted={[
                  {
                   id: 'id'
                  }]}
            />  
        </div>        
    )  
  }  
      }

