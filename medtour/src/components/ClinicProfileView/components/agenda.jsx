// @flow
import React, { Component } from 'react';
import moment from 'moment';
import { ReactAgenda , ReactAgendaCtrl, guid , getUnique , getLast , getFirst , Modal } from 'react-agenda';

var now = new Date();

require('moment/locale/tr.js');
    var colors= {
      'color-1':"rgba(102, 195, 131 , 1)" ,
      "color-2":"rgba(242, 177, 52, 1)" ,
      "color-3":"rgba(235, 85, 59, 1)" ,
      "color-4":"rgba(70, 159, 213, 1)",
      "color-5":"rgba(170, 59, 123, 1)"
    }

export default class Agenda extends Component {
  constructor(props){
  super(props);

  

this.state = {
  items:[],
  treatment: {},
  selected:[],
  cellHeight:(60 / 4),
  showModal:false,
  locale:"tr",
  rowsPerHour:4,
  numberOfDays:4,
  startDate: new Date()
}
this.handleRangeSelection = this.handleRangeSelection.bind(this)
this.handleItemEdit = this.handleItemEdit.bind(this)
this.zoomIn = this.zoomIn.bind(this)
this.zoomOut = this.zoomOut.bind(this)
this._openModal = this._openModal.bind(this)
this._closeModal = this._closeModal.bind(this)
this.addNewEvent = this.addNewEvent.bind(this)
this.removeEvent = this.removeEvent.bind(this)
this.editEvent = this.editEvent.bind(this)
this.changeView = this.changeView.bind(this)
this.handleCellSelection = this.handleCellSelection.bind(this)

  }

  initializeItems(){

    var startTime = this.state.treatment.treatmentDate;

    var startTimeSplitted = startTime.split("-");
    var startTimeYear = Number.parseInt(startTimeSplitted[0]);
    var startTimeMonth = Number.parseInt(startTimeSplitted[1]);
    console.log(startTimeSplitted)
    var startTimeDay = startTimeSplitted[2].split("T");
    startTimeDay = Number.parseInt(startTimeDay[0])
    console.log(startTimeDay)
    console.log(startTimeYear)
    console.log(new Date(startTimeYear, startTimeMonth-1, startTimeDay, 8, 0))
    var treatment = [
    {
      _id: 'event-0',
      name: 'Name Of The Patient: ' + this.state.treatment.userName + ' ' + 
      this.state.treatment.surName + '\n' + 'Treatment For The Patient: ' + this.state.treatment.treatmentName + 
      ' ' + '\n' + 'Treatment Price: ' + this.state.treatment.treatmentPrice + '',
      
      // startDateTime : new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 8, 0),
      // endDateTime   : new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 15, 0),
      startDateTime : new Date(startTimeYear, startTimeMonth - 1, startTimeDay, 8, 0),
      endDateTime   : new Date(startTimeYear, startTimeMonth - 1, startTimeDay, 15, 0),
      classes: 'color-3'

    }
    ]


    this.setState({items:treatment})


  }

  componentDidMount(){

    this.setState({
      treatment: this.props.treatment_object
    }, () => {
      console.log(this.state.treatment)
      this.initializeItems();
    })

    // this.setState({items:treatment})


    // var data = this.props.treatment_object();
    // var userName = data.userName
    // console.log(data)
    // console.log('USERNAME:'+ userName)



    // var treatment = [
    // {
    //   _id: 'event-0',
    //   name: 'Name Of The Patient: ' + this.props.treatment_object.userName + ' ' + 
    //   this.props.treatment_object.surName + '\n' + 'Treatment For The Patient: ' + this.props.treatment_object.treatmentName + 
    //   ' ' + '\n' + 'Treatment Price: ' + this.props.treatment_object.treatmentPrice + '',
      // startDateTime : new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 8, 0),
      // endDateTime   : new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 15, 0),
    //   // classes       : 'color-3'
    //   // this.props.treatment_object.treatmentDate.setTime(this.props.treatment_object.treatmentDate + (8*60*60*1000)),
    //   // this.props.treatment_object.treatmentDate.setTime(this.props.treatment_object.treatmentDate + (13*60*60*1000)),
    //   classes: 'color-3'

    // }
    // ]

    

  }


componentWillReceiveProps(next , last){
  if(next.items){

    this.setState({items:next.items})
  }
}
  handleItemEdit(item, openModal) {

    if(item && openModal === true){
      this.setState({selected:[item] })
      return this._openModal();
    }



  }
  handleCellSelection(item, openModal) {

    if(this.state.selected && this.state.selected[0] === item){
      return  this._openModal();
    }
       this.setState({selected:[item] })

  }

