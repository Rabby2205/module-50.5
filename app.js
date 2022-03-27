// const fruits=[{name:'mango'},{name:'banana'},{name:'apple'}]
// const election = ['kamal', 'jamal', 'samal', 'kamal', 'pamal'];
// const election2 = {
//     kamal: 1,
//     jamal: 2,
//     tamal: 1,
//     pamal: 1,
//     samal: 3
// }
let db = {};
const addToDb = item => {
    // db.alom = 1; ---property add system 1 . if we know the name of property 
    // db['kamal']=1; ---------property add system 2 ,
    // db[item] = 1; ---------property add system 3 .
    const storedTracker = localStorage.getItem('tracker');
    if (storedTracker) {
        db = JSON.parse(storedTracker);
    }

    if (item in db) {
        db[item] = db[item] + 1;
    }
    else {
        db[item] = 1;
    }
    localStorage.setItem('tracker', JSON.stringify(db));

}