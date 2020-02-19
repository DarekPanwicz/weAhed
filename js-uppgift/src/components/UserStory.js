import React, { Component } from "react";

export default class UserStory extends Component {
  state = {
    project: "",
    activity: "",
    dateFrom: "",
    dateTo: "",
    chargeable: null,
    description: "",
    reportedTime: []
  };

  submitHandler = e => {
    e.preventDefault();
    console.log("state Reported Time", this.state.reportedTime);

    this.state.reportedTime.push(
      this.state.project,
      this.state.activity,
      this.state.dateFrom,
      this.state.dateTo,
      this.state.chargeable,
      this.state.description
    );
  };

  projectHandler = e => {
    //console.log("Value", e.target.value)
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

  render() {
    const { reportedTime } = this.state;

    const time = true ? (
      reportedTime.map(userBoking => {
        const key = Math.floor(Math.random() * Math.floor(10000000));

        return (
          <>
            <tr key={key}>
              <td>{userBoking}</td>
              <td>
                <button>Redigera</button>
              </td>
              <td>
                <button>Radera</button>
              </td>
            </tr>
          </>
        );
      })
    ) : (
      <div> List is empty :) </div>
    );

    return (
      <div>
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
        <form className="report" onSubmit={this.submitHandler}>
          <div className="col-left">
            <label>
              Projekt
              <select name="project" onChange={this.projectHandler}>
                <option value>Var god välj ett projekt...</option>
                <option name="project 1" value="project1">
                  Projekt 1
                </option>
                <option name="project 2" value="project2">
                  Projekt 2
                </option>
                <option name="project 3" value="project3">
                  Projekt 3
                </option>
              </select>
            </label>
            <label>
              Aktivitet
              <select name="activity" onChange={this.activityHandler}>
                <option value>Var god välj en aktivitet...</option>
                <option name="activity 1" value="activity1">
                  Aktivitet 1
                </option>
                <option name="activity 2" value="activity2">
                  Aktivitet 2
                </option>
                <option name="activity 3" value="activity3">
                  Aktivitet 3
                </option>
              </select>
            </label>
            <div className="pair">
              <label className="pair-left">
                Från
                <input
                  type="text"
                  name="from"
                  onChange={this.dateFromHandler}
                />
              </label>
              <label className="pair-right">
                Till
                <input type="text" name="to" onChange={this.dateToHandler} />
              </label>
            </div>
            <label className="checkbox">
              <span>Debiterbar</span>
              <input
                type="checkbox"
                name="billable"
                onChange={this.chargeableHandler}
              />
            </label>
          </div>
          <div className="col-right">
            <label>
              Anteckning
              <textarea
                name="note"
                cols={30}
                rows={10}
                defaultValue={""}
                onChange={this.descriptionHandler}
              />
            </label>
            <button type="submit">Spara</button>
          </div>
        </form>
        <table>
          <caption>Rapporterad tid</caption>
          <thead>
            <tr>
              <th>Projekt</th>
              <th>Aktivitet</th>
              <th>Från</th>
              <th>Till</th>
              <th>Anteckning</th>
              <th colSpan={2}>Åtgärd</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td colSpan={7}>Summa total tid: 8:00</td>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <td>Lorem ipsum</td>
              <td>Fusce</td>
              <td>9:00</td>
              <td>17:00</td>
              <td>Proin vel iaculis diam.</td>
              <td>
                <button>Redigera</button>
              </td>
              <td>
                <button>Radera</button>
              </td>
            </tr>
            {time}
          </tbody>
        </table>
      </div>
    );
  }
}