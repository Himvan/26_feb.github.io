var data=[ 
    {
        "F_name":'himvan',
        "L_Name":'Sharma',
        "EMAIL":'Himvan.sharma@outlook.com',
         "E-ID":6164,
        "MOBILE_NUMBER":7455990114,
        "DESIGNATION":'Software Engineer',
        "D.O.B":'18/11/1997'
    },
    {
        "F_name":'Shivank',
        "L_Name":'Singh',
        "EMAIL":'Shivank.singh@outlook.com',
        "E-ID":6189,
        "MOBILE_NUMBER":9914408228,
        "DESIGNATION":'Software Engineer',
        "D.O.B":'21/02/1997'
    },
    {
        "F_name":'Charu',
        "L_Name":'Chaudhary',
        "EMAIL":'Charu.chaudhary@outlook.com',
        "E-ID":6157,
        "MOBILE_NUMBER":9988456373,
        "DESIGNATION":'Software Engineer',
        "D.O.B":'01/11/1996'
    }
    ];



function dynamic_table()
{
      var arr=[];
        
        for(let i=0;i<data.length;i++)
        {
            arr.push(Object.values(data[i]));
        }
        var header=Object.keys(data[0]);
    var x=document.createElement("table");
    x.border=1;
    x.setAttribute('id','table_data');
    

    var row=document.createElement("TR");
    var row=x.insertRow(-1);
    var count =0;
    for(let i=0;i<header.length;i++)
    {
        let a=document.createElement("TH");
        a.innerHTML=header[i];
        a.setAttribute("onclick", "sort("+count+")");
        count+=1;
        row.appendChild(a);
    }

    for(let j=0;j<arr.length;j++)
    {
        var row=document.createElement("TR");
        row=x.insertRow(-1);
      
        for(let i=0;i<arr[j].length;i++)
        {
            var cell=document.createElement("Td");
            cell=row.insertCell(-1);
            cell.innerHTML=arr[j][i];
        }
    }
   
    
    
   
    document.body.appendChild(x);
}

function sort(head){
    switch(head) {
        case 0:
        data.sort()

          break;
        case 1:
        console.log("in header 1")
          break;
        default:
        console.log("in header")
    }

}


