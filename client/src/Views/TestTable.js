import React, { Component } from "react";
import ReactTable from "react-table-6";
import axios from "axios";
import ProfileTableRow from "./ProfileTableRow";
import "react-table-6/react-table.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";
import Delete from './Delete';

export default class TestTable extends React.Component {
  constructor(props) {
    super(props);
    this.deleteProfile = this.deleteProfile.bind(this);

    this.state = {
      profiles: [],
      loading: true,
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/user/")
      .then((res) => {
        console.log('Data',res.data);
        this.setState({
          profiles: res.data,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  DataTable() {
    return this.state.profiles.map((res, i) => {
      return <ReactTable obj={res} key={i} />;
    });
  }



  deleteProfile(id){
    console.log('Delte propfile', id)
    axios.delete(`http://localhost:5000/api/user/${id}`)
        .then((res) => {
          axios
      .get("http://localhost:5000/api/user/")
      .then((res) => {
        console.log('Data',res.data);
        this.setState({
          profiles: res.data,
          loading: false,
        });
      })
            console.log('Profile successfully deleted!')
        }).catch((error) => {
            console.log(error)
            alert(error)
        })
  }

  editProfile(id){
    
  }



  appCheckListColumns = [
    //{
    //   Header: <h4> ID </h4>,
    //   accessor: 'id',
    //   Cell: '',
    //   sortable: false
    // },
    {
      Header: <h5 style={{ textAlign: "left", width: "100px" }}> Name </h5>,
      accessor: "name",
      Cell: (row) => (
        <div style={{ textAlign: "left", fontSize: "13px" }}>{row.value}</div>
      ),
      sortable: false,
      filterable: true,
      filterMethod: (filter, row) => {
        console.log("filter: ", filter.value.toLowerCase());
        // console.log('row: ', row.name.toLowerCase())
        const rowItem = row.name ? row.name.toLowerCase() : null;
        if (rowItem && rowItem.includes(filter.value.toLowerCase())) {
          return true;
        }
        return false;
      },
      Filter: ({ filter, onChange }) => {
        return (
          <div style={{ alignSelf: "left" }}>
            <input
              style={{ width: "200px" }}
              placeholder="Search Checklist Item"
              onChange={(event) => onChange(event.target.value)}
              value={filter ? filter.value : ""}
            />
          </div>
        );
      },
    },
    {
      Header: () => <h5> Email </h5>,
      accessor: "email",
      Cell: (row) => (
        <div style={{ textAlign: "left", fontSize: "13px" }}>{row.value}</div>
      ),
      width: 120,
      sortable: false,
      filterable: true,
      filterMethod: (filter, row) => {
        console.log("filter: ", filter.value.toLowerCase());
        //   console.log('row: ', row.email.toLowerCase())
        const rowItem = row.email ? row.email.toLowerCase() : null;
        if (rowItem && rowItem.includes(filter.value.toLowerCase())) {
          return true;
        }
        return false;
      },

      Filter: ({ filter, onChange }) => {
        return (
          <input
            style={{ width: "200px", alignSelf: "left" }}
            placeholder="Search Checklist Item"
            onChange={(event) => onChange(event.target.value)}
            value={filter ? filter.value : ""}
          />
        );
      },
    },

    {
      Header: <h5> Role </h5>,
      accessor: "role",
      Cell: (row) => <div>{row.value}</div>,
      width: 200,
      sortable: false,
      filterable: true,
      filterMethod: (filter, row) => {
        console.log("filter: ", filter.value.toLowerCase());
        // console.log('row: ', row)
        const rowItem = row.role ? row.role.toLowerCase() : null;
        if (rowItem && rowItem.includes(filter.value.toLowerCase())) {
          return true;
        }
        return false;
      },
      Filter: ({ filter, onChange }) => {
        return (
          <input
            style={{ width: "200px", alignSelf: "left" }}
            placeholder="Search Checklist Item"
            onChange={(event) => onChange(event.target.value)}
            value={filter ? filter.value : ""}
          />
        );
      },
    },
    {
      Header: <h4> </h4>,
      accessor: "_id",
      Cell: (row) =>  <Delete id = {row.value} deleteProfile={this.deleteProfile}/>,
      sortable: false,
    },
  ];

  // onRowClick = (state, rowInfo, column, instance) => {
  //   return {
  //     onClick: (e) => {
  //       console.log("Row Info", rowInfo);
  //       this.props.setAction(rowInfo.row);
  //     },
  //   };
  // };

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
          defaultPageSize={10}
          //pageSizeOptions={[10, 2, 100]}
          getTrProps={this.onRowClick}
          sorted={[
            {
              id: "id",
            },
          ]}
        />
      </div>
    );
  }
}
