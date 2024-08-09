// PSP CHECKLIST
const options = [ "Yes (0)", "No (1)" ]

const pspchecklistItems = [
    [
        options,
        "verticalsupranucleargazepalsy",
        0,
        1,
        "1. Vertical supranuclear gaze palsy (O1)",
        "",
        ""
    ],
    [
        options,
        "verticalsaccades",
        0,
        1,
        "2. Slow velocity of vertical saccades (O2)",
        "",
        ""
    ],
    [
        options,
        "macrosquarewavejerks",
        0,
        1,
        "3. Frequent marco square wave jerks or eyelid opening apraxia (O3)",
        "",
        ""
    ],
    [
        options,
        "fallonthepulltest",
        0,
        1,
        "4. Tendency to fall on the pull-test within 3 years (P2)",
        "",
        ""
    ],
    [
        options,
        "backwardonthepulltest",
        0,
        1,
        "5. More than two steps backward on the pull-test within 3 years (P3)",
        "",
        ""
    ],
    [
        options,
        "progressivegaitfreezing",
        0,
        1,
        "6. Progressive gait freezing within 3 years (A1)",
        "",
        ""
    ],
    [
        options,
        "predominantlyaxial",
        0,
        1,
        "7. Parkinsonism, akinetic-rigid, predominantly axial, and levodopa resistant (A2)",
        "",
        ""
    ],
    [
        options,
        "asymmetric",
        0,
        1,
        "8. Parkinsonism, with tremor and/or asymmetric and/or levodopa responsive (A3)",
        "",
        ""
    ],
    [
        options,
        "speechlanguagedisorder",
        0,
        1,
        "9. Speech/language disorder, i.e., nonfluent/agrammatic variant of primary progressive aphasia or progressive apraxia of speech (C1)",
        "",
        ""
    ],
    [
        options,
        "cognitive/behaviouralpresentation",
        0,
        1,
        "10. Frontal cognitive/behavioural presentation (C2)",
        "",
        ""
    ],
    [
        options,
        "corticobasalsyndrome",
        0,
        1,
        "11. Corticobasal syndrome (C3)",
        "",
        ""
    ],
    [
        options,
        "spasticdysarthria",
        0,
        1,
        "12. Hypokinetic, spastic dysarthria (CC2)",
        "",
        ""
    ],
    [
        options,
        "dysphagia",
        0,
        1,
        "13. Dysphagia (CC3)",
        "",
        ""
    ],
    [
        options,
        "photophobia",
        0,
        1,
        "14. Photophobia (CC4)",
        "",
        ""
    ],
    [
        options,
        "unexplainedimpairment",
        0,
        1,
        "15. Predominant, otherwise unexplained impairment of episodic memory, suggestive of AD",
        "",
        ""
    ],
    [
        options,
        "unexplainedautonomicfailure",
        0,
        1,
        "16. Predominant, otherwise unexplained autonomic failure, e.g., orthostatic hypotension (orthostatic reduction in blood pressure after 3 minutes standing >=30 mm Hg systolic or >=15 mm Hg diastolic), suggestive of multiple system atrophy or Lewy body",
        "",
        ""
    ],
    [
        options,
        "unexplainedvisualhallucinations",
        0,
        1,
        "17. Predominant, otherwise unexplained visual hallucinations or fluctuations in alertness, suggestive of dementia with Lewy bodies",
        "",
        ""
    ],
    [
        options,
        "rapidprogressionofsymptoms",
        0,
        1,
        "18. Sudden onset or step-wise or rapid progressive or symptoms, in conjunction with corresponding imaging or laboratory findings, suggestive of vascular etiology, autoimmune encephalitis, metabolic encephalopathies, or prion disease",
        "",
        ""
    ],
    [
        options,
        "encephalitis",
        0,
        1,
        "19. History of encephalitis",
        "",
        ""
    ],
    [
        options,
        "appendicularataxia",
        0,
        1,
        "20. Prominent appendicular ataxia",
        "",
        ""
    ],
    [
        options,
        "posturalinstability",
        0,
        1,
        "21. Identifiable cause of postural instability, e.g., primary sensory deficit, vestibular dysfunction, severe spasticity, or lower motor neuron syndome",
        "",
        ""
    ],
    [
        options,
        "asymmetricalonset",
        0,
        1,
        "22. Asymmetrical onset",
        "",
        ""
    ],
    [
        options,
        "limbmyoclonus",
        0,
        1,
        "23. Limb Myoclonus",
        "",
        ""
    ],
    [
        options,
        "limbapraxia",
        0,
        1,
        "24. Orobuccal or limb apraxia",
        "",
        ""
    ],
    [
        options,
        "sensorydeficit",
        0,
        1,
        "25. Cortical sensory deficit",
        "",
        ""
    ],
    [
        options,
        "alienlimb",
        0,
        1,
        "26. Alien limb more than simple elevation",
        "",
        ""
    ],
    [
        options,
        "dysfunction",
        0,
        1,
        "27. Executive dysfunction",
        "",
        ""
    ],
    [
        options,
        "personalitychanges",
        0,
        1,
        "28. Behavioural or personality changes",
        "",
        ""
    ],
    [
        options,
        "visuospatialdeficits",
        0,
        1,
        "29. Visuospatial deficits",
        "",
        ""
    ],
    [
        options,
        "agrammaticspeech",
        0,
        1,
        "30. Effortful agrammatic speech",
        "",
        ""
    ],
    [
        options,
        "sentencecomprehension",
        0,
        1,
        "31. Impaired grammar/sentence comprehension",
        "",
        ""
    ],
    [
        options,
        "apraxiaofspeech",
        0,
        1,
        "32. Apraxia of speech",
        "",
        ""
    ],
    [
        options,
        "urinaryincontinence",
        0,
        1,
        "33. Urinary incontinence",
        "",
        ""
    ],
    [
        options,
        "symmetriclimbrigidity",
        0,
        1,
        "34. Axial or symmetric limb rigidity or akinesia",
        "",
        ""
    ],
    [
        options,
        "posturalinstabilty",
        0,
        1,
        "35. Postural instability or falls",
        "",
        ""
    ],
    [
        options,
        "verticalgazepalsy",
        0,
        1,
        "36. Supranuclear vertical gaze palsy",
        "",
        ""
    ],
    [
        options,
        "verticalsaccades",
        0,
        1,
        "37. Decreased velocity of vertical saccades",
        "",
        ""
    ],
]