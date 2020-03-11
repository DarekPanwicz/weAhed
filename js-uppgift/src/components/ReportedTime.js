import React, { Component } from "react";

export default class ReportedTime extends Component {
  render() {
    const {values, deleteHandler, askAboutDeletingTime, doNotDelete, changingContent
    } = this.props;

    const styleBtn = {
      height: "40px",
      width: "100px",
      color: "white",
      fontSize: "25px",
      backgroundColor: "black",
      margin: "0 10px"
    };

    const { reportedTime } = values;
    const bookingSorted = values.reportedTime.sort(function compare(a, b) {
      var dateA = new Date(a.id);
      var dateB = new Date(b.id);
      return dateA - dateB;
    });

    const bookning =
      values.reportedTime.length > 0 ? (
        bookingSorted.map(userBooking => {
          return (
            <tr key={userBooking.id}>
              <td>{userBooking.project}</td>
              <td>{userBooking.activity}</td>
              <td>{userBooking.dateFrom}</td>
              <td>{userBooking.dateTo}</td>
              <td>{userBooking.description}</td>
              <td>
                <button
                  onClick={() => {
                    changingContent(userBooking);
                  }}
                >
                  Redigera
                  </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    askAboutDeletingTime(userBooking);
                  }}
                >
                  Radera
                </button>
              </td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td>Det finns inga bokningar</td>
        </tr>
      );

    return (
      <div>
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

          <tbody>{bookning}</tbody>
        </table>

        {values.deleteItem ? (
          <div>
            <p style={{ fontSize: "30px", color: "red" }}>
              Vill du verkligen ta bort tid ?
            </p>
            <button onClick={deleteHandler} style={styleBtn}>
              {" "}
              Ja{" "}
            </button>
            <button onClick={doNotDelete} style={styleBtn}>
              {" "}
              Nej{" "}
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}
