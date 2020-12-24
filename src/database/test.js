const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    proffyValue = {
        name: 'Mavi',
        avatar: 'https://avatars0.githubusercontent.com/u/75390616?s=460&u=6b77f5600df351adc32216691603ca7666a6cf47&v=4',
        whatsapp: '33988916715',
        bio: 'eu sou linda'       
    }

    classValue = {
        subject:1,
        cost:"20,00"
    }

    classScheduleValues = [
        {
            weekday:1, 
            time_from:720, 
            time_to:1220 
        },
        {
            weekday:0, 
            time_from:520, 
            time_to:1220 
        }
    ]


   //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    const selectedProffys = await db.all("SELECT * FROM proffys")
   // console.log(selectedProffys)

    const selectedAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectedAndProffys)

     const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule 
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"

     `)
     //console.log(selectClassesSchedules)
})