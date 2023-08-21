export const userColumns = [
    { field: "_id", headerName: "ID", width: 230 },
    {
      field: "username",
      headerName: "User",
      width: 150,
   /*    renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img || "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"} alt="avatar" />
            {params.row.username}
          </div>
        );
      },  */ 
    },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="avatar" style={{width:"40px",height:"40px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}} />
 
          </div>
        );
      },  
    },
    { 
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "city",
      headerName: "City",
      width: 100,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 140,
    },
   
  ]; 
   

  
export const roomsColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "title", 
    headerName: "Title",
    width: 190,
  },
  { 
    field: "roomNumber",
    headerName: "roomNumber",
    width: 150,
  
  },
  {
    field: "ac",
    headerName: "AC",
    width: 100,
  },

  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People ",
    width: 120,
  },
  {
    field: "booking",
    headerName: "Booking",
    width: 100,
  },
  
 
];