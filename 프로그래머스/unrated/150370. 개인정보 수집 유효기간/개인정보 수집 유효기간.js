function solution(today, terms, privacies) {
    const answer = [];
    const todayDate = new Date(today);
    
    let termType = {};
    terms.forEach(item => {
        const [type, term] = item.split(' ');
        termType[type] = Number(term);
    })
    
    privacies.forEach((item, index) => {
        const [date, type] = item.split(' ');
        const privaciesDate = new Date(date);
        
        const checkExpire = privaciesDate.setMonth(privaciesDate.getMonth() + termType[type])
        
        if(checkExpire <= todayDate) answer.push(index + 1)
    })
    
    return answer;
}