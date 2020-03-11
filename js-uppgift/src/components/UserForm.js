import React, { Component } from "react";

export default class UserForm extends Component {
  render() {
    const {
      values,
      submitHandler,
      projectHandler,
      activityHandler,
      dateFromHandler,
      dateToHandler,
      chargeableHandler,
      descriptionHandler
    } = this.props;

    return (
      <div>
        <form className="report" onSubmit={submitHandler}>
          <div className="col-left">
            <label>
              Projekt
              <select
                name="project"
                value={values.project}
                onChange={projectHandler}
              >
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
              <select
                name="activity"
                value={values.activity}
                onChange={activityHandler}
              >
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
                  value={values.dateFrom}
                  onChange={dateFromHandler}
                />
              </label>
              <label className="pair-right">
                Till
                <input
                  type="text"
                  name="to"
                  value={values.dateTo}
                  onChange={dateToHandler}
                />
              </label>
            </div>
            <label className="checkbox">
              <span>Debiterbar</span>
              <input
                type="checkbox"
                name="billable"
                onChange={chargeableHandler}
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
                defaultValue={values.description}
                onChange={descriptionHandler}
              />
            </label>
            <button type="submit">Spara</button>
          </div>
        </form>
      </div>
    );
  }
}
