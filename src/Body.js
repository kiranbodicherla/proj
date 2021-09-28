import React from "react";
import { useTable,useFilters, usePagination   } from "react-table";
import './Body.css';
export default function Body() {
  const data = React.useMemo(
    () => [
      {
        name: 'akhil',
        age: 24,
        email: "akhil@gmail.com",
        mobile: 1234567,
        address_line1: "4420 Valley Street, Garnerville, NY 10923",
        address_line2: "4420 Valley Street, Garnerville, NY 10923",
        city: "san jone",
        state: "CA",
        postalcode: 394221,
      },
      {
        name: "kiran",
        age: 24,
        email: "kiran@gmail.com",
        mobile: 9999999999,
        address_line1: "4420 Valley Street, Garnerville, NY 10923",
        address_line2: "4420 Valley Street, Garnerville, NY 10923",
        city: "san jone",
        state: "CA",
        postalcode: 394221,
      },
      {
        name: "sai",
        age: 24,
        email: "sai@gmail.com",
        mobile: 9999999999,
        address_line1: "4420 Valley Street, Garnerville, NY 10923",
        address_line2: "4420 Valley Street, Garnerville, NY 10923",
        city: "san jone",
        state: "CA",
        postalcode: 394221,
      },
      {
        name: "ram",
        age: 24,
        email: "ram@gmail.com",
        mobile: 9999999999,
        address_line1: "4420 Valley Street, Garnerville, NY 10923",
        address_line2: "4420 Valley Street, Garnerville, NY 10923",
        city: "san jone",
        state: "CA",
        postalcode: 394221,
      },
      {
        name: "uday",
        age: 23,
        email: "uday@gmail.com",
        mobile: 9999888889,
        address_line1: "4420 Valley Street, Garnerville, NY 10923",
        address_line2: "4421 Valley Street, Garnerville, NY 10923",
        city: "san jone hi",
        state: "BA",
        postalcode: 1234,
      },
      {
        name: "vamshi",
        age: 24,
        email: "vamshi@gmail.com",
        mobile: 9999999999,
        address_line1: "4420 Valley",
        address_line2: "4420 Valley Street, Garnerville, NY 10923",
        city: "san jone",
        state: "CA",
        postalcode: 394221,
      },
      
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Student Info",
        columns: [
          {
            Header: "Name",
            accessor: "name",
        
          },
          {
            Header: "Age",
            accessor: "age",
          },
          {
            Header: "Email",
            accessor: "email",
          },
          {
            Header: "Mobile",
            accessor: "mobile",
          },
          {
            Header: "Address_line1",
            accessor: "address_line1",
          },
          {
            Header: "Address_line2",
            accessor: "address_line2",
          },
          {
            Header: "City",
            accessor: "city",
          },
          {
            Header: "State",
            accessor: "state",
          },
          {
            Header: "Postal code",
            accessor: "postalcode",
          }
        ],
      },
    
    ],
    []
  );
  const defaultColumn = React.useMemo(
    () => ({
      Filter: TextFilter,
    }),
    []
   )
  
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, page,
    pageOptions,
    state: { pageIndex, pageSize },
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage, } =
    useTable({ columns, data,defaultColumn,initialState:{ pageSize:2}}, useFilters ,usePagination);

    function TextFilter({
      column: { filterValue, preFilteredRows, setFilter },
     }) {
      const count = preFilteredRows.length
     
      return (
        <input
          value={filterValue || ''}
          onChange={e => {
            setFilter(e.target.value || undefined)
          }}
          placeholder={`Search  records...`}
        />
      )
     }
   
  return (
    <div className="table">
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr className="tr" {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className="th" {...column.getHeaderProps()}  style={{
                borderBottom: 'solid 3px lightblue',
                background: 'green',
                color: 'white',
                fontWeight: 'bold',
              }} > {column.render("Header")} 
          <div>{column.canFilter ? column.render('Filter') : null}</div>
              </th>
              
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td className="td" {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    <div>
    <button onClick={() => previousPage()} disabled={!canPreviousPage}>
         Previous Page
       </button>
       <button onClick={() => nextPage()} disabled={!canNextPage}>
         Next Page
       </button>
       <div>
         Page{' '}
         <em>
           {pageIndex + 1} of {pageOptions.length}
         </em>
       </div>
     </div>
    </div>

    

  );
}
