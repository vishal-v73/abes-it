function fetchdata(){
    return new Promise((resolve,reject)=>{
  
      setTimeout(() => {
        const student =[
                {name:'Rahul', score:50},
                {name:'vivek', score:30},
                {name:'rakshit',score:100},
                {name:'anup', score:20},
            ];         
             resolve(student);
      },4000)
    });
  }
  
  fetchdata().then((student)=>console.log(student.reduce((x,y)=>(x+y.score),0)))

  .catch((error)=>{
      console.log(error);
  });
