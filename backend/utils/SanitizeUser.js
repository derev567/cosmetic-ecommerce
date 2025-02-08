exports.sanitizeUser=(user)=>{
    console.log("the user ientyr is soemthign as i am requsted",user);
    if(!user)
    {
        return null;
    }
    else{

        return {_id:user._id,email:user.email,isVerified:user.isVerified,isAdmin:user.isAdmin}
    }
    
}