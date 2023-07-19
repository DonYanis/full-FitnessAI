const ProfileData =  [
    {
        title : 'AGE',
        formOption: 'age',
        choices : [
            {value: 'CHILD', extra: '< 12'},
            {value: 'TEEN', extra: '13 - 17'},
            {value: 'YOUNG ADULT', extra: '18 - 37'},
            {value: 'MIDDLE AGED', extra: '38 - 50'},
            {value: 'OLD', extra: '> 50'}
        ]
    },
    {
        title : 'GENDER',
        formOption: 'gender',
        choices : [
            {value: 'MALE', extra: null},
            {value: 'FEMALE', extra: null}
        ]
    },
    {
        title : 'DAILY ACTIVITY LEVEL',
        formOption: 'activity',
        choices : [
            {value: 'LOW', extra:null},
            {value: 'MEDIUM', extra:null},
            {value: 'HIGH', extra:null},
            {value: 'VERY HIGH', extra:null}
        ]
    }
]
const GoalData = [
    {
        title : 'DEFINE YOUR GOAL',
        formOption: 'goal',
        choices : [
            {value: 'LOSS', extra:null},
            {value: 'GAIN', extra:null},
            {value: 'MUSCLE', extra:null},
            {value: 'GENERAL', extra:null},
            {value: 'ENDURANCE', extra:null}
        ]
    },
    {
        title : 'HOW IS YOUR WEEKLY SCHEDULE',
        formOption: 'schedule',
        choices : [
            {value: 'OPEN', extra: null},
            {value: 'FLEXIBLE', extra: null},
            {value: 'BUSY', extra: null}
        ]
    }
]

export {
    ProfileData,
    GoalData
}