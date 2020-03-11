import React, { Component } from "react";
import Form from "./UserForm";
import ReportedTime from "./ReportedTime";

export default class UserStory extends Component {
  state = {
    id: "",
    project: "",
    activity: "",
    dateFrom: "",
    dateTo: "",
    chargeable: null,
    edit: false,
    deleteItem: false,
    deleteId: "",
    description: "",
    reportedTime: []
  };

  submitHandler = e => {
    e.preventDefault();

    if (!this.state.edit) {

      const id = new Date().toISOString();
      const {project, activity, dateFrom, dateTo, chargeable, description} = this.state;

      this.setState({
        reportedTime: [
          ...this.state.reportedTime,
          { id, project, activity, dateFrom, dateTo, chargeable, description }
        ],
        id: "",
        project: "",
        activity: "",
        dateFrom: "",
        dateTo: "",
        chargeable: null,
        description: ""
      });
      e.target.reset();
    } else {
      const findItem = this.state.reportedTime.filter(
        v => v.id !== this.state.id
      );

      this.state.reportedTime.find(element => {
        if (element !== this.state.id) {
          const id = this.state.id;

          const {project, activity, dateFrom, dateTo, chargeable, description} = this.state;

          this.setState({
            reportedTime: [
              ...findItem,
              {id, project, activity, dateFrom, dateTo, chargeable, description}
            ],
            id: "",
            project: "",
            activity: "",
            dateFrom: "",
            dateTo: "",
            chargeable: null,
            description: ""
          });
          e.target.reset();
        }
      });
    }
  };

  changingContent = e => {
    const userBooking = e;
    this.setState({
      id: userBooking.id,
      project: userBooking.project,
      activity: userBooking.activity,
      dateFrom: userBooking.dateFrom,
      dateTo: userBooking.dateTo,
      chargeable: userBooking.chargeable,
      description: userBooking.description,
      edit: true,
      reportedTime: [...this.state.reportedTime]
    });
  };

  projectHandler = e => {
    this.setState({
      project: e.target.value
    });
  };

  activityHandler = e => {
    this.setState({
      activity: e.target.value
    });
  };

  dateFromHandler = e => {
    this.setState({
      dateFrom: e.target.value
    });
  };

  dateToHandler = e => {
    this.setState({
      dateTo: e.target.value
    });
  };

  chargeableHandler = e => {
    this.setState({
      chargeable: !this.state.chargeable
    });
  };

  descriptionHandler = e => {
    this.setState({
      description: e.target.value
    });
  };

  askAboutDeletingTime = e => {
    this.setState({
      deleteItem: true,
      deleteId: e.id
    });
  };

  doNotDelete = e => {
    this.setState({
      deleteItem: false
    });
  };

  deleteHandler = e => {
    const id = this.state.deleteId;
    this.setState({
      deleteItem: false,
      reportedTime: this.state.reportedTime.filter(function (bookning) {
        return bookning.id !== id;
      })
    });
  };

  render() {
    const {id, project, activity, dateFrom, dateTo, chargeable, edit, deleteItem, deleteId, description, reportedTime
    } = this.state;

    const values = {id, project, activity, dateFrom, dateTo, chargeable, edit, deleteItem, deleteId, description, reportedTime};

    return (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{background:#fff;font-family:sans-serif;width:85%;max-width:750px;margin:0 auto;padding:0 25px}h2{font-size:1.75em;text-transform:uppercase}p{font-size:.8125em}.report{border:solid 1px #afafaf;padding:10px;overflow:hidden;background:#f1f1f1}.report legend{position:absolute;left:-999px}.report .col-left{float:left;width:43%}.report .col-right{float:right;width:57%}.report label{padding:10px 15px;display:block;font-size:.75em;font-weight:700;clear:both;vertical-align:top}.report input,.report select{display:block;width:100%;margin-top:5px}.report input{padding:5px}.report button{margin:10px 15px}.report .checkbox span{float:left}.report .checkbox input{float:left;width:auto;margin-left:20px;margin-top:0}.report .pair{overflow:hidden;padding:10px 15px}.report .pair label{width:48%;padding:0;clear:none}.report .pair input{width:90%}.report .pair-left{float:left}.report .pair-right{float:right}.report textarea{width:98%;margin-top:5px}.report button{border:solid 1px #aaa;-webkit-border-radius:1px;-moz-border-radius:1px;border-radius:1px;padding:12px 25px;color:#000;float:right}caption{font-size:1.75em;text-transform:uppercase;text-align:left;margin:1em 0 .5em;font-weight:700}thead{background:#f1f1f1}tfoot,th{text-transform:uppercase}tfoot{border-top:solid 1px #f1f1f1}td,th{padding:15px;font-size:.75em}td button{cursor:pointer;display:block;white-space:nowrap}"
          }}
        />
        <meta charSet="UTF-8" />
        <title>We aheads front-end test - Del 1</title>
        <h1>Tidrapportering</h1>
        <p>
          Mauris sit tincidunt, lectus cursus, integer adipiscing tempor, montes
          in rhoncus odio auctor urna sit arcu sagittis? A, scelerisque
          porttitor mauris urna montes vut, magnis dolor. Et aliquet?
        </p>
        <p>
          Et elementum, nunc parturient aliquam pulvinar elit vel ridiculus et
          cursus nec? Porta diam, ut. Augue, turpis mus, nunc sit ac, nascetur
          elementum habitasse risus etiam, in! Hac ut? Magnis, penatibus enim
          odio enim hac!
        </p>

        <Form
          values={values}
          submitHandler={this.submitHandler}
          projectHandler={this.projectHandler}
          activityHandler={this.activityHandler}
          dateFromHandler={this.dateFromHandler}
          dateToHandler={this.dateToHandler}
          chargeableHandler={this.chargeableHandler}
          descriptionHandler={this.descriptionHandler}
        />

        <ReportedTime
          values={values}
          deleteHandler={this.deleteHandler}
          askAboutDeletingTime={this.askAboutDeletingTime}
          doNotDelete={this.doNotDelete}
          changingContent={this.changingContent}
        />
      </>
    );
  }
}
