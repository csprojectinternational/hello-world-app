import { Stack } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import api from '../../api/axiosConfig';
import './InfoGrid.css';

const InfoGrid = ({ emptyMessage, reloadConnectedStudents, rowsEndpoint, rowsInfoToFetch, columns }) => {

  const [checks, setChecks] = useState({});
  const [rows, setRows] = useState([]);

  async function getRows() {
    try {
      const res = await api.get(rowsEndpoint);
      // const res = await api.get('/api/v1/students/all');
      const profiles = res.data;

      let toAdd = {};

      profiles.forEach((profile) => {

        // info that will go in the row
        const rowInfo = rowsInfoToFetch(profile);
        
        // check if this row already exists
        if (!checks[profile.kisdID]) {
          // prepare to add all at once
          // must add all at once or they fetch old usestates
          toAdd[profile.kisdID] = rowInfo;
        }

      });

      // if it doesnt, add it to the row-existing-checker
      setChecks({...checks, ...toAdd});
      // and put it in the grid
      setRows([...rows, ...Object.values(toAdd)]);

    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => { // when rendered, getrows
    getRows();
  }, [reloadConnectedStudents]);

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      sx={{border: '2px solid #FFDC22'}}
      components={{
        NoRowsOverlay: () => (
          <Stack height="100%" alignItems="center" justifyContent="center">
            {emptyMessage}
          </Stack>
        ),
        NoResultsOverlay: () => (
          <Stack height="100%" alignItems="center" justifyContent="center">
            No entries match this filter.
          </Stack>
        )
      }}
    />
  )
}

export default InfoGrid