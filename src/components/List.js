import React from 'react'
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core"
import { Link } from 'react-router-dom'
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

export default function List(props) {
  return (
    <Container maxWidth="lg" className="list-container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listing.map((listing, index) =>(
            <TableRow key={listing.id}>
              <TableCell component="th" scope="row">
                <Link to={`/listing/${listing.id}`} onClick={() => props.updateMap(listing.address)}> {listing["name"]}</Link>
              </TableCell>
              <TableCell>{listing}</TableCell>
              <TableCell>{listing}</TableCell>
              <TableCell>{listing}</TableCell>
              <TableCell>
                {/*IF LOGGED IN THEN SHOW DELETE ICON */}

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  )
}





