import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const dateFormatter = new Intl.DateTimeFormat(navigator.language, {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const rows = [
  { id: 0, image:"https://th.bing.com/th?id=OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",Date: new Date(2023, 1, 1),Location:"India",Deforestation:0.03,AirPollution:0.01,ImageCategories:"desert",IOTCategories:"Good",Button:"rmv"},
  { id: 1, image:"https://th.bing.com/th?id=OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",Date: new Date(2023, 1, 2),Location:"India",Deforestation:0.13,AirPollution:0.01,ImageCategories:"desert",IOTCategories:"Good",Button:"rmv"},
  { id: 2, image:"https://th.bing.com/th?id=OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",Date: new Date(2023, 1, 3),Location:"India",Deforestation:0.23,AirPollution:0.01,ImageCategories:"desert",IOTCategories:"Good",Button:"rmv"},
  { id: 3, image:"https://th.bing.com/th?id=OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",Date: new Date(2023, 1, 4),Location:"India",Deforestation:0.04,AirPollution:0.01,ImageCategories:"desert",IOTCategories:"Good",Button:"rmv"},
  { id: 4, image:"https://th.bing.com/th?id=OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",Date: new Date(2023, 1, 5),Location:"India",Deforestation:0.15,AirPollution:0.01,ImageCategories:"desert",IOTCategories:"Good",Button:"rmv"},
  { id: 5, image:"https://th.bing.com/th?id=OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",Date: new Date(2023, 1, 6),Location:"India",Deforestation:0.13,AirPollution:0.01,ImageCategories:"desert",IOTCategories:"Good",Button:"rmv"},
  { id: 6, image:"https://th.bing.com/th?id=OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",Date: new Date(2023, 1, 7),Location:"India",Deforestation:0.3,AirPollution:0.01,ImageCategories:"desert",IOTCategories:"Good",Button:"rmv"},
  { id: 7, image:"https://th.bing.com/th?id=OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",Date: new Date(2023, 1, 8),Location:"India",Deforestation:0.030,AirPollution:0.01,ImageCategories:"desert",IOTCategories:"Good",Button:"rmv"},


];

const columns = [
  {
    field:'image',  
      renderCell: (params) => {
      return (
        <img src={params.row.image} alt="Product Image" width="120px" style={{ maxWidth: '100%' ,"textAlign":"center"}} />
      );
    }, 
    width:200
  },

  {
    field: 'Date',
    type: 'date',
    width: 170,
    valueFormatter: (value) => dateFormatter.format(value),
  },
  { field: 'Location',type:"string", width: 170 },
  {
    field: 'Deforestation',
    type: 'numeric',
    width: 170
  },
  {
    field:'AirPollution',
    type: 'numeric',
    width: 170

  }
  ,
  {
    field:"ImageCategories",
    type:"string",
    width: 170
  },
   {
    field:"IOTCategories",
    type:"string",
    width:170
  },
    {
    field:"Button",
    type:"string",
    width:150
  }

];

export default function InfoTable() {
  const [filterModel, setFilterModel] = React.useState({
    items: [],
    quickFilterValues: [''],
  });
  const [ignoreDiacritics, setIgnoreDiacritics] = React.useState(true);

  return (
    <div style={{ width: '100%'}}>
    
      <div style={{ width: '100%' ,height:'auto',maxHeight:'500px',overflowY:"auto" }}>
        <DataGrid
          key={ignoreDiacritics.toString()}
          rows={rows}
          columns={columns}
          filterModel={filterModel}
          onFilterModelChange={setFilterModel}
       
          disableDensitySelector
          hideFooter
          slots={{ toolbar: GridToolbar }}
          slotProps={{ toolbar: { showQuickFilter: true } }}
          ignoreDiacritics={ignoreDiacritics}
    
        />
      </div>
    </div>
  );
}
