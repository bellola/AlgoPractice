function areEquallyStrong1(yourLeft, yourRight, friendsLeft, friendsRight) {
    return Math.max(yourLeft, yourRight)===Math.max(friendsLeft, friendsRight)&&Math.min(yourLeft, yourRight)===Math.min(friendsLeft, friendsRight)
  }

  function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    yourStrongest = Math.max(yourLeft, yourRight)
    friendsStrongest = Math.max(friendsLeft, friendsRight)
    yourWeakest = Math.min(yourRight, yourLeft)
    friendsWeakest = Math.min(friendsRight, friendsLeft)
    if((yourStrongest === friendsStrongest) && (yourWeakest === friendsWeakest)){
        return true
    }
    return false

}