  zoomIn(){
var num = this.state.cellHeight + 15
    this.setState({cellHeight:num})
  }
  zoomOut(){
var num = this.state.cellHeight - 15
    this.setState({cellHeight:num})
  }


  handleDateRangeChange (startDate, endDate) {
      this.setState({startDate:startDate })

  }

  handleRangeSelection (selected) {


this.setState({selected:selected , showCtrl:true})
this._openModal();

}

_openModal(){
  this.setState({showModal:true})
}
_closeModal(e){
  if(e){
    e.stopPropagation();
    e.preventDefault();
  }
    this.setState({showModal:false})
}

handleItemChange(items , item){

this.setState({items:items})
}

handleItemSize(items , item){

  this.setState({items:items})

}

removeEvent(items , item){

    this.setState({ items:items});
}

addNewEvent (items , newItems){

  this.setState({showModal:false ,selected:[] , items:items});
  this._closeModal();
}
editEvent (items , item){

  this.setState({showModal:false ,selected:[] , items:items});
  this._closeModal();
}

changeView (days , event ){
this.setState({numberOfDays:days})
}


  render() {

    var AgendaItem = function(props){
      console.log( ' item component props' , props)
      return <div style={{display:'block', position:'absolute' , background:'#FFF'}}>{props.item.name} <button onClick={()=> props.edit(props.item)}>Edit </button></div>
    }
    return (

      <div className="content-expanded ">

        <div className="control-buttons">
          <button  className="button-control" onClick={this.zoomIn}> <i className="zoom-plus-icon"></i> </button>
          <button  className="button-control" onClick={this.zoomOut}> <i className="zoom-minus-icon"></i> </button>
          <button  className="button-control" onClick={this._openModal}> <i className="schedule-icon"></i> </button>
          <button  className="button-control" onClick={this.changeView.bind(null , 7)}> {moment.duration(7, "days").humanize()}  </button>
          <button  className="button-control" onClick={this.changeView.bind(null , 4)}> {moment.duration(4, "days").humanize()}  </button>
          <button  className="button-control" onClick={this.changeView.bind(null , 3)}> {moment.duration(3, "days").humanize()}  </button>
          <button  className="button-control" onClick={this.changeView.bind(null , 1)}> {moment.duration(1, "day").humanize()} </button>
        </div>

        <ReactAgenda
          minDate={new Date(now.getFullYear(), now.getMonth()-3)}
          maxDate={new Date(now.getFullYear(), now.getMonth()+3)}
          startDate={this.state.startDate}
          startAtTime={8}
          endAtTime={23}
          cellHeight={this.state.cellHeight}
          locale="tr"
          items={this.state.items}
          numberOfDays={this.state.numberOfDays}
          headFormat={"ddd DD MMM"}
          rowsPerHour={this.state.rowsPerHour}
          itemColors={colors}
          helper={true}
          //itemComponent={AgendaItem}
          view="calendar"
          autoScale={false}
          fixedHeader={true}
          onRangeSelection={this.handleRangeSelection.bind(this)}
          onChangeEvent={this.handleItemChange.bind(this)}
          onChangeDuration={this.handleItemSize.bind(this)}
          onItemEdit={this.handleItemEdit.bind(this)}
          onCellSelect={this.handleCellSelection.bind(this)}
          onItemRemove={this.removeEvent.bind(this)}
          onDateRangeChange={this.handleDateRangeChange.bind(this)} />
        {
          this.state.showModal? <Modal clickOutside={this._closeModal} >
          <div className="modal-content">
             <ReactAgendaCtrl items={this.state.items} itemColors={colors} selectedCells={this.state.selected} Addnew={this.addNewEvent} edit={this.editEvent}  />

          </div>
   </Modal>:''
        }


       </div>

    );
  }
}
