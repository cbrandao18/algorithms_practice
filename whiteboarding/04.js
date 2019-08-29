//a) SQL: SELECT count(*) FROM users
// AR: User.count

// b) count all active users
// SQL: SELECT count(*) FROM users WHERE users.active = true
// AR: User.where(:active => "true").count

// c) count all users who visited the site within a certain time period
// SQL: SELECT count(*) FROM users WHERE users.login_time > start_date AND users.login_time < end_date
  // answer: use BETWEEN keyword instead
// AR: User.where("last_login": (start_date && end_date)).count
// answer: User.where(last_login: (time_period_start..time_period_end)).count


// Implement the Folding Cipher. 
// It folds the alphabet in half and uses the adjacent letter. 
// Ie. a <=> z, b <=> y, c <=> x, m <=> n.
function folding_cipher(str) {
  let alphArr = "abcdefghijkmnopqrstuvwxyz".split('');
  let mappedChars = {};
  
  for(let i=0; i < alphArr.length; i++){
    mappedChars[alphArr[i]] = alphArr[alphArr.length - 1 - i]
  }

  let resultStr = "";
  for(let j=0; j<str.length; j++){
    resultStr += mappedChars[str[j]]
  }

  return resultStr;
}
