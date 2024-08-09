//SCOPA-AUT : Scales for Outcomes in Parkinson's Diseases - Autonomic
const options = ["Never (0)", "Sometimes (1)", "Regularly (2)", "Often (3)"]
const options1 = ["Never (0)", "Sometimes (1)", "Regularly (2)", "Often (3)", "Catheter (4) "]
const optionsna = [...options, "N/A (4)"];
const optionsYesNo = ["Yes (0)", "No (1)"];

const scopaautItems = [
    [
        options,
        "swallowing",
        0,
        3,
        "1. In the past month, have you had difficulty swallowing or have you choked?",
        "",
        ""
    ],
    [
        options,
        "salivadribbled",
        0,
        3,
        "2. In the past month, has saliva dribbled out of your mouth?",
        "",
        ""
    ],
    [
        options,
        "foodeverbecomestuck",
        0,
        3,
        "3. In the past month, has food ever become stuck in your throat?",
        "",
        ""
    ],
    [
        options,
        "feelingduringamealthatyouwerefull",
        0,
        3,
        "4. In the past month, did you ever have the feeling during a meal that you were full very quickly?",
        "",
        ""
    ],
    [
        options,
        "constipation",
        0,
        3,
        "5. In the past month, have you had constipation (bowel movement twice a week or less)?",
        "",
        ""
    ],
    [
        options,
        "strainhardtopassstools?",
        0,
        3,
        "6. In the past month, did you have to strain hard to pass stools?",
        "",
        ""
    ],
    [
        options,
        "involuntarylossofstools",
        0,
        3,
        "7. In the past month, have you had involuntary loss of stools?",
        "",
        ""
    ],
    [
        options1,
        "difficultyretainingurine",
        0,
        4,
        "8. In the past month, have you had difficulty retaining urine?",
        "",
        ""
    ],
    [
        options1,
        "involuntarylossofurine",
        0,
        4,
        "9. In the past month, have you had involuntary loss of urine?",
        "",
        ""
    ],
    [
        options1,
        "afterpassingurine",
        0,
        4,
        "10. In the past month, have you had the feeling that after passing urine your bladder was not completely empty?",
        "",
        ""
    ],
    [
        options1,
        "streamofurinebeenweak",
        0,
        4,
        "11. In the past month, has the stream of urine been weak?",
        "",
        ""
    ],
    [
        options1,
        "passurineagain",
        0,
        4,
        "12. In the past month, have you had to pass urine again within 2 hours of te previous time?",
        "",
        ""
    ],
    [
        options1,
        "passurineatnight",
        0,
        4,
        "13. In the past month, have you had to pass urine at night?",
        "",
        ""
    ],
    [
        options,
        "becominglightheaded",
        0,
        3,
        "14. In the past month, when standing up, have you had the feeling of either becoming lightheaded, or no longer beging able to see properly, or no longer being able to think clearly?",
        "",
        ""
    ],
    [
        options,
        "become light-headed after standing",
        0,
        3,
        "15. In the past month, did you become light-headed after standing for some time?",
        "",
        ""
    ],
    [
        options,
        "fainted",
        0,
        3,
        "16. Have you fainted in the past 6 months?",
        "",
        ""
    ],
    [
        options,
        "perspiredexcessivelyduringtheday",
        0,
        3,
        "17. In the past month, have you ever perspired excessively during the day?",
        "",
        ""
    ],
    [
        options,
        "perspiredexcessivelyduringthenight",
        0,
        3,
        "18. In the past month, have you ever perspired exxcessively during the night?",
        "",
        ""
    ],
    [
        options,
        "eyeseverbeenoversensitivetolight",
        0,
        3,
        "19. In the past month, have your eyes been over sensitive to light?",
        "",
        ""
    ],
    [
        options,
        "troubletoleratingcold",
        0,
        3,
        "20. In the past month, how often have you had trouble tolerating cold?",
        "",
        ""
    ],
    [
        options,
        "troubletoleratingheat",
        0,
        3,
        "21. In the past month, how often have you had trouble tolerating heat?",
        "",
        ""
    ],
]

const scopaautItems1 = [
    [
        optionsna,
        "impotent",
        0,
        4,
        "22. In the past month, have you been impotent(unable to have or maintain an erection)?",
        "",
        ""
    ],
    [
        optionsna,
        "ejaculate",
        0,
        4,
        "23. In the past month, how often have you been able to ejaculate?",
        "",
        ""
    ],
    [
        optionsYesNo,
        "erectiondisorder",
        0,
        1,
        "23a. In the past month, have you taken medication for an erection disorder?",
        "",
        ""
    ],
    [
        [], 
        "erectiondisorderifyes",
        0,
        1,
        "If yes, which medication?",
        "",
        ""
    ],
    [
        optionsna,
        "vaginaltoodryduringsexualactivity",
        0,
        4,
        "24. In the past month, was your vagina too dry during sexual activity?",
        "",
        ""
    ],
    [
        optionsna,
        "difficultyreachinganorgasm",
        0,
        4,
        "25. In the past month, have you had difficulty reaching an orgasm?",
        "",
        ""
    ],
    [
        optionsYesNo,
        "constipation",
        0,
        1,
        "26a. In the past month, have you used medication for constipation?",
        "",
        ""
    ],
    [
        [], 
        "constipationwhichmedication",
        0,
        1,
        "Which medication?",
        "",
        ""
    ],
    [
        optionsYesNo,
        "urinaryproblems",
        0,
        1,
        "26b. In the past month, have you used medication for urinary problems?",
        "",
        ""
    ],
    [
        [],
        "urinaryproblemsmedication",
        0,
        1,
        "Which medication?",
        "",
        ""
    ],
    [
        optionsYesNo,
        "bloodpressure",
        0,
        1,
        "26c. In the past month, have you used medication for blood pressure?",
        "",
        ""
    ],
    [
        [],
        "bloodpressuremedication",
        0,
        1,
        "Which medication?",
        "",
        ""
    ],
    [
        optionsYesNo,
        "notrelatedtoparkingsonsdisease",
        0,
        1,
        "26d. In the past month, have you used medication for other symptoms(not related to Parkinson's disease)?",
        "",
        ""
    ],

]