let user=function(id, name, address){​​​​​​​​
this.userId=id;
this.userName=name;
this.userAddress=address;
}​​​​​​​​  
 
let userManager=function(){​​​​​​​​
this.userData= [];  
this.addUser=function(user){​​​​​​​​
this.userData.push(user);
}​​​​​​​​
 
this.deleteUser=function(id){​​​​​​​​
let user = this.userData.find(function(e){​​​​​​​​
returne.userId==id
        }​​​​​​​​);
let index = this.userData.indexOf(user);
this.userData.splice(index, 1);        
}​​​​​​​​
 
this.findUser=function(id){​​​​​​​​
let user = this.userData.find(function (e) {​​​​​​​​
returne.userId==id
        }​​​​​​​​);
if(user==null)
throw`User with ID ${​​​​​​​​id}​​​​​​​​ not found`;
return user;
    }​​​​​​​​
this.updateUser=function(user){​​​​​​​​
for (let index=0; index<this.userData.length; index++) {​​​​​​​​
let element = this.userData[index];
if(element.userId==user.userId){​​​​​​​​
element.userName=user.userName;
element.userAddress=user.userAddress;
return;
            }​​​​​​​​
        }​​​​​​​​
throw"User not found to update";        
    }​​​​​​​​
this.getAll=function(){​​​​​​​​
returnthis.userData;
    }​​​​​​​​
}​​​​​​​​

