var data=[ 
    {
        F_name:'Himvan',
        L_Name:'Sharma',
        EMAIL:'Himvan.sharma@outlook.com',
        E_ID:6164,
        MOBILE_NUMBER:7455990114,
        DESIGNATION:'Software Engineer',
        DOB:'18/11/1997'
    },
    {
        F_name:'Shivank',
        L_Name:'Singh',
        EMAIL:'Shivank.singh@outlook.com',
        E_ID:6189,
        MOBILE_NUMBER:9914408228,
        DESIGNATION:'Software Engineer',
        DOB:'21/02/1997'
    },
    {
        F_name:'Charu',
        L_Name:'Chaudhary',
        EMAIL:'Charu.chaudhary@outlook.com',
        E_ID:6190,
        MOBILE_NUMBER:9988456373,
        DESIGNATION:'Software Engineer',
        DOB:'01/11/1996'
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
        
        data.sort(function(a,b){
            if(a.F_name<b.F_name)
              return -1;
            if(a.F_name>b.F_name)
               return 1;
              return 0;
          });
       
        
      
          break;
        case 1:
        data.sort(function(a,b){
            if(a.L_Name<b.L_Name)
              return -1;
            if(a.L_Name>b.L_Name)
               return 1;
              return 0;
          });
         
         
          break;
        case 2:
        data.sort(function(a,b){
            if(a.EMAIL<b.EMAIL)
              return -1;
            if(a.EMAIL>b.EMAIL)
               return 1;
              return 0;
          });
      
         
         break;
         case 3:
         data.sort(function(a,b)
         {
             return a.E_ID-b.E_ID;
         });
        
         break;
         case 4:
         data.sort(function(a,b)
         {
             return a.MOBILE_NUMBER-b.MOBILE_NUMBER;
         });
         
         break;
         case 5:
         data.sort(function (a,b){
            if(a.DESIGNATION<b.DESIGNATION)
              return -1;
            if(a.DESIGNATION>b.DESIGNATION)
               return 1;
              return 0;
          });
       
        
         break;
         default:
         data.sort(function(a,b)
         {
             return a.DOB-b.DOB;
         });
        
   }
   table_data.remove();
    dynamic_table();

}


