import React, { Component } from 'react';
import ReactTable from "react-table";

export class PlayerTable extends Component{
  constructor(props){
    super(props);
    this.yearKey = {1: 'FR',2: 'SO',3: 'JR',4: 'SR'};
  }
  render(){
    return (<ReactTable
          data={this.props.data}
          columns={[
            {
              Header: 'Name',
              accessor: 'name', // String-based value accessors!
              minWidth: 150
            },
            {
              id: 'shoot',
              Header: 'Shooting',
              accessor: d => d.shooting + (this.props.improve? d.improvements['shooting'] : "")
            },
            {
              id: 'play',
              Header: 'Playmaking',
              accessor: d => d.playmaking + (this.props.improve? d.improvements['playmaking'] : "")
            },
            {
              id: 'def',
              Header: 'Defense',
              accessor: d => d.defense + (this.props.improve? d.improvements['defense'] : "")
            },
            {
              id: 'reb',
              Header: 'Rebounding',
              accessor: d => d.rebounding + (this.props.improve? d.improvements['rebounding'] : "")
            },
            {
              Header: 'Ethic',
              accessor: 'ethic'
            },
            {
              Header: 'AVG',
              accessor: 'avg'
            },
            {
              id: 'year',
              Header: 'Year',
              accessor: d => this.yearKey[d.year],
              sortMethod: (a, b) => {
                    return a.year > b.year ? 1 : -1;
              }
            }
          ]}
          pageSize={this.props.data.length}
          className="-striped -highlight"
          showPagination= {false}
        />)
  }
}
export class ScoreTable extends Component{
  render(){
    return (<ReactTable
          data={this.props.data}
          columns={[
            {
              Header: 'Home',
              accessor: 'name1' // String-based value accessors!
            },
            {
              Header: 'Score',
              accessor: 'score1' // String-based value accessors!
            },
            {
              Header: 'Away',
              accessor: 'name2' // String-based value accessors!
            },
            {
              Header: 'Score',
              accessor: 'score2' // String-based value accessors!
            }
          ]}
          defaultPageSize={this.props.data.length}
          className="-striped -highlight"
          showPagination= {false}
        />)
  }
}

export class SeasonTable extends Component{

  render(){
    const compare = (a, b) => a.l < b.l ? -1 : (a.l > b.l ? 1 : 0);
    let copy = this.props.data.slice();
    copy.sort(compare);

    return (<ReactTable
          data={copy}
          columns={[
            {
              Header: 'Team',
              accessor: 'name' // String-based value accessors!
            },
            {
              Header: 'Wins',
              accessor: 'w' // String-based value accessors!
            },
            {
              Header: 'Losses',
              accessor: 'l' // String-based value accessors!
            },
          ]}
          defaultPageSize={this.props.data.length}
          className="-striped -highlight"
          showPagination= {false}
        />)
  }
}


export class RecruitTable extends Component{
  constructor(props){
    super(props);
    this.yearKey = {1: 'FR',2: 'SO',3: 'JR',4: 'SR'};
  }

  render(){
    var data = JSON.parse(JSON.stringify(this.props.data));
    for(let player of data){
      player.checkbox =
      <label className="container"><input
            key = {player.name}
            name= {player.name}
            type="checkbox"
            onChange={this.props.handleCheckBox}
            final = {this.props.final}
            />
            <span className="checkmark"></span>
            </label>
    }
    return (
      <form onSubmit={this.props.handleRecruitSubmit}>
              <ReactTable
                data={data}
                columns={[
                  {
                    Header: 'Name',
                    accessor: 'name',
                    
                  },
                  {
                    Header: 'SHOT',
                    accessor: 'shooting',
                    
                  },
                  {
                    Header: 'PLAY',
                    accessor: 'playmaking',
                    
                  },
                  {
                    Header: 'DEF',
                    accessor: 'defense',
                    
                  },
                  {
                    Header: 'REB',
                    accessor: 'rebounding',
                    
                  },
                  {
                    Header: 'ETHIC',
                    accessor: 'ethic',
                   
                  },
                  {
                    Header: 'AVG',
                    accessor: 'avg',
                    
                  },
                 {
                    id: 'year',
                    Header: 'Year',
                    accessor: d => this.yearKey[d.year],
                    sortMethod: (a, b) => {
                          return a.year > b.year ? 1 : -1;
                    },
                    
                  },
                  {
                    Header: 'Recruit?',
                    accessor: 'checkbox' // String-based value accessors!
                  }
                ]}
                pageSize={data.length}
                className="-striped -highlight"
                showPagination= {false}
              />

      </form>
      )
  }
}

export class PlayoffTable extends Component{
  render(){
    return (<ReactTable
          data={this.props.data}
          columns={[
            {
              Header: 'Seed',
              accessor: 'seed1' // String-based value accessors!
            },
            {
              Header: 'Name',
              accessor: 'name1' // String-based value accessors!
            },
            {
              Header: 'Seed',
              accessor: 'seed2' // String-based value accessors!
            },
            {
              Header: 'Name',
              accessor: 'name2' // String-based value accessors!
            }
          ]}
          pageSize={this.props.data.length}
          className="-striped -highlight"
          showPagination= {false}
        />)
  }
}
