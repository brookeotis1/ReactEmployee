// import React from "react";
// import { Table } from "components";

// class Sort extends React.Component {
// state = {
//     sorted: false
//   }
// handleToggle = () => {
//     if (Table.state.sorted) {
//       Table.props.sort("asc")
//     } else {
//       Table.props.sort("desc")
//     }
//     Table.setState({sorted: !Table.state.sorted})
// }
// render() {
//     return (
//       <div className="sort">
//       <div className="sortText"></div>
//         <input
//           checked={Table.state.sorted}
//           onChange={Table.handleToggle}
//           className="react-switch-checkbox"
//           id={`react-switch-new`}
//           type="checkbox"
//         />
//         <label
//           style={{ background: Table.state.sorted && '#06D6A0' }}
//           className="react-switch-label"
//           htmlFor={`react-switch-new`}
//         >
//           <span className={`react-switch-button`} />
//         </label>
//       </div>
//     )
//   }
// }
// export default Sort;


// employee.sort((a, b) => a.name-b.name).map(data => {
//     return <TableRow name={employee.name} phone={employee.phone} />;
// });