const meetings = [
    [1230, 1300],
    [845, 900],
    [1300, 1500]
  ];
  
  const newMeeting1 = [915, 1215]
  const newMeeting2 = [900, 1230]
  const newMeeting3 = [850, 1240]
  const newMeeting4 = [1200, 1300]
  const newMeeting5 = [700, 1600]
  const newMeeting6 = [800, 845]
  const newMeeting7 = [1500, 1800]
  const newMeeting8 = [845, 859]
  const newMeeting9 = [846, 900]
  const newMeeting10 = [846, 859]
  const newMeeting11 = [845, 900]
  const newMeeting12 = [2359, 2400]
  const newMeeting13 = [930, 1600]
  const newMeeting14 = [800, 850]
  const newMeeting15 = [1400, 1600]
  const newMeeting16 = [1300, 1501]
  
  
  function isAvailable(meetings, newMeetings){
  
    for(let i = 0; i<meetings.length;i++){
  
      for(let j =0; j<meetings[i].length;j++){
      
     
      if(newMeetings[0] >= meetings[i][0] && newMeetings[0] < meetings[i][1]){
        return false
      }
      if(newMeetings[1] > meetings[i][0] && newMeetings[1] <= meetings[i][1]){
        return false
      }
      if(newMeetings[0] < meetings[i][0] && newMeetings[1]>meetings[i][1]){
        return false
      }
        
      }
  
            
         
      } 
    
    return true
  }
  
  
  console.log(isAvailable(meetings, newMeeting1))
  console.log(isAvailable(meetings, newMeeting2))
  console.log(isAvailable(meetings, newMeeting3))
  console.log(isAvailable(meetings, newMeeting4))
  console.log(isAvailable(meetings, newMeeting5))
  console.log(isAvailable(meetings, newMeeting6))
  console.log(isAvailable(meetings, newMeeting7))
  console.log(isAvailable(meetings, newMeeting8))
  console.log(isAvailable(meetings, newMeeting9))
  console.log(isAvailable(meetings, newMeeting10))
  console.log(isAvailable(meetings, newMeeting11))
  console.log(isAvailable(meetings, newMeeting12))
  console.log(isAvailable(meetings, newMeeting13))
  console.log(isAvailable(meetings, newMeeting14))
  console.log(isAvailable(meetings, newMeeting15))
  console.log(isAvailable(meetings, newMeeting16))
  
  
  // isAvailable(meetings, (915, 1215))    => true   // newMeeting1
  // isAvailable(meetings, (900, 1230))    => true   // newMeeting2
  // isAvailable(meetings, (850, 1240))    => false  // newMeeting3
  // isAvailable(meetings, ((1200, 1300))  => false  // newMeeting4
  // isAvailable(meetings, (700, 1600))    => false  // newMeeting5
  // isAvailable(meetings, (800, 845))     => true   // newMeeting6
  // isAvailable(meetings, (1500, 1800))   => true   // newMeeting7
  // isAvailable(meetings, (845, 859))     => false  // newMeeting8
  // isAvailable(meetings, (846, 900))     => false  // newMeeting9
  // isAvailable(meetings, (846, 859))     => false  // newMeeting10
  // isAvailable(meetings, (845, 900))     => false  // newMeeting11
  // isAvailable(meetings, 2359, 2400))    => true   // newMeeting12
  // isAvailable(meetings, 930, 1600))     => false  // newMeeting13
  // isAvailable(meetings, 800, 850))      => false  // newMeeting14
  // isAvailable(meetings, 1400, 1600))    => false  // newMeeting15
  // isAvailable(meetings, 1300, 1501))    => false  // newMeeting16
  